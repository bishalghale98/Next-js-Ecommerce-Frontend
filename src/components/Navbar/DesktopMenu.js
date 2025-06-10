import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

function DesktopMenu({ filteredNavLinks, isActive, authButtons }) {
  return (
    <>
      <nav className="hidden md:block">
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
      <div className="hidden md:flex items-center space-x-4">
        {authButtons.map((button) => (
          <Button
            key={button.label}
            variant={button.variant}
            asChild={!!button.href}
            onClick={button.onClick}
          >
            {button.href ? (
              <Link href={button.href}>{button.label}</Link>
            ) : (
              <span>{button.label}</span>
            )}
          </Button>
        ))}
      </div>
    </>
  );
}

export default DesktopMenu;
