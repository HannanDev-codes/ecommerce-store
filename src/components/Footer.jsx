// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">E-commerce Store</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted marketplace for quality products from global suppliers. 
              Connect directly with manufacturers and get the best deals.
            </p>
            <div className="flex gap-3">
              {['F', 'T', 'I', 'Y'].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-orange-500 transition">Shop</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping-policy" className="hover:text-orange-500 transition">Shipping Policy</Link></li>
              <li><Link to="/returns-refunds" className="hover:text-orange-500 transition">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-orange-500 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>123 Commerce St, New York, NY 10001</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>support@ecommercestore.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 E-commerce Store. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Payment Methods:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Visa</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Mastercard</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;