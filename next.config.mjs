/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optional: Disable source maps for production
    webpack(config, { isServer }) {
      if (!isServer) {
        config.parallelism = 2; // Limit number of workers for the build to avoid memory issues
      }
      return config;
    },
  };
  
export default nextConfig;
