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
import MarkdownPreview from "@uiw/react-markdown-preview";
import ProductDescription from "@/components/products/Description";

async function getProduct(params) {
  const productId = params;
  const response = await getProductById(productId);
  return response;
}

export const generateMetadata = async ({ params }) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  if (!product) {
    return {
      title: "Product Not Found | E-Hatiya",
      description: "The product you are looking for is not available.",
    };
  }

  return {
    title: `${product.name} | Buy Now at Best Price - E-Hatiya`,
    description:
      product?.description ||
      "Get this amazing product now at the best price in Nepal.",
    keywords: [
      product.name,
      product.category,
      product.brand,
      "Buy online Nepal",
      "E-Hatiya product",
    ],
    openGraph: {
      title: `${product.name} | E-Hatiya`,
      description: "Get this amazing product now at the best price in Nepal.",
      url: `https://e-hatiya.com/products/${productId}`,
      siteName: "E-Hatiya",
      images: [
        {
          url:
            product?.imageUrls[0] || "https://e-hatiya.com/images/default.jpg",
          width: 1200,
          height: 630,
          alt: product?.name,
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: product.name,
    //   description: product.description,
    //   images: [
    //     product.imageUrls?.[0] || "https://e-hatiya.com/images/default.jpg",
    //   ],
    // },
  };
};

const ProductById = async ({ params }) => {
  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <section className="min-h-screen bg-background rounded-md text-foreground p-4 sm:p-6 lg:p-10">
      <div className="max-w-6xl mx-auto my-5">
        <BackButton />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-square bg-muted rounded-xl">
            <span className="absolute top-3 left-3 bg-destructive/10 text-destructive px-2 py-1 text-xs rounded">
              {product?.discount || 0} % OFF
            </span>
            <Image
              src={product.imageUrls[0]}
              alt="Main Product"
              fill
              className="object-contain"
              sizes="100%"
              priority
            />
            {product?.inStock && (
              <span className="absolute bottom-3 left-3 bg-success/10 text-success px-2 py-1 text-xs rounded">
                ✅ In Stock
              </span>
            )}
          </div>
          <div className="flex mt-4 gap-2">
            {product?.imageUrls.map((img, idx) => (
              <div
                key={idx}
                className="w-16 h-16 bg-muted rounded-md border border-border mx-2"
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
          <div className="flex items-center text-sm gap-3 text-muted-foreground">
            ⭐ 4.5 <span>(127 reviews)</span> • SKU: 2,51,594
          </div>

          {/* Price */}
          <div className="text-xl sm:text-2xl font-bold text-accent">
            Rs.{product?.price}
            <span className="text-sm text-muted-foreground line-through ml-3">
              Rs.{product?.oldPrice || product?.price}
            </span>
            <div className="text-sm text-accent mt-1">You save Rs.547</div>
          </div>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {/* {product?.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))} */}
          </ul>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <div className="flex border rounded-full overflow-hidden border-input">
              <Button size="icon" variant="ghost">
                <Minus className="w-4 h-4" />
              </Button>
              <Input
                type="number"
                className="w-12 text-center border-none"
                defaultValue={1}
              />
              <Button size="icon" variant="ghost">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <Button className="bg-primary hover:bg-primary/90 px-6 flex items-center text-primary-foreground">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-input"
            >
              <Heart className="w-4 h-4 text-destructive" />
            </Button>
          </div>

          {/* Service Icons */}
          <div className="flex gap-6 text-sm mt-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-primary w-5 h-5" /> Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-success w-5 h-5" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="text-destructive w-5 h-5" /> Easy Returns
            </div>
          </div>

          {/* Brand/Tags */}
          <div className="mt-4 text-sm">
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
              className="bg-muted text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))} */}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
              Facebook
            </Button>
            <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white">
              Twitter
            </Button>
            <Button className="bg-[#E4405F] hover:bg-[#E4405F]/90 text-white">
              Instagram
            </Button>
            <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <ProductDescription description={product.description} />
      </div>
    </section>
  );
};

export default ProductById;
