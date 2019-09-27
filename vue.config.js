module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_mixins.scss";
        @import "@/styles/_utils.scss";
        @import "@/styles/_border.scss";
        `
      }
    }
  }
}
