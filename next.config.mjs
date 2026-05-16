/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,

    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 64, 128, 256],
        minimumCacheTTL: 2592000,
    },

    reactStrictMode: true,

    experimental: {
        optimizePackageImports: ["lucide-react", "framer-motion"],
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
            {
                source: "/_next/static/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/projects/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=2592000, stale-while-revalidate=86400",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
