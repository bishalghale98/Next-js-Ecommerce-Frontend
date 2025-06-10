import Link from "next/link";
import React from "react";

function MobileSubMenu({ subMenu, isActive }) {
  if (!subMenu || subMenu.length === 0) {
    return null; // Return null if there's no submenu to display
  }
  return (
    <>
      <ul>
        {subMenu.map((item) => (
          <li key={item.label}>
            <Link
              href={item.route}
              className={`block ml-5 mr-2 rounded-md px-4 py-2 text-sm ${
                isActive(item.route)
                  ? "bg-accent text-primary font-semibold"
                  : "text-foreground hover:text-primary hover:bg-accent"
              }`}
              aria-current={isActive(item.route) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MobileSubMenu;
