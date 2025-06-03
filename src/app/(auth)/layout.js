"use client";

import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-300 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-8 transition-all">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Log in or create an account to continue
          </p>
        </div>

        {/* Form content (children) */}
        <div className="space-y-6">{children}</div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} E-Hatiya. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
