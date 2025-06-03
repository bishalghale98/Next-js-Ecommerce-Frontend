import LoaderCard from "@/components/products/LoaderCard";

// Loading.js
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12 transition-all duration-700 ease-in-out">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Our Products
        </h1>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Product Grid */}
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard /> 

          </div>
        </div>
      </div>
    </div>
  );
}
