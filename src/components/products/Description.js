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
    <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
          <span className="text-2xl mr-3">📘</span>
          Product Description
        </h2>

        <div className="transition-all duration-300 ease-in-out text-foreground text-base leading-relaxed">
          <MarkdownPreview
            source={isExpanded ? description : shortDescription}
            style={{
              background: "transparent",
              padding: "0",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "var(--foreground)",
            }}
          />
        </div>

        {isLong && (
          <button
            onClick={toggleDescription}
            className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-accent hover:text-accent/90 bg-accent/10 hover:bg-accent/20 rounded-lg border border-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
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
    </div>
  );
}

export default ProductDescription;
