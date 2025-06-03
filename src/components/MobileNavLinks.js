"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavLinks = ({
  navLinks,
  activeDropdown,
  setActiveDropdown,
  setMobileMenuOpen,
  isAuth,
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {navLinks.map((navLink, index) => {
        const isActive =
          pathname === navLink.route ||
          (navLink.route !== "/" && pathname.startsWith(navLink.route));

        if (!isAuth && navLink.isAuth) return null;

        return (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center">
              <Link
                href={navLink.route}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                }`}
              >
                {navLink.label}
              </Link>

              {navLink.subMenu && (
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="pr-4 text-gray-500 dark:text-gray-300 focus:outline-none"
                  aria-label="Toggle submenu"
                >
                  {activeDropdown === index ? "▲" : "▼"}
                </button>
              )}
            </div>

            {navLink.subMenu && activeDropdown === index && (
              <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 w-auto dark:border-gray-700">
                {navLink.subMenu.map((item, subIndex) => {
                  const subIsActive = pathname === item.route;

                  return (
                    <li key={subIndex}>
                      <Link
                        href={item.route}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-2 w-auto rounded-md transition-colors duration-200 text-sm font-normal ${
                          subIsActive
                            ? "bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileNavLinks;
