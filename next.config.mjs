/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/next.js_static_export" : "",
};

export default nextConfig;
