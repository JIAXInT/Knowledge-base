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
          { text: "前端算法与数据结构面试：底层逻辑解读与大厂真题训练", link: "/docs/algorithm/1-面试总有套路，算法不是玄学——写给普通人的前端算法面试攻略.md" },
          { text: "Nest进阶指南", link: "/docs/Nest/第01章—开篇词.md" },
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

      "/docs/algorithm/": [
        {
          text: "前端算法与数据结构面试：底层逻辑解读与大厂真题训练",
          items: [
            {
              text: "1-面试总有套路，算法不是玄学——写给普通人的前端算法面试攻略",
              link: "/docs/algorithm/1-面试总有套路，算法不是玄学——写给普通人的前端算法面试攻略.md",
            },
            {
              text: "2-快速上手——从0到1掌握算法面试需要的数据结构（一）",
              link: "/docs/algorithm/2-快速上手——从0到1掌握算法面试需要的数据结构（一）.md",
            },
            {
              text: "3-快速上手——从0到1掌握算法面试需要的数据结构（二）",
              link: "/docs/algorithm/3-快速上手——从0到1掌握算法面试需要的数据结构（二）.md",
            },
            {
              text: "4-快速上手——从0到1掌握算法面试需要的数据结构（三）",
              link: "/docs/algorithm/4-快速上手——从0到1掌握算法面试需要的数据结构（三）.md",
            },
            {
              text: "5-递归初相见——二叉树递归遍历的三种姿势",
              link: "/docs/algorithm/5-递归初相见——二叉树递归遍历的三种姿势.md",
            },
            {
              text: "6-算法的衡量——轻松理解时间复杂度与空间复杂度",
              link: "/docs/algorithm/6-算法的衡量——轻松理解时间复杂度与空间复杂度.md",
            },
            {
              text: "7-数组的应用——真题归纳与解读",
              link: "/docs/algorithm/7-数组的应用——真题归纳与解读.md",
            },
            {
              text: "8-字符串的应用——真题归纳与解读",
              link: "/docs/algorithm/8-字符串的应用——真题归纳与解读.md",
            },
            {
              text: "9-链表的应用——真题归纳与解读",
              link: "/docs/algorithm/9-链表的应用——真题归纳与解读.md",
            },
            {
              text: "10-快慢指针与多指针——玩转链表复杂操作",
              link: "/docs/algorithm/10-快慢指针与多指针——玩转链表复杂操作.md",
            },
            {
              text: "11-姿势特别的链表——环形链表专题",
              link: "/docs/algorithm/11-姿势特别的链表——环形链表专题.md",
            },
            {
              text: "12-栈与队列怎么玩（上）",
              link: "/docs/algorithm/12-栈与队列怎么玩（上）.md",
            },
            {
              text: "13-栈与队列怎么玩（下）",
              link: "/docs/algorithm/13-栈与队列怎么玩（下）.md",
            },
            {
              text: "14-遍历专题：DFS 与 BFS",
              link: "/docs/algorithm/14-遍历专题：DFS 与 BFS.md",
            },
            {
              text: "15-场景化解读：递归与回溯思想在真题中的应用",
              link: "/docs/algorithm/15-场景化解读：递归与回溯思想在真题中的应用.md",
            },
            {
              text: "16-二叉树真题归纳与解读",
              link: "/docs/algorithm/16-二叉树真题归纳与解读.md",
            },
            {
              text: "17-特殊的二叉树——二叉搜索树专题",
              link: "/docs/algorithm/17-特殊的二叉树——二叉搜索树专题.md",
            },
            {
              text: "18-特殊的二叉树——平衡二叉树专题",
              link: "/docs/algorithm/18-特殊的二叉树——平衡二叉树专题.md",
            },
            {
              text: "19-特殊的二叉树——堆结构及其在排序中的应用",
              link: "/docs/algorithm/19-特殊的二叉树——堆结构及其在排序中的应用.md",
            },
            {
              text: "20-排序算法专题（上）",
              link: "/docs/algorithm/20-排序算法专题（上）.md",
            },
            {
              text: "21-排序算法专题（下）",
              link: "/docs/algorithm/21-排序算法专题（下）.md",
            },
            {
              text: "22-普通人也能吃透的动态规划思想专题（上）",
              link: "/docs/algorithm/22-普通人也能吃透的动态规划思想专题（上）.md",
            },
            {
              text: "23-普通人也能吃透的动态规划思想专题（下）",
              link: "/docs/algorithm/23-普通人也能吃透的动态规划思想专题（下）.md",
            },
            {
              text: "24-大厂真题训练与解读——微软真题",
              link: "/docs/algorithm/24-大厂真题训练与解读——微软真题.md",
            },
            {
              text: "25-大厂真题训练与解读——Google 真题",
              link: "/docs/algorithm/25-大厂真题训练与解读——Google 真题.md",
            },
            {
              text: "26-大厂真题训练与解读——腾讯真题",
              link: "/docs/algorithm/26-大厂真题训练与解读——腾讯真题.md",
            },
            {
              text: "27-大厂真题训练与解读——头条真题",
              link: "/docs/algorithm/27-大厂真题训练与解读——头条真题.md",
            },
            {
              text: "28-思维课：算法面试的评价逻辑",
              link: "/docs/algorithm/28-思维课：算法面试的评价逻辑.md",
            },
          ],
        },
      ],

      "/docs/Nest/": [
        {
          text: "Nest进阶指南",
          items: [
            {
              text: "第01章—开篇词",
              link: "/docs/Nest/第01章—开篇词.md",
            },
            {
              text: "第02章—给你5个学习Nest的理由，你会心动么",
              link: "/docs/Nest/第02章—给你5个学习Nest的理由，你会心动么.md",
            },
            {
              text: "第03章—快速掌握NestCLI",
              link: "/docs/Nest/第03章—快速掌握NestCLI.md",
            },
            {
              text: "第04章—5种HTTP数据传输方式",
              link: "/docs/Nest/第04章—5种HTTP数据传输方式.md",
            },
            {
              text: "第05章—IoC解决了什么痛点问题",
              link: "/docs/Nest/第05章—IoC解决了什么痛点问题.md",
            },
            {
              text: "第06章—如何调试Nest项目",
              link: "/docs/Nest/第06章—如何调试Nest项目.md",
            },
            {
              text: "第07章—使用多种Provider，灵活注入对象",
              link: "/docs/Nest/第07章—使用多种Provider，灵活注入对象.md",
            },
            {
              text: "第08章—全局模块和生命周期",
              link: "/docs/Nest/第08章—全局模块和生命周期.md",
            },
            {
              text: "第09章—AOP架构有什么好处",
              link: "/docs/Nest/第09章—AOP架构有什么好处.md",
            },
            {
              text: "第10章—一网打尽Nest全部装饰器",
              link: "/docs/Nest/第10章—一网打尽Nest全部装饰器.md",
            },
            {
              text: "第11章—ExecutionContext：切换不同上下文",
              link: "/docs/Nest/第11章—ExecutionContext：切换不同上下文.md",
            },
            {
              text: "第12章—Nest如何自定义装饰器",
              link: "/docs/Nest/第12章—Nest如何自定义装饰器.md",
            },
            {
              text: "第13章—Metadata和Reflector",
              link: "/docs/Nest/第13章—Metadata和Reflector.md",
            },
            {
              text: "第14章—Module和Provider的循环依赖怎么处理",
              link: "/docs/Nest/第14章—Module和Provider的循环依赖怎么处理.md",
            },
            {
              text: "第15章—如何创建动态模块",
              link: "/docs/Nest/第15章—如何创建动态模块.md",
            },
            {
              text: "第16章—Nest和Express的关系，如何切到fastify",
              link: "/docs/Nest/第16章—Nest和Express的关系，如何切到fastify.md",
            },
            {
              text: "第17章—Nest的Middleware",
              link: "/docs/Nest/第17章—Nest的Middleware.md",
            },
            {
              text: "第18章—RxJS和Interceptor",
              link: "/docs/Nest/第18章—RxJS和Interceptor.md",
            },
            {
              text: "第19章—内置Pipe和自定义Pipe",
              link: "/docs/Nest/第19章—内置Pipe和自定义Pipe.md",
            },
            {
              text: "第20章—如何使用ValidationPipe验证post请求参数",
              link: "/docs/Nest/第20章—如何使用ValidationPipe验证post请求参数.md",
            },
            {
              text: "第21章—如何自定义ExceptionFilter",
              link: "/docs/Nest/第21章—如何自定义ExceptionFilter.md",
            },
            {
              text: "第22章—图解串一串Nest核心概念",
              link: "/docs/Nest/第22章—图解串一串Nest核心概念.md",
            },
            {
              text: "第23章—Express如何使用multer实现文件上传",
              link: "/docs/Nest/第23章—Express如何使用multer实现文件上传.md",
            },
            {
              text: "第24章—Nest如何使用multer实现文件上传",
              link: "/docs/Nest/第24章—Nest如何使用multer实现文件上传.md",
            },
            {
              text: "第25章—大文件分片上传",
              link: "/docs/Nest/第25章—大文件分片上传.md",
            },
            {
              text: "第26章—Nest里如何打印日志",
              link: "/docs/Nest/第26章—Nest里如何打印日志.md",
            },
            {
              text: "第27章—为什么Node里要用Winston打印日志",
              link: "/docs/Nest/第27章—为什么Node里要用Winston打印日志.md",
            },
            {
              text: "第28章—Nest集成日志框架Winston",
              link: "/docs/Nest/第28章—Nest集成日志框架Winston.md",
            },
            {
              text: "第29章—通过Desktop学Docker也太简单了",
              link: "/docs/Nest/第29章—通过Desktop学Docker也太简单了.md",
            },
            {
              text: "第30章—你的第一个Dockerfile",
              link: "/docs/Nest/第30章—你的第一个Dockerfile.md",
            },
            {
              text: "第31章—Nest项目如何编写Dockerfile",
              link: "/docs/Nest/第31章—Nest项目如何编写Dockerfile.md",
            },
            {
              text: "第32章—提升Dockerfile水平的5个技巧",
              link: "/docs/Nest/第32章—提升Dockerfile水平的5个技巧.md",
            },
            {
              text: "第33章—Docker是怎么实现的",
              link: "/docs/Nest/第33章—Docker是怎么实现的.md",
            },
            {
              text: "第34章—为什么Node应用要用PM2来跑",
              link: "/docs/Nest/第34章—为什么Node应用要用PM2来跑.md",
            },
            {
              text: "第35章—快速入门MySQL",
              link: "/docs/Nest/第35章—快速入门MySQL.md",
            },
            {
              text: "第36章—SQL查询语句的所有语法和函数",
              link: "/docs/Nest/第36章—SQL查询语句的所有语法和函数.md",
            },
            {
              text: "第37章—一对一、join查询、级联方式",
              link: "/docs/Nest/第37章—一对一、join查询、级联方式.md",
            },
            {
              text: "第38章—一对多、多对多关系的表设计",
              link: "/docs/Nest/第38章—一对多、多对多关系的表设计.md",
            },
            {
              text: "第39章—子查询和EXISTS",
              link: "/docs/Nest/第39章—子查询和EXISTS.md",
            },
            {
              text: "第40章—SQL综合练习",
              link: "/docs/Nest/第40章—SQL综合练习.md",
            },
            {
              text: "第41章—MySQL的事务和隔离级别",
              link: "/docs/Nest/第41章—MySQL的事务和隔离级别.md",
            },
            {
              text: "第42章—MySQL的视图、存储过程和函数",
              link: "/docs/Nest/第42章—MySQL的视图、存储过程和函数.md",
            },
            {
              text: "第43章—使用Node操作MySQL的两种方式",
              link: "/docs/Nest/第43章—使用Node操作MySQL的两种方式.md",
            },
            {
              text: "第44章—快速掌握TypeORM",
              link: "/docs/Nest/第44章—快速掌握TypeORM.md",
            },
            {
              text: "第45章—TypeORM一对一的映射和关联CRUD",
              link: "/docs/Nest/第45章—TypeORM一对一的映射和关联CRUD.md",
            },
            {
              text: "第46章—TypeORM一对多的映射和关联CRUD",
              link: "/docs/Nest/第46章—TypeORM一对多的映射和关联CRUD.md",
            },
            {
              text: "第47章—TypeORM多对多的映射和关联CRUD",
              link: "/docs/Nest/第47章—TypeORM多对多的映射和关联CRUD.md",
            },
            {
              text: "第48章—TypeORM的全部命令",
              link: "/docs/Nest/第48章—TypeORM的全部命令.md",
            },
            {
              text: "第49章—TypeORM知识点查缺补漏",
              link: "/docs/Nest/第49章—TypeORM知识点查缺补漏.md",
            },
            {
              text: "第50章—在Nest里集成TypeORM",
              link: "/docs/Nest/第50章—在Nest里集成TypeORM.md",
            },
            {
              text: "第51章—快速入门Redis",
              link: "/docs/Nest/第51章—快速入门Redis.md",
            },
            {
              text: "第52章—在Nest里操作Redis",
              link: "/docs/Nest/第52章—在Nest里操作Redis.md",
            },
            {
              text: "第53章—为什么不用cache-manager操作Redis",
              link: "/docs/Nest/第53章—为什么不用cache-manager操作Redis.md",
            },
            {
              text: "第54章—两种登录状态保存方式：JWT、Session",
              link: "/docs/Nest/第54章—两种登录状态保存方式：JWT、Session.md",
            },
            {
              text: "第55章—Nest里实现Session和JWT",
              link: "/docs/Nest/第55章—Nest里实现Session和JWT.md",
            },
            {
              text: "第56章—MySQL+TypeORM+JWT实现登录注册",
              link: "/docs/Nest/第56章—MySQL+TypeORM+JWT实现登录注册.md",
            },
            {
              text: "第57章—基于ACL实现权限控制",
              link: "/docs/Nest/第57章—基于ACL实现权限控制.md",
            },
            {
              text: "第58章—基于RBAC实现权限控制",
              link: "/docs/Nest/第58章—基于RBAC实现权限控制.md",
            },
            {
              text: "第59章—基于access_token和refresh_token实现无感刷新登录状态",
              link: "/docs/Nest/第59章—基于access_token和refresh_token实现无感刷新登录状态.md",
            },
            {
              text: "第60章—如何动态读取不同环境的配置",
              link: "/docs/Nest/第60章—如何动态读取不同环境的配置.md",
            },
            {
              text: "第61章—为什么要使用DockerCompose",
              link: "/docs/Nest/第61章—为什么要使用DockerCompose.md",
            },
            {
              text: "第62章—Docker容器通信的最简单方式：桥接网络",
              link: "/docs/Nest/第62章—Docker容器通信的最简单方式：桥接网络.md",
            },
            {
              text: "第63章—Docker支持重启策略，是否还需要PM2",
              link: "/docs/Nest/第63章—Docker支持重启策略，是否还需要PM2.md",
            },
            {
              text: "第64章—搭建私有Docker镜像仓库",
              link: "/docs/Nest/第64章—搭建私有Docker镜像仓库.md",
            },
            {
              text: "第65章—快速掌握Nginx的2大核心用法",
              link: "/docs/Nest/第65章—快速掌握Nginx的2大核心用法.md",
            },
            {
              text: "第66章—基于Nginx实现灰度系统",
              link: "/docs/Nest/第66章—基于Nginx实现灰度系统.md",
            },
            {
              text: "第67章—Nginx的全部配置",
              link: "/docs/Nest/第67章—Nginx的全部配置.md",
            },
            {
              text: "第68章—基于Redis实现分布式session",
              link: "/docs/Nest/第68章—基于Redis实现分布式session.md",
            },
            {
              text: "第69章—Redis+高德地图，实现附近的充电宝",
              link: "/docs/Nest/第69章—Redis+高德地图，实现附近的充电宝.md",
            },
            {
              text: "第70章—基于Redis实现王者荣耀段位排行榜",
              link: "/docs/Nest/第70章—基于Redis实现王者荣耀段位排行榜.md",
            },
            {
              text: "第71章—用Swagger自动生成api文档",
              link: "/docs/Nest/第71章—用Swagger自动生成api文档.md",
            },
            {
              text: "第72章—使用compodoc生成文档",
              link: "/docs/Nest/第72章—使用compodoc生成文档.md",
            },
            {
              text: "第73章—Node如何发邮件",
              link: "/docs/Nest/第73章—Node如何发邮件.md",
            },
            {
              text: "第74章—实现基于邮箱验证码的登录",
              link: "/docs/Nest/第74章—实现基于邮箱验证码的登录.md",
            },
            {
              text: "第75章—使用阿里云的邮件和短信服务",
              link: "/docs/Nest/第75章—使用阿里云的邮件和短信服务.md",
            },
            {
              text: "第76章—定时任务+Redis实现阅读量计数",
              link: "/docs/Nest/第76章—定时任务+Redis实现阅读量计数.md",
            },
            {
              text: "第77章—Nest的3种定时任务",
              link: "/docs/Nest/第77章—Nest的3种定时任务.md",
            },
            {
              text: "第78章—短链服务自己写一个",
              link: "/docs/Nest/第78章—短链服务自己写一个.md",
            },
            {
              text: "第79章—Nest实现ServerSentEvent数据推送",
              link: "/docs/Nest/第79章—Nest实现ServerSentEvent数据推送.md",
            },
            {
              text: "第80章—基于sharp实现gif压缩工具",
              link: "/docs/Nest/第80章—基于sharp实现gif压缩工具.md",
            },
            {
              text: "第81章—实现扫二维码登录",
              link: "/docs/Nest/第81章—实现扫二维码登录.md",
            },
            {
              text: "第82章—Nest的REPL模式",
              link: "/docs/Nest/第82章—Nest的REPL模式.md",
            },
            {
              text: "第83章—使用Prometheus实现Node性能监控",
              link: "/docs/Nest/第83章—使用Prometheus实现Node性能监控.md",
            },
            {
              text: "第84章—会议室预订系统：需求分析和原型图",
              link: "/docs/Nest/第84章—会议室预订系统：需求分析和原型图.md",
            },
            {
              text: "第85章—会议室预订系统：技术方案和数据库设计",
              link: "/docs/Nest/第85章—会议室预订系统：技术方案和数据库设计.md",
            },
            {
              text: "第86章—会议室预订系统：用户管理模块--用户注册",
              link: "/docs/Nest/第86章—会议室预订系统：用户管理模块--用户注册.md",
            },
            {
              text: "第87章—会议室预订系统：用户管理模块--配置抽离、登录认证鉴权",
              link: "/docs/Nest/第87章—会议室预订系统：用户管理模块--配置抽离、登录认证鉴权.md",
            },
            {
              text: "第88章—会议室预订系统：用户管理模块--interceptor、修改信息接口",
              link: "/docs/Nest/第88章—会议室预订系统：用户管理模块--interceptor、修改信息接口.md",
            },
            {
              text: "第89章—会议室预订系统：用户管理模块--用户列表和分页查询",
              link: "/docs/Nest/第89章—会议室预订系统：用户管理模块--用户列表和分页查询.md",
            },
            {
              text: "第90章—会议室预订系统：用户管理模块--swagger接口文档",
              link: "/docs/Nest/第90章—会议室预订系统：用户管理模块--swagger接口文档.md",
            },
            {
              text: "第91章—会议室预订系统：用户管理模块--用户端登录注册页面",
              link: "/docs/Nest/第91章—会议室预订系统：用户管理模块--用户端登录注册页面.md",
            },
            {
              text: "第92章—会议室预订系统：用户管理模块--用户端信息修改页面",
              link: "/docs/Nest/第92章—会议室预订系统：用户管理模块--用户端信息修改页面.md",
            },
            {
              text: "第93章—会议室预订系统：用户管理模块--管理端用户列表页面",
              link: "/docs/Nest/第93章—会议室预订系统：用户管理模块--管理端用户列表页面.md",
            },
            {
              text: "第94章—会议室预订系统：用户管理模块--管理端信息修改页面",
              link: "/docs/Nest/第94章—会议室预订系统：用户管理模块--管理端信息修改页面.md",
            },
            {
              text: "第95章—会议室预订系统：会议室管理模块-后端开发",
              link: "/docs/Nest/第95章—会议室预订系统：会议室管理模块-后端开发.md",
            },
            {
              text: "第96章—会议室预订系统：会议室管理模块-管理端前端开发",
              link: "/docs/Nest/第96章—会议室预订系统：会议室管理模块-管理端前端开发.md",
            },
            {
              text: "第97章—会议室预订系统：会议室管理模块-用户端前端开发",
              link: "/docs/Nest/第97章—会议室预订系统：会议室管理模块-用户端前端开发.md",
            },
            {
              text: "第98章—会议室预订系统：预定管理模块-后端开发",
              link: "/docs/Nest/第98章—会议室预订系统：预定管理模块-后端开发.md",
            },
            {
              text: "第99章—会议室预订系统：预定管理模块-管理端前端开发",
              link: "/docs/Nest/第99章—会议室预订系统：预定管理模块-管理端前端开发.md",
            },
            {
              text: "第100章—会议室预订系统：预定管理模块-用户端前端开发",
              link: "/docs/Nest/第100章—会议室预订系统：预定管理模块-用户端前端开发.md",
            },
            {
              text: "第101章—会议室预订系统：统计管理模块-后端开发",
              link: "/docs/Nest/第101章—会议室预订系统：统计管理模块-后端开发.md",
            },
            {
              text: "第102章—会议室预订系统：统计管理模块-前端开发",
              link: "/docs/Nest/第102章—会议室预订系统：统计管理模块-前端开发.md",
            },
            {
              text: "第103章—会议室预订系统：项目部署和整体测试",
              link: "/docs/Nest/第103章—会议室预订系统：项目部署和整体测试.md",
            },
            {
              text: "第104章—Nest如何创建微服务",
              link: "/docs/Nest/第104章—Nest如何创建微服务.md",
            },
            {
              text: "第105章—Nest的Monorepo和Library",
              link: "/docs/Nest/第105章—Nest的Monorepo和Library.md",
            },
            {
              text: "第106章—用Etcd实现微服务配置中心和注册中心",
              link: "/docs/Nest/第106章—用Etcd实现微服务配置中心和注册中心.md",
            },
            {
              text: "第107章—Nest集成Etcd做注册中心、配置中心",
              link: "/docs/Nest/第107章—Nest集成Etcd做注册中心、配置中心.md",
            },
            {
              text: "第108章—使用Nacos做配置中心和注册中心",
              link: "/docs/Nest/第108章—使用Nacos做配置中心和注册中心.md",
            },
            {
              text: "第109章—使用ZoopKeeper做注册中心",
              link: "/docs/Nest/第109章—使用ZoopKeeper做注册中心.md",
            },
            {
              text: "第110章—使用Zuul做配置中心和注册中心",
              link: "/docs/Nest/第110章—使用Zuul做配置中心和注册中心.md",
            },
            {
              text: "第111章—注册中心功能总结",
              link: "/docs/Nest/第111章—注册中心功能总结.md",
            },
            {
              text: "第112章—基于gRPC实现跨语言的微服务通信",
              link: "/docs/Nest/第112章—基于gRPC实现跨语言的微服务通信.md",
            },
            {
              text: "第113章—深入掌握gRPC",
              link: "/docs/Nest/第113章—深入掌握gRPC.md",
            },
            {
              text: "第114章—快速入门ORM框架Prisma",
              link: "/docs/Nest/第114章—快速入门ORM框架Prisma.md",
            },
            {
              text: "第115章—Prisma的全部命令",
              link: "/docs/Nest/第115章—Prisma的全部命令.md",
            },
            {
              text: "第116章—Prisma的全部schema语法",
              link: "/docs/Nest/第116章—Prisma的全部schema语法.md",
            },
            {
              text: "第117章—PrimsaClient单表CRUD的全部api",
              link: "/docs/Nest/第117章—PrimsaClient单表CRUD的全部api.md",
            },
            {
              text: "第118章—PrismaClient多表CRUD的全部api",
              link: "/docs/Nest/第118章—PrismaClient多表CRUD的全部api.md",
            },
            {
              text: "第119章—在Nest里集成Prisma",
              link: "/docs/Nest/第119章—在Nest里集成Prisma.md",
            },
            {
              text: "第120章—使用Sequelize做ORM框架",
              link: "/docs/Nest/第120章—使用Sequelize做ORM框架.md",
            },
            {
              text: "第121章—TypeORM、Sequelize、Prisma三大ORM框架对比",
              link: "/docs/Nest/第121章—TypeORM、Sequelize、Prisma三大ORM框架对比.md",
            },
            {
              text: "第122章—为什么前端监控系统要用RabbitMQ",
              link: "/docs/Nest/第122章—为什么前端监控系统要用RabbitMQ.md",
            },
            {
              text: "第123章—快速掌握RocketMQ",
              link: "/docs/Nest/第123章—快速掌握RocketMQ.md",
            },
            {
              text: "第124章—快速掌握Kafka",
              link: "/docs/Nest/第124章—快速掌握Kafka.md",
            },
            {
              text: "第125章—消息队列选型",
              link: "/docs/Nest/第125章—消息队列选型.md",
            },
            {
              text: "第126章—基于Redis实现消息队列",
              link: "/docs/Nest/第126章—基于Redis实现消息队列.md",
            },
            {
              text: "第127章—基于Redis实现分布式锁",
              link: "/docs/Nest/第127章—基于Redis实现分布式锁.md",
            },
            {
              text: "第128章—Redis的Stream数据结构",
              link: "/docs/Nest/第128章—Redis的Stream数据结构.md",
            },
            {
              text: "第129章—Redis的布隆过滤器",
              link: "/docs/Nest/第129章—Redis的布隆过滤器.md",
            },
            {
              text: "第130章—使用passport做身份认证",
              link: "/docs/Nest/第130章—使用passport做身份认证.md",
            },
            {
              text: "第131章—实现单点登录",
              link: "/docs/Nest/第131章—实现单点登录.md",
            },
            {
              text: "第132章—BFF层的作用",
              link: "/docs/Nest/第132章—BFF层的作用.md",
            },
            {
              text: "第133章—什么是分布式架构",
              link: "/docs/Nest/第133章—什么是分布式架构.md",
            },
            {
              text: "第134章—Nest如何写单元测试",
              link: "/docs/Nest/第134章—Nest如何写单元测试.md",
            },
            {
              text: "第135章—如何进行压力测试",
              link: "/docs/Nest/第135章—如何进行压力测试.md",
            },
            {
              text: "第136章—图解微服务架构",
              link: "/docs/Nest/第136章—图解微服务架构.md",
            },
            {
              text: "第137章—电商系统：需求分析",
              link: "/docs/Nest/第137章—电商系统：需求分析.md",
            },
            {
              text: "第138章—电商系统：数据库设计",
              link: "/docs/Nest/第138章—电商系统：数据库设计.md",
            },
            {
              text: "第139章—电商系统：微服务拆分",
              link: "/docs/Nest/第139章—电商系统：微服务拆分.md",
            },
            {
              text: "第140章—电商系统：集成RabbitMQ、Redis、Etcd",
              link: "/docs/Nest/第140章—电商系统：集成RabbitMQ、Redis、Etcd.md",
            },
            {
              text: "第141章—电商系统：功能开发（上）",
              link: "/docs/Nest/第141章—电商系统：功能开发（上）.md",
            },
            {
              text: "第142章—电商系统：功能开发（下）",
              link: "/docs/Nest/第142章—电商系统：功能开发（下）.md",
            },
            {
              text: "第143章—电商系统：前端界面开发",
              link: "/docs/Nest/第143章—电商系统：前端界面开发.md",
            },
            {
              text: "第144章—电商系统：DockerCompose部署和整体测试",
              link: "/docs/Nest/第144章—电商系统：DockerCompose部署和整体测试.md",
            },
            {
              text: "第145章—基于Redis实现关注关系",
              link: "/docs/Nest/第145章—基于Redis实现关注关系.md",
            },
            {
              text: "第146章—基于Redis实现uv计数",
              link: "/docs/Nest/第146章—基于Redis实现uv计数.md",
            },
            {
              text: "第147章—面试题：说说Redis的应用场景",
              link: "/docs/Nest/第147章—面试题：说说Redis的应用场景.md",
            },
            {
              text: "第148章—大众点评系统：需求分析和原型图",
              link: "/docs/Nest/第148章—大众点评系统：需求分析和原型图.md",
            },
            {
              text: "第149章—大众点评系统：技术方案设计",
              link: "/docs/Nest/第149章—大众点评系统：技术方案设计.md",
            },
            {
              text: "第150章—大众点评系统：后端开发",
              link: "/docs/Nest/第150章—大众点评系统：后端开发.md",
            },
            {
              text: "第151章—大众点评系统：前端开发",
              link: "/docs/Nest/第151章—大众点评系统：前端开发.md",
            },
            {
              text: "第152章—大众点评系统：项目部署和整体测试",
              link: "/docs/Nest/第152章—大众点评系统：项目部署和整体测试.md",
            },
            {
              text: "第153章—什么时候需要WebSocket",
              link: "/docs/Nest/第153章—什么时候需要WebSocket.md",
            },
            {
              text: "第154章—用Node.js手写WebSocket协议",
              link: "/docs/Nest/第154章—用Node.js手写WebSocket协议.md",
            },
            {
              text: "第155章—MongoDB快速入门",
              link: "/docs/Nest/第155章—MongoDB快速入门.md",
            },
            {
              text: "第156章—在Nest里操作MongoDB",
              link: "/docs/Nest/第156章—在Nest里操作MongoDB.md",
            },
            {
              text: "第157章—Nest如何开发WebSocket服务",
              link: "/docs/Nest/第157章—Nest如何开发WebSocket服务.md",
            },
            {
              text: "第158章—Redis+WebSocket实时外卖员距离",
              link: "/docs/Nest/第158章—Redis+WebSocket实时外卖员距离.md",
            },
            {
              text: "第159章—WebSocket的面试题",
              link: "/docs/Nest/第159章—WebSocket的面试题.md",
            },
            {
              text: "第160章—聊天室项目：需求分析",
              link: "/docs/Nest/第160章—聊天室项目：需求分析.md",
            },
            {
              text: "第161章—聊天室项目：数据库设计",
              link: "/docs/Nest/第161章—聊天室项目：数据库设计.md",
            },
            {
              text: "第162章—聊天室项目：微服务拆分",
              link: "/docs/Nest/第162章—聊天室项目：微服务拆分.md",
            },
            {
              text: "第163章—聊天室项目：功能开发（上）",
              link: "/docs/Nest/第163章—聊天室项目：功能开发（上）.md",
            },
            {
              text: "第164章—聊天室项目：功能开发（下）",
              link: "/docs/Nest/第164章—聊天室项目：功能开发（下）.md",
            },
            {
              text: "第165章—聊天室项目：前端界面开发",
              link: "/docs/Nest/第165章—聊天室项目：前端界面开发.md",
            },
            {
              text: "第166章—聊天室项目：DockerCompose部署",
              link: "/docs/Nest/第166章—聊天室项目：DockerCompose部署.md",
            },
            {
              text: "第167章—GraphQL快速入门",
              link: "/docs/Nest/第167章—GraphQL快速入门.md",
            },
            {
              text: "第168章—Nest如何开发GraphQL服务",
              link: "/docs/Nest/第168章—Nest如何开发GraphQL服务.md",
            },
            {
              text: "第169章—Kafka消息中间件和RabbitMQ有什么区别",
              link: "/docs/Nest/第169章—Kafka消息中间件和RabbitMQ有什么区别.md",
            },
            {
              text: "第170章—GraphQL的面试题",
              link: "/docs/Nest/第170章—GraphQL的面试题.md",
            },
            {
              text: "第171章—教育平台：需求分析",
              link: "/docs/Nest/第171章—教育平台：需求分析.md",
            },
            {
              text: "第172章—教育平台：数据库设计",
              link: "/docs/Nest/第172章—教育平台：数据库设计.md",
            },
            {
              text: "第173章—教育平台：微服务拆分",
              link: "/docs/Nest/第173章—教育平台：微服务拆分.md",
            },
            {
              text: "第174章—教育平台：GraphQL层设计",
              link: "/docs/Nest/第174章—教育平台：GraphQL层设计.md",
            },
            {
              text: "第175章—教育平台：功能开发（上）",
              link: "/docs/Nest/第175章—教育平台：功能开发（上）.md",
            },
            {
              text: "第176章—教育平台：功能开发（下）",
              link: "/docs/Nest/第176章—教育平台：功能开发（下）.md",
            },
            {
              text: "第177章—为什么要用ElasticSearch做全文检索",
              link: "/docs/Nest/第177章—为什么要用ElasticSearch做全文检索.md",
            },
            {
              text: "第178章—部署一套Kubenetes环境",
              link: "/docs/Nest/第178章—部署一套Kubenetes环境.md",
            },
            {
              text: "第179章—ElasticSearch和MySQL如何配合",
              link: "/docs/Nest/第179章—ElasticSearch和MySQL如何配合.md",
            },
            {
              text: "第180章—Node里操作ElasticSearch",
              link: "/docs/Nest/第180章—Node里操作ElasticSearch.md",
            },
            {
              text: "第181章—Nest集成ElasticSearch",
              link: "/docs/Nest/第181章—Nest集成ElasticSearch.md",
            },
            {
              text: "第182章—什么是Kubenetes",
              link: "/docs/Nest/第182章—什么是Kubenetes.md",
            },
            {
              text: "第183章—博客项目：需求分析",
              link: "/docs/Nest/第183章—博客项目：需求分析.md",
            },
            {
              text: "第184章—博客项目：数据库设计",
              link: "/docs/Nest/第184章—博客项目：数据库设计.md",
            },
            {
              text: "第185章—博客项目：ORM层开发",
              link: "/docs/Nest/第185章—博客项目：ORM层开发.md",
            },
            {
              text: "第186章—博客系统：集成ElasticSearch",
              link: "/docs/Nest/第186章—博客系统：集成ElasticSearch.md",
            },
            {
              text: "第187章—博客项目：功能开发",
              link: "/docs/Nest/第187章—博客项目：功能开发.md",
            },
            {
              text: "第188章—博客项目：前端界面开发",
              link: "/docs/Nest/第188章—博客项目：前端界面开发.md",
            },
            {
              text: "第189章—博客项目：Docker部署",
              link: "/docs/Nest/第189章—博客项目：Docker部署.md",
            },
            {
              text: "第190章—博客项目：整体测试",
              link: "/docs/Nest/第190章—博客项目：整体测试.md",
            },
            {
              text: "第191章—如何调试Nest源码",
              link: "/docs/Nest/第191章—如何调试Nest源码.md",
            },
            {
              text: "第192章—NestIOC实现原理",
              link: "/docs/Nest/第192章—NestIOC实现原理.md",
            },
            {
              text: "第193章—手写Nest的IOC容器",
              link: "/docs/Nest/第193章—手写Nest的IOC容器.md",
            },
            {
              text: "第194章—NestAOP实现原理",
              link: "/docs/Nest/第194章—NestAOP实现原理.md",
            },
            {
              text: "第195章—Nest的路由是怎么实现的",
              link: "/docs/Nest/第195章—Nest的路由是怎么实现的.md",
            },
            {
              text: "第196章—NestCLI实现原理",
              link: "/docs/Nest/第196章—NestCLI实现原理.md",
            },
            {
              text: "第197章—为什么公司里用MySQL比较多",
              link: "/docs/Nest/第197章—为什么公司里用MySQL比较多.md",
            },
            {
              text: "第198章—PostgreSQL和MySQL的区别",
              link: "/docs/Nest/第198章—PostgreSQL和MySQL的区别.md",
            },
            {
              text: "第199章—如何用OAuth2.0做三方授权",
              link: "/docs/Nest/第199章—如何用OAuth2.0做三方授权.md",
            },
            {
              text: "第200章—实现三方扫码登录",
              link: "/docs/Nest/第200章—实现三方扫码登录.md",
            },
            {
              text: "第201章—微信支付、支付宝支付",
              link: "/docs/Nest/第201章—微信支付、支付宝支付.md",
            },
            {
              text: "第202章—面试题：sql的执行流程",
              link: "/docs/Nest/第202章—面试题：sql的执行流程.md",
            },
            {
              text: "第203章—面试题：mysql索引优化",
              link: "/docs/Nest/第203章—面试题：mysql索引优化.md",
            },
            {
              text: "第204章—面试题：redis缓存雪崩、缓存击穿、缓存穿透",
              link: "/docs/Nest/第204章—面试题：redis缓存雪崩、缓存击穿、缓存穿透.md",
            },
            {
              text: "第205章—小册总结",
              link: "/docs/Nest/第205章—小册总结.md",
            },
          ],
        },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/JIAXInT/Knowledge-base" }],
    },
  },
});
