/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port:""
          },
          {
            protocol: 'https',
            hostname: 'pngfre.com',
            port:""
          },
          {
            protocol: 'https',
            hostname: 'static-00.iconduck.com',
            port:""
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port:""
          }
          ,
          {
            protocol: 'https',
            hostname: 'github.githubassets.com',
            port:""
          }
        ],
      },
};

export default nextConfig;
