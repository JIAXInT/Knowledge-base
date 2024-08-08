import{_ as s,v as a,b as n,R as p}from"./chunks/framework.eb2f4134.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Nest/第82章—Nest的REPL模式.md","filePath":"docs/Nest/第82章—Nest的REPL模式.md"}'),l={name:"docs/Nest/第82章—Nest的REPL模式.md"},o=p(`<p>我们写过很多 Module、Service、Controller，但这些都要服务跑起来之后在浏览器里访问对应的 url，通过 get 或者 post 的方式传参来测试。</p><p>这个还是挺麻烦的，能不能像 node 的 repl 那样，直接在控制台测试呢？</p><p>repl 是 read-eval-paint-loop，也就是这个：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-1.png" alt=""></p><p>Nest 能不能这样来测试呢？</p><p>可以的，Nest 支持 repl 模式。</p><p>我们创建个 Nest 项目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest new repl-test</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-2.png" alt=""></p><p>然后创建两个模块：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-3.png" alt=""></p><p>把服务跑起来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run start:dev</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-4.png" alt=""></p><p>浏览器访问下：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-5.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-6.png" alt=""></p><p>我们前面都是这么测试接口的。</p><p>其实还可以用 repl 模式。</p><p>在 src 下创建个 repl.ts，写入如下内容：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">repl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AppModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./app.module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bootstrap</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">repl</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">AppModule</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">bootstrap</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>然后把服务停掉，通过这种方式跑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run start:dev -- --entryFile repl</span></span></code></pre></div><p>这里的 --entryFile 是指定入口文件是 repl.ts</p><p>前面带了个 -- 是指后面的参数不是传给 npm run start:dev 的，要原封不动保留。</p><p>也就是会传给 nest start</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-7.png" alt=""></p><p>当然，你直接执行 nest start 也可以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest start --watch --entryFile repl</span></span></code></pre></div><p>跑起来后，执行 debug()，会打印所有的 module 和 module 下的 controllers 和 providers。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-8.png" alt=""></p><p>而且，你可以 get() 来取对应的 providers 或者 controllers 调用：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-9.png" alt=""></p><p>get、post 方法都可以调用。</p><p>有的同学说，你这个 post 方法没有参数啊。</p><p>那我们加一些：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-10.png" alt=""></p><p>然后添加 ValidationPipe：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-11.png" alt=""></p><p>安装校验相关的包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install class-validator class-transformer</span></span></code></pre></div><p>在 dto 添加约束：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IsEmail</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IsNotEmpty</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class-validator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateAaaDto</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">IsNotEmpty</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">aaa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">IsEmail</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">bbb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>我们先正常跑下服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run start:dev</span></span></code></pre></div><p>然后 postman 里测试下：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-12.png" alt=""></p><p>可以看到，ValidationPipe 生效了。</p><p>那 repl 里是不是一样呢？</p><p>我们再跑下 repl 模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run start:dev -- --entryFile repl</span></span></code></pre></div><p>可以看到，并没有触发 pipe：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-13.png" alt=""></p><p>也就是说，它只是单纯的传参调用这个函数，不会解析装饰器。</p><p>所以测试 controller 的话，repl 的方式是有一些限制的。</p><p>但是测试 service 很不错：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-14.png" alt=""></p><p>比如测试某个项目的 UserService 的 login 方法：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-15.png" alt=""></p><p>就很方便。</p><p>大概知道 repl 模式是做啥的之后，我们过一下常用的 api：</p><p>debug() 可以查看全部的 module 或者某个 module 下的 cotrollers、providers：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-16.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-17.png" alt=""></p><p>methods() 可以查看某个 controller 或者 provider 的方法：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-18.png" alt=""></p><p>get() 或者 $() 可以拿到某个 controller 或者 provider 调用它的方法：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-19.png" alt=""></p><p>常用的 api 就这些。</p><p>此外，按住上下键可以在历史命令中导航：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-20.png" alt=""></p><p>但有个问题。</p><p>当你重新跑之后，这些命令历史就消失了，再按上下键也没有历史。</p><p>可以改一下 repl.ts：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">repl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AppModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./app.module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bootstrap</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replServer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">repl</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">AppModule</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">replServer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setupHistory</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.nestjs_repl_history</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">bootstrap</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>再跑的时候也是有历史的：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-21.png" alt=""></p><p>其实就是 nest 会把历史命令写入文件里，下一次跑就可以用它恢复历史了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-22.png" alt=""></p><p>你还可以把这个命令配到 npm scripts 里：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第82章-23.png" alt=""></p><p>然后直接 npm run repl:dev 来跑。</p><p>案例代码上传了<a href="https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/repl-login" target="_blank" rel="noreferrer">小册仓库</a>。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>这节我们学了 nest 的 repl 模式。</p><p>repl 模式下可以直接调用 controller 或者 provider 的方法，但是它们并不会触发 pipe、interceptor 等，只是传参测试函数。</p><p>可以使用 debug() 拿到 module、controller、provider 的信息，methods() 拿到方法，然后 get() 或者 $() 拿到 controller、provider 然后调用。</p><p>repl 模式对于测试 service 或者 contoller 的功能还是很有用的。</p>`,88),e=[o];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
