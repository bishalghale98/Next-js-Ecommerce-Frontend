"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosArrowDropupCircle } from "react-icons/io";
import MobileSubMenu from "./MobileSubMenu";

function MobileMenu({ filteredNavLinks, isActive, authButtons }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex flex-col mt-6">
        <ul className="flex flex-col space-y-2">
          {filteredNavLinks.map((item) => (
            <li key={item.label}>
              {item.subMenu ? (
                <>
                  <div className="flex items-center  group">
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

                    <IoIosArrowDropupCircle
                      onClick={() => setShowMenu(!showMenu)}
                      size={24}
                      className={`mr-5 h-5 w-5 size-2 text-muted-foreground transition-transform duration-200 group-hover:text-primary ${
                        isActive(item.route) ? "text-primary" : ""
                      }`}
                    />
                  </div>

                  <div className={`${showMenu ? "block" : "hidden"}`}>
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

        {/* Mobile Auth Buttons - also enlarged */}
        <div className="flex flex-col space-y-4 pt-6 mt-6 border-t">
          {authButtons.map((button) => (
            <Button
              key={button.label}
              variant={button.variant}
              asChild={!!button.href}
              onClick={button.onClick}
              className="justify-start px-4 py-3 text-base h-auto"
            >
              {button.href ? (
                <Link href={button.href}>{button.label}</Link>
              ) : (
                <span>{button.label}</span>
              )}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
