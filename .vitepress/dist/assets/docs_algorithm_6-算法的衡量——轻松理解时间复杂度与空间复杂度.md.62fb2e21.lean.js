import{_ as e,v as n,b as o,R as r}from"./chunks/framework.eb2f4134.js";const c="/Knowledge-base/assets/1.d8f775cb.jpg",d="/Knowledge-base/assets/2.613938a0.jpg",p="/Knowledge-base/assets/3.2e1c9192.jpg",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/algorithm/6-算法的衡量——轻松理解时间复杂度与空间复杂度.md","filePath":"docs/algorithm/6-算法的衡量——轻松理解时间复杂度与空间复杂度.md"}'),a={name:"docs/algorithm/6-算法的衡量——轻松理解时间复杂度与空间复杂度.md"},t=r(`<p>结束了数据结构基本功的学习，接下来在真正开始撸真题之前，大家还需要具备 <strong>评价算法的能力</strong> 。</p><p>平时我们定义一个人是否“懂行”，一个重要的依据就是看这个人对某一个事物是否具备正确的评价能力。<br> 举个例子，同样是买手机，外行进到手机店，他关注的可能是手机有没有跑马灯、有没有皮套护体、有没有“八心八箭”——这些东西，任何一部手机随便包装一下就都有了，根本没法反映出这台手机的本质问题。但如果是一个相对懂手机的人，他可能就会去关注这台手机的芯片、内存、屏幕材质及分辨率等等，从而对手机的整体性能和质量作出一个合理的判断，这样他买到好手机的概率就更大。</p><p>回到做算法题上，也是一样的道理。在面试时，自己给出的算法到底过不过得去，这一点在面试官给出评语之前，自己就应该有所感知。做到这一点，你才会掌握改进算法的主动权。</p><p>本节我们要学习的就是评价算法的两个重要依据——时间复杂度和空间复杂度。</p><p>很多同学算法入门直接就跪在复杂度理解这一环。时间复杂度、空间复杂度，直接读概念确实太无聊，我们本节从代码入手，大家的理解会更直观一点。</p><h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><p>大家先来看这样一个问题：下面这段代码，一共会执行多少次？</p><pre><code>function traverse(arr) {
    var len = arr.length
    for(var i=0;i&lt;len;i++) {
        console.log(arr[i])
    }
}
</code></pre><p>首先，最没有悬念的是函数里的第一行代码，它只会被执行 1 次：</p><pre><code>var len = arr.length
</code></pre><p>其次没有悬念的是循环体：</p><pre><code>console.log(arr[i])
</code></pre><p><code>for</code>循环跑了 <code>n</code> 次，因此这条语句就会被执行 <code>n</code> 次。</p><p>循环体上面的几个部分我们拆开来看，首先是 <code>i</code> 的初始化语句：</p><pre><code>var i = 0
</code></pre><p>初始化只有 1 次，因此它也只会被执行 1 次。</p><p>接着是 <code>i &lt; len</code> 这个判断。这里有个规律大家可以记下：在所有的 <code>for</code> 循环里，判断语句都会比递增语句多执行一次。在这里，判断语句执行的次数就是 <code>n+1</code>。<br> 再往下就是递增语句 <code>i++</code> 了，它跟随整个循环体，毫无疑问会被执行 <code>n</code> 次。<br> 假如把总的执行次数记为 T(n)，下面咱们就可以来做个简单的加法：</p><pre><code>T(n) = 1 + n + 1 + (n+1) + n = 3n + 3
</code></pre><p>接下来我们看看规模为 <code>n*n</code> 的二维数组的遍历，一共需要执行多少次代码：</p><pre><code>function traverse(arr) {
    var outLen = arr.length

    for(var i=0;i&lt;outLen;i++) {
        var inLen = arr[i].length

        for(var j=0;j&lt;inLen;j++) {
            console.log(arr[i][j])
        }
    }
}
</code></pre><p>首先仍然是没有悬念的第一行代码，它只会被执行一次：</p><pre><code>var outLen = arr.length
</code></pre><p>接下来我们来看最内层的循环体：</p><pre><code>console.log(arr[i][j])
</code></pre><p>因为咱们是两层循环，所以这货会被执行 <code>n*n = n^2</code> 次。<br> 其它语句的计算思路和咱们第一个 🌰 区别不大，这里我就不重复讲了，直接给出大家答案：</p><p><img src="`+c+`" alt=""></p><p>继续来做个求总执行次数 T(n) 的加法看看：</p><pre><code>T(n) = 1 + 1 + (n+1) + n + n + n + n*(n+1) + n*n + n*n = 3n^2 + 5n + 3
</code></pre><p>代码的执行次数，可以反映出代码的执行时间。但是如果每次我们都逐行去计算 T(n)，事情会变得非常麻烦。算法的时间复杂度，它反映的不是算法的逻辑代码到底被执行了多少次，而是随着输入规模的增大，算法对应的执行总次数的一个 <strong>变化趋势</strong> 。要想反映趋势，那就简单多了，直接抓主要矛盾就行。我们可以尝试对 T(n) 做如下处理：</p><ul><li>若 T(n) 是常数，那么无脑简化为 1</li><li>若 T(n) 是多项式，比如 3n^2 + 5n + 3，我们只保留次数最高那一项，并且将其常数系数无脑改为 1。</li></ul><p>经过这么一波操作，T(n) 就被简化为了 O(n)：</p><pre><code>T(n) = 10
O(n) = 1



T(n) = 3n^2 + 5n + 3
O(n) = n^2
</code></pre><p>到这里，我们思路仍然是 <code>计算T(n) -&gt; 推导O(n)</code>。这么讲是为了方便大家理解 O(n) 的简化过程，实际操作中，O(n) 基本可以目测，比如咱们上面的两个遍历函数：</p><pre><code>function traverse1(arr) {
    var len = arr.length
    for(var i=0;i&lt;len;i++) {
        console.log(arr[i])
    }
}

function traverse2(arr) {
    var outLen = arr.length

    for(var i=0;i&lt;outLen;i++) {
        var inLen = arr[i].length

        for(var j=0;j&lt;inLen;j++) {
            console.log(arr[i][j])
        }
    }
}
</code></pre><p>遍历 N 维数组，需要 N 层循环，我们只需要关心其最内层那个循环体被执行多少次就行了。</p><p>我们可以看出，规模为 <code>n</code> 的一维数组遍历时，最内层的循环会执行 <code>n</code> 次，其对应的时间复杂度是 <code>O(n)</code>；规模为 <code>n*n</code> 的二维数组遍历时，最内层的循环会执行 <code>n*n</code> 次，其对应的时间复杂度是 <code>O(n^2)</code>。</p><p>以此类推，规模为 <code>n*m</code> 的二维数组最内层循环会执行 <code>n*m</code> 次，其对应的时间复杂度就是 <code>O(n*m)</code>；规模为 <code>n*n*n</code> 的三维数组最内层循环会执行 <code>n^3</code> 次，因此其对应的时间复杂度就表示为 <code>O(n^3)</code>。</p><p>常见的时间复杂度表达，除了多项式以外，还有<code>logn</code>。我们一起来看另一个算法：</p><pre><code>function fn(arr) {
    var len = arr.length

    for(var i=1;i&lt;len;i=i*2) {
        console.log(arr[i])
    }
}
</code></pre><p>这个算法读取一个一维数组作为入参，然后对其中的元素进行跳跃式的输出。这个跳跃的规则，就是数组下标从 1 开始，每次会乘以二。</p><p>如何计算这个函数的时间复杂度呢？在有循环的地方，我们关心的永远是最内层的循环体。这个算法中，我们关心的就是 <code>console.log(arr[i])</code> 到底被执行了几次，换句话说，也就是要知道 <code>i&lt;n</code>（ len === n） 这个条件是在 <code>i</code> 递增多少次后才不成立的。</p><p>假设 <code>i</code> 在以 <code>i=i*2</code>的规则递增了 <code>x</code> 次之后，<code>i&lt;n</code> 开始不成立（反过来说也就是 <code>i&gt;=n</code> 成立）。那么此时我们要计算的其实就是这样一个数学方程：</p><pre><code>2^x &gt;= n
</code></pre><p><code>x</code>解出来，就是要大于等于以 2 为底数的 <code>n</code> 的对数：</p><p><img src="`+d+`" alt=""></p><p>也就是说，只有当 <code>x</code> 小于 <code>log2n</code> 的时候，循环才是成立的、循环体才能执行。注意涉及到对数的时间复杂度，底数和系数都是要被简化掉的。那么这里的 O(n) 就可以表示为：</p><pre><code>O(n) = logn
</code></pre><p>没错，这时的主要矛盾，就变成了一个对数表达式。</p><p>关于常见的时间复杂度，我们会在后面讲到具体知识点（尤其是排序算法）时，结合实例来给大家做分析。这里大家首先要认识一下常见时间复杂度有哪些，并且对这些常见时间复杂度之间的大小关系做个把握。<br> 常见的时间复杂度按照从小到大的顺序排列，有以下几种：</p><p><img src="`+p+`" alt=""></p><h2 id="空间复杂度" tabindex="-1">空间复杂度 <a class="header-anchor" href="#空间复杂度" aria-label="Permalink to &quot;空间复杂度&quot;">​</a></h2><p>空间复杂度是对一个算法在运行过程中临时占用存储空间大小的量度。和时间复杂度相似，它是内存增长的 <strong>趋势</strong> 。<br> 常见的空间复杂度有 <code>O(1)</code>、<code>O(n)</code> 和 <code>O(n^2)</code>。</p><p>理解空间复杂度，我们照样来看一个 🌰：</p><pre><code>function traverse(arr) {
    var len = arr.length
    for(var i=0;i&lt;len;i++) {
        console.log(arr[i])
    }
}
</code></pre><p>在 <code>traverse</code> 中，占用空间的有以下变量：</p><pre><code>arr
len
i
</code></pre><p>后面尽管咱们做了很多次循环，但是这些都是时间上的开销。循环体在执行时，并没有开辟新的内存空间。因此，整个 <code>traverse</code> 函数对内存的占用量是恒定的，它对应的空间复杂度就是 <code>O(1)</code>。</p><p>下面我们来看另一个 🌰，此时我想要初始化一个规模为 n 的数组，并且要求这个数组的每个元素的值与其索引始终是相等关系，我可以这样写：</p><pre><code>function init(n) {
    var arr = []
    for(var i=0;i&lt;n;i++) {
        arr[i] = i
    }
    return arr
}
</code></pre><p>在这个 <code>init</code> 中，涉及到的占用内存的变量有以下几个：</p><pre><code>n
arr
i
</code></pre><p>注意这里这个 <code>arr</code>，它并不是一个一成不变的数组。<code>arr</code>最终的大小是由输入的 <code>n</code> 的大小决定的，它会随着 <code>n</code> 的增大而增大、呈一个线性关系。因此这个算法的空间复杂度就是 <code>O(n)</code>。<br> 由此我们不难想象，假如需要初始化的是一个规模为 <code>n*n</code> 的数组，那么它的空间复杂度就是 <code>O(n^2)</code> 啦。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>结束了本节的学习，相信各位对时间复杂度和空间复杂度都有了一个感性的认知和初步的了解。在后续的学习中，我们会在必要的时候继续为大家提点真题中的时间复杂度和空间复杂度，带领大家在实战中强化对理论概念的认知。</p><p>（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信 xyalinode 与我交流哈~）</p>`,65),i=[t];function l(s,_,g,h,v,f){return n(),o("div",null,i)}const b=e(a,[["render",l]]);export{m as __pageData,b as default};
