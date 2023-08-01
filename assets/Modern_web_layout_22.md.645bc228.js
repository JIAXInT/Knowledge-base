import{_ as s,v as n,b as a,R as e}from"./chunks/framework.238ef224.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Modern_web_layout/22.md","filePath":"Modern_web_layout/22.md"}'),l={name:"Modern_web_layout/22.md"},o=e(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fe85803de6642a5b6a04f00b0993c1f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>几米的绘本《向左走，向右走》自1999年出版，就一直是爱情的代名词。在 Web 的世界中有着同样的故事，即 Web 的向左向右，指的就是 Web 的排版方式（比如，左浮动、右浮动）、对齐方式（比如左对齐、右对齐）、书写模式（比如从左向右、从右向左）等。而 Web 中的向左向右和书写模式、阅读方式有着紧密的关系，它将直接影响着 Web 布局的最终呈现。</p><p>从这节课开始，我将花两节课的篇幅和大家一起来探讨与这方面有关的一些 CSS 技术，使构建一个多语言 Web 网站或应用的过程变得更容易。更希望下次你需要做同样的事情时，能借鉴课程中的一些技术来实现你的项目。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>世界上有很多种语言（简称<a href="https://zh.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E8%AA%9E%E8%A8%80" target="_blank" rel="noreferrer">世界语言</a>），比如汉语、英语、印度斯坦语、西班牙语、阿拉伯语、俄语、葡萄牙语、德语和法语等。在互联中也有一些常用语言，比如英语、汉语、西班牙语、葡萄牙语、印尼语（马来语）、法语、日语、俄语和德语等。 如果你的团队有一些国际业务，这种现象对于你来说一定不会感到陌生。</p><p>其实，你在访问互联网的 Web 页面，或者使用 Web App 时，很多 Web 网站或 Web 应用都提供了多语言设置。在 Web 中，不同的语言在电子屏幕上有着不同的呈现方式，比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44e446f56a2a4b5384e73ab0407d2e26~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>上图截取于“<a href="https://zh.unesco.org/" target="_blank" rel="noreferrer">联合国教科文组织</a>”官网，上图所列的语言也是<a href="https://en.wikipedia.org/wiki/Official_languages_of_the_United_Nations" target="_blank" rel="noreferrer">联合国常用语言种类</a>。</p><p>从上图可以看出，在互联网上有些语言是从左到右排列（查看），比如中文、英语、法语等，也有一些语言是从右到左排列（查看），比如阿拉伯语、波斯语、乌尔都语，维吾尔语，哈萨克语等（这些都是阿位伯语系）。</p><p>阿拉伯语系是互联网语言的第七大最常用的语言，全世界大约有超过 2.92 亿人将阿拉伯语作为第一语言。阿拉伯语网站或应用的数量每天都在不断增加。然而，奇怪的是，阿拉伯语系（大部分是在中东市场）要求的设计不仅要符合他们的需求和用户的舒适度，而且还要符合他们的语言标准，这使得开发者在开发相关应用的过程变得更为复杂。考虑到阿拉伯系都是从右到左书写和阅读的，开发人员在开发的时候常常会面临一系列问题。</p><blockquote><p>注意：阿拉伯语不是唯一从右向左书写的语言。波斯语和希伯来语也是以同样的方式书写的。</p></blockquote><p>虽然这看起来没什么大不了的，但是从右到左（<code>RTL</code>）语言的开发需要注意很多相关的细节，而且这方面的资源也不多。对于开发者而言，仅从右向左（<code>RTL</code>）或从左向右（<code>LTR</code>）单方面而言，事情会相对更简单，但是如果两种方式混合在一起，事情就会变得较为复杂。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/312fadea1a5e4073a767f388e7a66f21~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>简单地说呢，就是按照书写模式来呈现不同的效果。就目前来看，主要的方式就是从左向右（<code>LTR</code>）或从右向左（<code>RTL</code>），在某些场景下也有垂直方向的书写模式，比如从上往下（古代的汉文就是这样的书写模式）。对于开发者而言，从左向右（<code>LTR</code>）并不是件难事，因为我们平时做的，处理方式都是这种。但我们不能仅局限于以往，很有可能你面对的用户群体是阿拉伯语系，那你就要改变以往的处理方式。</p><p>面对不同语言场景，你可能会先想到，“界面必须翻转”。看上去很诡异，但这也是 <code>LTR</code> 转换成 <code>RTL</code>要做的第一件事情。比如 Facebook 官网的首页：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43654b83eef84c239e5caac0e48dbfd5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如果你查看过其源码的话，你会发现在 <code>&lt;body&gt;</code> 元素上设置了 <code>dir</code> 属性，同时在 CSS 中设置了<code>direction</code> 属性：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d0273d8cf194385bcabb69adcf0d52a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>从技术角度上来说，Web 开发者需要做两件事，在 HTML 标记中，会使用 <code>lang</code> 属性指定使用的语言，<code>dir</code> 指定阅读模式，一般和语言相匹配。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 阿拉伯语 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;ar&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;body dir=&quot;rtl&quot;&gt;&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 简体中文 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;zh-Hans&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;body dir=&quot;ltr&quot;&gt;&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><p>客户端默认会根据 <code>lang</code> 和 <code>dir</code> 的设置，提供最初始的样式设置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 阿拉伯语 */</span></span>
<span class="line"><span style="color:#A6ACCD;">html[Attributes Style] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-locale: &quot;ar&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">body[Attributes Style] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: rtl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    unicode-bidi: isolate;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* 简体中文 */</span></span>
<span class="line"><span style="color:#A6ACCD;">html[Attributes Style] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-locale: &quot;zh-Hans&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">body[Attributes Style] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: ltr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    unicode-bidi: isolate;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Web 开发者也会使用 <code>direction</code> 重置客户端的初始化样式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 阿拉伯语 */</span></span>
<span class="line"><span style="color:#A6ACCD;">body {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: rtl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    unicode-bidi: embed;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* 简体中文 */</span></span>
<span class="line"><span style="color:#A6ACCD;">body {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: ltr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    unicode-bidi: embed;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>正如上图中示例所示，改变语言和内容是最容易的部分，但当你这样做的时候，有时你要改变的语言有一个不同的方向。例如上图示例中的“简体中文”的文本内容（以及布局）从左到右流动，而阿拉伯语中的文本内容（以及布局）从右到左。</p><p>根据语言不同，对于 Web 开发者而言“改变内容容易，适配布局就不易”。如上面代码所示， HTML 的 <code>dir</code> 和 CSS 的 <code>direction</code> 除了可以控制文档流的方向，还会对 CSS 的部分属性产生影响。我想你可能想知道会对哪些属性有影响，有着什么影响对吧。要是感兴趣，请继续往下阅读！</p><h2 id="和方向有关的-css-功能模块" tabindex="-1">和方向有关的 CSS 功能模块 <a class="header-anchor" href="#和方向有关的-css-功能模块" aria-label="Permalink to &quot;和方向有关的 CSS 功能模块&quot;">​</a></h2><p>在 CSS 中，可以控制排版方向的特性有很多，比如我们熟悉的：</p><ul><li><strong>文本对齐</strong> ：CSS Text Module <a href="https://www.w3.org/TR/css-text-3/#text-align-property" target="_blank" rel="noreferrer">Level 3</a> 或 <a href="https://www.w3.org/TR/css-text-4/#text-align-property" target="_blank" rel="noreferrer">Level 4</a> 中的 <code>text-align</code>，用来设置文本的对齐方式；</li><li><strong>浮动</strong> ：<a href="https://www.w3.org/TR/css-page-floats-3/#float-property" target="_blank" rel="noreferrer">CSS Page Floats</a> 中的 <code>float</code> 属性，用来改变流的水平方向；</li><li><strong>定位</strong> ：<a href="https://www.w3.org/TR/css-position-3/#box-offsets-trbl" target="_blank" rel="noreferrer">CSS Positioned Layout Module Level 3</a> 的 <code>position</code> 以及 <code>left</code> 、<code>right</code> 也可以改变水平流的方向；</li><li><strong>Flexbox 布局</strong> ：<a href="https://www.w3.org/TR/css-flexbox-1/" target="_blank" rel="noreferrer">CSS Flexible Box Layout Module Level 1</a> 中的 <code>flex-direction</code>；</li><li><strong>Grid布局</strong> ：<a href="https://www.w3.org/TR/css-grid-1/" target="_blank" rel="noreferrer">CSS Grid Layout Module Level 1</a> 中的 <code>grid-auto-flow</code>；</li><li><strong>CSS 框对齐方式</strong> ：<a href="https://www.w3.org/TR/css-align-3/" target="_blank" rel="noreferrer">CSS Box Alignment Module Level 3</a> ；</li><li><strong>书写模式</strong> ：<a href="https://www.w3.org/TR/css-writing-modes-3/" target="_blank" rel="noreferrer">CSS Writing Modes Level 3</a>。</li></ul><p>我们来看一个示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;figure class=&quot;media__object&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__title&quot;&gt;Card Title&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;media__describe&quot;&gt;Card Describe&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><p>我们分别使用浮动、Flexbox 和 Grid 三种布局模式来构建布局，并且通过 CSS 的 <code>direction</code> 显式改变书写模式或阅读模式。相比较而言，CSS Flexbox 和 CSS Grid 布局要比 CSS Float 容易得多，只需要在 <code>.media</code> 容器上显式设置 <code>display</code> 值为 <code>flex</code> 或 <code>grid</code> ，当然，CSS Grid 布局要指定列网格轨道尺寸之类，具体代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* CSS Flexbox Layout */</span></span>
<span class="line"><span style="color:#A6ACCD;">.flex .media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.flex .media__content {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex: 1 1 0%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    min-width: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* CSS Grid Layout */</span></span>
<span class="line"><span style="color:#A6ACCD;">.grid .media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: fit-content(120px) minmax(0, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b5c49d4bfc445d9906e5b7979a9c1b7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/xxzmbgw" target="_blank" rel="noreferrer">https://codepen.io/airen/full/xxzmbgw</a></p></blockquote><p>CSS Flexbox 和 CSS Grid 布局，不管是 <code>ltr</code> 还是 <code>trl</code> ，都不需要针对不同的书写模式或阅读模式添加额外的 CSS 规则。但对于像 CSS Float 布局，要实现类似 CSS Flexbox 或 Grid 的布局，就需要针对不同的书写模式或阅读模式设置不同的 CSS 样式规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.float .media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flow-root; /* 清除浮动 */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.float .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.float [dir=&quot;rtl&quot;] .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f6e4d1300024052a1535bf143937a47~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/xxzmbgw" target="_blank" rel="noreferrer">https://codepen.io/airen/full/xxzmbgw</a></p></blockquote><p>如果仅从效果上来看，这样的方案的确是解决了<code>dir</code> 或 <code>direction</code> 带来的差异性，但这同时也为开发者增加了不少的工作量，代码也变得更难维护。事实上呢？在 Web 中的 <code>RTL</code> 还有很多事情需要做，甚至是很多技术细节，只有掌握这些，才能在 <code>RTL</code> 这样的场景中游刃有余。</p><h2 id="多语言布局核心概念" tabindex="-1">多语言布局核心概念 <a class="header-anchor" href="#多语言布局核心概念" aria-label="Permalink to &quot;多语言布局核心概念&quot;">​</a></h2><p>多语言 Web 布局，需要了解和掌握的核心概念主要有：</p><ul><li>RTL；</li><li>CSS 逻辑特性；</li><li>CSS 书写模式。</li></ul><p>我们先从 RTL 开始！</p><h3 id="rtl-简介" tabindex="-1">RTL 简介 <a class="header-anchor" href="#rtl-简介" aria-label="Permalink to &quot;RTL 简介&quot;">​</a></h3><p>RTL 是 “Right To Left” 首字母的缩写，简单地说就是从右到左，在 Web 中主要是指布局和浏览方式。来看一个 RTL 的 Web 示例图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd7f2172a6ef45f18dffac117ca97fdb~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>国内大多数 Web 开发者面对的 Web 排版方式（或者说书写方式）大多是 LTR（即“Left To Right”）。如果你使用浏览器开发者工具审查代码，你会发现客户端下的 <code>&lt;html&gt;</code> 元素的 <code>dir</code> 或它对应的 <code>direction</code> 属性的默认值会是 <code>ltr</code> 。</p><p>注意，HTML 标签元素的 <code>dir</code> 和 CSS 的 <code>direction</code> 属性的值主要有 <code>ltr</code> 和 <code>rtl</code> ，它们分别对应两种书写模式或阅读模式：</p><ul><li><strong>LTR</strong> 书写模式或阅读模式下，HTML 的 <code>dir</code> 和 CSS 的 <code>driection</code> 属性对应的值是 <code>ltr</code> ，表示从左往右书写（或阅读）；</li><li><strong>RTL</strong> 书写模式或阅读模式下，HTML 的 <code>dir</code> 和 CSS 的 <code>direction</code> 属性对应的值是 <code>rtl</code> ，表示从右往左书写（或阅读）。</li></ul><p>两者在 Web 布局中对应的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cf6994c962748d3992131327f113adf~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>正如你所看到的，对于 RTL，文本是从右向左读取的，这正好与 LTR 相反。幸运的是，客户端（比如浏览器）对这方面有较好的支持。如果我们希望切换文档语言的排列方向，最简单的方式就是在文档根元素（即 <code>&lt;html&gt;</code>）显式地设置 <code>dir</code> 属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;html dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- HTML 中其他元素 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><p>当 <code>dir</code> 属性的值被更改时，Web 中的元素会自动切换（但有一个前提，这些元素没有设置其他的属性，比如 <code>float</code>、<code>text-align</code>等）。不过需要特别提出的是，<code>dir</code> 属性值要是为 <code>auto</code> 时，它根据解析的内容自动切换方向。就这一点而言，<a href="https://www.w3.org/TR/2011/WD-html5-author-20110809/global-attributes.html" target="_blank" rel="noreferrer">HTML规范也有相关的描述</a>：</p><blockquote><p><strong>当文本的排列方向确实未知时，建议开发者仅将此值（<strong><strong><code>dir=&quot;auto&quot;</code></strong></strong>）作为最后的手段，并且不能应用于服务端</strong> 。</p></blockquote><p>另外，除了在 <code>&lt;html&gt;</code> 根元素上之外的任何元素上，我们都可以显式设置 <code>dir</code> 属性。当元素显式设置了 <code>dir</code> 属性值时，客户端会根据 <code>dir</code> 属性做出相应的客户端样式解析。比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p dir=&quot;ltr&quot;&gt;我是一个段落&lt;/p&gt;</span></span></code></pre></div><p>客户端对应的样式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p[Attributes Style] { </span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: ltr; </span></span>
<span class="line"><span style="color:#A6ACCD;">    unicode-bidi: isolate; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>如果显式在元素上设置 <code>dir</code> 的值为 <code>rtl</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p dir=&quot;rtl&quot;&gt;أهلا وسهلا بك في المقال!&lt;/p&gt;</span></span></code></pre></div><p>客户端对应的样式则会变成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p[Attributes Style] { </span></span>
<span class="line"><span style="color:#A6ACCD;">     direction: rtl; </span></span>
<span class="line"><span style="color:#A6ACCD;">     unicode-bidi: isolate; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上面我们看到的是 HTML 元素上 <code>dir</code> 属性取值不同带来的差异。除此之外，在 CSS 中可以通过<code>direction</code> 属性来做相应的调整。如果你去查看Facebook的中文版本和阿拉伯语版本，就会发现它们之间的差异。</p><p>先来看中文版本，通过浏览器开发者工具，你会看到像下图这样的结果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0ae376b5ac416c8c179b11509f51c7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>可以看到，显式地在 <code>body</code> 中设置了 <code>direction: ltr</code>（正好和 <code>&lt;body&gt;</code> 中 <code>dir</code> 的 <code>ltr</code> 相匹配）。对于 <code>unicode-bidi</code> 属性，这里暂且忽略，就当这个属性未显式地在样式中设置。接着继续看另外一种场景（切换到阿拉伯版本的 Facebook），你会发现在阿拉伯语版本的时候，<code>&lt;body&gt;</code> 中的 <code>dir</code> 属性的值变成了 <code>rtl</code>，同时浏览器默认的 <code>direction</code> 和 CSS 中显式地在 <code>body</code> 中设置的<code>direction</code> 都有所调整：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b461e92d3c6241588427e1744e87a8b7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>从最佳实践来看，更建议在 <code>&lt;html&gt;</code> 根元素上定义 <code>dir</code> 属性的值，以确保在没有显式设置 CSS 的 <code>direction</code> 样式的情况下也能较好实现双向布局。</p><p>也就是说，你在构建一个多语言的 Web 网站或 Web 应用时，首先要做的是在 <code>&lt;html&gt;</code> 标签元素上显式设置 <code>dir</code> 属性，最好也显式设置 <code>lang</code> 属性，因为 <code>lang</code> 设置的语言的默认书写方式和阅读方式和 <code>dir</code> 属性的值是相匹配的。比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 简体中文 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;zh-Hans&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 阿拉伯语 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 英文 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span></code></pre></div><h3 id="ltr-和-rtl-设计上的差异" tabindex="-1">LTR 和 RTL 设计上的差异 <a class="header-anchor" href="#ltr-和-rtl-设计上的差异" aria-label="Permalink to &quot;LTR 和 RTL 设计上的差异&quot;">​</a></h3><p>如果你以前开发主要针对的是 LTR 模式，现在突然要过渡到 RTL 模式。给你最直观的差异就是 <strong>UI 设计上的变化</strong> ，简单地说，<strong>RTL 相对于 LTR 就是一个水平翻转的设计</strong> 。正如前面向大家展示的 Facebook 中文版（LTR）和阿拉伯语版本（RTL）：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06c149cf100a49ca95e7bdb0782cecf9~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了更好地展示 LTR 和 RTL 在翻转设计上的差异，我们把事情缩小一些，就拿最典型的一个模块来举例，即媒体对象（Media Object）：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bdef22949ca445d9b3d265fb9c23927~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>针对于这样的一个模块，HTML 结构可能像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- LTR --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;figure class=&quot;media__object&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src=&quot;media-object.jpg&quot; alt=&quot;Meida object&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__title&quot;&gt;Card Title&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;media__describe&quot;&gt;Card Describe&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- RTL --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;rtr&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;figure class=&quot;media__object&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src=&quot;media-object.jpg&quot; alt=&quot;وسائط الإعلام الكائن&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__title&quot;&gt;بطاقة العنوان&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;media__describe&quot;&gt;(وصف&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><blockquote><p>注意，整站是同一种书写模式或阅读模式，<code>dir</code> 最好设置在 <code>&lt;html&gt;</code> 或 <code>&lt;body&gt;</code> 元素上。</p></blockquote><p>两者最大的差别，就是 <code>&lt;div class=&quot;media&quot;&gt;</code> 容器中 <code>dir</code> 的值分别是 <code>ltr</code> （LTR）和 <code>rtl</code> （RTL）。</p><p>添加一些非布局的样式，你将看到的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/716431447a104dc19a72a00e81efd34f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>正如上图所示，浏览器可以根据 HTML 的 <code>dir</code> 属性值来识别文本书写方式，因为它是在 Unicode 字符集中分配的。但对于 Web 布局，还是需要额外通过 CSS 代码来实现。</p><p>你可以使用 CSS Flexbox 或 CSS Grid 来构建，这里使用 CSS Flexbox ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.media__content {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex: 1 1 0%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    min-width: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6127ec895434157a7ae5450280da5f6~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/wvXRaZK" target="_blank" rel="noreferrer">https://codepen.io/airen/full/wvXRaZK</a></p></blockquote><p>这就是 CSS Flexbox （或 CSS Grid）构建 LTR 和 RTL 布局的优势之一，具体原因，稍后会介绍。如果换成其他的布局方式，你要做的事情就会更多一些，比如 CSS 浮动布局。如果你只对 <code>figure</code> 做一个左浮动：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: left; </span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>你将看到的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8b5e3b8bf9b40c99291bdc78f546289~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了达到让阿拉伯语（LRT）布局也能达到预期效果，在还没有 CSS 逻辑属性之前，你需要在 <code>[dir=&quot;rtl&quot;]</code> 下调整浮动的方向：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float:left;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[dir=&quot;rtl&quot;] .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>当然，如果使用逻辑属性来替代上面的物理属性，也会变得容易一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: inline-start;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-end: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* 降级处理 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@supports not (float: inline-start) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">        float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    [dir=&quot;rtl&quot;] .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">        float: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-left: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1e13e9d1084456ca241982d8eded2f7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/jOKXbEB" target="_blank" rel="noreferrer">https://codepen.io/airen/full/jOKXbEB</a></p></blockquote><p>你可能发现了，使用浮动布局，主要因为我们使用的都是物理属性，如果将物理属性更换成逻辑属性，事情也会变得容易得多。当然，要是你从未接触过 CSS 逻辑属性，你现在并不知道 CSS 逻辑属性是什么，这也不要紧，稍后我们会详细介绍 CSS 逻辑属性在多语言布局中的作用和对应的优势！</p><h3 id="ltr-和-rtl-混合-让阅读变得更困难" tabindex="-1">LTR 和 RTL 混合，让阅读变得更困难 <a class="header-anchor" href="#ltr-和-rtl-混合-让阅读变得更困难" aria-label="Permalink to &quot;LTR 和 RTL 混合，让阅读变得更困难&quot;">​</a></h3><p>就 LTR 或者 RTL 单方面而言，都不是太难的事情，但是要将两者混合使用，比如中文（或英文）与阿拉伯语系混合在一起排版，而且布局是 LTR，将会发生什么呢？它们混合在一起的排版效果可能看起来像下图这样：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09b5415973de4454bfd7d605c36f4ae7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>就上图而言（默认是 LTR），对于一位阿拉伯语的用户来说，阅读起来是痛苦的，因为排版很混乱。它的读取顺序如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbcf59f6b38046f0bde513ae3d39ce70~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了避免这个现象，我们应该尽可能设置适当的语言方向。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 中文和阿拉伯文混合 Left To Right --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/182774/blueberry-cheesecake.jpg&quot; alt=&quot;蓝莓芝士蛋糕&quot; class=&quot;media__object&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__body&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__heading&quot;&gt;بالتوت البري 蓝莓芝士蛋糕كيفية عمل  كيفية عمل&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;هنا سيكون شرح معين عن هذه الوصفة. Where the recipe is described. كيفية عمل بالتوت البري。&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 中文和阿拉伯文混合 Right To Left --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;rtl&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;img src=&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/182774/blueberry-cheesecake.jpg&quot; alt=&quot;蓝莓芝士蛋糕&quot; class=&quot;media__object&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__body&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__heading&quot;&gt;بالتوت البري 蓝莓芝士蛋糕كيفية عمل  كيفية عمل&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;هنا سيكون شرح معين عن هذه الوصفة. Where the recipe is described. كيفية عمل بالتوت البري。&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><p>比如我们显式地在元素上设置 <code>dir=&quot;rtl&quot;</code>，结果就会更符合预期的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a33cc29354e4191b01c36920dda747c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>对于混合排版的场景，我们还可以显式地给 <code>dir</code> 设置属性值为 <code>auto</code>。这样可以由用户代理（比如浏览器）来决定方向。它在解析元素中字符时会运用一个基本算法，直到发现一个具有强方向性的字符，然后将这一方向应用于整个元素。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a651a72eec648c4ba3c7e942cff54f5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/jOKXpQa" target="_blank" rel="noreferrer">https://codepen.io/airen/full/jOKXpQa</a></p></blockquote><h3 id="css-书写模式" tabindex="-1">CSS 书写模式 <a class="header-anchor" href="#css-书写模式" aria-label="Permalink to &quot;CSS 书写模式&quot;">​</a></h3><p>在 Web 开发中，你除了在 HTML 中使用 <code>dir</code> 属性之外，还可以在 CSS 中设置 <code>direction</code> 属性，它们有着相似的特性：</p><ul><li>取值为 <code>ltr</code> 可以实现从左到右排版（Left-To-Right）；</li><li>取值为 <code>rtl</code> 可以实现从右到左排版（Right-To-Left）。</li></ul><p>除此之外，你还可以在 CSS 中使用 <code>writing-mode</code> 属性来定义内容在屏幕上的排版方式，而且它具备的能力要比 <code>dir</code> 或 <code>direction</code> 更强：</p><ul><li><strong><code>horizontal-tb</code></strong> ：定义了内容从左到右水平流动（内联流），从上到下垂直流动（块流）。下一条水平线位于上一条线下方；</li><li><strong><code>vertical-rl</code></strong> ：定义了内容从上到下垂直流动（内联流），从右到左水平流动（块流）。下一条垂直线位于上一行的左侧；</li><li><strong><code>vertical-lr</code></strong> ：定义了内容从上到下垂直流动（内联流），从左到右水平流动 （块流）。下一条垂直线位于上一行的右侧；</li><li><strong><code>sideways-rl</code></strong> ：定义了内容从上到下垂直流动，所有字形，甚至是垂直脚本中的字形，都设置在右侧；</li><li><strong><code>sideways-lr</code></strong> ：内容从上到下垂直流动，所有字形，甚至是垂直脚本中的字形，都设置在左侧。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88fed7100532488b9e1449c253f34cdf~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/poKqOoK" target="_blank" rel="noreferrer">https://codepen.io/airen/full/poKqOoK</a></p></blockquote><p>这里所说的块流和文本流，主要指的是 HTML 块元素的流动方向和文本内容的流动方向，其中文本流也常称“内联方向”：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fb3d1483ced4e9f91eb143d228199b5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>在 Web 中除了文档有流方向一说之外，对于文本同样有流的概念，比如说英文，一般是从左到右，阿拉伯文是从右到左，而日文（古代的中文）从上到下，从右到左：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a05873bc3dd4409ba36cee911eb3e338~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>不管是文档流还是文本流，它们都具有相应的物理特性，比如从左到右，从右到左，从上到下，从下到上。即，它们都没有离开 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> 方向。 如此一来，一旦流被书写模式改变了，那么一些物理方向就会造成混乱了，比如 LTR 换成 RTL，<code>left</code> 就不再是 <code>left</code> 了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.card__heading { </span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 6px 6px 0 0; </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[data-lang=&quot;Japanese&quot;] .card__heading{ </span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 0 6px 6px 0; </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[data-lang=&quot;Mongolian&quot;] .card__heading{ </span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 6px 0 0 6px </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2ae56cb1f094ce9aa2fdc00702d637c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>甚至有的时候宽度不是宽度，比如 <code>horizontal-tb</code> 切换到 <code>vertical-rl</code> 模式时，宽度就变成了高度。</p><p>因此，原本这些描述 CSS 特性的物理属性，尤其是和方向有关的，都会随着书写模式 <code>writing-mode</code> 有所变动。简单地说，<strong>在构建多语言 Web 布局时，在 CSS 中要使用流相对值来替代相应的物理值</strong> 。</p><p>首先我们要使用块（Block）和内联（inline）两个维度来替代大家熟悉的 <code>x</code> 轴（水平）和 <code>y</code> 轴（垂直）。</p><ul><li>内联维度是在使用的书写模式中运行的文本行（文本流）所在的维度。即，对应于文本流（阅读方式）的轴线。例如，英文是从左到右的文本流（或阿拉伯文从右到左），因此内联轴是水平的；对于日文，它的阅读方式是自上而下，因此内联轴是垂直的。</li><li>块维度是另一个维度，以及块（如段落）相继显示的方向。在英语和阿拉伯语中，这些是垂直的，而在任何垂直书写模式中，这些是水平的。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2810f49556f4a82bb065666f5a85bcd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>我们可以换过一种方式来理解：</p><ul><li><strong>块轴</strong> ：主要定义网站文档（元素块）流，CSS 的书写模式 <code>writing-mode</code> 会影响块轴的方向；</li><li><strong>内联轴</strong> ：主要定义网站的文本流方向，也就是文本的阅读方式，CSS 的 <code>direction</code> 或 HTML 的<code>dir</code> 会影响内联轴的方向。</li></ul><p>简单地说，<strong><code>writing-mode</code></strong> <strong>能很好</strong>* <em>地</em>***和块轴、行内轴、阅读模式以及书写模式结合起来** ：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f549ea3458834984a1cd82797b98dfa6~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了更好地匹配书写模式或者说多语言的 Web 布局，我们需要从一些理念上做出改变。</p><p>首先是用“开始”和“结束”来替代以往的 TRBL（即 <code>top</code> 、<code>right</code> 、<code>bottom</code> 和 <code>left</code> ）：</p><ul><li><strong>开始（<code>start</code>）</strong> 这对应于文本的方向，并反映了文本的侧边，你将从哪里开始阅读。对于英文，开始对应于左。对于阿位伯文来说，对应于右。</li><li><strong>结束（<code>end</code>）</strong> 这也对应于文本的方向，并反映了文本的侧边，你将在哪里结束阅读。对于英文，结束对应于右。对于阿拉伯文来说，对应于左。</li></ul><p>另一个就是“逻辑维度”来替代“物理维度”。前面的内联轴、块轴、开始和结束结合起来可以构建 CSS 逻辑属性中的流相对值。即 <code>block-start</code> 、<code>block-end</code> 、 <code>inline-start</code> 和 <code>inline-end</code> 。这几个属性也被称为<strong>逻辑维度</strong> ，其实就是用来指定在对应轴上的开始和结束位置。它们对应的就是我们熟悉的 <code>top</code> 、<code>right</code> 、 <code>bottom</code> 和 <code>left</code> 几个物理方向。</p><p>换句话说，在 CSS 逻辑中，使用流相对值来代替相应的物理值。正如前面所述，流相对值（逻辑维度）和 CSS 的书写模式 <code>writing-mode</code> 或阅读方式 <code>direction</code> 有关。</p><p>接下来，我们通过几种典型的语言为例，来向大家阐述逻辑维度和物理维度的映射关系。 首先来看英文，英文的阅读方式一般是从左往右（即 <code>dirction: ltr</code> 和 <code>writing-mode:horizontal-tb</code> ），这种模式常称为 <strong>LTR</strong> （Left-To-Right）。它的内联轴是水平的，块轴是垂直的，相应的逻辑维度和物理维度映射关系如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/775aa7a121834eb380ed7dc450bacaae~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><table><thead><tr><th><strong>逻辑维度</strong></th><th><strong>物理维度</strong></th></tr></thead><tbody><tr><td><code>inline-start</code></td><td><code>left</code></td></tr><tr><td><code>inline-end</code></td><td><code>right</code></td></tr><tr><td><code>block-start</code></td><td><code>top</code></td></tr><tr><td><code>block-end</code></td><td><code>bottom</code></td></tr></tbody></table><p>接着来看阿拉伯文，它的阅读方式是从右往左（即 <code>direction: rtl</code> 和 <code>writing-mode:horizontal-tb</code>），这种模式常称为 <strong>RTL</strong> （Right-To-Left）。它的内联轴是水平的，块轴是垂直的，相应的逻辑维度和物理维度映射关系如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/630cafe59bd34c2d9e7e10da90523857~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><table><thead><tr><th><strong>逻辑维度</strong></th><th><strong>物理维度</strong></th></tr></thead><tbody><tr><td><code>inline-start</code></td><td><code>right</code></td></tr><tr><td><code>inline-end</code></td><td><code>left</code></td></tr><tr><td><code>block-start</code></td><td><code>top</code></td></tr><tr><td><code>block-end</code></td><td><code>bottom</code></td></tr></tbody></table><p>再来看日文，竖排（有点类似中国古代的汉字书写模式），对应的 <code>writing-mode: vertical-rl</code> 。它的内联轴是垂直的，块轴是水平的，相应的逻辑维度和物理维度映射关系如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57d642bbcc9a419e9b46a02578639404~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><table><thead><tr><th><strong>逻辑维度</strong></th><th><strong>物理维度</strong></th></tr></thead><tbody><tr><td><code>inline-start</code></td><td><code>left</code></td></tr><tr><td><code>inline-end</code></td><td><code>right</code></td></tr><tr><td><code>block-start</code></td><td><code>top</code></td></tr><tr><td><code>block-end</code></td><td><code>bottom</code></td></tr></tbody></table><p>最后再来看蒙文，也是竖排，和日文不同的是 <code>writing-mode: vertical-lr</code> 。它的内联轴是垂直的，块轴是水平的，相应的逻辑维度和物理维度映射关系如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6da342e400a3430e976fc503bf1e7ed2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><table><thead><tr><th><strong>逻辑维度</strong></th><th><strong>物理维度</strong></th></tr></thead><tbody><tr><td><code>inline-start</code></td><td><code>right</code></td></tr><tr><td><code>inline-end</code></td><td><code>left</code></td></tr><tr><td><code>block-start</code></td><td><code>top</code></td></tr><tr><td><code>block-end</code></td><td><code>bottom</code></td></tr></tbody></table><h3 id="css-逻辑属性" tabindex="-1">CSS 逻辑属性 <a class="header-anchor" href="#css-逻辑属性" aria-label="Permalink to &quot;CSS 逻辑属性&quot;">​</a></h3><p>正如前面你所看到的，如果你要构建一个多语言的 Web 网站或 Web 应用，你需要同时考虑 LTR 和 RTL 的排版，甚至还需要考虑垂直方向的排版。在这种环境之下，以前的物理特性就不能很好地满足 Web 的布局所需，即使是能满足，也会给 Web 开发者增加额外的工作量，这些额外增加的代码，也会让你的项目代码变得冗余，不易于维护。比如下面这个示例。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91670e8b5d2c4143b1b389368ec987ba~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">[dir=&quot;rtl&quot;] .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>注意，使用 CSS Flexbox 或 CSS Grid 不会这么复杂，这里拿浮动布局为例，让大家对物理属性和逻辑属性有一个明显的感观。</p><p>同样是实现上面示例的效果，要是换 CSS 逻辑属性来实现，就显得要简单地多：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: inline-start;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-end: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>我想你已经感受到两者（CSS 物理属性和逻辑属性）之间的差异了，如果还没有体会到，我想用下图来向大家展示它们之间的差异：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/361d9aa77108497eb12a36f1370ad4a6~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>使用 CSS 逻辑属性时，只需要设置 <code>float</code> 的值为 <code>inline-start</code> ，另外间距只需要设置 <code>margin-inline-end</code>，就可以将根据 HTML 文档的方向（<code>dir</code> 的值）自动匹配。这不是很强大吗?</p><p>这个示例也从侧面说明了 CSS 逻辑属性的作用以及它在多语言排版中的重要性。其实，自 CSS 引入逻辑属性之后，CSS 带有方向性的属性都有相应的变化。尤其是我们熟悉的 CSS 盒模型相关属性，比如 <code>margin</code> 、<code>padding</code> 、<code>width</code> 和 <code>height</code> ；元素定位属性，比如 <code>top</code> 、<code>right</code> 、<code>bottom</code> 和 <code>left</code> ；浮动方向、文本对齐方向等都可以映射到对应的 CSS 逻辑属性上。</p><p>简单地说，</p><ul><li>只要 CSS 带有 <code>-top</code> 、<code>-right</code> 、<code>-bottom</code> 和 <code>-left</code> 属性，比如 <code>margin-left</code> 、<code>padding-top</code> 等，都可以映射到 <code>-start</code> 和 <code>-end</code> 属性上，比如 <code>margin-inline-start</code> 和 <code>padding-block-start</code> 等。</li><li>只要 CSS 的属性值带有 <code>-top</code> 、<code>-right</code> 、<code>-bottom</code> 和 <code>-left</code> ，比如 <code>float: left</code> ，都可以映射到 <code>-start</code> 和 <code>-end</code> 上，比如 <code>float: inline-start</code>。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b91af72f9e0482e8ab517462c007a41~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>CSS 物理属性和逻辑属性之间映射关系，更详细的如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4575cc9f4e934048945c56a7be38da1a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了加深大家对 CSS 逻辑属性和物理属性差异的理解，我们再来看 Inline 和 Block之间的差异。</p><p>在使用 CSS 逻辑属性时，你经常会看到关键字 <code>inline</code> 或 <code>block</code> 。简单地说，CSS 逻辑属性使用 <code>inline</code> （内联维度）和 <code>block</code> （块维度）替代了 CSS 物理属性中的 <code>x</code> （水平维度）和 <code>y</code> （垂直维度）。为什么要这么做呢？我们来看下面这个示例。</p><p>在还没有 CSS 逻辑属性之前，Web 开发者一般在 <code>x</code> 和 <code>y</code> 维度分别会使用：</p><ul><li><code>width</code> 、<code>min-width</code> 和 <code>max-width</code> 来描述元素盒子在水平方向的尺寸，即宽度；</li><li><code>height</code> 、<code>min-height</code> 和 <code>max-height</code> 来描述元素盒子在垂直方向的尺寸，即高度。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 50vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 50vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>基于这个模式之下，如果我们只是调整 HTML 的 <code>dir</code> 或 CSS 的 <code>direction</code> 值，这个布局不会有什么太大的影响，那是因为 <code>ltr</code> 或 <code>rtl</code> ，宽度依然还是宽度，高度依然还是高度，它改变的只是文本流的方向：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/514b368392844fe38b2a57ddec49f48d~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/MWXZxKo" target="_blank" rel="noreferrer">https://codepen.io/airen/full/MWXZxKo</a></p></blockquote><p>但如果使用 <code>writing-mode</code> 来改变书写模式，比如从 <code>horizontal-tb</code> 切换到 <code>vertical-lr</code> （或 <code>vertical-rl</code>），正常情况之下，宽度要切换成高度，高度切换成宽度。但实际情渲染出来的情形并非如此，它依旧是宽度是宽度，高度是高度，但元素的内容排版却不一样：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d41a7eeb41f244f98331e2d4af12e167~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/MWXLOWb" target="_blank" rel="noreferrer">https://codepen.io/airen/full/MWXLOWb</a></p></blockquote><p>如果需要符合预期，就需要使用逻辑属性来替代物理属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box {</span></span>
<span class="line"><span style="color:#A6ACCD;">    inline-size: 50vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">    block-size: 50vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/359d531bbaca42cf9d514c5980e0159c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/NWzowrG" target="_blank" rel="noreferrer">https://codepen.io/airen/full/NWzowrG</a></p></blockquote><p>同样拿不同的语言为例，比如英文（<code>writing-mode: horizontal-tb</code> 和 <code>direction: ltr</code>）、阿拉伯文（<code>writing-mode: horizontal-tb</code> 和 <code>direction: rtl</code>）、日文（<code>writing-mode: vertical-rl</code>）和蒙文（<code>writing-mode: vertical-lr</code>）。具体的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05a4539626f84dff884713b87a5547f5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>你会发现，多语言 Web 布局和 LTR 和 RTL（阅读模式）、CSS 书写模式（水平、垂直）和 CSS 逻辑属性有着紧密的关系。同时不难发现，正因为阅读模式、书写模式的不同，以前的物理特性是无法满足多语言 Web 布局的。</p><p>庆幸的是，在 CSS Flexbox 和 CSS Grid 布局中，和具体的物理方向性已无太紧密关系。比如在 Flexbox 中，不再关注方向，而是更关注主轴和侧轴，而且每根轴不是以物理方向来描述，而是以逻辑方向来描述，即 <code>start</code> 、<code>end</code> 替代以前的 <code>left</code> 、<code>right</code> 、<code>top</code> 和 <code>bottom</code> ：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7881e640db8b4e5fbcf181315fa1413b~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>特别是进入到 CSS Grid 的时代，方向性更不重要了。因为在 Grid 的时代变成了：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/141ce180c8fe4739ad9f13a18e5cc3ab~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>在 Flexbox 和 Grid 中，不再有具体的方向性的概念，有的只是开始（<code>start</code>）和结束（<code>end</code>）。如果你用过了 Flexbox 布局或 Grid 布局，我想你已经有用到框对齐（Box Alignment）模块中的对齐属性，比如 <code>justify-*</code> （<code>justify-content</code> 、 <code>justify-self</code>）。它们可以取物理值的 <code>left</code> 和 <code>right</code> ，但在实际使用的时候，却更多使用的是 <code>flex-start</code> 、<code>flex-end</code> （Flexbox 布局中对齐）和 <code>start</code> 、 <code>end</code> （CSS Grid 布局中对齐）。</p><p>也就是说，虽然 <code>justify-*</code> 可以取值 <code>left</code> 和 <code>right</code> 值，但它们基本被逻辑属性值 <code>start</code> 和 <code>end</code> 替代（在 CSS Flexbox 中还有 <code>flex-start</code> 和 <code>flex-end</code>）。对于大部分开发者来说，它可能就从未使用过 <code>left</code> 和 <code>right</code> 属性值。</p><h2 id="css-flexbox-中的-ltr-和-rtl" tabindex="-1">CSS Flexbox 中的 LTR 和 RTL <a class="header-anchor" href="#css-flexbox-中的-ltr-和-rtl" aria-label="Permalink to &quot;CSS Flexbox 中的 LTR 和 RTL&quot;">​</a></h2><p>Flexbox 是现代 Web 布局中最受欢迎的模式之一。主要是因为有较大的灵活性，而且在大多数情况之下消除了为 RTL 开发重新写样式。简单地说，LTR 和 RTL可以完美的融入到 Flexbox 布局中。</p><p>Flexbox 具备这样的特性主要是因为它是基于文档的书写模式，而书写模式又主要用于指定块在页面上的布局方式。在 Flexbox 布局中，Flex 项目根据文档的书写模式来分配。在英语和阿拉伯语中，书写模式（<code>writing-mode</code>）的默认值是<code>horizontal-tb</code> ，只是 <code>dir</code> 分别是 <code>ltr</code> （英语）和 <code>rtl</code> （阿拉伯文）：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49533eb13b3a496c9e1789119922d1e3~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>了解 Flexbox 的同学都知道，在 Flexbox 容器中有一个 <code>flex-direction</code> 属性，在主轴方向（Main Axis）有两个属性值 <code>row</code>（默认值）和 <code>row-reverse</code>。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97eb7e4938c345499f1dd935e12d99ed~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>从效果上看， <code>flex-direction</code> 可以很轻易地实现类似 LTR 和 RTL 的效果。但事实上，它和 <code>dir</code>（或 <code>direction</code>）有着紧密的关系。</p><p>如果 <code>dir</code> (或 <code>direction</code> )的值为 <code>ltr</code> 时，则 <code>flex-direction</code> 取值为 <code>row</code> 时，Flex 项目从左到右排列，如果取值为 <code>rtl</code> 时，则 Flex 项目从右到左排列。而 <code>flex-direction</code> 取值为 <code>row-reverse</code> 时效果刚好与 <code>row</code> 相反。简单地说，HTML 的 <code>dir</code> 和 CSS 的 <code>direction</code> 取值对 <code>flex-direction</code> 渲染结果有着直接的影响：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2753aae3c83d4d4e813e925b278f7442~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/oNympPL" target="_blank" rel="noreferrer">https://codepen.io/airen/full/oNympPL</a></p></blockquote><p>从上面示例我们可以得知，默认情况之下，<code>flex-direction: row</code> 就相当于 <code>dir=&quot;ltr&quot;</code> （或 <code>direction: ltr</code>），<code>flex-direction:row-reverse</code> 相当于 <code>dir=&quot;rtl&quot;</code> （或 <code>direction: rtl</code>）。这也给开发者造成一种错误的认识，不少开发者会为不同阅读模式排版提供不同的样式规则。比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 拉丁语体系 Left To Right*/</span></span>
<span class="line"><span style="color:#A6ACCD;">[dir=&quot;ltr&quot;] .flex--container {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* 阿拉伯语体系 Right To Left*/</span></span>
<span class="line"><span style="color:#A6ACCD;">[dir=&quot;rtl&quot;] .flex--container {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex-direction:row-reverse</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>事实上，在 CSS Flexbox 布局中，元素是根据文档的书写模式分布的。拉丁语体系（比如英文）和阿位伯语体系（比如阿拉伯语）的默认书写模式为 <code>horizontal-tb</code>。即 <strong>内容从左到右水平流动，从上到下垂直流动。下一条水平线位于前一条平线的下方</strong>。</p><p>当页面的方向被更改为 RTL 时（即 <code>dir=&quot;rtl&quot;</code> 或 <code>direction: trl</code>），Flexbox 会相应地翻转它的元素（Flex 项目）。这是一个巨大的好处！下面图展示了如何根据方向翻转 Flexbox 轴（主轴）。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fadcf12f55841b7a363c6e5271c69d8~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>也就是说，使用 CSS Flexbox 构建 Web 布局时，我们不需要针对 LTR 和 RTL 提供不同的样式，它可以根据 <code>dir</code> 或 <code>direction</code> 自动翻转。 <code>flex-direction:row</code> 和 <code>dir</code> 结合起来就可以很好地实现 LTR 和 RTL 的布局效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cb13870d43f41d0b2f2e698ba8608a3~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>利用上面说到的特性，重新来构造媒体对象的布局效果（中文版本和阿拉伯语版本），它会比 CSS 浮动简单地多：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* CSS Float Layout: CSS 逻辑属性 */</span></span>
<span class="line"><span style="color:#A6ACCD;">.media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flow-root;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    float: inline-start;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-end: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.media__content {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: table-cell;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* CSS Float Layout: CSS 物理属性 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@supports not (float: inline-start) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">        float: left;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-right: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">    [dir=&quot;rtl&quot;] .media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">        float: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-left: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-right: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* CSS Flexbox Layout */</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.media__object {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex-shrink: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d75f3609c0e438fb91569f0a779f4bb~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/KKeJQaj" target="_blank" rel="noreferrer">https://codepen.io/airen/full/KKeJQaj</a></p></blockquote><p>刚才提到过，Flexbox 是基于文档书写模式来布局的，而且在介绍 <code>flex-direction</code> 以及 Flexbox 中对齐方式时有说过，“<strong>CSS 书写模式</strong> <strong><code>writing-mode</code></strong> <strong>会影响</strong> <strong><code>flex-direction</code></strong> <strong>和对齐方式的渲染结果</strong> ”。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3823bd3b33c420ea300828595ee87b3~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>从效果上来看，<code>writing-mode</code> 取值为 <code>horizontal-tb</code> 时，LTR 、RTL 和 <code>flex-direction: row</code> 结合效果都是完美的。但是将 <code>writing-mode</code> 更换为垂直排版（<code>vertical-lr</code> 和 <code>vertical-rl</code>）时，整体的效果就不是那么的理想了。</p><p>如果你需要在竖排的时候效果也不错，那就要在设计上做一些调整，比如：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d2091ea03e648579708d5346f5a21b1~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>针对这种情况，需要在竖排模式下，<code>flex-direction</code> 从默认值 <code>row</code> 更换成 <code>column</code> 。有关<code>writing-mode</code> 、<code>dir</code> 对 <code>flex-direction</code> 取值的影响如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fed663371024f1785131318fd8eda68~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/gOKEavY" target="_blank" rel="noreferrer">https://codepen.io/airen/full/gOKEavY</a></p></blockquote><p>来看一个简单示例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b70242f85a66428097d576db7fbed1a2~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;Winter Hiking&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;figures&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;&lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;&lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;&lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 10rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    writing-mode: var(--writing-mode, vertical-lr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.figures {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: repeat(9, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows: repeat(9, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">figure:nth-child(1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 4 / 7;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 1 / 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">figure:nth-child(2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 4 / 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 1 / 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    z-index: 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">figure:nth-child(3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 6 / 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 3 / 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    z-index: 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">h1.lr {</span></span>
<span class="line"><span style="color:#A6ACCD;">    transform: rotate(180deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>在这个示例中，采用的是 Flexbox 和 Grid 结合的布局，图片区域采用的是 CSS 网格布局，标题和图片区域采用的是 Flexbox 布局。在 Flex 容器 <code>.wrapper</code> 设置 <code>writing-mode</code> 的值为 <code>vertical-lr</code> 或 <code>vertical-rl</code> （相互切换）：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1516e879d6d84ba389db5c740d4833ea~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/bGKZVZw" target="_blank" rel="noreferrer">https://codepen.io/airen/full/bGKZVZw</a></p></blockquote><h2 id="css-grid-中的-ltr-和-rtl" tabindex="-1">CSS Grid 中的 LTR 和 RTL <a class="header-anchor" href="#css-grid-中的-ltr-和-rtl" aria-label="Permalink to &quot;CSS Grid 中的 LTR 和 RTL&quot;">​</a></h2><p>和 CSS Flexbox一样，CSS Grid 也依赖于文档的书写模式布局，这和使用 Flexbox 有同样的好处。同样拿媒体对象（Media Object）为例，当方向是 LTR 时，缩略图 <code>.media__objeft</code> 在左侧，主内容 <code>.media__content</code> 在右侧，反之亦然。而且，使用CSS Grid 时，翻转将根据页面的方向自动完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- LTR: Left To Right--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;ltr&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;figure class=&quot;media__object&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src=&quot;media-object.jpg&quot; alt=&quot;Meida object&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__title&quot;&gt;Card Title&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;media__describe&quot;&gt;Card Describe&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- RTL: Right To Left --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;media&quot; dir=&quot;rtr&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;figure class=&quot;media__object&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src=&quot;media-object.jpg&quot; alt=&quot;وسائط الإعلام الكائن&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/figure&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;media__content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3 class=&quot;media__title&quot;&gt;بطاقة العنوان&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;media__describe&quot;&gt;(وصف&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.media {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: auto minmax(0, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78f40113b0e04576ae88f5a91299ee71~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/JjZzXLW" target="_blank" rel="noreferrer">https://codepen.io/airen/full/JjZzXLW</a></p></blockquote><p>同样的，CSS Grid 也会受 <code>writing-mode</code> 的影响，比如上面示列，当 <code>writing-mode</code> 的值为 <code>vertical-lr</code> 和 <code>vertical-rl</code> 时的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5afc164432f24b06bbd60ad1c1b1d29a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>我们一起来看一个有关于 Logo 的布局设计，它是使用 CSS Grid 和 <code>writing-mode</code> 结合的案例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cefddeae48946e48330276684a74053~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/jOKJrmq" target="_blank" rel="noreferrer">https://codepen.io/airen/full/jOKJrmq</a></p></blockquote><p>这个案例需要的 HTML 结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;made&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;by&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;few&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: repeat(2, min-content);</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows: repeat(3, min-content);</span></span>
<span class="line"><span style="color:#A6ACCD;">    place-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    place-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">span:nth-child(1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 1 / -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 150%;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">span:nth-child(2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 1 / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 2 / 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    writing-mode: vertical-rl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-orientation: upright;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 80%;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">span:nth-child(3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 2 / 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 165%;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>再来看一个 <a href="http://twitter.com/jensimmons" target="_blank" rel="noreferrer">@JENSIMMONS</a> 的 <a href="https://labs.jensimmons.com/" target="_blank" rel="noreferrer">Layout Lab</a> 网站首页 Hero 区域的布局：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08cb604f650747ceab9e439a3cc8e192~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;header class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;The Experimental Layout Lab&lt;/h1&gt;&lt;h1&gt;of Jen Simmons&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;demo-list&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2&gt;The Conference Talks&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ol&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtu.be/jreccgYLfx8&quot;&gt;Modern Layouts: Getting Out of Our Ruts&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtu.be/aYgMExb-mlo&quot;&gt;Revolutionize Your Page: Real Art Direction on the Web&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtu.be/t0b3uBoDkBs&quot;&gt;Designing with Grid&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtu.be/jBwBACbRuGY&quot;&gt;Everything You Know About Web Design Just Changed&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtu.be/AMPKmh98XLY&quot;&gt;Designing Intrinsic Layouts&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p class=&quot;follow-links&quot;&gt;Follow &lt;a href=&quot;http://twitter.com/jensimmons&quot;&gt;@jensimmons&lt;/a&gt; on Twitter for more as it happens.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;workshop-link&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;https://youtube.com/layoutland&quot;&gt;Layout Land videos&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li&gt;&lt;a href=&quot;http://jensimmons.com&quot;&gt;jensimmons.com&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/header&gt;</span></span></code></pre></div><p>关键性的 CSS 代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">header {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-columns: auto 1fr 1fr 1fr 0.5fr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows: auto 1fr 1fr auto auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    gap: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transform: rotate(-45deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">header h1:nth-child(1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 1 / 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    text-align: right;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">header h1:nth-child(2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    writing-mode: vertical-lr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 3 / 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 2 / 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-self: end;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">header .demo-list {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 1 / 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 4 / span 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-self: end;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.follow-links {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 3 / 6;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-self: start;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: end;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">header .workshop-link {</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-row: 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-column: 4 / 6;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-self: start;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p>Demo 地址：<a href="https://codepen.io/airen/full/vYrPKaw" target="_blank" rel="noreferrer">https://codepen.io/airen/full/vYrPKaw</a></p></blockquote><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>如果你要开发一个多语言网站，或即将要开发一个多语言网站，那么这节课程所介绍的 CSS 知识对于你来说应该会有很大的帮助。开发一个多语言网站，我们需要面对的不是简单翻转设计的需求，我们需要根据不同的书写模式、阅读模式来调整设计，优化 Web 布局。</p><p>庆幸的是，CSS 提供很多特性，可以让我们开发多语言网站变得容易得多。</p><ul><li><strong>CSS Grid 和 CSS Flexbox</strong> ：这两个特性已经用新的逻辑属性方法构建了，不需要更新它们。因为它们都是基于书写模式的布局，以 <code>start</code> 和 <code>end</code> 等方式替代了以往的物理模式 <code>top</code> 、<code>right</code> 、<code>bottom</code> 和 <code>left</code>。</li><li><strong>使用逻辑属性理解工作流</strong> ：在使用到方向相关的特性时，使用逻辑属性来替代物理属性，这样你在编写样式时，就不需要担心跨语言支持。你只需要使用逻辑属性，它就能轻易匹配到你首选的语言。</li><li><strong>根据语言应用对齐</strong> ：逻辑属性可以让我们定义块轴对齐方式(文档流方向，即块流)和行内轴对齐方式(我们读取文本的方向，即文本流)。简单地说，语言会根据自身特性在块轴（Block Axis）和内联轴（Inline Axis）来应用对齐方式。一般情况下，<code>justify-*</code> 用于内联轴（Inline Axis），<code>align-*</code> 用于块轴（Block Axis）对齐。</li><li><strong>方向属性</strong> ：定义文本是从左到右还是从右到左开始，但只有 <code>writing-mode</code> 取值为 <code>horizontal-tb</code> 时才生效。如果把书写模式改成垂直模式，文本的实际方向(从左到右)就会变成从上到下。或者相反，使用 <code>rtl</code> (右到左)值，它将变成从下到上。</li></ul><p>正如前面示例所示，如果你的 Web 网站或 Web 应用是基于 CSS Flexbox 或 CSS Grid 布局，并且把物理属性都使用逻属性来替代，例如：</p><ul><li>使用 <code>inline-size</code> 替代了 <code>width</code>；</li><li>使用 <code>block-size</code> 替代了 <code>height</code>。</li></ul><p>或者：</p><ul><li>使用 <code>inline-start</code> 替代了 <code>left</code>；</li><li>使用 <code>inline-end</code> 替代了 <code>right</code>；</li><li>使用 <code>block-start</code> 替代了 <code>top</code>；</li><li>使用 <code>block-end</code> 替代了 <code>bottom</code>。</li></ul><p>或者:</p><ul><li>使用 <code>*-inline-start</code> 替代了 <code>*-left</code> ，比如 <code>margin-inline-start</code> 替代 <code>margin-left</code>；</li><li>使用 <code>*-inline-end</code> 替代了 <code>*-right</code>， 比如 <code>border-inline-end-width</code> 替代 <code>border-right-width</code>；</li><li>使用 <code>*-block-start</code> 替代了 <code>*-top</code> ，比如 <code>padding-block-start</code> 替代了 <code>padding-top</code>；</li><li>使用 <code>*-block-end</code> 替代了 <code>*-bottom</code> ，比如 <code>border-block-end-width</code> 替代了 <code>border-bottom-width</code>。</li></ul><p>比如下面这个示例：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a85d3b3e41bd445fa60341dc28ac4810~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><blockquote><p>Demo 地址： <a href="https://codepen.io/airen/full/rNKRMKR" target="_blank" rel="noreferrer">https://codepen.io/airen/full/rNKRMKR</a></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.inline-list  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.inline-list li:not(:last-child) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-end: 1rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.inline-form {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.inline-form--field {</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #aaa;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 0.5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-inline-end: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-end: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    border-start-start-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-end-start-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">.inline-form--button {</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #aaa;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 0.5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-inline-start: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    border-start-end-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-end-end-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">blockquote {</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-inline-start: 4px solid #aaa;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 0.75rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding-inline-start: 1.75rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #f5f5f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>基于这些情况之下，你只需要一行代码就可以实现 LTR 和 RTL 的翻转设计：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* LTR */</span></span>
<span class="line"><span style="color:#A6ACCD;">html[lang=&quot;en&quot;] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: ltr;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"><span style="color:#A6ACCD;">/* RTL */</span></span>
<span class="line"><span style="color:#A6ACCD;">html[lang=&quot;ar&quot;] {</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction: rtl;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>或者直接改变 HTML 元素的 <code>dir</code> 属性值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- LTR --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- RTL --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;&lt;/html&gt;</span></span></code></pre></div><p>当然，多语言网站绝不仅仅只是一种翻转设计，它会涉及到其他一些细节和知识点。在下一节课中，我们将一起探讨 LTR 切换到 RTL 时常见的一些错误！希望对大家以后在构建多语言网站时有所帮助！</p>`,263),p=[o];function t(c,i,r,d,C,g){return n(),a("div",null,p)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
