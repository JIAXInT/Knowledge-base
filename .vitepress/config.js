import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Knowledge-base/",
  title: "知识库",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "小册",
        items: [
          { text: "现代web布局", link: "/docs/Modern_web_layout/01.md" },
          { text: "JavaScript设计模式", link: "/docs/Design_pattern/01 开篇：前端工程师的成长论.md" },
        ],
      },
      {
        text: "书籍",
        items: [{ text: "你不知道的js", link: "/docs/you_dont_know_js/index.md" }],
      },
    ],

    sidebar: {
      // 现代web布局
      "/docs/Modern_web_layout/": [
        {
          text: "现代web布局",
          items: [
            { text: "1Web 布局技术演进：了解 Web 布局发展史", link: "/docs/Modern_web_layout/01.md" },
            { text: "2现代 Web 布局技术术语", link: "/docs/Modern_web_layout/02.md" },
            { text: "3Flexbox 布局基础使用", link: "/docs/Modern_web_layout/03.md" },
            { text: "4Flexbox 布局中的对齐方式", link: "/docs/Modern_web_layout/04.md" },
            { text: "5Flexbox 布局中的 flex 属性的基础运用", link: "/docs/Modern_web_layout/05.md" },
            { text: "6Flexbox 中的计算：通过扩展因子比例来扩展 Flex 项目", link: "/docs/Modern_web_layout/06.md" },
            { text: "7Flexbox 中的计算：通过收缩因子比例收缩 Flex 项目", link: "/docs/Modern_web_layout/07.md" },
            { text: "8Flexbox 布局中的 flex-basis：谁能决定 Flex 项目的大小？", link: "/docs/Modern_web_layout/08.md" },
            { text: "9使用 Flexbox 构建经典布局：10 种经典 Web 布局", link: "/docs/Modern_web_layout/09.md" },
            { text: "10Grid 布局的基础知识", link: "/docs/Modern_web_layout/10.md" },
            { text: "11定义一个网格布局", link: "/docs/Modern_web_layout/11.md" },
            { text: "12 Grid 布局中的计算", link: "/docs/Modern_web_layout/12.md" },
            { text: "13可用于 Grid 布局中的函数", link: "/docs/Modern_web_layout/13.md" },
            { text: "14网格项目的放置和层叠", link: "/docs/Modern_web_layout/14.md" },
            { text: "15Grid 布局中的对齐方式", link: "/docs/Modern_web_layout/15.md" },
            { text: "16网格布局中的子网格和嵌套网格", link: "/docs/Modern_web_layout/16.md" },
            { text: "17使用子网格构建 Web 布局", link: "/docs/Modern_web_layout/17.md" },
            { text: "18使用 Grid 构建经典布局：10 种经典布局", link: "/docs/Modern_web_layout/18.md" },
            { text: "19使用 Grid 构建创意性 Web 布局", link: "/docs/Modern_web_layout/19.md" },
            { text: "20Flexbox or Grid：如何选择合适的布局？", link: "/docs/Modern_web_layout/20.md" },
            { text: "21display：contents 改变 Flexbox 和 Grid 布局模式", link: "/docs/Modern_web_layout/21.md" },
            { text: "22Web 中的向左向右：Flexbox 和 Grid 布局中的 LTR 与 RTL", link: "/docs/Modern_web_layout/22.md" },
            { text: "23Web 中的向左向右：Web 布局中 LTR 切换到 RTL 常见错误", link: "/docs/Modern_web_layout/23.md" },
            { text: "24内在 Web 设计", link: "/docs/Modern_web_layout/24.md" },
            { text: "25创建不规则 Web 布局", link: "/docs/Modern_web_layout/25.md" },
            { text: "26如何构建响应式 UI？", link: "/docs/Modern_web_layout/26.md" },
            { text: "27下一代响应式 Web 设计：组件式驱动式 Web 设计", link: "/docs/Modern_web_layout/27.md" },
            { text: "28下一代响应式 Web 设计：容器查询", link: "/docs/Modern_web_layout/28.md" },
          ],
        },
      ],

      // JavaScript设计模式
      "/docs/Design_pattern/": [
        {
          text: "JavaScript设计模式",
          items: [
            {
              text: "01 开篇：前端工程师的成长论",
              link: "/docs/Design_pattern/01 开篇：前端工程师的成长论",
            },
            {
              text: "02 设计模式的“道”与“术”",
              link: "/docs/Design_pattern/02 设计模式的“道”与“术”",
            },
            {
              text: "03 创建型：工厂模式·简单工厂——区分“变与不变”",
              link: "/docs/Design_pattern/03 创建型：工厂模式·简单工厂——区分“变与不变”",
            },
            {
              text: "04 创建型：工厂模式·抽象工厂——理解“开放封闭”",
              link: "/docs/Design_pattern/04 创建型：工厂模式·抽象工厂——理解“开放封闭”",
            },
            {
              text: "05 创建型：单例模式——Vuex的数据管理哲学",
              link: "/docs/Design_pattern/05 创建型：单例模式——Vuex的数据管理哲学",
            },
            {
              text: "06 创建型：单例模式——面试真题手把手教学",
              link: "/docs/Design_pattern/06 创建型：单例模式——面试真题手把手教学",
            },
            {
              text: "07 创建型：原型模式——谈Prototype无小事",
              link: "/docs/Design_pattern/07 创建型：原型模式——谈Prototype无小事",
            },
            {
              text: "08 结构型：装饰器模式——对象装上它，就像开了挂",
              link: "/docs/Design_pattern/08 结构型：装饰器模式——对象装上它，就像开了挂",
            },
            {
              text: "09 结构型：装饰器模式——深入装饰器原理与优秀案例",
              link: "/docs/Design_pattern/09 结构型：装饰器模式——深入装饰器原理与优秀案例",
            },
            {
              text: "10 结构型：适配器模式——兼容代码就是一把梭",
              link: "/docs/Design_pattern/10 结构型：适配器模式——兼容代码就是一把梭",
            },
            {
              text: "11 结构型：代理模式——一家小型婚介所的发家致富之路",
              link: "/docs/Design_pattern/11 结构型：代理模式——一家小型婚介所的发家致富之路",
            },
            {
              text: "12 结构型：代理模式——应用实践范例解析",
              link: "/docs/Design_pattern/12 结构型：代理模式——应用实践范例解析",
            },
            {
              text: "15 行为型：观察者模式——鬼故事：产品经理拉了一个钉钉群",
              link: "/docs/Design_pattern/15 行为型：观察者模式——鬼故事：产品经理拉了一个钉钉群",
            },
            {
              text: "16 行为型：观察者模式——面试真题手把手教学",
              link: "/docs/Design_pattern/16 行为型：观察者模式——面试真题手把手教学",
            },
            {
              text: "17 行为型：迭代器模式——真·遍历专家",
              link: "/docs/Design_pattern/17 行为型：迭代器模式——真·遍历专家",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/JIAXInT/Knowledge-base" }],
  },
});
