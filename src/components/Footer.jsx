import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-2"> Idea to Project</h2>
          <p className="text-sm text-gray-300">
            Empowering EEE students and makers to build real-world robots. Learn, build, and showcase your projects with us.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: business.ideatoproject@gmail.com</p>
          <p className="text-sm">Phone: +8801785-607071</p>
          <p className="text-sm">Location: Mohammadpur, Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            <a href="facebook.com/mdatik.607071" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-red-500 transition" />
            </a>
            <a  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Idea_to_Project. Design & Developed by{' '}
        <a
          href="https://www.dottyper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline font-semibold"
        >
          Dot Typer
        </a>
      </div>
    </footer>
  );
};

export default Footer;
