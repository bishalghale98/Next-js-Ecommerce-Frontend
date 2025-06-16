import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from 'react-icons/cg';

function AdminSidebar({ adminDashboardLinks, openMenu }) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        openMenu ? "block" : "hidden"
      } lg:flex flex-col w-64 bg-gray-800 dark:bg-gray-900 transform transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center h-16 bg-gray-900 dark:bg-gray-800">
        <span className="text-white font-bold uppercase">E-Hatiya</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800 dark:bg-gray-900">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              {adminDashboardLinks.map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`flex items-center px-4 py-2 mt-0 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 first:mt-0 ${
                    pathname.startsWith(link.route)
                      ? "bg-gray-700 font-semibold"
                      : ""
                  }`}
                >
                  {link.icon} {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 mt-4">
              <Link
                href="profile"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700"
              >
                <CgProfile className="h-6 w-6 mr-2 text-gray-100" />
                Profile
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminSidebar;
