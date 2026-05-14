import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch('http://localhost/backend/api/auth.php', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ action: 'login', email, password })

      });

      const data = await res.json();

      if (data.success) {

        localStorage.setItem('user', JSON.stringify(data.user));

        alert('Login Successful!');

        navigate(data.user.role === 'admin' ? '/admin' : '/');

      } else {

        alert(data.message || 'Login Failed');

      }

    } catch (err) {

      alert('Server Error');

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

        <form onSubmit={handleLogin}>

          <input type="email" placeholder="Email" className="w-full p-4 border rounded-2xl mb-4" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <input type="password" placeholder="Password" className="w-full p-4 border rounded-2xl mb-6" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold">

            {loading ? 'Logging in...' : 'Login'}

          </button>

        </form>

        <p className="text-center mt-6">

          Don't have an account? <Link to="/signup" className="text-blue-600 font-medium">Sign Up</Link>

        </p>

        <p className="text-center text-sm text-gray-500 mt-4">Admin: admin@store.com / pass</p>

      </div>

    </div>

  );

}