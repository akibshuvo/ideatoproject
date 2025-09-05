'use client'

import React from 'react';
import { FaProjectDiagram, FaClock, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experienceItems = [
  {
    title: '100+ Projects Completed',
    description: 'We’ve built real-world electronics and IoT projects with Arduino, ESP32, Raspberry Pi, and more.',
    icon: <FaProjectDiagram className="text-[#FCB800] text-2xl" />,
  },
  {
    title: '5+ Years Experience',
    description: 'Helping students, startups, and industries with hands-on solutions since 2018.',
    icon: <FaClock className="text-[#FCB800] text-2xl" />,
  },
  {
    title: 'Custom Hardware Development',
    description: 'Designing custom PCBs, automation circuits, and ready-to-use embedded systems.',
    icon: <FaCogs className="text-[#FCB800] text-2xl" />,
  },
];

const Experiancs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Experience
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiancs;
