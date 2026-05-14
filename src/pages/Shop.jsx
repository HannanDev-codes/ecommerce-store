import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/api';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Filter products
  useEffect(() => {
    let result = products;

    // Search filter
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-5 py-3 border rounded-2xl focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-5 py-3 border rounded-2xl focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && !loading && (
        <p className="text-center text-gray-500 text-xl py-10">No products found</p>
      )}
    </div>
  );
}