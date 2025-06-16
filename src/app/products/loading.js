import LoaderCard from "@/components/products/LoaderCard";

// Loading.js
export default function Loading() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
  );
}
