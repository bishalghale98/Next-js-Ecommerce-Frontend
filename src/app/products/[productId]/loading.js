"use client";

import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button } from "@/components/ui/button";
import {
  Minus,
  Plus,
  ShoppingCart,
  Heart,

} from "lucide-react";

function ProductByIdLoader() {
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-gray-800 dark:text-white  text-black p-4 sm:p-6 lg:p-10">
        <div className="max-w-6xl mx-auto my-5">
          <Skeleton width={100} height={30} />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Images */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-gray-100 rounded-xl">
              <Skeleton className="w-full h-full absolute" />
            </div>
            <div className="flex gap-2 mt-4">
              {[...Array(4)].map((_, idx) => (
                <Skeleton
                  key={idx}
                  width={64}
                  height={64}
                  className="rounded-md"
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="flex flex-col gap-4">
            <Skeleton height={35} width="60%" />
            <Skeleton height={20} width="30%" />

            <div className="text-xl sm:text-2xl font-bold text-green-600">
              <Skeleton width={120} />
              <Skeleton width={100} className="mt-1" />
              <Skeleton width={80} height={16} className="mt-1" />
            </div>

            <ul className="grid grid-cols-2 gap-2 text-sm text-black">
              {[...Array(4)].map((_, i) => (
                <li key={i}>
                  <Skeleton height={18} />
                </li>
              ))}
            </ul>

            <Skeleton count={3} height={14} />

            <div className="flex items-center gap-4 mt-3 flex-wrap">
              <div className="flex border rounded-full overflow-hidden border-gray-300">
                <Button size="icon" variant="ghost" disabled>
                  <Minus className="w-4 h-4" />
                </Button>
                <Skeleton width={48} height={38} />
                <Button size="icon" variant="ghost" disabled>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button
                disabled
                className="bg-blue-600 text-white px-6 flex items-center"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>

              <Button
                disabled
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300"
              >
                <Heart className="w-4 h-4 text-pink-500" />
              </Button>
            </div>

            <div className="flex gap-6 text-sm mt-4 text-gray-700">
              <Skeleton width={100} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>

            <div className="mt-4 text-sm text-black">
              <Skeleton width={150} />
              <Skeleton width={180} className="mt-2" />
              <div className="flex gap-2 mt-2 flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <Skeleton
                    key={i}
                    width={50}
                    height={24}
                    className="rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} height={40} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductByIdLoader;
