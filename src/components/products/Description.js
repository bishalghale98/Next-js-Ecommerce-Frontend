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
    <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow border border-gray-200 overflow-hidden transition-all duration-300">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          📘 Product Description
        </h2>

        <div className="transition-all duration-300 ease-in-out text-gray-800 text-base leading-relaxed">
          <MarkdownPreview
            source={isExpanded ? description : shortDescription}
            style={{
              background: "transparent",
              color: "#1f2937",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          />
        </div>

        {isLong && (
          <button
            onClick={toggleDescription}
            className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-1 w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;
