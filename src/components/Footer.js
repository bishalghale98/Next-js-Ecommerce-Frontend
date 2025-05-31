import React from "react";

function Footer() {
  return (
    <footer className="bg-emerald-100 text-emerald-900 border-t border-emerald-200 py-6 text-center text-sm md:text-base">
      <p>
        &copy; {new Date().getFullYear()} <span className="font-semibold">E-Hatiya</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
