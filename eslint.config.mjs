module.exports = {
  root: true,
  extends: [
    'custom',
    'next',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['@tanstack/query'],
};
