import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from './ProductCard';
import { SidebarFilters } from '../Filters/SidebarFilters';
import { SortOption } from '../../types';
import { SlidersHorizontal, ArrowUpDown, X, PackageX } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { filteredProducts, filters, updateFilter, resetFilters } = useApp();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div id="product-catalog" className="max-w-7xl mx-auto px-4 py-6">
      
      {/* Grid container with sidebar */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Desktop Sidebar (Left) */}
        <div className="hidden lg:block w-64 shrink-0">
          <SidebarFilters />
        </div>

        {/* Mobile Filters Drawer modal */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 lg:hidden flex justify-end">
            <div className="bg-white w-80 max-w-full h-full p-4 overflow-y-auto shadow-2xl animate-slide-left">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                <h3 className="font-bold text-gray-900 text-sm">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarFilters />
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full mt-4 bg-[#0b79bf] text-white py-2.5 rounded-lg font-bold text-xs"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1">
          
          {/* Top Bar: Results count & Sort */}
          <div className="bg-white rounded-xl border border-gray-200 p-3.5 mb-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-semibold"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>
              
              <div className="text-xs text-gray-600">
                Showing <strong className="text-gray-900 font-bold">{filteredProducts.length}</strong> products
                {filters.department !== 'all' && (
                  <span className="text-[#0b79bf] font-semibold ml-1">in {filters.department}</span>
                )}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-500 font-medium">Sort By:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value as SortOption)}
                className="bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 font-semibold text-gray-800 focus:outline-none focus:border-[#0b79bf]"
              >
                <option value="featured">Featured / Top Selling</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount (%)</option>
              </select>
            </div>

          </div>

          {/* Active Filter Pills */}
          {(filters.searchQuery || filters.dailyDealsOnly || filters.nextDayOnly || filters.brand.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs text-gray-400 font-medium">Active filters:</span>
              
              {filters.searchQuery && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-[#0b79bf] text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                  Search: "{filters.searchQuery}"
                  <button onClick={() => updateFilter('searchQuery', '')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.dailyDealsOnly && (
                <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-orange-200">
                  Daily Deals
                  <button onClick={() => updateFilter('dailyDealsOnly', false)}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.nextDayOnly && (
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">
                  Next-Day Delivery
                  <button onClick={() => updateFilter('nextDayOnly', false)}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.brand.map(b => (
                <span key={b} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200">
                  {b}
                  <button onClick={() => updateFilter('brand', filters.brand.filter(item => item !== b))}><X className="w-3 h-3" /></button>
                </span>
              ))}

              <button
                onClick={resetFilters}
                className="text-xs text-red-600 hover:underline font-semibold ml-1"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
              <PackageX className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-base font-bold text-gray-800 mb-1">No products found</h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto mb-5">
                We couldn't find any products matching your specific filters or search keywords.
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#0b79bf] hover:bg-[#085f98] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
