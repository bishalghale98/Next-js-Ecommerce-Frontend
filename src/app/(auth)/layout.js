"use client";

import authHero from "@/assets/images/authHero.svg";
import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center transition-colors duration-300">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-gray-800 shadow sm:rounded-lg dark:shadow-xl flex justify-center flex-1 dark:border dark:border-gray-700">
          {children}
          <div className="flex-1 bg-indigo-100 dark:bg-gradient-to-br dark:from-indigo-900/80 dark:to-purple-900/60 text-center hidden lg:flex relative overflow-hidden">
            {/* Dark mode glowing elements (only visible in dark mode) */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-0 dark:opacity-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-600 rounded-full filter blur-3xl opacity-0 dark:opacity-20 translate-x-1/2 translate-y-1/2 transition-opacity duration-300"></div>

            <div className="w-full h-[500px] flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-5xl h-full">
                <Image
                  src={authHero}
                  alt="Authentication Hero"
                  fill
                  className="object-contain mt-20 dark:drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
