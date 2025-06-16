"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ChevronLeft } from "lucide-react"; // Optional icon import

function BackButton() {
  const router = useRouter();

  return (
    <button
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                 bg-primary text-primary-foreground hover:bg-primary/90 
                 focus:ring-primary focus:ring-offset-background"
      onClick={() => router.back()}
    >
      <ChevronLeft className="w-4 h-4" /> {/* Optional icon */}
      Back
    </button>
  );
}

export default BackButton;
