module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  env: {
    INFURA_API: "https://ropsten.infura.io/v3/18c57b36265d40f89f18ef3a90865d07",
    INFURA_ID: "18c57b36265d40f89f18ef3a90865d07",
  },
};
