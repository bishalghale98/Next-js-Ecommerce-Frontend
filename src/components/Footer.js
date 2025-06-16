import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-secondary/20 bottom-0 text-secondary-foreground border-t border-border py-6 px-4 text-center lg:text-left">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <p className="font-medium text-sm lg:text-base">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">E-Hatiya</span>. All
          rights reserved.
        </p>

        <p className="text-muted-foreground text-xs lg:text-sm">
          Built with <span className="text-destructive">💚</span> using Next.js
          & Tailwind CSS
        </p>

        <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs lg:text-sm">
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
