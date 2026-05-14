// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (product && product.id) {
      addToCart(product);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1500);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gray-100 h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.src = `https://picsum.photos/id/${(product.id % 100) + 1}/400/400`;
            }}
          />
          
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-10"
          >
            {isWishlisted ? (
              <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            )}
          </button>

          {/* Badge */}
          {product.isFeatured && (
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {product.supplier || 'Verified Supplier'}
          </div>

          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews || 128})</span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-orange-500">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-3">
            <span>MOQ: {product.moq || '1'} piece</span>
            <span>🚚 Free Shipping</span>
          </div>

          <button 
            onClick={handleAddToCart}
            className={`w-full py-2 rounded-lg font-semibold transition-colors ${
              addedToCart 
                ? 'bg-green-500 text-white' 
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {addedToCart ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;