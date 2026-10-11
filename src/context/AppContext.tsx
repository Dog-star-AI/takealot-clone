import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, FilterState, ShippingAddress } from '../types';
import { MOCK_PRODUCTS } from '../data/mockProducts';

interface AppContextType {
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeDeliveryThreshold: number;
  shippingFee: number;
  cartTotal: number;
  
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  
  orders: Order[];
  createOrder: (address: ShippingAddress, paymentMethod: string, deliveryOption: string) => Order;
  lastOrder: Order | null;
  setLastOrder: (order: Order | null) => void;
  
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  updateFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  
  userLocation: string;
  setUserLocation: (loc: string) => void;
  
  toast: { message: string; type: 'success' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const initialFilters: FilterState = {
  searchQuery: '',
  department: 'all',
  category: 'all',
  brand: [],
  minPrice: 0,
  maxPrice: 25000,
  minRating: 0,
  inStockOnly: false,
  nextDayOnly: false,
  dailyDealsOnly: false,
  sortBy: 'featured',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('takealot_cart');
    return saved ? JSON.parse(saved) : [
      { product: MOCK_PRODUCTS[0], quantity: 1 },
      { product: MOCK_PRODUCTS[7], quantity: 2 }
    ];
  });
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('takealot_wishlist');
    return saved ? JSON.parse(saved) : [MOCK_PRODUCTS[1]];
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('takealot_orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [userLocation, setUserLocation] = useState('Sandton, Johannesburg');
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    localStorage.setItem('takealot_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('takealot_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('takealot_orders', JSON.stringify(orders));
  }, [orders]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title.slice(0, 30)}..." to your cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed from your wishlist`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved to your wishlist!`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeDeliveryThreshold = 500;
  const shippingFee = cartSubtotal >= freeDeliveryThreshold || cart.length === 0 ? 0 : 65;
  const cartTotal = cartSubtotal + shippingFee;

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const createOrder = (address: ShippingAddress, paymentMethod: string, deliveryOption: string): Order => {
    const deliveryDays = deliveryOption.includes('Next') ? 1 : 3;
    const estDate = new Date();
    estDate.setDate(estDate.getDate() + deliveryDays);
    const dateFormatted = estDate.toLocaleDateString('en-ZA', { weekday: 'short', day: 'numeric', month: 'short' });

    const newOrder: Order = {
      id: `TSA-${Math.floor(10000000 + Math.random() * 90000000)}`,
      createdAt: new Date().toISOString(),
      items: [...cart],
      subtotal: cartSubtotal,
      shippingFee,
      discount: 0,
      total: cartTotal,
      address,
      paymentMethod,
      deliveryOption,
      status: 'Order Placed',
      estimatedDeliveryDate: dateFormatted
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();
    return newOrder;
  };

  // Filter and sort logic
  const filteredProducts = products.filter(product => {
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchesSearch =
        product.title.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.department.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    if (filters.department !== 'all' && product.department !== filters.department) {
      return false;
    }

    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }

    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    if (product.rating < filters.minRating) {
      return false;
    }

    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    if (filters.nextDayOnly && !product.isNextDayEligible) {
      return false;
    }

    if (filters.dailyDealsOnly && !product.isDailyDeal) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return (b.discountPercent || 0) - (a.discountPercent || 0);
      case 'featured':
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <AppContext.Provider
      value={{
        products,
        filteredProducts,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeDeliveryThreshold,
        shippingFee,
        cartTotal,
        toggleWishlist,
        isInWishlist,
        selectedProduct,
        setSelectedProduct,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        orders,
        createOrder,
        lastOrder,
        setLastOrder,
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        userLocation,
        setUserLocation,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
