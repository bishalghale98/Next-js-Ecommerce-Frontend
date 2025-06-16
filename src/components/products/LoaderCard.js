import React from "react";

function LoaderCard() {
  return (
    <div className="w-full max-w-sm bg-card border border-border rounded-lg shadow-sm">
      {/* Image Loader */}
      <div className="rounded-t-lg h-64 w-full bg-muted animate-pulse" />

      {/* Content Loader */}
      <div className="p-5 space-y-4">
        {/* Category & Brand */}
        <div className="flex justify-between">
          <div className="h-4 w-20 rounded bg-muted animate-pulse"></div>
          <div className="h-4 w-16 rounded bg-muted animate-pulse"></div>
        </div>

        {/* Title */}
        <div className="h-6 w-full rounded bg-muted animate-pulse"></div>
        <div className="h-6 w-3/4 rounded bg-muted animate-pulse"></div>

        {/* Rating */}
        <div className="h-4 w-24 rounded bg-muted animate-pulse"></div>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-16 rounded bg-muted animate-pulse"></div>
          <div className="h-6 w-10 rounded bg-muted animate-pulse"></div>
          <div className="ml-auto h-4 w-20 rounded bg-muted animate-pulse"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 h-10 rounded bg-muted animate-pulse"></div>
          <div className="flex-1 h-10 rounded bg-primary/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default LoaderCard;
