"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white   w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <span>Medi</span><span className="text-black">Care</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8 text-xs">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600">
              All Doctors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600">
              Contacts
            </Link>
          </div>

          {/* Create Account Button */}
          <Link
            href="/signup"
            className="hidden text-xs md:block px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition"
          >
            Create Account
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={15} /> : <FiMenu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed text-xs inset-0 bg-blue-500 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white  p-6 flex flex-col space-y-6 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button className="self-end text-gray-700" onClick={() => setIsOpen(false)}>
            <FiX size={15} />
          </button>

          <Link href="/" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/doctors" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
            All Doctors
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contacts" className="text-gray-700 hover:text-blue-600 text-2xl" onClick={() => setIsOpen(false)}>
            Contacts
          </Link>
          <Link
            href="/signup"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
