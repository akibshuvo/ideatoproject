import React from 'react';
import BannerImage from '../../assets/pic1.jpg';
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';

const Banner = () => {
  return (
    <section
      className="relative text-white py-20"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Transform your Ideas into Real-World!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          স্কুল কলেজ বা ইউনিভার্সিটির যেকোনো প্রজেক্টের জন্য যোগাযোগ করুন আমাদের সাথে।
        </p>

        <>
          {/* Mobile button */}
          <Link href="https://wa.me/8801775533232">
            <div className=" flex items-center gap-x-3 justify-center bg-white text-black font-bold px-4 py-4 rounded-lg hover:bg-amber-50 transition text-3xl md:hidden">
              <IoLogoWhatsapp className="text-[#25d366] animate-call-dance" />
              Contact US
            </div>
          </Link>

          {/* Desktop button */}
          <Link href="https://wa.me/8801775533232">
            <div className="md:flex items-center gap-x-5 bg-amber-50 text-black font-bold px-6 py-3 rounded-lg justify-center shadow-4xl hover:bg-amber-50 hidden">
              <IoLogoWhatsapp className="text-[#25d366] animate-call-dance" />
              Contact US
            </div>
          </Link>
        </>
      </div>
    </section>
  );
};

export default Banner;
