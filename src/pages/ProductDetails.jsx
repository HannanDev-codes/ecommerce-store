// src/pages/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && product.id) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  
  if (!product) return <p className="text-center py-20">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-blue-600 mb-8 hover:underline">
        <ArrowLeft size={20} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-3xl p-8">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
            onError={(e) => {
              e.target.src = `https://picsum.photos/id/${(product.id % 100) + 1}/600/600`;
            }}
          />
        </div>

        <div>
          <p className="text-blue-600 font-medium">{product.category}</p>
          <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
          <p className="text-3xl font-bold mt-4 text-orange-600">₹{product.price}</p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>✅ Free Shipping on orders over ₹5000</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>🔄 30-Day Return Policy</span>
              <span>🔒 Secure Checkout</span>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className={`mt-8 w-full py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
              addedToCart 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {addedToCart ? '✓ Added to Cart!' : `Add to Cart (₹${product.price * quantity})`}
          </button>
        </div>
      </div>
    </div>
  );
}