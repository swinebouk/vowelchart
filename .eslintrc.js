module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    "rules": {
      "comma-dangle": ["error", "always-multiline"],
    },
    "env": {
        "browser": true,
    },
    "globals": {
      "it": false,
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
    },
    "plugins": [
      "react"
    ],
};
