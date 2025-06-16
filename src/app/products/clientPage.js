"use client";

import React from "react";
import ProductCard from "@/components/products/Card";

function ClientPage({ products }) {
  return (
    <section className="bg-background p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">
          🛍️ Top Trending Picks at E-Hatiya
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard product={product} key={product.id || index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientPage;
