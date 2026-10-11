export interface Product {
  id: string;
  title: string;
  brand: string;
  department: string;
  category: string;
  price: number; // In ZAR (Rands)
  listPrice: number;
  discountPercent?: number;
  rating: number; // e.g. 4.6
  reviewCount: number;
  image: string;
  galleryImages: string[];
  inStock: boolean;
  stockCount: number;
  warehouse: 'JHB & CPT' | 'JHB' | 'CPT';
  isDailyDeal?: boolean;
  dealEndsInHours?: number;
  isNextDayEligible: boolean;
  badge?: string; // e.g. "Top Brand", "Best Seller", "Clearance"
  description: string;
  features: string[];
  specs: Record<string, string>;
  seller: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  bannerImg?: string;
  categories: string[];
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'discount';

export interface FilterState {
  searchQuery: string;
  department: string;
  category: string;
  brand: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  nextDayOnly: boolean;
  dailyDealsOnly: boolean;
  sortBy: SortOption;
}

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  isPickupPoint?: boolean;
  pickupPointName?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  address: ShippingAddress;
  paymentMethod: string;
  deliveryOption: string;
  status: 'Order Placed' | 'Packing at Warehouse' | 'Out for Delivery' | 'Delivered';
  estimatedDeliveryDate: string;
}
