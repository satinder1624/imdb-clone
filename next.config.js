/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/watchlist",
        destination: "/watchlist/watchlistmovies",
        permanent: false,
      },
    ];
  },
};

module.exports = {
  images: {
    domains: ["m.media-amazon.com"],
    formats: ["image/avif", "image/webp"],
  },
};
