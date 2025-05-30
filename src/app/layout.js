import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Hatiya ",
  description: "E-Hatiya is your one-stop online marketplace offering a wide range of products, secure checkout, fast shipping, and excellent customer support.",
  keywords: [
    "E-commerce",
    "online shopping",
    "buy products online",
    "digital marketplace",
    "shop online",
    "best deals",
    "secure checkout",
    "product reviews",
    "fast shipping",
    "customer support",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
