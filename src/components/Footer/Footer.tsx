import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Building, Smartphone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 text-xs text-gray-600">
      
      {/* Value Propositions Banner */}
      <div className="bg-[#f8fafc] border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#0b79bf]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs">Fast, Reliable Delivery</h4>
              <p className="text-[11px] text-gray-500">Free delivery on orders over R500</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs">Safe & Secure Payment</h4>
              <p className="text-[11px] text-gray-500">Ozow, Cards, eBucks & Payflex</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs">Hassle-Free Returns</h4>
              <p className="text-[11px] text-gray-500">30-day money-back guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs">Takealot Pickup Points</h4>
              <p className="text-[11px] text-gray-500">Nationwide pickup facilities</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Shop</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-[#0b79bf]">Daily Deals</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">App Only Deals</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Clearance Sale</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Gift Vouchers</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Brands Store</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Help & Support</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-[#0b79bf]">Help Centre</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Delivery & Collections</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Returns Policy</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Track My Order</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Contact Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Account</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-[#0b79bf]">My Orders</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">My Wishlist</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Account Settings</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Vouchers & Credits</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Invoices & Receipts</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Company</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-[#0b79bf]">About Takealot</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Careers at Takealot</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Sell on Takealot</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Deliver for Takealot</a></li>
            <li><a href="#" className="hover:text-[#0b79bf]">Press & Media</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-3 text-[11px]">Takealot App</h4>
          <p className="text-[11px] text-gray-500 mb-3">
            Shop anywhere, anytime with exclusive app-only discounts and real-time order tracking.
          </p>
          <div className="space-y-2">
            <div className="border border-gray-300 rounded-lg p-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <Smartphone className="w-5 h-5 text-[#0b79bf]" />
              <div>
                <p className="text-[9px] uppercase text-gray-400 font-bold">Download on the</p>
                <p className="text-xs font-bold text-gray-900 leading-none">Apple App Store</p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <Smartphone className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-[9px] uppercase text-gray-400 font-bold">Get it on</p>
                <p className="text-xs font-bold text-gray-900 leading-none">Google Play</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Payment methods and bottom copyright bar */}
      <div className="bg-[#1c2833] text-gray-400 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] text-gray-300 font-semibold">Accepted Payments:</span>
            {['Visa', 'Mastercard', 'Ozow EFT', 'eBucks', 'Payflex', 'Mobicred'].map(pay => (
              <span key={pay} className="bg-gray-800 text-gray-200 border border-gray-700 text-[10px] px-2 py-0.5 rounded font-mono">
                {pay}
              </span>
            ))}
          </div>

          <div className="text-center md:text-right text-[11px]">
            <p>© {new Date().getFullYear()} Takealot Online (Pty) Ltd. South Africa's leading online store.</p>
            <p className="text-gray-500 text-[10px] mt-0.5">Built with React, TypeScript & Tailwind CSS.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};
