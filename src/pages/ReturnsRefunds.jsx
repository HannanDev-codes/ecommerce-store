// src/pages/ReturnsRefunds.jsx
import React from 'react';

const ReturnsRefunds = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Returns & Refunds Policy</h1>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-600">We want you to be completely satisfied with your purchase. If you're not happy for any reason, you may return items within 30 days of delivery for a full refund.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Return Conditions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Items must be unused and in original packaging</li>
              <li>All tags and labels must be attached</li>
              <li>Proof of purchase is required</li>
              <li>Customer is responsible for return shipping costs (unless item is defective)</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How to Initiate a Return</h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Contact our support team at returns@ecommercestore.com</li>
              <li>Provide your order number and reason for return</li>
              <li>You'll receive a return authorization and instructions</li>
              <li>Ship the item back to our warehouse</li>
              <li>Once received, we'll process your refund within 5-7 business days</li>
            </ol>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Refund Timeline</h2>
            <p className="text-gray-600">Refunds are processed within 5-7 business days after we receive your return. It may take an additional 3-5 days for the refund to appear in your account, depending on your bank.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Gift cards</li>
              <li>Final sale or clearance items</li>
              <li>Personalized or custom products</li>
              <li>Perishable goods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds;