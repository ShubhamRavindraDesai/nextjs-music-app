/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "is1-ssl.mzstatic.com",
      "is4-ssl.mzstatic.com",
      "is2-ssl.mzstatic.com",
      "is3-ssl.mzstatic.com",
      "is4-ssl.mzstatic.com",
      "is5-ssl.mzstatic.com",
      "is6-ssl.mzstatic.com",
      "is7-ssl.mzstatic.com",
      "is8-ssl.mzstatic.com",
      "is9-ssl.mzstatic.com",
      "is9-ssl.mzstatic.com",
      "is10-ssl.mzstatic.com",
      "is11-ssl.mzstatic.com",
      "is12-ssl.mzstatic.com",
      "is13-ssl.mzstatic.com",
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
