"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import navLinks from "../constants/navLinks"; // adjust this path as needed
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./MobileNavLinks";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-50">
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            E-Hatiya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DesktopNavLinks
              navLinks={navLinks}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Desktop Login Button */}
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger & Login */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-slideDown"
          >
            <MobileNavLinks
              navLinks={navLinks}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        )}
      </nav>

      {/* Animation for mobile dropdown */}
      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
