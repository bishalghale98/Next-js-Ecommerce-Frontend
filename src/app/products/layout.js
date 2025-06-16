import React from "react";

function ProductLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
        <div className="mx-auto">
          
          {children}
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
