import config from "@/constants/config";
import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about E-Hatiya – who we are, what we offer, and our commitment to quality service. Discover our mission, values, and story behind Nepal’s growing online marketplace.",
  keywords: [
    "E-Hatiya",
    "About E-Hatiya",
    "Online Shopping Nepal",
    "eCommerce Nepal",
    "E-Hatiya Story",
    "E-Hatiya Team",
    "Nepali Online Store",
    "Trusted Marketplace Nepal",
    "E-Hatiya Vision",
  ],
  authors: [
    {
      name: "E-Hatiya Team",
      url: `${config.appName}`,
    },
  ],
  openGraph: {
    title: "About E-Hatiya",
    description:
      "Discover the story behind E-Hatiya – our values, vision, and how we aim to empower Nepal through seamless online shopping.",
    url: "https://e-hatiya.com/about",
    siteName: "E-Hatiya",
    images: [
      {
        url: "https://e-hatiya.com/images/og-about.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "About E-Hatiya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "About E-Hatiya",
  //   description:
  //     "Explore E-Hatiya – a trusted Nepali eCommerce platform offering quality, speed, and customer-first service.",
  //   images: ["https://e-hatiya.com/images/og-about.jpg"], // Replace with your actual image
  //   creator: "@ehatiya",
  // },
  metadataBase: new URL("https://e-hatiya.com"),
};

const About = () => {
  return <div>About</div>;
};

export default About;
