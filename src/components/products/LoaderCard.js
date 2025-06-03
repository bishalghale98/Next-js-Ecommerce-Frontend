import React from "react";

function LoaderCard() {
  return (
    <>
      {/* Single product card loading placeholder */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* Image Loader */}
        <div className="rounded-t-lg h-64 w-full bg-gray-300 dark:bg-gray-700 animate-pulse" />

        {/* Content Loader */}
        <div className="p-5 space-y-4">
          {/* Category & Brand */}
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>

          {/* Title */}
          <div className="h-6 w-full rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-6 w-full rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

          {/* Rating */}
          <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

          {/* Price Section */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-16 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="h-6 w-10 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="ml-auto h-4 w-20 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <div className="flex-1 h-10 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="flex-1 h-10 rounded bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Repeat the above block if you want multiple loaders for more cards */}
    </>
  );
}

export default LoaderCard;
