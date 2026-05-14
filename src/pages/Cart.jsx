// src/pages/Cart.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 599;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M9 21a2 2 0 11-4 0m4 0a2 2 0 104 0m-4 0h4" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
            <Link to="/shop" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-6 flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/id/${(item.id % 100) + 1}/100/100`;
                          }}
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-xs text-gray-500">{item.supplier || 'WhaleMart'}</p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:text-red-600 mt-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-2 text-center">
                        <span className="font-semibold text-gray-800">₹{item.price}</span>
                      </div>

                      <div className="md:col-span-2">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-2 text-right">
                        <span className="font-bold text-orange-500">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                <button onClick={clearCart} className="text-red-500 hover:text-red-600 text-sm">
                  Clear Cart
                </button>
                <Link to="/shop" className="text-orange-500 hover:text-orange-600 text-sm">
                  + Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-orange-500">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mb-3"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;