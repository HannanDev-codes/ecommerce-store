// src/services/api.js
import axios from 'axios';

// TEMPORARY: Hardcode your Railway URL
const API_BASE_URL = 'https://ecommerce-store-production-6d3c.up.railway.app/api';

console.log('API_BASE_URL:', API_BASE_URL);


import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost/backend/api';

console.log('API_BASE_URL:', API_BASE_URL); 

const getProfessionalImage = (productId, category, name) => {
  const imageMap = {
    1: 'https://picsum.photos/id/20/400/400',
    2: 'https://picsum.photos/id/96/400/400',
    3: 'https://picsum.photos/id/26/400/400',
    4: 'https://picsum.photos/id/22/400/400',
    5: 'https://picsum.photos/id/24/400/400',
  };
  
  if (imageMap[productId]) return imageMap[productId];
  
  const categoryImages = {
    'Electronics': 'https://picsum.photos/id/0/400/400',
    'Clothing': 'https://picsum.photos/id/26/400/400',
    'Home': 'https://picsum.photos/id/24/400/400',
    'General': 'https://picsum.photos/id/1/400/400'
  };
  
  return categoryImages[category] || `https://picsum.photos/id/${(productId % 100) + 1}/400/400`;
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products.php`);
    console.log('Products response:', response.data);
    
    if (Array.isArray(response.data)) {
      return response.data.map(product => ({
        ...product,
        id: Number(product.id),
        price: Number(product.price),
        stock: Number(product.stock) || 0,
        image: product.image && product.image !== '' && !product.image.includes('via.placeholder')
          ? product.image
          : getProfessionalImage(product.id, product.category, product.name)
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product.php?id=${id}`);
    console.log('Product response:', response.data);
    
    if (response.data && response.data.id) {
      return {
        id: Number(response.data.id),
        name: response.data.name,
        price: Number(response.data.price),
        image: response.data.image && response.data.image !== '' && !response.data.image.includes('via.placeholder')
          ? response.data.image
          : getProfessionalImage(response.data.id, response.data.category, response.data.name),
        description: response.data.description,
        category: response.data.category,
        stock: Number(response.data.stock) || 0,
        supplier: response.data.supplier || 'E-commerce Store',
        created_at: response.data.created_at
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products.php`, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: error.message };
  }
};

// ============ AUTHENTICATION ============
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth.php`, {
      action: 'login',
      email,
      password
    });
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: 'Server error' };
  }
};

export const signupUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth.php`, {
      action: 'signup',
      username,
      email,
      password
    });
    console.log('Signup response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: 'Server error: ' + error.message };
  }
};