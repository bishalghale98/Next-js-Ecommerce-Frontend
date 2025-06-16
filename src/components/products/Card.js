import Image from "next/image";
import Link from "next/link";
import React from "react";
import placeholderproduct from "@/assets/images/placeholder-product.jpg";

function ProductCard({ product }) {
  return (
    <div className="w-full group max-w-sm bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow ease-in duration-150">
      {/* Product Image with Hover Effect */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            className="p-6 rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={product.imageUrls[0] || placeholderproduct}
            alt={product.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>

      {/* Discount Badge */}
      {product?.discount && (
        <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full">
          {product.discount}
        </span>
      )}

      {/* Product Details */}
      <div className="px-5 pb-5">
        {/* Category & Brand */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-accent">
            {product.category}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {product.brand}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.id}`}>
          <h5 className="text-lg font-semibold tracking-tight text-foreground line-clamp-2 h-14">
            {product.name}
          </h5>
        </Link>

        {/* Rating Section */}
        <div className="flex items-center mt-3 mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* Filled Stars */}
            {[...Array(4)].map((_, i) => (
              <svg
                key={`filled-${i}`}
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            {/* Empty Star */}
            <svg
              className="w-4 h-4 text-muted"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
            4.8 (142)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              Rs.{product.price}
            </span>
            <span className="text-sm line-through text-destructive">
              Rs.699
            </span>
            <span className="text-xs font-medium text-accent ml-auto">
              Save Rs.100
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          <button className="flex-1 text-foreground bg-card hover:bg-muted border border-input focus:ring-2 focus:ring-ring font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
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
          <button className="flex-1 text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-ring font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
