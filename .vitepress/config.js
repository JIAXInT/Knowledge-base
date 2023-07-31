import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "现代web布局", link: "/Modern_web_layout/01.md" },
    ],

    sidebar: [
      {
        text: "现代web布局",
        items: [
          { text: "1Web 布局技术演进：了解 Web 布局发展史", link: "/Modern_web_layout/01.md" },
          { text: "2现代 Web 布局技术术语", link: "/Modern_web_layout/02.md" },
          { text: "3Flexbox 布局基础使用", link: "/Modern_web_layout/03.md" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
