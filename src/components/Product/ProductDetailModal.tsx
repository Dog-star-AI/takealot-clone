import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Star, Truck, ShieldCheck, Heart, ShoppingCart, CheckCircle, MapPin, Zap } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    userLocation
  } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProduct) return null;

  const isFavorited = isInWishlist(selectedProduct.id);
  const images = [selectedProduct.image, ...(selectedProduct.galleryImages || [])];

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-auto overflow-hidden animate-scale-up border border-gray-100 flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-200 bg-gray-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b79bf]">
              {selectedProduct.department}
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-xs text-gray-500 font-medium">
              {selectedProduct.category}
            </span>
          </div>

          <button
            onClick={() => setSelectedProduct(null)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Gallery */}
          <div className="flex flex-col">
            <div className="w-full h-72 sm:h-80 bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center mb-4 relative">
              <img
                src={images[activeImageIndex] || selectedProduct.image}
                alt={selectedProduct.title}
                className="max-h-full max-w-full object-contain"
              />
              {selectedProduct.discountPercent && (
                <div className="absolute top-3 left-3 bg-[#1c9444] text-white text-xs font-black px-2.5 py-1 rounded shadow">
                  {selectedProduct.discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg border-2 p-1 bg-white shrink-0 overflow-hidden ${
                      activeImageIndex === idx ? 'border-[#0b79bf]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Warehouse and Trust badging */}
            <div className="mt-6 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>In Stock at {selectedProduct.warehouse} Warehouse</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <Truck className="w-4 h-4 text-[#0b79bf]" />
                <span>Eligible for delivery to {userLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Eligible for Takealot Pickup Point Collection</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Hassle-Free 30-Day Returns Policy</span>
              </div>
            </div>

          </div>

          {/* Right: Details & Buying options */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#0b79bf] mb-1">
                {selectedProduct.brand}
              </p>
              
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3">
                {selectedProduct.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(selectedProduct.rating) ? 'fill-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-800">{selectedProduct.rating}</span>
                <span className="text-xs text-gray-400">({selectedProduct.reviewCount} customer reviews)</span>
              </div>

              {/* Price section */}
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-gray-900">
                    R {selectedProduct.price.toLocaleString()}
                  </span>
                  {selectedProduct.listPrice > selectedProduct.price && (
                    <span className="text-sm text-gray-400 line-through">
                      R {selectedProduct.listPrice.toLocaleString()}
                    </span>
                  )}
                  {selectedProduct.discountPercent && (
                    <span className="text-xs font-black text-white bg-[#1c9444] px-2 py-0.5 rounded">
                      Save {selectedProduct.discountPercent}%
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                  <span>Earn up to <strong className="text-[#0b79bf]">eB {(selectedProduct.price * 10).toLocaleString()}</strong> with eBucks</span>
                  <span className="text-[11px] text-gray-500">Sold by <strong>{selectedProduct.seller}</strong></span>
                </div>
              </div>

              {/* Express delivery urgency badge */}
              {selectedProduct.isNextDayEligible && (
                <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg text-xs flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Want it tomorrow?</strong> Order within the next 4 hours and select Next-Day Delivery at checkout.
                  </span>
                </div>
              )}

              {/* Description */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase text-gray-800 mb-1.5 tracking-wider">Product Overview</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase text-gray-800 mb-1.5 tracking-wider">Key Features</h4>
                <ul className="space-y-1">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-[#0b79bf] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications table */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase text-gray-800 mb-1.5 tracking-wider">Specifications</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden text-xs divide-y divide-gray-200">
                  {Object.entries(selectedProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex bg-white">
                      <div className="w-1/3 p-2 bg-gray-50 text-gray-500 font-medium">{key}</div>
                      <div className="w-2/3 p-2 text-gray-800 font-semibold">{val}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Actions bar */}
            <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
              <div className="flex items-center gap-3">
                
                {/* Quantity selector */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-xs font-bold text-gray-900 bg-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className={`p-2.5 rounded-lg border transition-colors flex items-center justify-center ${
                    isFavorited
                      ? 'border-red-300 bg-red-50 text-red-500'
                      : 'border-gray-300 text-gray-500 hover:text-red-500 hover:bg-gray-50'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500' : ''}`} />
                </button>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#0b79bf] hover:bg-[#085f98] text-white py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Buy Now button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#1c9444] hover:bg-[#147233] text-white py-2.5 rounded-lg font-bold text-xs transition-colors shadow"
              >
                Buy Now (Proceed to Checkout)
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
