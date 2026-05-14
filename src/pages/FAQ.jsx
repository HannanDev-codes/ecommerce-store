// src/pages/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, proceed to checkout, enter your shipping information, and complete the payment. You'll receive an order confirmation via email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are securely processed."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 7-15 business days. Express shipping (2-5 business days) is available at checkout for an additional fee."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team to initiate a return."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! Shipping costs and delivery times vary by location and will be calculated at checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order from your account dashboard."
    },
    {
      question: "Are my payment details secure?",
      answer: "Absolutely! We use industry-standard SSL encryption to protect your personal and payment information."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled within 24 hours of placement. Contact our support team immediately if you need to make changes."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">Find answers to common questions about our products and services.</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className="text-xl text-orange-500">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;