import{_ as s,v as a,b as n,R as l}from"./chunks/framework.6c6b1f36.js";const C=JSON.parse('{"title":"第四章：提升","description":"","frontmatter":{},"headers":[],"relativePath":"docs/you_dont_know_js/scope&closures/ch4.md","filePath":"docs/you_dont_know_js/scope&closures/ch4.md"}'),o={name:"docs/you_dont_know_js/scope&closures/ch4.md"},p=l(`<h1 id="第四章-提升" tabindex="-1">第四章：提升 <a class="header-anchor" href="#第四章-提升" aria-label="Permalink to &quot;第四章：提升&quot;">​</a></h1><p>至此，你应当对作用域的想法，以及变量如何根据它们被声明的方式和位置附着在不同的作用域层级上感到相当适应了。函数作用域和块儿作用域的行为都是依赖于这个相同规则的：在一个作用域中声明的任何变量都附着在这个作用域上。</p><p>但是关于出现在一个作用域内各种位置的声明如何附着在作用域上，有一个微妙的细节，而这个细节正是我们要在这里检视的。</p><h2 id="先有鸡还是先有蛋" tabindex="-1">先有鸡还是先有蛋？ <a class="header-anchor" href="#先有鸡还是先有蛋" aria-label="Permalink to &quot;先有鸡还是先有蛋？&quot;">​</a></h2><p>有一种倾向认为你在 JavaScript 程序中看到的所有代码，在程序执行的过程中都是从上到下一行一行地被解释执行的。虽然这大致上是对的，但是这种猜测中的一个部分可能会导致你错误地考虑你的程序。</p><p>考虑这段代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a )</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>你觉得在 <code>console.log(..)</code> 语句中会打印出什么？</p><p>许多开发者会期望 <code>undefined</code>，因为语句 <code>var a</code> 出现在 <code>a = 2</code> 之后，这很自然地看起来像是这个变量被重定义了，并因此被赋予了默认的 <code>undefined</code>。然而，输出将是 <code>2</code>。</p><p>考虑另一个代码段：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>你可能会被诱导而这样认为：因为上一个代码段展示了一种看起来不是从上到下的行为，也许在这个代码段中，也会打印 <code>2</code>。另一些人认为，因为变量 <code>a</code> 在它被声明之前就被使用了，所以这一定会导致一个 <code>ReferenceError</code> 被抛出。</p><p>不幸的是，两种猜测都不正确。输出是 <code>undefined</code>。</p><p><strong>那么。这里发生了什么？</strong> 看起来我们遇到了一个先有鸡还是先有蛋的问题。哪一个先有？声明（“蛋”），还是赋值（“鸡”）？</p><h2 id="编译器再次袭来" tabindex="-1">编译器再次袭来 <a class="header-anchor" href="#编译器再次袭来" aria-label="Permalink to &quot;编译器再次袭来&quot;">​</a></h2><p>要回答这个问题，我们需要回头引用第一章关于编译器的讨论。回忆一下，<em>引擎</em> 实际上将会在它解释执行你的 JavaScript 代码之前编译它。编译过程的一部分就是找到所有的声明，并将它们关联在合适的作用域上。第二章向我们展示了这是词法作用域的核心。</p><p>所以，考虑这件事情的最佳方式是，在你的代码的任何部分被执行之前，所有的声明，变量和函数，都会首先被处理。</p><p>当你看到 <code>var a = 2;</code> 时，你可能认为这是一个语句。但是 JavaScript 实际上认为这是两个语句：<code>var a;</code> 和 <code>a = 2;</code>。第一个语句，声明，是在编译阶段被处理的。第二个语句，赋值，为了执行阶段而留在 <strong>原处</strong>。</p><p>于是我们的第一个代码段应当被认为是这样被处理的：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a )</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>……这里的第一部分是编译，而第二部分是执行。</p><p>相似地，我们的第二个代码段实际上被处理为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>所以，关于这种处理的一个有些隐喻的考虑方式是，变量和函数声明被从它们在代码流中出现的位置“移动”到代码的顶端。这就产生了“提升”这个名字。</p><p>换句话说，<strong>先有蛋（声明），后有鸡（赋值）</strong>。</p><p><strong>注意：</strong> 只有声明本身被提升了，而任何赋值或者其他的执行逻辑都被留在 <em>原处</em>。如果提升会重新安排我们代码的可执行逻辑，那就会是一场灾难了。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>函数 <code>foo</code> 的声明（在这个例子中它还 <em>包含</em> 一个隐含的、实际为函数的值）被提升了，因此第一行的调用是可以执行的。</p><p>还需要注意的是，提升是 <strong>以作用域为单位的</strong>。所以虽然我们的前一个代码段被简化为仅含有全局作用域，但是我们现在检视的函数<code>foo(..)</code>本身展示了，<code>var a</code>被提升至<code>foo(..)</code>的顶端（很明显，不是程序的顶端）。所以这个程序也许可以更准确地解释为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>函数声明会被提升，就像我们看到的。但是函数表达式不会。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 不是 ReferenceError， 而是 TypeError!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>变量标识符 <code>foo</code> 被提升并被附着在这个程序的外围作用域（全局），所以 <code>foo()</code> 不会作为一个 <code>ReferenceError</code> 而失败。但 <code>foo</code> 还没有值（如果它不是函数表达式，而是一个函数声明，那么它就会有值）。所以，<code>foo()</code> 就是试图调用一个 <code>undefined</code> 值，这是一个 <code>TypeError</code> —— 非法操作。</p><p>同时回想一下，即使它是一个命名的函数表达式，这个名称标识符在外围作用域中也是不可用的：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// TypeError</span></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ReferenceError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>这个代码段可以（使用提升）更准确地解释为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// TypeError</span></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ReferenceError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="函数优先" tabindex="-1">函数优先 <a class="header-anchor" href="#函数优先" aria-label="Permalink to &quot;函数优先&quot;">​</a></h2><p>函数声明和变量声明都会被提升。但一个微妙的细节（<em>可以</em> 在拥有多个“重复的”声明的代码中出现）是，函数会首先被提升，然后才是变量。</p><p>考虑这段代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p><code>1</code> 被打印了，而不是 <code>2</code>！这个代码段被 <em>引擎</em> 解释执行为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>注意那个 <code>var foo</code> 是一个重复（因此被无视）的声明，即便它出现在 <code>function foo()...</code> 声明之前，因为函数声明是在普通变量之前被提升的。</p><p>虽然多个/重复的 <code>var</code> 声明实质上是被忽略的，但是后续的函数声明确实会覆盖前一个。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>虽然这一切听起来不过是一些有趣的学院派细节，但是它强调了一个事实：在同一个作用域内的重复定义是一个十分差劲儿的主意，而且经常会导致令人困惑的结果。</p><p>在普通的块儿内部出现的函数声明一般会被提升至外围的作用域，而不是像这段代码暗示的那样有条件地被定义：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;b&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (a) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>然而，重要的是要注意这种行为是不可靠的，而且是未来版本的 JavaScript 将要改变的对象，所以避免在块儿中声明函数可能是最好的做法。</p><h2 id="复习" tabindex="-1">复习 <a class="header-anchor" href="#复习" aria-label="Permalink to &quot;复习&quot;">​</a></h2><p>我们可能被诱导而将 <code>var a = 2</code> 看作是一个语句，但是 JavaScript <em>引擎</em> 可不这么看。它将 <code>var a</code> 和 <code>a = 2</code> 看作两个分离的语句，第一个是编译期的任务，而第二个是执行时的任务。</p><p>这将导致在一个作用域内的所有声明，不论它们出现在何处，都会在代码本身被执行前 <em>首先</em> 被处理。你可以将它可视化为声明（变量与函数）被“移动”到它们各自的作用域顶部，这就是我们所说的“提升”。</p><p>声明本身会被提升，但不是赋值，即便是函数表达式的赋值，也 <em>不会</em> 被提升。</p><p>要小心重复声明，特别是将一般的变量声明和函数声明混在一起 —— 如果你这么做的话，危险就在眼前！</p>`,57),e=[p];function c(t,r,y,F,D,A){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{C as __pageData,d as default};
