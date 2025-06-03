import React from "react";

function Footer() {
  return (
    <footer className="bg-emerald-100 text-emerald-900 border-t border-emerald-200 py-6 px-4 text-center text-sm md:text-base">
      <p className="font-medium">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-emerald-800">E-Hatiya</span>. All
        rights reserved.
      </p>
      <p className="mt-2 text-emerald-700 text-xs md:text-sm">
        Built with 💚 using Next.js & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
