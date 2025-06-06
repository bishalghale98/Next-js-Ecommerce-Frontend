import { getProductById } from "@/api/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  BadgeCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import BackButton from "@/components/BackButton";

const ProductById = async ({ params }) => {
  const { productId } = await params;
  const response = await getProductById(productId);
  const product = response;

  return (
    <section className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto my-5">
        <BackButton />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Images */}

        <div className="flex flex-col">
          <div className="relative w-full aspect-square bg-gray-100 rounded-xl">
            <span className="absolute top-3 left-3 bg-red-100 text-red-600 px-2 py-1 text-xs rounded">
              {product.discount || 0} % OFF
            </span>
            <Image
              src={product.imageUrls[0]}
              alt="Main Product"
              fill
              className="object-contain"
            />
            {product?.inStock && (
              <span className="absolute bottom-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                ✅ In Stock
              </span>
            )}
          </div>
          <div className="flex mt-4 gap-2 ">
            {product?.imageUrls.map((img, idx) => (
              <div
                key={idx}
                className="w-16 h-16 bg-gray-100 rounded-md border border-gray-300 mx-2"
              >
                <Image src={img} alt={`thumb-${idx}`} width={64} height={64} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center text-sm gap-3 text-gray-600">
            ⭐ 4.5 <span>(127 reviews)</span> • SKU: 2,51,594
          </div>

          {/* Price */}
          <div className="text-xl sm:text-2xl font-bold text-green-600">
            Rs.{product?.price}
            <span className="text-sm text-gray-500 line-through ml-3">
              Rs.{product?.oldPrice || product?.price}
            </span>
            <div className="text-sm text-green-500 mt-1">You save Rs.547</div>
          </div>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-2 text-sm text-black">
            {/* {product?.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))} */}
          </ul>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {/* {product?.description} */}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <div className="flex border rounded-full overflow-hidden border-gray-300">
              <Button size="icon" variant="ghost">
                <Minus className="w-4 h-4" />
              </Button>
              <Input
                type="number"
                className="w-12 text-center border-none text-black"
                defaultValue={1}
              />
              <Button size="icon" variant="ghost">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 px-6 flex items-center text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300"
            >
              <Heart className="w-4 h-4 text-pink-500" />
            </Button>
          </div>

          {/* Service Icons */}
          <div className="flex gap-6 text-sm mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-blue-600 w-5 h-5" /> Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-green-600 w-5 h-5" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="text-red-500 w-5 h-5" /> Easy Returns
            </div>
          </div>

          {/* Brand/Tags */}
          <div className="mt-4 text-sm text-black">
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {/* {product?.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-sm px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))} */}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Facebook
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Twitter
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Instagram
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductById;
