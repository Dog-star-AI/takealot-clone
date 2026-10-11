import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setSelectedProduct
  } = useApp();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    toggleWishlist(product);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-slide-left">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="font-bold text-gray-900 text-base">My Wishlist</h3>
            <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
              {wishlist.length} saved
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-gray-100">
          {wishlist.length === 0 ? (
            <div className="py-16 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-gray-700">Your wishlist is empty</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                Click the heart icon on any product to save it here for later.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="mt-4 bg-[#0b79bf] text-white px-5 py-2 rounded-lg text-xs font-bold"
              >
                Browse Deals
              </button>
            </div>
          ) : (
            wishlist.map(product => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-3">
                
                {/* Image */}
                <div
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsWishlistOpen(false);
                  }}
                  className="w-20 h-20 bg-gray-50 rounded-lg border border-gray-200 p-1 shrink-0 flex items-center justify-center cursor-pointer hover:border-[#0b79bf]"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400">{product.brand}</p>
                    <h4
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsWishlistOpen(false);
                      }}
                      className="text-xs font-semibold text-gray-800 line-clamp-2 hover:text-[#0b79bf] cursor-pointer"
                    >
                      {product.title}
                    </h4>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-sm font-black text-gray-900">
                        R {product.price.toLocaleString()}
                      </span>
                      {product.listPrice > product.price && (
                        <span className="text-[11px] text-gray-400 line-through">
                          R {product.listPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 bg-[#0b79bf] hover:bg-[#085f98] text-white py-1.5 px-3 rounded-md font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-1.5 text-gray-400 hover:text-red-500 rounded border border-gray-200 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => {
                wishlist.forEach(p => addToCart(p));
                setIsWishlistOpen(false);
              }}
              className="w-full bg-[#1c9444] hover:bg-[#147233] text-white py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <span>Add All Wishlist Items to Cart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
