
module.exports = {
  env: {
    NETWORK: process.env.NETWORK,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  ssr: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
