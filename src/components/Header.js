"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { setUserNull } from "@/redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import navLinks from "../constants/navLinks";
import DesktopMenu from "./Navbar/DesktopMenu";
import MobileMenu from "./Navbar/MobileMenu";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = useCallback(() => {
    dispatch(setUserNull());
    localStorage.removeItem("authToken");
    router.push("/login");
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

  const authButtons = useMemo(
    () =>
      user
        ? [
            { label: "Profile", href: "/profile", variant: "ghost" },
            { label: "Logout", onClick: handleLogout, variant: "ghost" },
          ]
        : [
            { label: "Login", href: "/login", variant: "ghost" },
            { label: "Register", href: "/register", variant: "default" },
          ],
    [user, handleLogout]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 flex-shrink-0"
            aria-label="Home"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                L
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopMenu
            filteredNavLinks={filteredNavLinks}
            isActive={isActive}
            authButtons={authButtons}
          />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-xl">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation options
                  </SheetDescription>
                </SheetHeader>

                <MobileMenu
                  filteredNavLinks={filteredNavLinks}
                  isActive={isActive}
                  authButtons={authButtons}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
