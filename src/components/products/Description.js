"use client";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProductDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  const wordLimit = 60;
  const isLong = description?.split(" ").length > wordLimit;
  const shortDescription = isLong
    ? description?.split(" ").slice(0, wordLimit).join(" ") + "..."
    : description || "No description available.";

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-500 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-slate-900/20">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-2xl mr-3">📘</span>
          Product Description
        </h2>

        <div className="transition-all duration-300 ease-in-out text-gray-800 dark:text-slate-200 text-base leading-relaxed">
          <MarkdownPreview
            source={isExpanded ? description : shortDescription}
            style={{
              background: "transparent",
              padding: "0",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#1a1a1a", // Default light mode color (dark)
              "@media (prefersColorScheme: dark)": {
                color: "#ffffff", // Dark mode color (white)
              },
            }}
          />
        </div>

        {isLong && (
          <button
            onClick={toggleDescription}
            className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
{/* If you want to apply custom CSS, use a CSS file or a CSS-in-JS solution */}
    </div>
  );
}

export default ProductDescription;


