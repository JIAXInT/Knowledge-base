import{_ as s,v as n,b as a,R as l}from"./chunks/framework.6c6b1f36.js";const i=JSON.parse('{"title":"附录C：词法this","description":"","frontmatter":{},"headers":[],"relativePath":"docs/you_dont_know_js/scope&closures/apC.md","filePath":"docs/you_dont_know_js/scope&closures/apC.md"}'),o={name:"docs/you_dont_know_js/scope&closures/apC.md"},p=l(`<h1 id="附录c-词法this" tabindex="-1">附录C：词法this <a class="header-anchor" href="#附录c-词法this" aria-label="Permalink to &quot;附录C：词法this&quot;">​</a></h1><p>这本书通篇没有讲解 <code>this</code> 机制的任何细节，有一个 ES6 的话题以一种重要的方式将 <code>this</code> 与词法作用域联系了起来，我们将快速检视它一下。</p><p>ES6 为函数声明增加了一种特殊的语法形式，称为“箭头函数”。它看起来像这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">( </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span></code></pre></div><p>这个所谓的“大箭头”经常被称为是 <em>乏味烦冗的</em>（讽刺）<code>function</code> 关键字的缩写。</p><p>但是在箭头函数上发生的一些事情要重要得多，而且这与在你的声明中少敲几下键盘无关。</p><p>简单地说，这段代码有一个问题：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">cool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">coolFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cool</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// awesome</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">( obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cool</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// not awesome</span></span></code></pre></div><p>这个问题就是在 <code>cool()</code> 函数上丢失了 <code>this</code> 绑定。有各种方法可以解决这个问题，但一个经常被重复的解决方案是 <code>var self = this;</code>。</p><p>它可能看起来像：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">cool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">coolFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">( </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">timer</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awesome?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cool</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// awesome?</span></span></code></pre></div><p>用不过于深入细节的方式讲，<code>var self = this</code> 的“解决方案”免除了理解和正确使用 <code>this</code> 绑定的整个问题，而是退回到我们也许感到更舒服的东西上面：词法作用域。<code>self</code> 变成了一个可以通过词法作用域和闭包解析的标识符，而且一直不关心 <code>this</code> 绑定发生了什么。</p><p>人们不喜欢写繁冗的东西，特别是当他们一次又一次重复它的时候。于是，ES6 的一个动机是帮助缓和这些场景，将常见的惯用法问题 <em>固定</em> 下来，就像这一个。</p><p>ES6 的解决方案，箭头函数，引入了一种称为“词法 this”的行为。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">cool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">coolFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 箭头函数能好用？</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awesome?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cool</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// awesome?</span></span></code></pre></div><p>简单的解释是，当箭头函数遇到它们的 <code>this</code> 绑定时，它们的行为与一般的函数根本不同。它们摒弃了 <code>this</code> 绑定的所有一般规则，而是采用它们的直接外围词法作用域的 <code>this</code> 的值，无论它是什么。</p><p>于是，在这个代码段中，箭头函数不会以不可预知的方式丢掉 <code>this</code> 绑定，它只是“继承” <code>cool()</code> 函数的 <code>this</code> 绑定（如果像我们展示的那样调用它就是正确的！）。</p><p>虽然这使代码更短，但在我看来，箭头函数只不过是将一个开发者们常犯的错误固化成了语言的语法，这混淆了“this 绑定”规则与“词法作用域”规则。</p><p>换一种说法：为什么要使用 <code>this</code> 风格的编码形式来招惹麻烦和繁冗？只要通过将它与词法作用域混合把它剔除掉就好。对于给定的一段代码只采纳一种方式或另一种看起来才是自然的，而不是在同一段代码中将它们混在一起。</p><p><strong>注意：</strong> 源自箭头函数的另一个非议是，它们是匿名的，不是命名的。参见第三章来了解为什么匿名函数不如命名函数理想的原因。</p><p>在我看来，这个“问题”的更恰当的解决方式是，正确地使用并接受<code>this</code>机制。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">cool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">coolFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">( </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">timer</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \`this\` 因为 \`bind(..)\` 所以安全</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">more awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}.</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 看，\`bind()\`!</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cool</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// more awesome</span></span></code></pre></div><p>不管你是偏好箭头函数的新的词法 this 行为，还是偏好经得起考验的 <code>bind()</code>，重要的是要注意箭头函数 <strong>不</strong> 仅仅是关于可以少打一些“function”。</p><p>它们拥有一种我们应当学习并理解的，<em>有意的行为上的不同</em>，而且如果我们这样选择，就可以利用它们。</p><p>现在我们完全理解了词法作用域（和闭包！），理解词法 this 应该是小菜一碟！</p>`,25),t=[p];function e(c,r,F,y,D,A){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{i as __pageData,d as default};