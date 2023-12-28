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
          { text: "TypeScript全面进阶指南", link: "/docs/TypeScript_guide/1.开篇：用正确的方式学习 TypeScript.md" },
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

      "/docs/TypeScript_guide/": [
        {
          text: "TypeScript指南",
          items: [
            {
              text: "1.开篇：用正确的方式学习 TypeScript.md",
              link: "/docs/TypeScript_guide/1.开篇：用正确的方式学习 TypeScript.md",
            },
            {
              text: "2.工欲善其事：打造最舒适的 TypeScript 开发环境.md",
              link: "/docs/TypeScript_guide/2.工欲善其事：打造最舒适的 TypeScript 开发环境.md",
            },
            {
              text: "3.进入类型的世界：理解原始类型与对象类型.md",
              link: "/docs/TypeScript_guide/3.进入类型的世界：理解原始类型与对象类型.md",
            },
            {
              text: "4.掌握字面量类型与枚举，让你的类型再精确一些.md",
              link: "/docs/TypeScript_guide/4.掌握字面量类型与枚举，让你的类型再精确一些.md",
            },
            {
              text: "5.函数与 Class 中的类型：详解函数重载与面向对象.md",
              link: "/docs/TypeScript_guide/5.函数与 Class 中的类型：详解函数重载与面向对象.md",
            },
            {
              text: "6.探秘内置类型：any、unknown、never 与类型断言.md",
              link: "/docs/TypeScript_guide/6.探秘内置类型：any、unknown、never 与类型断言.md",
            },
            {
              text: "7.类型编程好帮手：TypeScript 类型工具（上）.md",
              link: "/docs/TypeScript_guide/7.类型编程好帮手：TypeScript 类型工具（上）.md",
            },
            {
              text: "8.类型编程好帮手：TypeScript 类型工具（下）.md",
              link: "/docs/TypeScript_guide/8.类型编程好帮手：TypeScript 类型工具（下）.md",
            },
            {
              text: "9.类型编程基石：TypeScript 中无处不在的泛型.md",
              link: "/docs/TypeScript_guide/9.类型编程基石：TypeScript 中无处不在的泛型.md",
            },
            {
              text: "10.结构化类型系统：类型兼容性判断的幕后.md",
              link: "/docs/TypeScript_guide/10.结构化类型系统：类型兼容性判断的幕后.md",
            },
            {
              text: "11.类型系统层级：从 Top Type 到 Bottom Type.md",
              link: "/docs/TypeScript_guide/11.类型系统层级：从 Top Type 到 Bottom Type.md",
            },
            {
              text: "12.类型里的逻辑运算：条件类型与 infer.md",
              link: "/docs/TypeScript_guide/12.类型里的逻辑运算：条件类型与 infer.md",
            },
            {
              text: "13.内置工具类型基础：别再妖魔化工具类型了！.md",
              link: "/docs/TypeScript_guide/13.内置工具类型基础：别再妖魔化工具类型了！.md",
            },
            {
              text: "14.反方向类型推导：用好上下文相关类型.md",
              link: "/docs/TypeScript_guide/14.反方向类型推导：用好上下文相关类型.md",
            },
            {
              text: "15.数类型：协变与逆变的比较.md",
              link: "/docs/TypeScript_guide/15.数类型：协变与逆变的比较.md",
            },
            {
              text: "16.了解类型编程与类型体操的意义，找到平衡点.md",
              link: "/docs/TypeScript_guide/16.了解类型编程与类型体操的意义，找到平衡点.md",
            },
            {
              text: "17.内置工具类型进阶：类型编程进阶.md",
              link: "/docs/TypeScript_guide/17.内置工具类型进阶：类型编程进阶.md",
            },
            {
              text: "18.基础类型新成员：模板字符串类型入门.md",
              link: "/docs/TypeScript_guide/18.基础类型新成员：模板字符串类型入门.md",
            },
            {
              text: "19.类型编程新范式：模板字符串工具类型进阶.md",
              link: "/docs/TypeScript_guide/19.类型编程新范式：模板字符串工具类型进阶.md",
            },
            {
              text: "20.工程层面的类型能力：类型声明、类型指令与命名空间.md",
              link: "/docs/TypeScript_guide/20.工程层面的类型能力：类型声明、类型指令与命名空间.md",
            },
            {
              text: "21.在 React 中愉快地使用 TypeScript：内置类型与泛型坑位.md",
              link: "/docs/TypeScript_guide/21.在 React 中愉快地使用 TypeScript：内置类型与泛型坑位.md",
            },
            {
              text: "22.让 ESLint 来约束你的 TypeScript 代码：配置与规则集介绍.md",
              link: "/docs/TypeScript_guide/22.让 ESLint 来约束你的 TypeScript 代码：配置与规则集介绍.md",
            },
            {
              text: "23.全链路 TypeScript 工具库，找到适合你的工具.md",
              link: "/docs/TypeScript_guide/23.全链路 TypeScript 工具库，找到适合你的工具.md",
            },
            {
              text: "24.说说 TypeScript 和 ECMAScript 之间那些事儿.md",
              link: "/docs/TypeScript_guide/24.说说 TypeScript 和 ECMAScript 之间那些事儿.md",
            },
            {
              text: "25.装饰器与反射元数据：了解装饰器基本原理与应用.md",
              link: "/docs/TypeScript_guide/25.装饰器与反射元数据：了解装饰器基本原理与应用.md",
            },
            {
              text: "26.控制反转与依赖注入：基于装饰器的依赖注入实现.md",
              link: "/docs/TypeScript_guide/26.控制反转与依赖注入：基于装饰器的依赖注入实现.md",
            },
            {
              text: "27.TSConfig 全解（上）：构建相关配置.md",
              link: "/docs/TypeScript_guide/27.TSConfig 全解（上）：构建相关配置.md",
            },
            {
              text: "28.TSConfig 全解（下）：检查相关、工程相关配置.md",
              link: "/docs/TypeScript_guide/28.TSConfig 全解（下）：检查相关、工程相关配置.md",
            },
            {
              text: "29.基于 Prisma + NestJs 的 Node API ：前置知识储备.md",
              link: "/docs/TypeScript_guide/29.基于 Prisma + NestJs 的 Node API ：前置知识储备.md",
            },
            {
              text: "30.基于 Prisma + NestJs 的 Node API ：项目开发与基于 Heroku 部署.md",
              link: "/docs/TypeScript_guide/30.基于 Prisma + NestJs 的 Node API ：项目开发与基于 Heroku 部署.md",
            },
            {
              text: "31.玩转 TypeScript AST：AST Checker 与 CodeMod.md",
              link: "/docs/TypeScript_guide/31.玩转 TypeScript AST：AST Checker 与 CodeMod.md",
            },
            {
              text: "32.感谢相伴：是结束，也是开始.md",
              link: "/docs/TypeScript_guide/32.感谢相伴：是结束，也是开始.md",
            },
            {
              text: "33.漫谈篇：面试中的 TypeScript.md",
              link: "/docs/TypeScript_guide/33.漫谈篇：面试中的 TypeScript.md",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/JIAXInT/Knowledge-base" }],
  },
});
