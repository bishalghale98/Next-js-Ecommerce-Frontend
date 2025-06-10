import { getProducts } from "@/api/products";
import ClientPage from "./clientPage";
import config from "@/constants/config";

export const metadata = {
  title: "Shop Online in Nepal | Affordable Products at E-Hatiya",
  description:
    "Buy electronics, fashion, gadgets, and daily essentials at E-Hatiya. Fast delivery, secure payments & unbeatable prices in Nepal.",
  keywords: [
    "E-Hatiya", "Online shopping Nepal", "Buy electronics Nepal",
    "Fashion Nepal", "Online store Biratnagar", "Nepal ecommerce",
    "Best price Nepal", "Buy online Kathmandu", "Trusted online store Nepal",
  ],
  metadataBase: new URL("https://e-hatiya.com"),
  openGraph: {
    title: "Shop the Best Deals Online | E-Hatiya",
    description: "Discover quality products at affordable prices. E-Hatiya is Nepal's go-to platform for online shopping.",
    url: "https://e-hatiya.com/products",
    siteName: "E-Hatiya",
    images: [
      {
        url: "https://e-hatiya.com/images/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Shop the Best Products in Nepal",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://e-hatiya.com/products",
    languages: {
      "en-NP": "https://e-hatiya.com/products",
      "ne-NP": "https://e-hatiya.com/products",
    },
  },
};

const ProductPage = async () => {
  const products = await getProducts();
  return <ClientPage products={products} />;
};

export default ProductPage;
