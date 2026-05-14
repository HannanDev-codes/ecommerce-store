// src/pages/TermsOfService.jsx
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">Last updated: January 1, 2024</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600">By accessing or using E-commerce Store, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Account Responsibility</h2>
            <p className="text-gray-600">You are responsible for maintaining the security of your account and for all activities that occur under your account. Notify us immediately of any unauthorized use.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pricing and Availability</h2>
            <p className="text-gray-600">All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. We are not liable for pricing errors or product descriptions.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Orders and Payments</h2>
            <p className="text-gray-600">We reserve the right to refuse or cancel any order for any reason, including product availability, pricing errors, or suspected fraud. Payment must be received before order processing.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Shipping and Delivery</h2>
            <p className="text-gray-600">Estimated delivery times are provided as guidelines and are not guaranteed. We are not responsible for delays caused by shipping carriers or customs.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limitation of Liability</h2>
            <p className="text-gray-600">E-commerce Store shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Changes to Terms</h2>
            <p className="text-gray-600">We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the modified terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;