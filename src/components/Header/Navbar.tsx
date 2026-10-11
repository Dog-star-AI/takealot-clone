import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DEPARTMENTS } from '../../data/mockProducts';
import { Search, ShoppingCart, Heart, User, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    cartSubtotal,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    filters,
    updateFilter,
    resetFilters
  } = useApp();

  const [searchInput, setSearchInput] = useState(filters.searchQuery);
  const [selectedDept, setSelectedDept] = useState(filters.department);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilter('searchQuery', searchInput);
    updateFilter('department', selectedDept);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    updateFilter('searchQuery', '');
  };

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Takealot Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                resetFilters();
                setSearchInput('');
                setSelectedDept('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-[#0b79bf] flex items-center justify-center text-white shadow-md group-hover:bg-[#085f98] transition-colors">
                {/* Takealot dot / smile icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V17c-2.48 0-4.5-2.02-4.5-4.5h1.5c0 1.65 1.35 3 3 3v1.43zM15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8 17 8.67 17 9.5 16.33 11 15.5 11zm-7 0C7.67 11 7 10.33 7 9.5S7.67 8 8.5 8 10 8.67 10 9.5 9.33 11 8.5 11z"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-[#0b79bf] group-hover:text-[#085f98] transition-colors">
                  takealot<span className="text-[#0b79bf] font-medium text-lg">.com</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">South Africa</span>
              </div>
            </button>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-2xl hidden md:flex items-center rounded-lg border-2 border-[#0b79bf] overflow-hidden bg-white shadow-sm"
          >
            {/* Department selector */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-2.5 border-r border-gray-300 focus:outline-none cursor-pointer max-w-[170px] truncate font-medium"
            >
              <option value="all">All Departments</option>
              {DEPARTMENTS.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>

            {/* Input */}
            <div className="relative flex-1 flex items-center">
              <input
                type="text"
                placeholder="Search for products, brands, or tech..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1 mr-2 text-gray-400 hover:text-gray-600 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#0b79bf] hover:bg-[#085f98] text-white px-5 py-2.5 transition-colors flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="flex items-center gap-1.5 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-xs font-semibold hidden lg:inline">My Account</span>
              </button>

              {showAccountMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-scale-up">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm font-bold text-gray-800">Thabo Mokoena</p>
                    <span className="text-[10px] text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded">eBucks Level 5</span>
                  </div>
                  <button
                    onClick={() => { setShowAccountMenu(false); alert('Orders history loaded'); }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#0b79bf]"
                  >
                    My Orders & Returns
                  </button>
                  <button
                    onClick={() => { setShowAccountMenu(false); setIsWishlistOpen(true); }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#0b79bf]"
                  >
                    Wishlist & Lists
                  </button>
                  <button
                    onClick={() => { setShowAccountMenu(false); alert('Takealot Vouchers: Balance R 250.00'); }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#0b79bf]"
                  >
                    Takealot Credit & Vouchers
                  </button>
                  <div className="border-t border-gray-100 my-1" />
                  <button
                    onClick={() => setShowAccountMenu(false)}
                    className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-[#1c9444] hover:bg-[#147233] text-white px-3.5 py-2 rounded-lg font-bold text-xs shadow-sm transition-all"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {cartCount === 0 ? 'Cart' : `R ${cartSubtotal.toLocaleString()}`}
              </span>
            </button>

          </div>
        </div>

        {/* Mobile Search Input */}
        <form onSubmit={handleSearchSubmit} className="mt-3 md:hidden flex items-center rounded-lg border-2 border-[#0b79bf] overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-3 py-2 text-sm focus:outline-none"
          />
          <button type="submit" className="bg-[#0b79bf] text-white p-2">
            <Search className="w-4 h-4" />
          </button>
        </form>

      </div>
    </header>
  );
};
