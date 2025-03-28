const prettierConfig = require('@klothy/prettier-config')

module.exports = {
  ...prettierConfig,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120
      }
    }
  ]
}
