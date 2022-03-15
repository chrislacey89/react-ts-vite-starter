module.exports = {
  plugins: ['prettier'],
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-private-class-members': 'off', // off because eslint is giving a strange error
    'prefer-object-has-own': 'off', // off because eslint is giving a strange error
  },
};
