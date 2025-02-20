/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': { loaders: ['@svgr/webpack'], as: '*.js', },
            },
        },
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
