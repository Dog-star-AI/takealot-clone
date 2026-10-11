import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, ChevronDown, Check, HelpCircle, Truck, Store } from 'lucide-react';

const POPULAR_LOCATIONS = [
  'Sandton, Johannesburg',
  'Rosebank, Johannesburg',
  'Centurion, Pretoria',
  'Sea Point, Cape Town',
  'Richmond Park, Cape Town',
  'Umhlanga, Durban',
  'Gqeberha (Port Elizabeth)',
  'Bloemfontein'
];

export const TopBar: React.FC = () => {
  const { userLocation, setUserLocation, orders, setLastOrder } = useApp();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [trackingNumberInput, setTrackingNumberInput] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = orders.find(o => o.id.toLowerCase() === trackingNumberInput.trim().toLowerCase());
    if (matched) {
      setLastOrder(matched);
      setShowTrackModal(false);
    } else if (orders.length > 0) {
      setLastOrder(orders[0]);
      setShowTrackModal(false);
    } else {
      alert('No orders found matching that tracking reference yet. Place an order to test live tracking!');
    }
  };

  return (
    <>
      <div className="bg-[#f8f9fa] border-b border-gray-200 text-xs text-gray-600 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-1.5 hover:text-[#0b79bf] font-medium transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0b79bf]" />
              <span>Deliver to: <strong className="text-gray-900">{userLocation}</strong></span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            <div className="h-3 w-px bg-gray-300" />
            <button
              onClick={() => setShowTrackModal(true)}
              className="flex items-center gap-1.5 hover:text-[#0b79bf] transition-colors"
            >
              <Truck className="w-3.5 h-3.5 text-gray-500" />
              <span>Track Order</span>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#help"
              onClick={(e) => { e.preventDefault(); alert('Takealot Customer Service Help Centre available 24/7.'); }}
              className="flex items-center gap-1.5 hover:text-[#0b79bf] transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
              <span>Help Centre</span>
            </a>
            <div className="h-3 w-px bg-gray-300" />
            <a
              href="#sell"
              onClick={(e) => { e.preventDefault(); alert('Sell on Takealot portal: Reach millions of South African shoppers.'); }}
              className="flex items-center gap-1.5 hover:text-[#0b79bf] text-[#0b79bf] font-medium transition-colors"
            >
              <Store className="w-3.5 h-3.5 text-[#0b79bf]" />
              <span>Sell on Takealot</span>
            </a>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0b79bf]" /> Choose Your Location
              </h3>
              <button
                onClick={() => setShowLocationModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-semibold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Delivery options, fees, and next-day availability vary by location across South Africa.
            </p>
            <div className="space-y-2 mb-6 max-h-60 overflow-y-auto">
              {POPULAR_LOCATIONS.map(loc => (
                <button
                  key={loc}
                  onClick={() => {
                    setUserLocation(loc);
                    setShowLocationModal(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm flex items-center justify-between transition-colors ${
                    userLocation === loc
                      ? 'border-[#0b79bf] bg-blue-50/50 text-[#0b79bf] font-semibold'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{loc}</span>
                  {userLocation === loc && <Check className="w-4 h-4 text-[#0b79bf]" />}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full bg-[#0b79bf] hover:bg-[#085f98] text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Save Delivery Location
            </button>
          </div>
        </div>
      )}

      {/* Track Order Modal */}
      {showTrackModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#0b79bf]" /> Track Your Takealot Order
              </h3>
              <button
                onClick={() => setShowTrackModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-semibold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Enter your TSA order tracking number (e.g., TSA-84910284) to view courier status.
            </p>
            <form onSubmit={handleTrackSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Order / Tracking Number</label>
                <input
                  type="text"
                  placeholder="e.g. TSA-84910284"
                  value={trackingNumberInput}
                  onChange={(e) => setTrackingNumberInput(e.target.value)}
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#0b79bf]"
                />
              </div>
              {orders.length > 0 && (
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 font-medium mb-1">Your Recent Orders:</p>
                  {orders.slice(0, 3).map(o => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setTrackingNumberInput(o.id)}
                      className="text-xs text-[#0b79bf] hover:underline block truncate text-left"
                    >
                      {o.id} - {o.items.length} items ({o.status})
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowTrackModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#0b79bf] text-white rounded-lg text-sm font-semibold hover:bg-[#085f98]"
                >
                  Track Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
