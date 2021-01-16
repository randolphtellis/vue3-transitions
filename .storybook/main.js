module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // webpackFinal: async (config, { configType }) => {

  //   config.resolve.alias = {
  //     '@': path.resolve('src/'),
  //     // 'vue$': 'vue/dist/vue.esm.js',
  //     '@storybook/vue$': path.join(process.cwd(), 'node_modules/@storybook/vue'),
  //     '@storybook/addon-actions$': path.join(process.cwd(), 'node_modules/@storybook/addon-actions'),
  //     'storybook-vue-router$': path.join(process.cwd(), 'node_modules/storybook-vue-router'),
  //     'lodash$': path.join(process.cwd(), 'node_modules/lodash'),
  //     '@vue/composition-api$': path.join(process.cwd(), 'node_modules/@vue/composition-api'),
  //     'storybook-zeplin/register': path.join(process.cwd(), 'node_modules/storybook-zeplin/register'),
  //   }
  // }
}

