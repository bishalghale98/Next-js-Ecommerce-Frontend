"use client";

import authHero from "@/assets/images/authHero.svg";
import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          {children}
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="w-full h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-5xl h-full">
                <Image
                  src={authHero}
                  alt="Authentication Hero"
                  fill
                  className="object-contain  mt-20"
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
