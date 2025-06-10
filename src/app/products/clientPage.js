"use client";

import React from "react";
import ProductCard from "@/components/products/Card";

function ClientPage({ products }) {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-6 min-h-screen dark:text-white ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
          🛍️ Top Trending Picks at E-Hatiya
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard product={product} key={product.id || index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientPage;
