"use client";

import Link from "next/link";

const MobileNavLinks = ({
  navLinks,
  activeDropdown,
  setActiveDropdown,
  setMobileMenuOpen,
}) => {
  return (
    <>
      {navLinks.map((navLink, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <Link
              href={navLink.route}
              className="block text-sm font-medium text-gray-800 dark:text-gray-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navLink.label}
            </Link>

            {navLink.subMenu && (
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                className="text-gray-500 dark:text-gray-300 text-sm"
              >
                ▼
              </button>
            )}
          </div>

          {navLink.subMenu && activeDropdown === index && (
            <ul className="pl-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {navLink.subMenu.map((item, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={item.route}
                    className="block py-1 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default MobileNavLinks;
