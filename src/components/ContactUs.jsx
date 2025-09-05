import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed text-base">
  We'd love to hear from you! Reach out via any platform below.
</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center space-x-4 bg-gray-50 shadow-md rounded-lg py-4 px-6">
            <FaPhoneAlt className="text-xl text-blue-500" />
            <span className="text-lg md:text-xl font-medium text-gray-800">+8801785607071</span>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-gray-50 shadow-md rounded-lg py-4 px-6">
            <FaEnvelope className="text-xl text-blue-500" />
            <span className="text-lg md:text-xl font-medium text-gray-800">atikprojects@email.com</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl transition">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 text-2xl transition">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 text-2xl transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
