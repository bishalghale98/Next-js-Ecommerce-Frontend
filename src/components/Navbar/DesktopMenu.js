import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { allowedAdminRoles } from "@/lib/helpers/auth";

function DesktopMenu({ filteredNavLinks, isActive, user, handleLogout }) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="ml-10 flex items-baseline space-x-4">
          {filteredNavLinks.map((item) => (
            <li key={item.label} className="relative group">
              {item.subMenu ? ( // Note: using subMenu (capital M) to match your data
                <>
                  <div className="flex items-center">
                    <Link
                      href={item.route}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.route)
                          ? "bg-accent text-primary font-semibold"
                          : "text-foreground hover:text-primary hover:bg-accent"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground group-hover:rotate-180 transition-transform" />
                  </div>

                  <div className="absolute left-0 top-full mt-1 w-96 rounded-md shadow-lg bg-popover border border-border invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.route}
                          className={`rounded px-4 py-2 text-sm ${
                            isActive(subItem.route)
                              ? "bg-accent text-primary"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.route}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.route)
                      ? "bg-accent text-primary font-semibold"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                  aria-current={isActive(item.route) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden lg:flex items-center space-x-2 relative transition-none">
        {user && user !== null ? (
          <>
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <FaUserCircle /> {user.name}
            </Button>

            {/* Dropdown */}
            {showUserDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-border shadow-lg rounded-md z-50">
                {allowedAdminRoles(user.roles) ? (
                  <Link href="/dashboard">
                    <div className="px-4 py-2 hover:bg-muted cursor-pointer text-sm">
                      <button onClick={() => setShowUserDropdown(false)}>
                        Dashboard
                      </button>
                    </div>
                  </Link>
                ) : (
                  <Link href="/profile">
                    <div className="px-4 py-2 hover:bg-muted cursor-pointer text-sm">
                      <button onClick={() => setShowUserDropdown(false)}>
                        Profile
                      </button>
                    </div>
                  </Link>
                )}

                <button
                  onClick={() => {
                    handleLogout();
                    setShowUserDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-muted text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="outline" className="text-sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="text-sm">Register</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default DesktopMenu;
