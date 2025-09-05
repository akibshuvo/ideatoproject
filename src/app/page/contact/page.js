"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, feel free to reach out.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">📍 Address</h4>
              <p className="text-gray-600">Mohammadpur, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">📞 Phone</h4>
              <p className="text-gray-600">+8801785-607071</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">✉️ Email</h4>
              <p className="text-gray-600">business.ideatoproject@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
