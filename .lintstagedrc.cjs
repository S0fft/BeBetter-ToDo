module.exports = {
  './src/**/*.{tsx,ts}': [
    'pnpm lint:fix',
    'pnpm prettier:fix',
  ],
};
