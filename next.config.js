/** @type {import('next').NextConfig} */

const fs = require('fs');
const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_SECRET: "secret",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL:
      process.env.NODE_ENV === "production"
        ? "/api"
        : "http://localhost:3000/api",
  },
  // Rest of your Next.js configuration...

  async rewrites() {
    return [
      // Custom rewrites for SSL
    ];
  },

  async redirects() {
    return [
      // Custom redirects for SSL
    ];
  },

  async headers() {
    return [
      // Custom headers for SSL
    ];
  },

  server: {
    https: {
      key: fs.readFileSync("./certs/localhost-key.pem"),
      cert: fs.readFileSync("./certs/localhost.pem"),
    },
  },
};

module.exports = nextConfig;
