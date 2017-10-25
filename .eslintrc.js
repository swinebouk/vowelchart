module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
  },
  "env": {
    "browser": true,
    "jest/globals": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "plugins": [
    "jest",
    "react",
  ],
};
