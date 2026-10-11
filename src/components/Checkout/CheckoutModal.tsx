import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PICKUP_POINTS, PROVINCES } from '../../data/mockProducts';
import { ShippingAddress } from '../../types';
import { X, Check, CreditCard, ShieldCheck, Truck, MapPin, Building, Lock } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartTotal,
    shippingFee,
    createOrder,
    userLocation
  } = useApp();

  const [deliveryType, setDeliveryType] = useState<'door' | 'pickup'>('door');
  const [selectedPickupPoint, setSelectedPickupPoint] = useState(PICKUP_POINTS[0].id);

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: 'Thabo Mokoena',
    streetAddress: '14 Rivonia Road, Morningside',
    suburb: 'Sandton',
    city: 'Johannesburg',
    province: 'Gauteng',
    postalCode: '2196',
    phone: '082 123 4567'
  });

  const [deliveryOption, setDeliveryOption] = useState<'standard' | 'next-day' | 'saturday'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ozow' | 'ebucks' | 'payflex'>('card');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [cardExpiry, setCardExpiry] = useState('11/28');
  const [cardCvv, setCardCvv] = useState('321');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const currentShippingFee = deliveryOption === 'next-day'
    ? 95
    : deliveryOption === 'saturday'
    ? 95
    : shippingFee;

  const finalTotal = cartSubtotal + currentShippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const finalAddress: ShippingAddress = deliveryType === 'pickup'
        ? {
            ...address,
            isPickupPoint: true,
            pickupPointName: PICKUP_POINTS.find(p => p.id === selectedPickupPoint)?.name
          }
        : address;

      const delivLabel = deliveryOption === 'next-day'
        ? 'Priority Next-Day Delivery'
        : deliveryOption === 'saturday'
        ? 'Weekend Delivery'
        : 'Standard Delivery (2-3 business days)';

      const payLabel = paymentMethod === 'card'
        ? 'Credit/Debit Card'
        : paymentMethod === 'ozow'
        ? 'Ozow Instant EFT'
        : paymentMethod === 'ebucks'
        ? 'eBucks'
        : 'Payflex (4 Installments)';

      createOrder(finalAddress, payLabel, delivLabel);
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-auto overflow-hidden animate-scale-up border border-gray-100 flex flex-col max-h-[94vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#085f98] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-300" />
            <div>
              <h2 className="text-base font-bold">Secure Checkout</h2>
              <p className="text-[11px] text-blue-200">256-Bit SSL Encrypted Payment</p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="text-blue-200 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitOrder} className="overflow-y-auto p-6 space-y-6">
          
          {/* Section 1: Delivery Mode */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#0b79bf] text-white text-xs flex items-center justify-center font-bold">1</span>
              Delivery Method
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <button
                type="button"
                onClick={() => setDeliveryType('door')}
                className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                  deliveryType === 'door'
                    ? 'border-[#0b79bf] bg-blue-50/50 text-[#0b79bf]'
                    : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Truck className="w-5 h-5 shrink-0 mt-0.5 text-[#0b79bf]" />
                <div>
                  <h4 className="font-bold text-xs">Courier Door Delivery</h4>
                  <p className="text-[11px] text-gray-500">Delivered directly to your home or office</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryType('pickup')}
                className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                  deliveryType === 'pickup'
                    ? 'border-[#0b79bf] bg-blue-50/50 text-[#0b79bf]'
                    : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Building className="w-5 h-5 shrink-0 mt-0.5 text-orange-500" />
                <div>
                  <h4 className="font-bold text-xs">Takealot Pickup Point</h4>
                  <p className="text-[11px] text-gray-500">Collect at your convenience (Richmond Park, Midrand, etc.)</p>
                </div>
              </button>
            </div>

            {deliveryType === 'door' ? (
              /* Door delivery address fields */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Mobile Phone (+27)</label>
                  <input
                    type="tel"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address.streetAddress}
                    onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Suburb</label>
                  <input
                    type="text"
                    required
                    value={address.suburb}
                    onChange={(e) => setAddress({ ...address, suburb: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Province</label>
                  <select
                    value={address.province}
                    onChange={(e) => setAddress({ ...address, province: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  >
                    {PROVINCES.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={address.postalCode}
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                  />
                </div>
              </div>
            ) : (
              /* Takealot Pickup Point Selector */
              <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Select a Takealot Pickup Point:</p>
                {PICKUP_POINTS.map(pt => (
                  <label
                    key={pt.id}
                    className={`block p-3 rounded-lg border cursor-pointer text-xs transition-colors ${
                      selectedPickupPoint === pt.id
                        ? 'border-[#0b79bf] bg-blue-50 text-[#0b79bf] font-medium'
                        : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="pickup_point"
                          checked={selectedPickupPoint === pt.id}
                          onChange={() => setSelectedPickupPoint(pt.id)}
                          className="text-[#0b79bf]"
                        />
                        <span className="font-bold text-gray-900">{pt.name}</span>
                      </div>
                      <span className="text-[10px] text-green-700 font-semibold">FREE Collection</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 ml-5">{pt.address} • {pt.hours}</p>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: Delivery Speed Option */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#0b79bf] text-white text-xs flex items-center justify-center font-bold">2</span>
              Delivery Speed
            </h3>
            
            <div className="space-y-2">
              <label
                className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                  deliveryOption === 'standard' ? 'border-[#0b79bf] bg-blue-50/50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="deliv_speed"
                    checked={deliveryOption === 'standard'}
                    onChange={() => setDeliveryOption('standard')}
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Standard Delivery (2-3 business days)</h4>
                    <p className="text-gray-500 text-[11px]">Reliable Takealot courier delivery</p>
                  </div>
                </div>
                <span className="font-bold text-gray-900">
                  {shippingFee === 0 ? 'FREE' : 'R 65'}
                </span>
              </label>

              <label
                className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                  deliveryOption === 'next-day' ? 'border-[#0b79bf] bg-blue-50/50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="deliv_speed"
                    checked={deliveryOption === 'next-day'}
                    onChange={() => setDeliveryOption('next-day')}
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 flex items-center gap-1.5">
                      <span>Priority Next-Day Delivery</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.2 rounded font-black">FAST</span>
                    </h4>
                    <p className="text-gray-500 text-[11px]">Guaranteed delivery by tomorrow afternoon</p>
                  </div>
                </div>
                <span className="font-bold text-gray-900">R 95</span>
              </label>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#0b79bf] text-white text-xs flex items-center justify-center font-bold">3</span>
              Payment Method
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {[
                { id: 'card', name: 'Credit / Debit', icon: '💳' },
                { id: 'ozow', name: 'Ozow Instant EFT', icon: '⚡' },
                { id: 'ebucks', name: 'eBucks Rewards', icon: '🏷️' },
                { id: 'payflex', name: 'Payflex (4x)', icon: '✨' }
              ].map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPaymentMethod(p.id as any)}
                  className={`p-2.5 rounded-lg border text-center transition-colors ${
                    paymentMethod === p.id
                      ? 'border-[#0b79bf] bg-blue-50 text-[#0b79bf] font-bold'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="text-base mb-0.5">{p.icon}</div>
                  <div className="text-xs">{p.name}</div>
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 text-xs">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                    />
                    <CreditCard className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Expiry Date</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">CVV / CVC</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0b79bf]"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'ozow' && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-900">
                <p className="font-bold mb-1">Ozow Instant EFT Support:</p>
                <p className="text-[11px] text-emerald-700">
                  Instant bank clearance with Capitec, FNB, Standard Bank, Nedbank, Absa, Discovery Bank, and TymeBank. No proof of payment required!
                </p>
              </div>
            )}

            {paymentMethod === 'ebucks' && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-blue-900">
                <p className="font-bold mb-1">Pay with eBucks:</p>
                <p className="text-[11px] text-blue-700">
                  Available eBucks balance: <strong>eB 45,200</strong> (Worth R 4,520). FNB eBucks discount applied.
                </p>
              </div>
            )}
          </div>

          {/* Order Summary & Submit button */}
          <div className="pt-4 border-t border-gray-200 bg-gray-50 p-4 rounded-xl">
            <div className="space-y-1.5 text-xs mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Items Subtotal ({cart.length} items)</span>
                <span className="font-semibold text-gray-900">R {cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Option</span>
                <span className="font-semibold text-gray-900">
                  {currentShippingFee === 0 ? 'FREE' : `R ${currentShippingFee}`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-black text-gray-900">
                <span>Total Due</span>
                <span className="text-[#0b79bf]">R {finalTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1c9444] hover:bg-[#147233] disabled:opacity-50 text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              {isSubmitting ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Pay R {finalTotal.toLocaleString()} & Complete Order</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
