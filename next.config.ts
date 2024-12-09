import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'babycycle.my.id',
            port: '',
            pathname: '/**',
        },
    ],
},
};

export default nextConfig;
