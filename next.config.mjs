/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // allow http
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https", // also allow https for safety
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
