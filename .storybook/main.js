const path = require('path')

module.exports = {
  stories: [
    "../**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
       options: {
         postcssLoaderOptions: {
             implementation: require('postcss'),
             },
       },
   },
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];


    config.resolve.alias = {
      ...config.resolve.alias,
      api: path.join(__dirname, '../api'),
      components: path.join(__dirname, '../components'),
      styles: path.join(__dirname, '../styles'),
      icons: path.join(__dirname, '../icons'),
      constants: path.join(__dirname, '../constants'),
      utils: path.join(__dirname, '../utils'),
    }

    return config;
  },
}