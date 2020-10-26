const { description } = require('../../package')

module.exports = {
  base: "/callmebetter",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Docs Boilerplate",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/callmebetter/callmebetter",
    docsRepo: "https://github.com/callmebetter/callmebetter/docs",
    editLinks: true,
    docsDir: "docs",
    docsBranch: 'gh-pages',
    editLinkText: "帮忙我们改善此页面！",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "git相关",
        link: "/git/",
      },
      {
        text: "Foo",
        link: "/foo/",
      }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
      "/foo/": [
        {
          title: "Foo",
          collapsable: true,
          children: ["", "nodeList", "transform-origin", "sin"],
        },
      ],
      "/git/": [
        {
          title: "About git",
          collapsable: false,
          children: ["", "empty"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
