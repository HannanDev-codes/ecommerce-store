// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">Last updated: January 1, 2024</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h2>
            <p className="text-gray-600">We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support. This may include your name, email address, shipping address, and payment information.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders</li>
              <li>Send you promotional offers (you can opt out anytime)</li>
              <li>Improve our website and customer service</li>
              <li>Prevent fraudulent transactions</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information Sharing</h2>
            <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and processing orders, subject to confidentiality agreements.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h2>
            <p className="text-gray-600">We implement industry-standard security measures to protect your personal information, including SSL encryption for all transactions.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies</h2>
            <p className="text-gray-600">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can disable cookies in your browser settings.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Your Rights</h2>
            <p className="text-gray-600">You have the right to access, correct, or delete your personal information. Contact us at privacy@ecommercestore.com for any privacy-related requests.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;