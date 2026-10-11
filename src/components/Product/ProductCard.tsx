import React from 'react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { Star, Truck, Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProduct, toggleWishlist, isInWishlist } = useApp();
  const isFavorited = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-[#0b79bf] hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-3.5 relative group">
      
      {/* Top badges & Wishlist */}
      <div className="flex items-start justify-between mb-2">
        <div>
          {product.badge && (
            <span className="bg-blue-50 text-[#0b79bf] text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100">
              {product.badge}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`p-1.5 rounded-full hover:bg-gray-100 transition-colors ${
            isFavorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
          title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500' : ''}`} />
        </button>
      </div>

      {/* Image container */}
      <div
        onClick={() => setSelectedProduct(product)}
        className="w-full h-44 sm:h-48 flex items-center justify-center p-2 mb-3 cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
            {product.brand}
          </p>
          <h3
            onClick={() => setSelectedProduct(product)}
            className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#0b79bf] line-clamp-2 mb-2 cursor-pointer transition-colors leading-snug"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-gray-500">
              ({product.reviewCount})
            </span>
          </div>

          {/* Delivery badges */}
          <div className="space-y-1 mb-3">
            {product.isNextDayEligible && (
              <div className="flex items-center gap-1 text-[11px] text-[#1c9444] font-bold">
                <Truck className="w-3.5 h-3.5" />
                <span>Next-Day Delivery</span>
              </div>
            )}
            <div className="text-[10px] text-gray-500 font-medium">
              In stock at <span className="font-semibold text-gray-700">{product.warehouse} warehouse</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div>
          <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between mb-3">
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 leading-none">
                R {product.price.toLocaleString()}
              </div>
              {product.listPrice > product.price && (
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs text-gray-400 line-through">
                    R {product.listPrice.toLocaleString()}
                  </span>
                  {product.discountPercent && (
                    <span className="text-[10px] font-bold text-[#1c9444] bg-emerald-50 px-1 py-0.5 rounded">
                      -{product.discountPercent}%
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="text-right">
              <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                eB {(product.price * 10).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#0b79bf] hover:bg-[#085f98] text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>

    </div>
  );
};
