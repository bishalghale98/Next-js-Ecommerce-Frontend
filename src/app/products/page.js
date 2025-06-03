import ProductCard from "@/components/products/Card";
import axios from "axios";
import React from "react";

const Product = async () => {
  const response = await axios.get(
    "https://node-20250302.vercel.app/api/products"
  );

  const products = response.data;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Our Products
        </h1>

        {/* Product Grid */}
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard product={product} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
