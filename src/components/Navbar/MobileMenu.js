"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosArrowDropupCircle } from "react-icons/io";
import MobileSubMenu from "./MobileSubMenu";
import { SquareArrowDown } from "lucide-react";
import { allowedAdminRoles } from "@/lib/helpers/auth";

function MobileMenu({ filteredNavLinks, isActive, user, handleLogout }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <>
      <nav className="flex flex-col mt-6 ">
        <ul className="flex flex-col space-y-2">
          {filteredNavLinks.map((item) => (
            <li key={item.label}>
              {item.subMenu ? (
                <>
                  <div className="flex items-center group">
                    <Link
                      href={item.route}
                      className={`px-3 py-2 w-[70%] rounded-md text-sm font-medium transition-colors duration-200 flex-grow ${
                        isActive(item.route)
                          ? "bg-accent text-primary font-semibold"
                          : "text-foreground hover:text-primary hover:bg-accent"
                      }`}
                      aria-current={isActive(item.route) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>

                    <SquareArrowDown
                      onClick={() =>
                        setOpenSubMenu(
                          openSubMenu === item.label ? null : item.label
                        )
                      }
                      size={32}
                      strokeWidth={3}
                      absoluteStrokeWidth
                      className={`mr-5 h-5 w-5 ml-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary cursor-pointer ${
                        isActive(item.route) ? "text-primary" : ""
                      } ${
                        openSubMenu === item.label ? "rotate-180" : "rotate-0"
                      }`}
                      aria-expanded={openSubMenu === item.label}
                      aria-controls={`submenu-${item.label}`}
                    />
                  </div>

                  <div
                    id={`submenu-${item.label}`}
                    className={`pl-6 border-l border-muted mt-1 ${
                      openSubMenu === item.label ? "block" : "hidden"
                    }`}
                  >
                    <MobileSubMenu subMenu={item.subMenu} isActive={isActive} />
                  </div>
                </>
              ) : (
                <Link
                  href={item.route}
                  className={`px-3 py-2 inline-block w-[90%] ml-1 rounded-md text-sm font-medium transition-colors duration-200 ${
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

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-border">
          {user && user !== null ? (
            <>
              {allowedAdminRoles(user.roles) ? (
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm"
                  >
                    Profile
                  </Button>
                </Link>
              )}

              <Button
                onClick={() => {
                  handleLogout();
                }}
                variant="ghost"
                className="w-full justify-start text-sm text-red-600 hover:bg-muted"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full px-2.5  justify-start text-sm">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
