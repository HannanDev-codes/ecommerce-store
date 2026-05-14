// src/pages/ShippingPolicy.jsx
import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Processing Time</h2>
            <p className="text-gray-600">Orders are processed within 1-3 business days. You'll receive a confirmation email once your order ships.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Shipping Methods & Delivery Times</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Standard Shipping:</strong> 7-15 business days - $5.99 or FREE on orders over $50</li>
              <li><strong>Express Shipping:</strong> 3-5 business days - $14.99</li>
              <li><strong>Priority Shipping:</strong> 1-2 business days - $24.99</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">International Shipping</h2>
            <p className="text-gray-600">We ship worldwide! International delivery times vary by location (typically 10-20 business days). Customs fees may apply and are the responsibility of the customer.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Order Tracking</h2>
            <p className="text-gray-600">Once your order ships, you'll receive a tracking number via email. You can track your package directly on our website under "My Orders".</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Lost or Damaged Packages</h2>
            <p className="text-gray-600">If your package is lost or arrives damaged, please contact our support team within 7 days of delivery. We'll work quickly to resolve the issue.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;