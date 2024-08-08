import{_ as s,v as a,b as n,R as p}from"./chunks/framework.eb2f4134.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Nest/第14章—Module和Provider的循环依赖怎么处理.md","filePath":"docs/Nest/第14章—Module和Provider的循环依赖怎么处理.md"}'),l={name:"docs/Nest/第14章—Module和Provider的循环依赖怎么处理.md"},o=p(`<p>Nest 实现了一套模块系统，模块可以通过 imports 声明对其他模块的引用。</p><p>那 Module 和 Module 如果相互引用、形成循环依赖了怎么办？</p><p>这节我们就来学习下循环依赖的处理方式。</p><p>执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest new module-test -p npm</span></span></code></pre></div><p>创建一个 nest 项目。</p><p>然后执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest g module aaa</span></span>
<span class="line"><span style="color:#A6ACCD;">nest g module bbb</span></span></code></pre></div><p>创建两个 Module。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-1.png" alt=""></p><p>然后这两个 Module 相互引用。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-2.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-3.png" alt=""></p><p>这时候你执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest start -w</span></span></code></pre></div><p>把服务跑起来，会报这样的错误：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-4.png" alt=""></p><p>意思是在解析 BbbModule 的时候，它的第一个 imports 是 undefined。</p><p>这有两个原因，一个是这个值本来就是 undefined，第二个就是形成了循环依赖。</p><p>因为 Nest 创建 Module 的时候会递归创建它的依赖，而它的依赖又依赖了这个 Module，所以没法创建成功，拿到的就是 undefined。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-5.png" alt=""></p><p>那怎么办呢？</p><p>其实我们可以先单独创建这两个 Module，然后再让两者关联起来。</p><p>也就是用 forwardRef 的方式：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-6.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-7.png" alt=""></p><p>因为我们用了 nest start --watch 的方式启动的，nest 会自动重启，这时候就没有错误了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-8.png" alt=""></p><p>nest 会单独创建两个 Module，之后再把 Module 的引用转发过去，也就是 forwardRef 的含义。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-9.png" alt=""></p><p>除了 Module 和 Module 之间会循环依赖以外，provider 之间也会。</p><p>比如 Service 里可以注入别的 Service，自身也可以用来注入。</p><p>所以也会有循环引用。</p><p>我们来测试下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest g service ccc --no-spec --flat</span></span>
<span class="line"><span style="color:#A6ACCD;">nest g service ddd --no-spec --flat</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-10.png" alt=""></p><p>分别创建 ccc 和 ddd 两个 service，--no-spec 是不生成测试文件，--flat 是平铺。</p><p>就会创建这两个 service，并在 AppModule 引入了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-11.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-12.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-13.png" alt=""></p><p>然后我们让两者相互注入：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Injectable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/common</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CccService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./ccc.service</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Injectable</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DddService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cccService</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CccService</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ddd</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cccService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ccc</span><span style="color:#F07178;">()  </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ddd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Injectable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/common</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DddService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./ddd.service</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Injectable</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CccService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">dddService</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DddService</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ccc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ccc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">eee</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dddService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ddd</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eee</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>两个 service 分别依赖了对方的方法。</p><p>在 AppService 里调用下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Injectable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/common</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CccService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./ccc.service</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DddService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./ddd.service</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Injectable</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cccService</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CccService</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">dddService</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DddService</span><span style="color:#89DDFF;">){}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getHello</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dddService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ddd</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cccService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eee</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这时候 nest start --watch 会报错：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-14.png" alt=""></p><p>说是没法解析 DddService 的依赖，也是因为循环依赖导致的。</p><p>这时候也是通过 forwardRef 解决：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-15.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-16.png" alt=""></p><p>这时候就不能用默认的注入方式了，通过 @Inject 手动指定注入的 token，这里是 forwardRef 的方式注入。</p><p>这样报错就没了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-17.png" alt=""></p><p>浏览器访问下：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第14章-18.png" alt=""></p><p>两个 service 的相互调用也成功了。</p><p>这样我们就解决了循环依赖的问题。</p><p>案例代码在<a href="https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/circular-dependency" target="_blank" rel="noreferrer">小册仓库</a>。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Module 之间可以相互 imports，Provider 之间可以相互注入，这两者都会形成循环依赖。</p><p>解决方式就是两边都用 forwardRef 来包裹下。</p><p>它的原理就是 nest 会先创建 Module、Provider，之后再把引用转发到对方，也就是 forward ref。</p>`,65),e=[o];function c(t,r,i,y,D,F){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{A as __pageData,d as default};
