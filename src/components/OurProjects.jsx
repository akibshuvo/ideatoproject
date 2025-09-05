'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Pic1 from '../../assets/train.jpg';
import Pic2 from '../../assets/smarthome.jpg';
import Pic3 from '../../assets/clock.jpg';
import Pic4 from '../../assets/diyhouse.jpg';
import Pic5 from '../../assets/handrobo.jpg';
import Pic6 from '../../assets/pcb.jpg';

// Example project data — replace with real images
const projects = [
  {
    slug: 'smart-railway-crossing-safety-system',
    title: 'Smart Railway Crossing Safety System',
    description: 'At first glance, this innovation from IdeaToProject might look like a regular',
    image: Pic1,
  },
  {
    slug: 'iot-solar-grid-monitoring',
    title: 'IoT Based Solar and Grid Energy Monitoring System',
    description: 'IdeaToProject has engineered a highly innovative IoT-based Solar and Grid',
    image: Pic2,
  },
  {
    slug: 'kids-two-button-phone',
    title: 'Two-Button Mobile Phone for Kids (DIY Project)',
    description: 'IdeaToProject developed a unique DIY Two-Button Mobile Phone designed',
    image: Pic3,
  },
  {
    slug: 'smart-home-system',
    title: 'Smart Home with Smart Control and Smart Monitoring System',
    description: 'IdeaToProject introduces an innovative Smart Home System featuring Smart',
    image: Pic4,
  },
  {
    slug: 'gesture-robotic-arm',
    title: 'Hand Gesture Controlled 5 DOF Robotic Arm',
    description: 'IdeaToProject has developed an advanced 5 DOF Robotic Arm fully controlled',
    image: Pic5,
  },
  {
    slug: 'pcb-design-assembly',
    title: 'PCB Design and Assembly by IdeaToProject',
    description: 'At IdeaToProject, we specialize in professional PCB design and assembly',
    image: Pic6,
  },
];

const OurProjects = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
          Check out some of the innovative projects we've built, combining robotics, IoT, and electronics.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  priority={idx === 0}
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
