import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Truck, Package, MapPin, Calendar, X, ArrowRight } from 'lucide-react';

export const OrderSuccessModal: React.FC = () => {
  const { lastOrder, setLastOrder } = useApp();

  if (!lastOrder) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full my-auto overflow-hidden animate-scale-up border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1c9444] to-[#147233] text-white p-6 text-center relative">
          <button
            onClick={() => setLastOrder(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
            <CheckCircle2 className="w-9 h-9 text-white" />
          </div>
          <h2 className="text-xl font-black">Thank you for your order!</h2>
          <p className="text-xs text-green-100 mt-1">We've received your order and are preparing it for shipment.</p>
          <div className="mt-3 inline-block bg-black/25 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider">
            Order Ref: {lastOrder.id}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          
          {/* Tracking Step Bar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Live Order Tracking</h4>
            <div className="relative flex items-center justify-between">
              
              <div className="flex-1 flex flex-col items-center z-10">
                <div className="w-7 h-7 rounded-full bg-[#1c9444] text-white flex items-center justify-center text-xs font-bold shadow">
                  ✓
                </div>
                <span className="text-[10px] font-bold text-gray-800 mt-1.5 text-center">Placed</span>
              </div>

              <div className="h-1 flex-1 bg-[#0b79bf] -mt-5" />

              <div className="flex-1 flex flex-col items-center z-10">
                <div className="w-7 h-7 rounded-full bg-[#0b79bf] text-white flex items-center justify-center text-xs font-bold shadow animate-pulse">
                  <Package className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#0b79bf] mt-1.5 text-center">Packing</span>
              </div>

              <div className="h-1 flex-1 bg-gray-200 -mt-5" />

              <div className="flex-1 flex flex-col items-center z-10">
                <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium text-gray-400 mt-1.5 text-center">In Transit</span>
              </div>

              <div className="h-1 flex-1 bg-gray-200 -mt-5" />

              <div className="flex-1 flex flex-col items-center z-10">
                <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">
                  ★
                </div>
                <span className="text-[10px] font-medium text-gray-400 mt-1.5 text-center">Delivered</span>
              </div>

            </div>
          </div>

          {/* Delivery destination card */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-gray-800">
              <Calendar className="w-4 h-4 text-[#0b79bf]" />
              <span>Estimated Delivery: {lastOrder.estimatedDeliveryDate}</span>
            </div>
            
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <div>
                {lastOrder.address.isPickupPoint ? (
                  <>
                    <strong className="text-gray-900 block">{lastOrder.address.pickupPointName}</strong>
                    <span>Takealot Pickup Point Collection • Free parking</span>
                  </>
                ) : (
                  <>
                    <strong className="text-gray-900 block">{lastOrder.address.fullName} ({lastOrder.address.phone})</strong>
                    <span>{lastOrder.address.streetAddress}, {lastOrder.address.suburb}, {lastOrder.address.city}, {lastOrder.address.postalCode}</span>
                  </>
                )}
              </div>
            </div>

            <div className="text-[11px] text-gray-500 pt-1 border-t border-gray-200">
              Paid via <strong>{lastOrder.paymentMethod}</strong> • {lastOrder.deliveryOption}
            </div>
          </div>

          {/* Items Purchased */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Order Items ({lastOrder.items.length})
            </h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1 divide-y divide-gray-100">
              {lastOrder.items.map(({ product, quantity }) => (
                <div key={product.id} className="pt-2 first:pt-0 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-contain bg-white border border-gray-200 rounded p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">{product.title}</p>
                    <p className="text-[11px] text-gray-500">Qty: {quantity} • R {product.price.toLocaleString()} each</p>
                  </div>
                  <div className="text-xs font-black text-gray-900">
                    R {(product.price * quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total paid */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-200 font-bold text-sm">
            <span>Total Paid (VAT Incl.)</span>
            <span className="text-[#0b79bf] text-lg font-black">R {lastOrder.total.toLocaleString()}</span>
          </div>

          <button
            onClick={() => setLastOrder(null)}
            className="w-full bg-[#0b79bf] hover:bg-[#085f98] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
          >
            <span>Continue Shopping on Takealot</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
};
