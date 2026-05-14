// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../services/api';

export default function Signup() {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await signupUser(formData.username, formData.email, formData.password);
      console.log('Signup result:', result);
      
      if (result.success) {
        setSuccess('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Server error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mb-4 text-sm">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Username (min 3 characters)" 
            className="w-full p-4 border rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})} 
            required 
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 border rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Password (min 6 characters)" 
            className="w-full p-4 border rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
            required 
          />
          
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        
        <p className="text-center mt-6">
          Already have an account? <Link to="/login" className="text-blue-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}