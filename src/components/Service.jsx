import React from 'react';
import Image from 'next/image';
import SerImage from '../../assets/pic1.jpg';
import Pic2 from '../../assets/pic2.jpg';
import Pic3 from '../../assets/mini.jpg';
import Pic4 from '../../assets/col.webp';
import Pic5 from '../../assets/pic5.jpg';
import Pic6 from '../../assets/in.png';

const services = [
  { name: 'Arduino Projects', image: SerImage },
  { name: 'Blynk IoT Troubleshooting & Development ', image: Pic2 },
  { name: 'Miniature Models', image: Pic3 },
  { name: 'College & University Projects IoT Solutions', image: Pic4 },
  { name: 'Institutional Prototypes', image: Pic6 },
  { name: 'PCB Design', image: Pic5 },
];

const Service = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Our Robotics & Electronics Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <Image
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
