import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">E-commerce Store</Link>

          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/shop" className="hover:text-blue-600">Shop</Link>

            <Link to="/cart" className="flex items-center gap-2 hover:text-blue-600 relative">
              <ShoppingCart size={22} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Hi, {user.username}</span>
                {user.role === 'admin' && <Link to="/admin" className="text-blue-600 font-medium">Admin</Link>}
                <button onClick={handleLogout} className="text-red-600 hover:text-red-700">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 hover:text-blue-600">
                <User size={20} /> Login
              </Link>
            )}
          </div>

          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4 text-lg">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart ({cartCount})</Link>
              {user ? (
                <>
                  {user.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
                  <button onClick={handleLogout} className="text-left text-red-600">Logout</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}