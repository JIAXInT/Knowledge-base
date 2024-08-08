import{_ as n,v as s,b as p,R as a}from"./chunks/framework.eb2f4134.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Nest/第31章—Nest项目如何编写Dockerfile.md","filePath":"docs/Nest/第31章—Nest项目如何编写Dockerfile.md"}'),e={name:"docs/Nest/第31章—Nest项目如何编写Dockerfile.md"},o=a(`<p>首先思考一个问题：</p><p>dockerfile 是在哪里 build 的，在命令行工具里，还是在 docker 守护进程呢？</p><p>答案是在守护进程 docker daemon。</p><p>我没启动 docker daemon 的时候是不能 build 的，启动之后才可以：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-1.png" alt=""></p><p>命令行工具会和 docker daemon 交互来实现各种功能。</p><p>比如 docker build 的时候，会把 dockerfile 和它的构建上下文（也就是所在目录）打包发送给 docker daemon 来构建镜像。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-2.png" alt=""></p><p>比如我们会执行这样的命令：</p><pre><code>docker build -t name:tag -f filename .
</code></pre><p>这个 . 就是构建上下文的目录，你也可以指定别的路径。</p><p>而镜像自然是越小性能越好，所以 docker 支持你通过 .dockerignore 声明哪些不需要发送给 docker daemon。</p><p>.dockerignore 是这样写的：</p><pre><code>*.md
!README.md
node_modules/
[a-c].txt
.git/
.DS_Store
.vscode/
.dockerignore
.eslintignore
.eslintrc
.prettierrc
.prettierignore
</code></pre><p>*.md 就是忽略所有 md 结尾的文件，然后 !README.md 就是其中不包括 README.md</p><p>node_modules/ 就是忽略 node_modules 下 的所有文件</p><p>[a-c].txt 是忽略 a.txt、b.txt、c.txt 这三个文件</p><p>.DS_Store 是 mac 的用于指定目录的图标、背景、字体大小的配置文件，这个一般都要忽略</p><p>eslint、prettier 的配置文件在构建镜像的时候也用不到</p><p>此外，还有注释的语法：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-3.png" alt=""></p><p>这就是 dockerfile 的全部语法，没多少东西。</p><p><strong>docker build 时，会先解析 .dockerignore，把该忽略的文件忽略掉，然后把剩余文件打包发送给 docker daemon 作为上下文来构建产生镜像。</strong></p><p>这就像你在 git add 的时候，.gitignore 下配置的文件也会被忽略一样。</p><p>忽略这些用不到的文件，是为了让构建更快、镜像体积更小。</p><p>此外，还有一种减小镜像体积的手段：多阶段构建。</p><p>我们会先把源码目录发送到 docker daemon 中执行 npm run build 来构建产物，之后再 node ./dist/main.js 把服务跑起来。</p><p>也就是这样：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-4.png" alt=""></p><p>新建个项目：</p><pre><code>nest new dockerfile-test -p npm
</code></pre><p>编写 .dockerignore：</p><pre><code>*.md
node_modules/
.git/
.DS_Store
.vscode/
.dockerignore
</code></pre><p>编写 Dockerfile：</p><pre><code>FROM node:18

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ &quot;node&quot;, &quot;./dist/main.js&quot; ]
</code></pre><p>基于 node 18 的镜像。</p><p>指定当前目录为容器内的 /app。</p><p>把 package.json 复制到容器里，设置淘宝的 npm registry，执行 npm install。</p><p>之后把其余的文件复制过去，执行 npm run build。</p><p>指定暴露的端口为 3000，容器跑起来以后执行 node ./dist/main.js 命令。</p><p>然后执行 docker build：</p><pre><code>docker build -t nest:first .
</code></pre><p>镜像名为 nest、标签为 first，构建上下文是当前目录</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-5.png" alt=""></p><p>然后就可以在 docker desktop 里看到你构建出来的镜像了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-6.png" alt=""></p><p>如果你 build 的时候报这个错误：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-7.png" alt=""></p><p>那需要加一行：</p><pre><code>RUN ln -s /sbin/runc /usr/bin/runc
</code></pre><p>原因如下：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-8.png" alt=""></p><p>点击 run 把它跑起来：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-9.png" alt=""></p><p>容器跑成功了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-10.png" alt=""></p><p>浏览器访问下也没啥问题：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-11.png" alt=""></p><p>这样我们就用 docker 把我们的 nest 应用跑起来了！</p><p>但现在 docker 镜像还是不完美的。</p><p>这样构建出来的镜像有什么问题呢？</p><p>明显，src 等目录就不再需要了，构建的时候需要这些，但运行的时候只需要 dist 目录就可以了。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-12.png" alt=""></p><p>把这些文件包含在内，会让镜像体积变大。</p><p>那怎么办呢？</p><p>构建两次么？第一次构建出 dist 目录，第二次再构建出跑 dist/main.js 的镜像。那不是要两个 dockerfile？</p><p>确实需要构建两次，但只需要一个 dockerfile 就可以搞定。</p><p>这需要用到 dockerfile 的多阶段构建的语法。</p><pre><code># build stage
FROM node:18 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:18 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm install --production

EXPOSE 3000

CMD [&quot;node&quot;, &quot;/app/main.js&quot;]
</code></pre><p>通过 FROM 继承镜像的时候，给当前镜像指定一个名字，比如 build-stage。</p><p>然后第一个镜像执行 build。</p><p>之后再通过 FROM 继承 node 镜像创建一个新镜像。</p><p>通过 COPY --from-build-stage 从那个镜像内复制 /app/dist 的文件到当前镜像的 /app 下。</p><p>还要把 package.json 也复制过来，然后切到 /app 目录执行 npm install --production 只安装 dependencies 依赖</p><p>这个生产阶段的镜像就指定容器跑起来执行 node /app/main.js 就好了。</p><p>执行 docker build，打上 second 标签：</p><pre><code>docker build -t nest:second .
</code></pre><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-13.png" alt=""></p><p>把之前的容器停掉，把这个跑起来：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-14.png" alt=""></p><p>这次用 3003 端口来跑：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-15.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-16.png" alt=""></p><p>浏览器访问下： <img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-17.png" alt=""></p><p>nest 服务跑成功了。</p><p>这时候 app 下就是有 dist 的文件、生产阶段的 node_modules、package.json 这些文件：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-18.png" alt=""></p><p>对比下镜像体积，明显看出有减小，少的就是 src、test、构建阶段的 node_modules 这些文件：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-19.png" alt=""></p><p>这就是多阶段构建（multi-stage build）的魅力。</p><p>有同学说，但现在镜像依然很大呀，那是因为我们用的基础的 linux 镜像比较大，可以换成 alpine 的，这是一个 linux 发行版，主打的就是一个体积小。</p><div class="language-docker"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> node:18.0-alpine3.14 </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> build-stage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#A6ACCD;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> package.json .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># production stage</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> node:18.0-alpine3.14 </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> production-stage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> --from=build-stage /app/dist /app</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> --from=build-stage /app/package.json /app/package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#A6ACCD;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> npm install --production</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">EXPOSE</span><span style="color:#A6ACCD;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#A6ACCD;"> [</span><span style="color:#C3E88D;">&quot;node&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;/app/main.js&quot;</span><span style="color:#A6ACCD;">]</span></span></code></pre></div><p>node:18-alpine3.14 就是用 alpine 的 linux 的 3.14 版本，用 node 的 18.0 版本。</p><p>然后再 docker build 一下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker build -t nest:ccc .</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-20.png" alt=""></p><p>可以看到现在镜像体积只有 277M 了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-21.png" alt=""></p><p>一般情况下，我们都会用多阶段构建 + alpine 基础镜像。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第31章-22.png" alt=""></p><p>alpine 是一种高山植物，就是很少的养分就能存活，很贴合体积小的含义。</p><p>案例代码在<a href="https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/nest-dockerfile" target="_blank" rel="noreferrer">小册仓库</a>。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>docker build 的时候会把构建上下文的所有文件打包发送给 docker daemon 来构建镜像。</p><p>可以通过 .dockerignore 指定哪些文件不发送，这样能加快构建时间，减小镜像体积。</p><p>此外，多阶段构建也能减小镜像体积，也就是 build 一个镜像、production 一个镜像，最终保留下 production 的镜像。</p><p>而且我们一般使用 alpine 的基础镜像，类似 node:18.10-aline3.14，这样构建出来镜像体积会小很多。</p><p>这就是用 Nest 项目构建 Docker 镜像的方式。</p>`,108),i=[o];function c(l,t,r,d,g,u){return s(),p("div",null,i)}const h=n(e,[["render",c]]);export{y as __pageData,h as default};
