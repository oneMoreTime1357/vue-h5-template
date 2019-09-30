const path = require('path')

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //       @import "@/styles/_variables.scss";
  //       @import "@/styles/_mixins.scss";
  //       @import "@/styles/_utils.scss";
  //       @import "@/styles/_border.scss";
  //       `
  //     }
  //   }
  // }
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_border.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
        path.resolve(__dirname, 'src/styles/_utils.scss'),
        path.resolve(__dirname, 'src/styles/_variables.scss')
      ]
    }
  }
}
