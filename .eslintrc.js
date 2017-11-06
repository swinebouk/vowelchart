module.exports = {
  "env": {
    "browser": true,
    "jest/globals": true,
  },
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "jest",
    "jsdoc",
    "react",
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns-type": 1,
  },
  "settings": {
    "jsdoc": {
      "tagNamePreference": {
        "param": "param",
        "returns": "returns",
      }
    },
  },
};
