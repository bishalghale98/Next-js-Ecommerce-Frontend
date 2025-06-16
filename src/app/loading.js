"use client";

import React from "react";

function MainLoading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div
        className="mx-auto size-50  aspect-square rounded-full bg-[#514b82]"
        style={{
          "--b": "8px",
          WebkitMask: `repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg), radial-gradient(farthest-side,#0000 calc(100% - 8px - 1px),#000 calc(100% - 8px))`,
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
          animation: "l5 1s infinite linear",
        }}
      ></div>
      </div>

      <style jsx>{`
        @keyframes l5 {
          to {
            transform: rotate(0.5turn);
          }
        }
      `}</style>
    </>
  );
}

export default MainLoading;
