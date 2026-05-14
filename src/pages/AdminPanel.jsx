import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', category: '', image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost/backend/api/products.php');
    const data = await res.json();
    setProducts(data);
  };

  const handleAddProduct = async () => {
    await fetch('http://localhost/backend/api/products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
    fetchProducts();
    alert('Product Added!');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      {/* Add New Product */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="Name" onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} className="p-3 border rounded-xl" />
          <input placeholder="Price" type="number" onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="p-3 border rounded-xl" />
          <input placeholder="Image URL" onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} className="p-3 border rounded-xl" />
          <input placeholder="Category" onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} className="p-3 border rounded-xl" />
        </div>
        <textarea placeholder="Description" onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} className="w-full mt-4 p-3 border rounded-xl" />
        <button onClick={handleAddProduct} className="mt-4 bg-green-600 text-white px-8 py-3 rounded-2xl">Add Product</button>
      </div>

      {/* Products List */}
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-2xl shadow">
            <img src={p.image} className="w-full h-40 object-cover rounded-xl" />
            <h3 className="font-bold mt-3">{p.name}</h3>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}