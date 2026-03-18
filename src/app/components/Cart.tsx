import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart, Package, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const branches = [
  { id: 1, name: 'Main Branch - BKK1', address: 'Street 302, Sangkat Boeng Keng Kang 1' },
  { id: 2, name: 'Riverside Branch', address: 'Sisowath Quay, Riverside Area' },
  { id: 3, name: 'Toul Kork Branch', address: 'Street 289, Boeung Kak Ti Muoy' }
];

export function Cart({ isOpen, onClose }: CartProps) {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    branch: branches[0].id.toString(),
    specialInstructions: ''
  });

  const deliveryFee = orderType === 'delivery' ? 2.00 : 0;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be handled with backend in VS Code
    console.log('Order submitted:', {
      orderType,
      items: cartItems,
      formData,
      total
    });
    alert('Order placed successfully! (Backend integration pending)');
    clearCart();
    setShowCheckout(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-green-700 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {!showCheckout ? (
            <>
              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingCart className="w-24 h-24 mb-4" />
                  <p className="text-xl font-semibold">Your cart is empty</p>
                  <p className="text-sm mt-2">Add some delicious items!</p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-green-600 font-semibold mb-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-white border border-gray-300 p-1 rounded hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-white border border-gray-300 p-1 rounded hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Checkout Form */
            <div className="p-6">
              <button
                onClick={() => setShowCheckout(false)}
                className="text-green-600 hover:text-green-700 font-semibold mb-6 flex items-center gap-2"
              >
                ← Back to Cart
              </button>

              <form onSubmit={handleCheckout} className="space-y-4">
                {/* Order Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Order Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        orderType === 'delivery'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      <Truck className={`w-6 h-6 ${orderType === 'delivery' ? 'text-green-600' : 'text-gray-400'}`} />
                      <span className="font-semibold text-sm">Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        orderType === 'pickup'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      <Package className={`w-6 h-6 ${orderType === 'pickup' ? 'text-green-600' : 'text-gray-400'}`} />
                      <span className="font-semibold text-sm">Pickup</span>
                    </button>
                  </div>
                </div>

                {/* Customer Details */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                </div>

                {/* Delivery Address or Branch Selection */}
                {orderType === 'delivery' ? (
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="Street, City, District"
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pickup Branch *
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                    >
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      {branches.find(b => b.id.toString() === formData.branch)?.address}
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="specialInstructions" className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                    placeholder="Any allergies or special requests?"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold mt-2">
                      <span>Total</span>
                      <span className="text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Place Order - ${total.toFixed(2)}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Payment will be processed upon confirmation
                </p>
              </form>
            </div>
          )}
        </div>

        {/* Footer - Only show when not in checkout */}
        {!showCheckout && cartItems.length > 0 && (
          <div className="border-t p-6 bg-white space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-bold text-green-600">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">Delivery fee calculated at checkout</p>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
