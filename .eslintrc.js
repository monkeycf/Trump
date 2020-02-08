module.exports = {
  parser: '@typescript-eslint/parser', // ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  }
};
