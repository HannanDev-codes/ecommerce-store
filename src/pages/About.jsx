// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Welcome to E-commerce Store, your number one source for all things. We're dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2024, E-commerce Store has come a long way from its beginnings. When we first started out, our passion for providing the best products drove us to start this business.
            </p>
            <p className="text-gray-600 mb-4">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality products at affordable prices while delivering exceptional customer service and creating a seamless shopping experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;