'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Rocket, ClipboardCheck, Zap, Package } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-yellow-400" />,
    title: '1. Project Request',
    description: 'You share your project idea or requirements through WhatsApp, email, or our contact form.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-yellow-400" />,
    title: '2. Discussion & Finalization',
    description: 'We discuss your project in detail and finalize the concept, features, and delivery time.',
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: '3. Quotation & Confirmation',
    description: 'You receive a price estimate. Once confirmed, we begin the development process.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-yellow-400" />,
    title: '4. Development & Updates',
    description: 'Your project is designed and developed with regular updates and sample previews (if needed).',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-yellow-400" />,
    title: '5. Testing & Review',
    description: 'We test the final project thoroughly to ensure quality, functionality, and presentation.',
  },
  {
    icon: <Package className="h-8 w-8 text-yellow-400" />,
    title: '6. Delivery & Support',
    description: 'The completed project is delivered to your address or digitally. Post-delivery support is available.',
  },
];

const ProceessToWork = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Working Process
        </h2>
        <p className="text-gray-400 text-lg">
          We make every project count — from concept to completion.
        </p>
      </div>

      {/* First row: 4 steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {steps.slice(0, 4).map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Second row: 2 steps centered */}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {steps.slice(4).map((step, index) => (
          <motion.div
            key={index + 4}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProceessToWork;
