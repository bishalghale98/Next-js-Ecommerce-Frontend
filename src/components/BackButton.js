"use client";

import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();

  return (
    <>
      <button
        className="inline-flex items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md dark:shadow-slate-900/20 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800 active:scale-95"
        onClick={() => router.back()}
      >
        Back
      </button>
    </>
  );
}

export default BackButton;
