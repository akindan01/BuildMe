import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaHome className="text-blue-600 text-3xl" />
            <h2 className="text-2xl font-extrabold text-blue-600 tracking-tight">
              BuildMe
            </h2>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base text-center md:text-left">
            BuildMe connects people to the best properties with ease. 
            We simplify your search and make real estate accessible, transparent, 
            and seamless for everyone.
          </p>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-blue-600 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Listings</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-blue-600 uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-600 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-600 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-100 border-t border-gray-200 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">BuildMe</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
