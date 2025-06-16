import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/constants/config";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/redux/ReduxProvider";
import ThemeToggle from "@/components/darkmode/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description:
    "E-Hatiya is your one-stop online marketplace offering a wide range of products, secure checkout, fast shipping, and excellent customer support.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen box-border  overflow-y-hidden overflow-x-hidden`}
      >
        <ReduxProvider>
          <ToastContainer />
          <Header />
          <ThemeToggle />

          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
