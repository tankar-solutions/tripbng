/** @type {import('next').NextConfig} */
const nextConfig = {
    productionSourceMaps: false,
    webpack(config, { isServer }) {
      if (!isServer) {
        config.parallelism = 2; // Set max number of workers for build
      }
      return config;
    },
  };
  
  export default nextConfig;
  