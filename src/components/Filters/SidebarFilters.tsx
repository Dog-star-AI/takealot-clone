import React from 'react';
import { useApp } from '../../context/AppContext';
import { DEPARTMENTS } from '../../data/mockProducts';
import { RotateCcw, Star, Check } from 'lucide-react';

export const SidebarFilters: React.FC = () => {
  const { products, filters, updateFilter, resetFilters } = useApp();

  // Extract unique brands
  const allBrands = Array.from(new Set(products.map(p => p.brand))).sort();

  const handleBrandToggle = (brandName: string) => {
    if (filters.brand.includes(brandName)) {
      updateFilter('brand', filters.brand.filter(b => b !== brandName));
    } else {
      updateFilter('brand', [...filters.brand, brandName]);
    }
  };

  const currentDeptObj = DEPARTMENTS.find(d => d.id === filters.department);

  return (
    <aside className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm divide-y divide-gray-100 space-y-4">
      
      {/* Header with Reset */}
      <div className="flex items-center justify-between pb-1">
        <h3 className="font-bold text-gray-900 text-sm">Refine By</h3>
        <button
          onClick={resetFilters}
          className="text-xs text-[#0b79bf] hover:text-[#085f98] font-semibold flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Department Filter */}
      <div className="pt-3">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          Department
        </h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => {
              updateFilter('department', 'all');
              updateFilter('category', 'all');
            }}
            className={`w-full text-left py-1 px-1.5 rounded transition-colors ${
              filters.department === 'all'
                ? 'bg-blue-50 text-[#0b79bf] font-bold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Departments
          </button>
          {DEPARTMENTS.map(dept => (
            <button
              key={dept.id}
              onClick={() => {
                updateFilter('department', dept.id);
                updateFilter('category', 'all');
              }}
              className={`w-full text-left py-1 px-1.5 rounded transition-colors ${
                filters.department === dept.id
                  ? 'bg-blue-50 text-[#0b79bf] font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Filter (if department is selected) */}
      {currentDeptObj && (
        <div className="pt-3">
          <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
            Categories
          </h4>
          <div className="space-y-1 text-xs">
            <button
              onClick={() => updateFilter('category', 'all')}
              className={`w-full text-left py-1 px-1.5 rounded transition-colors ${
                filters.category === 'all'
                  ? 'bg-blue-50 text-[#0b79bf] font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All {currentDeptObj.name}
            </button>
            {currentDeptObj.categories.map(cat => (
              <button
                key={cat}
                onClick={() => updateFilter('category', cat)}
                className={`w-full text-left py-1 px-1.5 rounded transition-colors ${
                  filters.category === cat
                    ? 'bg-blue-50 text-[#0b79bf] font-bold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Availability / Express Delivery */}
      <div className="pt-3 space-y-2">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          Availability & Delivery
        </h4>
        
        <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
          <input
            type="checkbox"
            checked={filters.nextDayOnly}
            onChange={(e) => updateFilter('nextDayOnly', e.target.checked)}
            className="w-4 h-4 rounded text-[#0b79bf] focus:ring-[#0b79bf] border-gray-300"
          />
          <span className="font-medium text-emerald-700">Next-Day Delivery Eligible</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => updateFilter('inStockOnly', e.target.checked)}
            className="w-4 h-4 rounded text-[#0b79bf] focus:ring-[#0b79bf] border-gray-300"
          />
          <span>In Stock in Warehouse</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
          <input
            type="checkbox"
            checked={filters.dailyDealsOnly}
            onChange={(e) => updateFilter('dailyDealsOnly', e.target.checked)}
            className="w-4 h-4 rounded text-[#0b79bf] focus:ring-[#0b79bf] border-gray-300"
          />
          <span className="text-orange-600 font-semibold">Daily Deals Only</span>
        </label>
      </div>

      {/* Price Range */}
      <div className="pt-3">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          Price (ZAR)
        </h4>
        <div className="flex items-center gap-2 mb-2">
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-2 text-xs text-gray-400 font-semibold">R</span>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => updateFilter('minPrice', Number(e.target.value) || 0)}
              className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:border-[#0b79bf]"
              placeholder="0"
            />
          </div>
          <span className="text-gray-400 text-xs">to</span>
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-2 text-xs text-gray-400 font-semibold">R</span>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => updateFilter('maxPrice', Number(e.target.value) || 25000)}
              className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-xs focus:outline-none focus:border-[#0b79bf]"
              placeholder="25000"
            />
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="pt-3">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          Brands
        </h4>
        <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {allBrands.map(brand => {
            const count = products.filter(p => p.brand === brand).length;
            const checked = filters.brand.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center justify-between text-xs text-gray-700 cursor-pointer hover:text-gray-900"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleBrandToggle(brand)}
                    className="w-3.5 h-3.5 rounded text-[#0b79bf] focus:ring-[#0b79bf] border-gray-300"
                  />
                  <span>{brand}</span>
                </div>
                <span className="text-[10px] text-gray-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="pt-3">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
          Rating
        </h4>
        <div className="space-y-1.5">
          {[4, 3, 2].map(rating => (
            <button
              key={rating}
              onClick={() => updateFilter('minRating', filters.minRating === rating ? 0 : rating)}
              className={`flex items-center justify-between w-full py-1 px-1.5 rounded text-xs transition-colors ${
                filters.minRating === rating
                  ? 'bg-blue-50 text-[#0b79bf] font-bold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < rating ? 'fill-amber-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span>{rating}★ & above</span>
              </div>
              {filters.minRating === rating && <Check className="w-3.5 h-3.5 text-[#0b79bf]" />}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
};
