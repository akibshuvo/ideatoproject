import React from 'react';
import BannerImage from '../../assets/pic1.jpg';

const Banner = () => {
  return (
    <section 
      className="relative text-white py-20"
      style={{ backgroundImage: `url(${BannerImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay with opacity and brand color */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>

      {/* Content container with relative z-index to be above overlay */}
      <div className="relative container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Build Robots. Shape the Future.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Join a community of passionate EEE students and makers. Learn robotics, build real-world projects, and become the innovator of tomorrow.
        </p>
        
       <>
  {/* Mobile button: visible on small screens, hidden on md and up */}
  <a
    href="/start-building"
    className="inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition text-sm md:hidden"
  >
    Start Building Now
  </a>

  {/* Desktop (md+) button: hidden on small screens, visible on md and up */}
  <a
    href="/start-building"
    className="hidden md:inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
  >
    Start Building Now
  </a>
</>
      </div>
    </section>
  );
};

export default Banner;
