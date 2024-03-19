module.exports = {
  './src/**/*.{tsx,ts}': [
    'pnpm lint',
    'pnpm prettier:fix',
  ],
};
