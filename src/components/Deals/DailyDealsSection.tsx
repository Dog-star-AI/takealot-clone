import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Clock, ChevronRight, Truck, Star, ShoppingCart } from 'lucide-react';

export const DailyDealsSection: React.FC = () => {
  const { products, addToCart, setSelectedProduct, updateFilter } = useApp();
  
  // Real-time ticking countdown timer (e.g. 7 hours 43 mins 22 secs)
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 38,
    seconds: 44
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dailyDeals = products.filter(p => p.isDailyDeal);

  const formatPad = (n: number) => n.toString().padStart(2, '0');

  const handleViewAllDeals = () => {
    updateFilter('dailyDealsOnly', true);
    updateFilter('department', 'all');
    updateFilter('category', 'all');
    const el = document.getElementById('product-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header bar with countdown */}
        <div className="bg-gradient-to-r from-[#d9381e] via-[#ea580c] to-[#f97316] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Flame className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black tracking-tight uppercase">Daily Deals</h2>
                <span className="bg-yellow-400 text-gray-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  Up to 45% OFF
                </span>
              </div>
              <p className="text-xs text-orange-100">Fresh South African deals every day at midnight</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Countdown timer */}
            <div className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-lg text-xs font-mono">
              <Clock className="w-4 h-4 text-yellow-300" />
              <span className="text-orange-200 text-xs font-sans mr-1">Deals end in:</span>
              <span className="bg-black/40 px-1.5 py-0.5 rounded font-bold text-white">
                {formatPad(timeLeft.hours)}h
              </span>
              <span>:</span>
              <span className="bg-black/40 px-1.5 py-0.5 rounded font-bold text-white">
                {formatPad(timeLeft.minutes)}m
              </span>
              <span>:</span>
              <span className="bg-black/40 px-1.5 py-0.5 rounded font-bold text-white">
                {formatPad(timeLeft.seconds)}s
              </span>
            </div>

            <button
              onClick={handleViewAllDeals}
              className="text-xs font-bold text-white hover:text-yellow-200 flex items-center gap-1 transition-colors whitespace-nowrap hidden md:flex"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Deals carousel / scroll row */}
        <div className="p-4 sm:p-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max pb-2">
            {dailyDeals.map((product) => (
              <div
                key={product.id}
                className="w-64 sm:w-72 bg-white rounded-xl border border-gray-200 hover:border-[#0b79bf] hover:shadow-lg transition-all p-4 flex flex-col justify-between group relative"
              >
                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#1c9444] text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-sm">
                    {product.discountPercent}% OFF
                  </span>
                </div>

                {/* Warehouse availability badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-blue-50 text-[#0b79bf] border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded">
                    {product.warehouse} Stock
                  </span>
                </div>

                {/* Product Image */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="w-full h-44 flex items-center justify-center p-2 mb-3 cursor-pointer overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {product.brand}
                  </p>
                  
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-semibold text-gray-800 hover:text-[#0b79bf] line-clamp-2 mb-2 cursor-pointer transition-colors leading-snug"
                    title={product.title}
                  >
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-2 text-xs">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-gray-500">
                      ({product.reviewCount})
                    </span>
                  </div>

                  {/* Fast delivery tag */}
                  {product.isNextDayEligible && (
                    <div className="flex items-center gap-1 text-[11px] text-[#1c9444] font-semibold mb-3">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Next-Day Delivery Eligible</span>
                    </div>
                  )}

                  {/* Stock urgency */}
                  <div className="mb-3">
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1 font-medium">
                      <span>Limited Stock</span>
                      <span className="text-orange-600 font-bold">{product.stockCount} left</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-orange-500 h-1.5 rounded-full"
                        style={{ width: `${Math.min(100, (product.stockCount / 30) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between mb-3">
                    <div>
                      <div className="text-lg font-black text-gray-900 leading-none">
                        R {product.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400 line-through mt-0.5">
                        R {product.listPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-[#0b79bf] bg-blue-50 px-1.5 py-0.5 rounded">
                        eB {(product.price * 10).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#0b79bf] hover:bg-[#085f98] text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
