import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeDeliveryThreshold,
    shippingFee,
    cartTotal,
    setIsCheckoutOpen,
    setSelectedProduct
  } = useApp();

  if (!isCartOpen) return null;

  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartSubtotal);
  const deliveryProgress = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-slide-left">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0b79bf]" />
            <h3 className="font-bold text-gray-900 text-base">Shopping Cart</h3>
            <span className="text-xs bg-[#0b79bf] text-white font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free delivery progress meter */}
        <div className="p-4 bg-blue-50/70 border-b border-blue-100">
          <div className="flex items-center gap-2 mb-2 text-xs">
            {remainingForFreeDelivery === 0 ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-800 font-bold">
                  🎉 Congratulations! You have unlocked FREE Delivery!
                </span>
              </>
            ) : (
              <>
                <Truck className="w-4 h-4 text-[#0b79bf] shrink-0" />
                <span className="text-gray-700">
                  Add <strong className="text-[#0b79bf]">R {remainingForFreeDelivery.toLocaleString()}</strong> more to get <strong>FREE Delivery</strong>
                </span>
              </>
            )}
          </div>
          <div className="w-full bg-blue-200/60 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                remainingForFreeDelivery === 0 ? 'bg-emerald-500' : 'bg-[#0b79bf]'
              }`}
              style={{ width: `${deliveryProgress}%` }}
            />
          </div>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-gray-100">
          {cart.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-gray-700">Your cart is empty</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                Explore our Daily Deals and thousands of products at great prices.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 bg-[#0b79bf] text-white px-5 py-2 rounded-lg text-xs font-bold"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-3">
                
                {/* Product image */}
                <div
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsCartOpen(false);
                  }}
                  className="w-20 h-20 bg-gray-50 rounded-lg border border-gray-200 p-1 shrink-0 flex items-center justify-center cursor-pointer hover:border-[#0b79bf]"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400">{product.brand}</p>
                    <h4
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsCartOpen(false);
                      }}
                      className="text-xs font-semibold text-gray-800 line-clamp-2 hover:text-[#0b79bf] cursor-pointer"
                    >
                      {product.title}
                    </h4>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-sm font-black text-gray-900">
                        R {(product.price * quantity).toLocaleString()}
                      </span>
                      {quantity > 1 && (
                        <span className="text-[10px] text-gray-400">
                          (R {product.price.toLocaleString()} each)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-gray-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout button */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">R {cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className={`font-semibold ${shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                  {shippingFee === 0 ? 'FREE' : `R ${shippingFee}`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-1.5 flex justify-between text-sm font-black text-gray-900">
                <span>Total (VAT Incl.)</span>
                <span>R {cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full bg-[#1c9444] hover:bg-[#147233] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
