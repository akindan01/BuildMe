import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FaHome className="text-blue-500 text-2xl" />
          <Link to="/" className="text-2xl font-bold text-blue-500">
            BuildMe
          </Link>
        </motion.div>

       
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold relative">
          <li>
            <a href= "#home" className="hover:text-blue-600">
              Home
            </a>
          </li>

          
          <li
            className="relative hover:text-blue-600"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center">
              Company <FaChevronDown className="ml-1 text-sm" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  className="absolute bg-white shadow-md rounded-md mt-2 w-40"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <li>
                    <a
                      href="#about"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Contact Us
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>


          
          <li>
            <a
              href ="#listing"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Listing
            </a>
          </li>
          <li>
            <Link
              to="#"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow transition-all duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <motion.button
          className="md:hidden text-gray-700 text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <li>
              <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>

            {/* Mobile Company Dropdown */}
            <li className="w-full flex flex-col items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center hover:text-blue-600 font-medium"
              >
                Company <FaChevronDown className="ml-2 text-sm" />
              </button>

              {isDropdownOpen && (
                <ul className="mt-2 space-y-2 text-center w-full">
                  <li>
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href ="#"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Listings
              </a>
            </li>

            <li>
              <a
                href ="#listing"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Listing
              </a>
            </li>
            <li>
              <Link
                to="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
