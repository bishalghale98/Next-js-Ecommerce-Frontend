"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />

      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2 mb-6">Oops! Page Not Found</p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium shadow-md hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
        <button
          onClick={() => router.back()}
          className="px-5 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
