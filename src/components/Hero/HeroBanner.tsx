import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Flame, ShoppingBag } from 'lucide-react';

interface BannerSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  bgGradient: string;
  badgeColor: string;
  imageUrl: string;
  targetDept: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 'slide-1',
    tag: 'ULTIMATE TECH DAYS',
    title: 'Up To 35% OFF Tech & Gaming',
    subtitle: 'From PlayStation 5 Slim to Sony WH-1000XM5 headphones and Apple MacBooks.',
    bgGradient: 'from-[#0b79bf] via-[#095788] to-[#043353]',
    badgeColor: 'bg-yellow-400 text-gray-900',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80',
    targetDept: 'tech'
  },
  {
    id: 'slide-2',
    tag: 'LOADSHEDDING RELIEF',
    title: 'Keep The Power On With EcoFlow',
    subtitle: 'High-speed portable power stations with 70-min fast recharge. Beat the blackouts!',
    bgGradient: 'from-[#1e293b] via-[#0f172a] to-[#020617]',
    badgeColor: 'bg-emerald-400 text-gray-900',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=700&q=80',
    targetDept: 'home'
  },
  {
    id: 'slide-3',
    tag: 'BRAAI & OUTDOOR',
    title: 'Authentic South African Braai Season',
    subtitle: 'Original Weber 57cm charcoal kettle braais & accessories ready for Sunday braais.',
    bgGradient: 'from-[#991b1b] via-[#7f1d1d] to-[#450a0a]',
    badgeColor: 'bg-amber-300 text-gray-900',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    targetDept: 'home'
  },
  {
    id: 'slide-4',
    tag: 'KITCHEN UPGRADE',
    title: 'Smart Air Fryers & Espresso Machines',
    subtitle: 'DeLonghi bean-to-cup coffee & Xiaomi 4L Smart Air Fryer with viewing window.',
    bgGradient: 'from-[#0284c7] via-[#0369a1] to-[#075985]',
    badgeColor: 'bg-orange-400 text-gray-900',
    imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80',
    targetDept: 'appliances'
  }
];

export const HeroBanner: React.FC = () => {
  const { updateFilter } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  const handleShopNow = () => {
    updateFilter('department', slide.targetDept);
    updateFilter('dailyDealsOnly', false);
    // Smooth scroll to product grid
    const el = document.getElementById('product-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-[280px] sm:h-[340px] md:h-[380px]">
        
        {/* Slide Content */}
        <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} text-white flex items-center justify-between p-6 sm:p-10 md:p-14 relative`}>
          
          <div className="max-w-xl z-10 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${slide.badgeColor}`}>
                {slide.tag}
              </span>
              <span className="text-xs text-blue-200 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-yellow-300" /> Limited Time Only
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {slide.title}
            </h1>

            <p className="text-xs sm:text-base text-gray-200 font-normal line-clamp-2">
              {slide.subtitle}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={handleShopNow}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4 text-[#0b79bf]" />
                <span>Shop Deals Now</span>
              </button>
              
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-200">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Original Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Product Image preview */}
          <div className="hidden sm:block relative w-1/3 h-full max-h-[300px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Carousel controls */}
        <button
          onClick={() => setCurrentSlide(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
