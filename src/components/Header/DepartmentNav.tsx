import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DEPARTMENTS } from '../../data/mockProducts';
import { Menu, Flame, Tag, Sparkles, MapPin, ChevronRight, X } from 'lucide-react';

export const DepartmentNav: React.FC = () => {
  const { filters, updateFilter } = useApp();
  const [isDepartmentMenuOpen, setIsDepartmentMenuOpen] = useState(false);
  const [hoveredDept, setHoveredDept] = useState<string>(DEPARTMENTS[0].id);

  const activeHoverDeptObj = DEPARTMENTS.find(d => d.id === hoveredDept) || DEPARTMENTS[0];

  const handleSelectDept = (deptId: string, category = 'all') => {
    updateFilter('department', deptId);
    updateFilter('category', category);
    updateFilter('dailyDealsOnly', false);
    setIsDepartmentMenuOpen(false);
  };

  const handleDailyDealsClick = () => {
    updateFilter('dailyDealsOnly', true);
    updateFilter('department', 'all');
    updateFilter('category', 'all');
  };

  return (
    <nav className="bg-[#085f98] text-white relative z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold">
        
        {/* Left: Shop by Department button */}
        <div className="relative">
          <button
            onClick={() => setIsDepartmentMenuOpen(!isDepartmentMenuOpen)}
            className="flex items-center gap-2 bg-[#004b7b] hover:bg-[#003d65] px-4 py-2.5 transition-colors"
          >
            {isDepartmentMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="uppercase tracking-wider">Shop by Department</span>
          </button>

          {/* Flyout Mega Menu */}
          {isDepartmentMenuOpen && (
            <div className="absolute top-full left-0 w-80 sm:w-[620px] bg-white text-gray-800 shadow-2xl rounded-b-lg border border-gray-200 flex flex-col sm:flex-row z-50 overflow-hidden animate-scale-up">
              
              {/* Department list column */}
              <div className="w-full sm:w-1/2 border-r border-gray-100 py-2">
                <button
                  onClick={() => handleSelectDept('all')}
                  className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                    filters.department === 'all' ? 'text-[#0b79bf] font-bold bg-blue-50/70' : 'text-gray-700'
                  }`}
                >
                  <span>All Departments</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                {DEPARTMENTS.map(dept => (
                  <button
                    key={dept.id}
                    onMouseEnter={() => setHoveredDept(dept.id)}
                    onClick={() => handleSelectDept(dept.id)}
                    className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                      hoveredDept === dept.id ? 'bg-blue-50 text-[#0b79bf] font-bold' : 'text-gray-700'
                    }`}
                  >
                    <span>{dept.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>

              {/* Subcategories preview column */}
              <div className="w-full sm:w-1/2 p-4 bg-gray-50 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-gray-400 tracking-wider mb-3">
                    {activeHoverDeptObj.name} Categories
                  </h4>
                  <ul className="space-y-2">
                    {activeHoverDeptObj.categories.map(cat => (
                      <li key={cat}>
                        <button
                          onClick={() => handleSelectDept(activeHoverDeptObj.id, cat)}
                          className="text-xs text-gray-700 hover:text-[#0b79bf] hover:underline text-left block w-full py-0.5"
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => handleSelectDept(activeHoverDeptObj.id)}
                    className="text-xs font-bold text-[#0b79bf] hover:underline flex items-center gap-1"
                  >
                    Browse all {activeHoverDeptObj.name} →
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Quick Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={handleDailyDealsClick}
            className={`flex items-center gap-1.5 px-3 py-2.5 hover:bg-black/15 transition-colors ${
              filters.dailyDealsOnly ? 'bg-black/25 text-yellow-300 font-bold' : 'text-yellow-300'
            }`}
          >
            <Flame className="w-4 h-4 text-yellow-300" />
            <span>Daily Deals</span>
          </button>
          
          <button
            onClick={() => {
              updateFilter('department', 'tech');
              updateFilter('dailyDealsOnly', false);
            }}
            className="px-3 py-2.5 hover:bg-black/15 transition-colors"
          >
            Tech & Gaming
          </button>

          <button
            onClick={() => {
              updateFilter('department', 'appliances');
              updateFilter('dailyDealsOnly', false);
            }}
            className="px-3 py-2.5 hover:bg-black/15 transition-colors"
          >
            Appliances
          </button>

          <button
            onClick={() => {
              updateFilter('department', 'home');
              updateFilter('dailyDealsOnly', false);
            }}
            className="px-3 py-2.5 hover:bg-black/15 transition-colors"
          >
            Braai & Outdoor
          </button>

          <button
            onClick={() => {
              updateFilter('department', 'beauty');
              updateFilter('dailyDealsOnly', false);
            }}
            className="px-3 py-2.5 hover:bg-black/15 transition-colors"
          >
            Beauty & Fragrance
          </button>

          <button
            onClick={() => {
              updateFilter('department', 'liquor');
              updateFilter('dailyDealsOnly', false);
            }}
            className="px-3 py-2.5 hover:bg-black/15 transition-colors"
          >
            Liquor
          </button>
        </div>

        {/* Right side promo badge */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-blue-100 font-medium">
            <Tag className="w-3.5 h-3.5 text-yellow-300" />
            <span>FREE delivery on orders over R500</span>
          </div>
        </div>

      </div>
    </nav>
  );
};
