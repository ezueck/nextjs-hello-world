// next.config.js
module.exports = {
    async headers() {
      return [
        {
          source: "/.well-known/:path*",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
          ],
        },
      ]
    },
  }