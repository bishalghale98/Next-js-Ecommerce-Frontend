"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

function DesktopNavLinks({
  navLinks,
  activeDropdown,
  setActiveDropdown,
  isAuth,
}) {
  const closeTimeout = useRef(null);
  const pathname = usePathname();

  const handleMouseEnter = (index, hasSub) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (hasSub) {
      setActiveDropdown(index);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = (hasSub) => {
    if (!hasSub) return;

    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // Delay before closing dropdown (0.5s)
  };

  return (
    <>
      {navLinks.map((navLink, index) => {
        const isActive =
          pathname === navLink.route ||
          (navLink.route !== "/" && pathname.startsWith(navLink.route));

        // Show only if user is authenticated or the link doesn't require auth
        if (!isAuth && navLink.isAuth) return null;

        return (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index, !!navLink.subMenu)}
            onMouseLeave={() => handleMouseLeave(!!navLink.subMenu)}
          >
            <Link
              href={navLink.route}
              className={`inline-block px-2 py-2 rounded-md text-md font-semibold 
            ${
              isActive
                ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            >
              {navLink.label}
            </Link>

            {/* Dropdown */}
            {navLink.subMenu && (
              <div
                className={`absolute left-0 mt-2 w-auto bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 transition-all duration-300 ease-in-out transform
              ${
                activeDropdown === index
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
              }`}
              >
                <ul className="py-2">
                  {navLink.subMenu.map((item, subIndex) => {
                    const subIsActive = pathname === item.route;

                    return (
                      <li key={subIndex}>
                        <Link
                          href={item.route}
                          className={`block px-5 my-1 py-2 text-sm rounded-md transition-colors duration-200
                        ${
                          subIsActive
                            ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default DesktopNavLinks;
