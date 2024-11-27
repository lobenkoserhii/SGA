/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; frame-src https://calendly.com https://*.calendly.com https://*.stripe.com; script-src 'self' 'unsafe-inline' https://*.calendly.com https://*.stripe.com;",
            },
          ],
        },
      ];
    },
  };
  