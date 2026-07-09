/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.rocket.new",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*\\.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/gallery/:path*\\.(jpg|jpeg|png|webp|gif|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "drvishvamitra.com",
          },
        ],
        destination: "https://www.harjivanhospital.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.drvishvamitra.com",
          },
        ],
        destination: "https://www.harjivanhospital.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "harjivanhospital.com",
          },
        ],
        destination: "https://www.harjivanhospital.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
