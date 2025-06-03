"use client";

import React from "react";

function GlobalErrorBoundary({ error, reset }) {
  return (
    <html>
      <body className="flex items-center justify-center h-screen flex-col bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Something went wrong!
        </h2>
        <p className="my-4 text-gray-700 dark:text-gray-300">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}

export default GlobalErrorBoundary;
