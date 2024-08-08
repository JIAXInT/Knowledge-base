import{_ as s,v as a,b as n,R as p}from"./chunks/framework.eb2f4134.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Nest/第37章—一对一、join查询、级联方式.md","filePath":"docs/Nest/第37章—一对一、join查询、级联方式.md"}'),l={name:"docs/Nest/第37章—一对一、join查询、级联方式.md"},o=p(`<p>数据库中会有很多的表，分别存储不同的信息，比如学生表存学生的信息、老师表存老师的信息，班级表存班级的信息。</p><p>这些表之间不是孤立的，有着一定的关系。</p><p>比如班级和学生之间是一对多的关系，也就是一个班级可以有多个学生。</p><p>班级和老师之间是多对多的关系，也就是一个班级可以有多个老师，一个老师也可以教多个班级。</p><p>如果存储一对一、一对多、多对多这些关系呢？</p><p>这就涉及到外键了。</p><p>比如一对一的关系，一个用户只能有一个身份证。</p><p>这样两个表，分别存储用户信息，还有身份证信息：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-1.png" alt=""></p><p>它们之间是一对一的关系，这时就可以用外键来表示。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-2.png" alt=""></p><p>user 表的主键是 id、可以通过 id 来唯一标识一个 user。</p><p>那 id_card 想查找 user，自然也是通过 id 来查找，多一个列来存储 user id 就可以实现这种一对一的关联。</p><p>这个 user_id 的列就是外键。</p><p>user 表叫主表，使用外键引用它的 id_card 表是从表。</p><p>我们建个表来试试看：</p><p>选中 hello-mysql 数据库，点击建表按钮：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-3.png" alt=""></p><p>分别添加 id、name 列：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-4.png" alt="image.png"></p><p>点击 apply，建表 sql 如下：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-5.png" alt=""></p><p>你也可以直接用这个 sql 来建表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">hello-mysql</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">名字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>然后再建个 id_card 表：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-6.png" alt=""></p><p>id 为 INT 类型，设置 primary key、not null 的约束，然后设置 auto increment。</p><p>card_name 为 VARCHAR(45) 类型，设置 not null 的约束</p><p>user_id 为 INT 类型。</p><p>然后添加外键：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-7.png" alt=""></p><p>指定外键 user_id 关联 user 表的 id。</p><p>这里还要选择主表数据 update 或者 delete 的时候，从表怎么办：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-8.png" alt=""></p><p>我们先用默认的。</p><p>点击 apply，生成的建表 sql 是这样的：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-9.png" alt=""></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> \`</span><span style="color:#82AAFF;">id_card</span><span style="color:#A6ACCD;">\` (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">card_name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">身份证号</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">用户 id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">card_id_idx</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">CONSTRAINT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)  CHARSET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">utf8mb4</span></span></code></pre></div><p><strong>这些建表 sql 的语法了解即可，一般不会自己写。</strong></p><p>前面的三行都比较好理解，就是指定每一列的类型、约束、注释。</p><p>PRIMARY KEY 是指定 id 为主键。</p><p>INDEX 是建立索引，索引名是 card_id_idex，这个是用于加速 user_id 的访问的。</p><p>CONSTRINT user_id FOREIGN KEY 是给 user_id 添加一个外键约束，然后 user_id REFERENCES user id 则是指定 user_id 引用这 user 表的 id 列。</p><p>然后就可以看到 user 和 id_card 表了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-10.png" alt=""></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-11.png" alt=""></p><p>我们插入几条数据：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">VALUES</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">王五</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">赵六</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">孙七</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">周八</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">吴九</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">郑十</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">钱十一</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">陈十二</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-12.png" alt=""></p><p>查询一下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user;</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-13.png" alt=""></p><p>用户表数据成功插入了。</p><p>再插入 id_card 表的数据：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> id_card (card_name, user_id) </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">VALUES</span></span>
<span class="line"><span style="color:#A6ACCD;">        (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">110101199001011234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">310101199002022345</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">440101199003033456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">440301199004044567</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">510101199005055678</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">330101199006066789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">320101199007077890</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">500101199008088901</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">420101199009099012</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">	(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">610101199010101023</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-14.png" alt=""></p><p>查询一下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> id_card;</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-15.png" alt=""></p><p>这样，一对一关系的数据就插入成功了。</p><p>那怎么关联查出来呢？</p><p>这样：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><p>这里用到了 JOIN ON，也就是连接 user 和 id_card 表，关联方式是 user.id = id_card.user_id，也就是 id_card 表中的外键关联 user 表的主键。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-16.png" alt=""></p><p>点击左上角按钮，新建一条 sql：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-17.png" alt=""></p><p>查询的结果是这样的：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-18.png" alt=""></p><p>这里的两个 id 分别是 user 和 card 的 id，而且后面的 user_id 也没必要展示。</p><p>我们改下 sql：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><p>指定显示的列，并给 id_card 表的 id 起个 card_id 的别名。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-19.png" alt=""></p><p>这就是多表关联查询，语法是 JOIN ON。</p><p>有同学可能问了，那如果 id_card 表里有的没有关联 user 呢？</p><p>比如这样：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-20.png" alt=""></p><p>选中单元格，点击 delete 就可以把它置为 null。</p><p>我们把 id_card 表的最后两条记录的 user_id 删掉，点击 apply。</p><p>这时候再执行上面那条 sql 来查询，就可以看到少了两条记录：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-21.png" alt=""></p><p>因为 JOIN ON 其实默认是 INNER JOIN ON，相当于这么写：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">INNER JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-22.png" alt=""></p><p>INNER JOIN 是只返回两个表中能关联上的数据。</p><p>你还可以指定其余 2 种 join 类型：</p><p>LEFT JOIN 是额外返回左表中没有关联上的数据。</p><p>RIGHT JOIN 是额外返回右表中没有关联上的数据。</p><p><strong>在 FROM 后的是左表，JOIN 后的表是右表。</strong></p><p>我们来试一下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">RIGHT JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><p>当使用 RIGHT JOIN 时，会额外返回右表中没有关联的数据：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-23.png" alt=""></p><p>可以看到返回了所有 id_card 的数据，没有关联 user 的记录 user 信息为 null。</p><p>当时用 LEFT JOIN 时，正好相反：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">LEFT JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-24.png" alt=""></p><p>一般情况，还是用默认的 JOIN ON 比较多，也就是 INNER JOIN。</p><p>前面还讲到了删除和更新时的级联操作。</p><p>也就是当 user 删除的时候，关联的 id_card 要不要删除？</p><p>当 user 的 id 修改的时候，关联的 id_card 要不要改 user_id？</p><p>我们之前设置的是默认的 RESTICT：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-25.png" alt=""></p><p>其实可选的值有 4 种：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-26.png" alt=""></p><ul><li><p>CASCADE： 主表主键更新，从表关联记录的外键跟着更新，主表记录删除，从表关联记录删除</p></li><li><p>SET NULL：主表主键更新或者主表记录删除，从表关联记录的外键设置为 null</p></li><li><p>RESTRICT：只有没有从表的关联记录时，才允许删除主表记录或者更新主表记录的主键 id</p></li><li><p>NO ACTION： 同 RESTRICT，只是 sql 标准里分了 4 种，但 mysql 里 NO ACTION 等同于 RESTRICT。</p></li></ul><p>这里不理解不要紧，我们试一下：</p><p>现在 user 表是这样的：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-27.png" alt=""></p><p>右键选择 delete row：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-28.png" alt=""></p><p>这时候会提示你更新失败，因为有外键的约束。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-29.png" alt=""></p><p>点击 revert，回到之前的状态：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-30.png" alt=""></p><p>然后更新 id 为 11，点击 apply： <img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-31.png" alt=""></p><p>同样会提示你更新失败，因为有外键的约束：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-32.png" alt=""></p><p>这就是 <strong>RESTIRCT 和 NO ACTION 的处理逻辑：只要从表有关联记录，就不能更新 id 或者删除记录。</strong></p><p>我们手动把从表记录的关联去掉，也就是删除第一条记录的外键（按 delete 键）：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-33.png" alt=""></p><p>点击 apply 应用这次改动。</p><p>然后再试下主表的更新：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-34.png" alt=""></p><p>这次就更新成功了！</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-35.png" alt=""></p><p>再来试下删除：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-36.png" alt=""></p><p>同样也成功了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-37.png" alt=""></p><p>这就是 RESTRICT 或者 NO ACTION，只有当从表没有关联的记录的时候，才能更新主表记录的 id 或者删除它。</p><p>我们再来试试 CASCADE：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-38.png" alt=""></p><p>修改外键级联方式为 CASCADE，点击 apply。</p><p>先看一下现在 id_card 表的数据：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-39.png" alt=""></p><p>把 id 为 2 的 user 的 id 改为 22，点击 apply：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-40.png" alt=""></p><p>再看下 id_card 表的数据，你会发现 user_id 跟着改了。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-41.png" alt=""></p><p>然后把 id 为 22 的 user 删除掉，点击 apply：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-42.png" alt=""></p><p>再看下 id_card 表会发现那条 user_id 为 22 的记录也没了。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-43.png" alt=""></p><p>这就是级联方式为 <strong>CASCADE 的处理逻辑：主表删除，从表关联记录也级联删除，主表 id 更新，从表关联记录也跟着更新。</strong></p><p>然后再试下 set null：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-44.png" alt=""></p><p>修改之后点击 apply。</p><p>查询下现在的 id_card 表的数据：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-45.png" alt=""></p><p>把 user 表中 id 为 5 的记录 id 改为 55，点击 apply：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-46.png" alt=""></p><p>这时候 id_card 中那条记录的外键被置为 null 了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/第37章-47.png" alt=""></p><p>这就是 <strong>set null 的处理逻辑：主表记录删除或者修改 id，从表关联记录外键置为 null。</strong></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>这节我们学习了一对一的数据表设计，在从表里通过外键来关联主表的主键。</p><p>查询的时候需要使用 join on，默认是 inner join 也就是只返回有关联的记录，也可以用 left join、right join 来额外返回没有关联记录的左表或右表的记录。</p><p>from 后的是左表，join 后的是右表。</p><p>此外，外键还可以设置级联方式，也就是主表修改 id 或者删除的时候，从表怎么做。</p><p>有 3 种级联方式：CASCADE（关联删除或更新），SET NULL（关联外键设置为 null），RESTRICT 或者 NO ACTION（没有从表的关联记录才可以删除或更新）</p><p>多表的连接是非常常用的操作，下节我们继续学习一对多和多对多的数据表设计。</p>`,163),c=[o];function e(t,r,i,C,y,D){return a(),n("div",null,c)}const g=s(l,[["render",e]]);export{d as __pageData,g as default};
