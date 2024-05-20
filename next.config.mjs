/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'mosbdigital.local', 'mosbdigital.localhttps', 'mosbdigital.localhttp', 'https://blog.mosbdigital.com', 'http://blog.mosbdigital.com', 'blog.mosbdigital.localhttps', 'blog.mosbdigital.localhttp'],
        remotePatterns: [{
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: ""
        }]
      },
};

export default nextConfig;
