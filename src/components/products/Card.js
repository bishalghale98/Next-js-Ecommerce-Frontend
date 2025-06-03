import Loading from "@/app/products/loading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="w-full group max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700 ease-in duration-150">
      {/* Product Image with Hover Effect */}
      <div className="relative w-full h-64 overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            className="p-6 rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={
              product.imageUrls[0] ||
              "https://res.cloudinary.com/dzrbfuphd/image/upload/v1745985118/cld-sample-2.jpg"
            }
            alt={product.name}
            fill
            style={{
              objectFit: "cover", // or "fill" if you want to stretch
              objectPosition: "center", // adjust as needed
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="empty"
            
          />
        </Link>
      </div>

      {/* Discount Badge */}
      {product?.discount && (
        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {product.discount}
        </span>
      )}
      {/* Product Details */}
      <div className="px-5 pb-5">
        {/* Category & Brand */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            {product.category}
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {product.brand}
          </span>
        </div>
        {/* Product Title */}
        <Link href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 h-14">
            {product.name}
          </h5>
        </Link>
        {/* Rating Section */}
        <div className="flex items-center mt-3 mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* Filled Stars */}
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {/* Empty Star */}
            <svg
              className="w-4 h-4 text-gray-300 dark:text-gray-600"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            4.8 (142)
          </span>
        </div>
        {/* Price Section */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Rs.{product.price}
            </span>
            <span className="text-sm line-through text-red-500 dark:text-gray-400 not-[]:">
              Rs.699
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 ml-auto">
              Save Rs.100
            </span>
          </div>
          {/* <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Free shipping &amp; returns
          </span> */}
        </div>
        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          <button className="flex-1 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg
              className="w-4 h-4 mr-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Wishlist
          </button>
          <button className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
