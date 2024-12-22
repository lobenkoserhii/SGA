/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
                            default-src 'self';
                            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.calendly.com https://*.stripe.com;
                            style-src 'self' 'unsafe-inline';
                            connect-src 'self' https://*.googleapis.com https://*.calendly.com https://*.stripe.com;
                            img-src 'self' data:;
                            frame-src 'self' https://calendly.com https://*.calendly.com; frame-src 'self' https://calendly.com https://*.calendly.com;
                        `.replace(/\s{2,}/g, ' ').trim(),
                    },
                ],
            },
        ];
    },
    webpack: (config) => {
        if (process.env.NODE_ENV !== 'production') {
            config.output.devtoolModuleFilenameTemplate = (info) =>
                `webpack:///${info.resourcePath}${info.resourceQuery}`;
        }
        return config;
    },
  };
  
  module.exports = nextConfig;
  