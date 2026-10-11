import React from 'react';
import { useApp } from '../../context/AppContext';
import { Laptop, Microwave, Gamepad2, Home, Sparkles, Shirt, Wine, Flame } from 'lucide-react';

const DEPT_ICONS = [
  { id: 'deals', name: 'Daily Deals', icon: Flame, isSpecial: true },
  { id: 'tech', name: 'Computers & Tech', icon: Laptop },
  { id: 'appliances', name: 'Kitchen & Appliances', icon: Microwave },
  { id: 'gaming', name: 'Gaming & Media', icon: Gamepad2 },
  { id: 'home', name: 'Braai & Home', icon: Home },
  { id: 'beauty', name: 'Beauty & Fragrance', icon: Sparkles },
  { id: 'fashion', name: 'Fashion & Sneakers', icon: Shirt },
  { id: 'liquor', name: 'Liquor & Wine', icon: Wine }
];

export const DepartmentIcons: React.FC = () => {
  const { filters, updateFilter } = useApp();

  const handleSelect = (id: string) => {
    if (id === 'deals') {
      updateFilter('dailyDealsOnly', true);
      updateFilter('department', 'all');
      updateFilter('category', 'all');
    } else {
      updateFilter('dailyDealsOnly', false);
      updateFilter('department', id);
      updateFilter('category', 'all');
    }

    const el = document.getElementById('product-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
          {DEPT_ICONS.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === 'deals'
              ? filters.dailyDealsOnly
              : filters.department === item.id && !filters.dailyDealsOnly;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="flex flex-col items-center group text-center focus:outline-none"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-200 ${
                    item.isSpecial
                      ? 'bg-gradient-to-br from-amber-500 to-red-500 text-white shadow-md group-hover:scale-105'
                      : isSelected
                      ? 'bg-[#0b79bf] text-white shadow-md scale-105'
                      : 'bg-[#f4f7fa] text-gray-700 group-hover:bg-[#e4effa] group-hover:text-[#0b79bf]'
                  }`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span
                  className={`mt-2 text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2 max-w-[80px] ${
                    isSelected ? 'text-[#0b79bf] font-bold' : 'text-gray-700 group-hover:text-[#0b79bf]'
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
