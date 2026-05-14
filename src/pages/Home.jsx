import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to E-commerce Store</h1>
          <p className="text-xl mb-8">Shop Quality Products at Best Prices</p>
          <Link to="/shop" className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Featured Products</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}