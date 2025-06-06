"use client";

import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
}

export default BackButton;
