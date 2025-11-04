'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          About Us
        </motion.h1>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Idea to Project is a creative tech lab dedicated to designing and developing
            custom electronic and prototype projects. We specialize in Arduino and IoT-based
            solutions, as well as handcrafted miniatures for educational and institutional
            purposes.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To bridge the gap between imagination and execution by providing smart, scalable,
            and reliable project solutions for students and professionals.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>100% Customizable Solutions</li>
            <li>Support with Documentation & Reports</li>
            <li>Affordable & Student-Friendly Pricing</li>
            <li>Delivery Across Bangladesh</li>
            <li>WhatsApp & Email Support</li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-yellow-50 rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let’s Build Something Amazing Together! <br />
            Have an idea in mind? Tell us what you need, and we’ll take care of the rest.
          </p>
          <div className="flex flex-col items-center space-y-3 text-gray-800">
            <a
              href="mailto:business.ideatoproject@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-600 transition"
            >
              <Mail className="w-5 h-5" /> business.ideatoproject@gmail.com
            </a>
            <a
              href="https://wa.me/8801785607071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-600 transition"
            >
              <Phone className="w-5 h-5" /> +8801785-607071
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580956054296"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-600 transition"
            >
              <Facebook className="w-5 h-5" /> facebook.com/mdatik.607071
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Based in Bangladesh – Projects Delivered Nationwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
