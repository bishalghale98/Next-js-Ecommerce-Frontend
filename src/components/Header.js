"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { setUserNull } from "@/redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import navLinks from "../constants/navLinks";
import DesktopMenu from "./Navbar/DesktopMenu";
import MobileMenu from "./Navbar/MobileMenu";
import Cookies from "js-cookie";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = useCallback(() => {
    dispatch(setUserNull());
    Cookies.remove("authToken");
    router.replace("/login");
  }, [dispatch, router]);

  const isActive = useCallback(
    (route) =>
      pathname === route || (route !== "/" && pathname.startsWith(route)),
    [pathname]
  );

  const filteredNavLinks = useMemo(
    () => navLinks.filter((item) => !item.isAuth || user),
    [user]
  );

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0 group"
              aria-label="Home"
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-lg">
                  E
                </span>
              </div>
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                E-Hatiya
              </span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopMenu
              filteredNavLinks={filteredNavLinks}
              isActive={isActive}
              user={user}
              handleLogout={handleLogout}
            />

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="hover:bg-muted"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="max-w-[90vw] w-[280px]">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-xl text-foreground">
                      Menu
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation options
                    </SheetDescription>
                  </SheetHeader>
                  <MobileMenu
                    filteredNavLinks={filteredNavLinks}
                    isActive={isActive}
                    user={user}
                    handleLogout={handleLogout}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
