import Link from "next/link";
import React, { useRef } from "react";

function DesktopNavLinks({ navLinks, activeDropdown, setActiveDropdown }) {
  const closeTimeout = useRef(null);

  const handleMouseEnter = (index, hasSub) => {
    // user hovered back in → cancel any scheduled close
    if (closeTimeout.current) clearTimeout(closeTimeout.current);

    if (hasSub) {
      setActiveDropdown(index);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = (hasSub) => {
    if (!hasSub) return;

    // wait 3 000 ms before closing
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };
  return (
   <>
      {navLinks.map((navLink, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index, !!navLink.subMenu)}
          onMouseLeave={() => handleMouseLeave(!!navLink.subMenu)}
        >
          <Link
            href={navLink.route}
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {navLink.label}
          </Link>

          {navLink.subMenu && activeDropdown === index && (
            <div className="absolute left-0 mt-2 w-auto bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {navLink.subMenu.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={item.route}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default DesktopNavLinks;
