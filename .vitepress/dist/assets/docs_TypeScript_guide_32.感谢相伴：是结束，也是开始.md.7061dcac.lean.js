import{_ as e,v as t,b as r,R as p}from"./chunks/framework.eb2f4134.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/TypeScript_guide/32.感谢相伴：是结束，也是开始.md","filePath":"docs/TypeScript_guide/32.感谢相伴：是结束，也是开始.md"}'),a={name:"docs/TypeScript_guide/32.感谢相伴：是结束，也是开始.md"},n=p('<p>在本节开始前，我想先感谢每一位读者，感谢你们的肯定与支持，也希望小册中的内容能够让你收获明显的成长。</p><p>这本小册是我的第一本小册，肯定还存在许多不足之处，比如错别字、示例代码的呈现以及内容的组织方面等等，幸运的是我拥有许多耐心细致的读者帮我“捉虫”，我也会在发现这些问题时第一时间改正。</p><p>从上线到现在，我也收获了许多真诚的评价，严格来说，目前大部分评价对内容都是持肯定态度的。而对于持批评态度的评价，我也尽可能进行了内容的优化与调整。无论评价是正面还是负面，其实都代表读者认真地阅读了内容，这里再次感谢每一位同学的反馈。</p><h2 id="是结束" tabindex="-1">是结束 <a class="header-anchor" href="#是结束" aria-label="Permalink to &quot;是结束&quot;">​</a></h2><p>天下没有不散的筵席，小册的正文内容就到这里结束了，不妨让我们再回顾下这一路我们都学习了什么。</p><p>类型基础部分（1 - 5 节），作为入门阶段到进阶阶段之间的过渡，在这里我们<strong>在入门的基础上</strong>，按照小册的节奏重新介绍了这些相对简单的概念，也为后面的进阶预留了扩展空间。</p><p>内置类型工具部分（6 - 8 节、12 - 13 节），我们对 TypeScript 茫茫多的类型工具进行了逐个击破，明确了这些类型工具各自的作用与使用场景，同时为类型编程的学习打好了基础。</p><p>类型系统部分（10 - 12 节、14 - 15 节），作为这本小册区分于市面上所有其他 TypeScript 教程的特色，我们了解了结构化类型系统、类型层级、协变与逆变等类型系统的核心概念。有必要再次重申：<strong>类型系统不仅能帮助你更好地理解复杂类型编程的底层原理，也能够让你获得独立解决各种类型问题的能力。</strong></p><p>类型编程部分（13 节、16 - 19 节），我们按照内置工具类型基础、内置工具类型扩展以及模板字符串类型的顺序组织了对类型编程的学习，帮助你从最简单的例子开始理解类型编程的四大范式：<strong>访问性修饰工具类型</strong>、<strong>结构工具类型</strong>、<strong>集合工具类型</strong>以及<strong>模式匹配工具类型</strong>。在不考虑类型体操的情况下，这部分知识已经能够涵盖你日常开发需要的 80% 以上场景了。</p><p>工程部分（20 - 31 节），光学类型能力可不能说掌握了 TypeScript，因此我们花了将近 1/3 的篇幅来学习工程侧的应用。从 React、ESLint 到 ECMAScript，从装饰器、依赖注入到 TSConfig 全解，再从 Node 应用开发到 Compiler API 开发，加上此前的类型能力，现在我们可以说自己身经百战了。</p><p>无论你正处于哪个阶段，这些内容都一定能或多或少帮助到你，而这就是我创作这本小册的初衷。</p><h2 id="也是开始" tabindex="-1">也是开始 <a class="header-anchor" href="#也是开始" aria-label="Permalink to &quot;也是开始&quot;">​</a></h2><p>虽然到这里，小册的正文内容已经划上句点，但这本小册还没有完全结束。我们还会有数节漫谈篇内容作为番外。</p><p>漫谈篇的内容不会包含任何新的 TypeScript 知识点，你只需要读过一遍就能理解并化为己用，不需要打开编辑器，不需要准备笔记本，不需要特别安静的学习环境。</p><p>目前已经确定的漫谈篇内容包括：</p><ul><li>漫谈：面试中的 TypeScript 技能水平检验</li><li>漫谈：拥抱下一代 Node 框架—— DeepKit</li></ul><p>需要说明的是，漫谈篇的内容并不会正文一样动辄 3000 字，而是会尽可能控制在 1500 字以内，你应该把它当小说，而不是当论文看。</p><p>另外，未来我可能还会有新的掘金小册面世，如果这本小册让你感觉收获满满，也欢迎你关注我的下一本小册~</p><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>最后，这本小册之所以能成功面世，离不开许多人在这个过程中的帮助。在此，我想再次向他们致以最诚挚的谢意。</p><p>感谢掘金小编的一路跟随与耐心审校，在这本小册中学习到的写作经验也是我的重要收获之一。</p><p>感谢 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fpeople%2Fxunzhaohailan" target="_blank" rel="noreferrer">寻找海蓝</a>、<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fpeople%2Fzhaojinxiang" target="_blank" rel="noreferrer">某兔</a>、<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fpeople%2Fkingwl" target="_blank" rel="noreferrer">王文璐</a>、<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fpeople%2Fdi-xu-guang-50" target="_blank" rel="noreferrer">神光</a> 等前辈的无私创作分享，在我学习 TypeScript 的过程中，最幸运的一件事就是能阅读到他们的作品。</p><p>感谢 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fpeople%2Fqing-feng-yi-yang" target="_blank" rel="noreferrer">冴羽</a> 老师帮我进行的安利和推广，也推荐所有在阅读这本小册时卡住的同学，先阅读冴羽老师的 TypeScript 入门教程，完成筑基阶段的积累。</p><p>感谢你的一路陪伴，也期待与你的再次相见。</p>',24),i=[n];function o(s,h,l,c,_,g){return t(),r("div",null,i)}const f=e(a,[["render",o]]);export{u as __pageData,f as default};
