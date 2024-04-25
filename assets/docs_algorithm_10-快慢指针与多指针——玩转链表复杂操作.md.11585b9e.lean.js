import{_ as t,v as n,b as a,R as o}from"./chunks/framework.eb2f4134.js";const r="/Knowledge-base/assets/1.8915c2d4.jpg",s="/Knowledge-base/assets/2.a957a084.jpg",d="/Knowledge-base/assets/3.277ac720.jpg",p="/Knowledge-base/assets/4.7ff95065.jpg",c="/Knowledge-base/assets/5.9a78c37f.jpg",l="/Knowledge-base/assets/6.0258123d.jpg",m="/Knowledge-base/assets/7.43be2422.jpg",e="/Knowledge-base/assets/8.d40f5140.jpg",i="/Knowledge-base/assets/9.ebb0682f.jpg",u="/Knowledge-base/assets/10.8fff9681.jpg",h="/Knowledge-base/assets/11.08a70fb9.jpg",g="/Knowledge-base/assets/12.06ea6143.jpg",b="/Knowledge-base/assets/14.7246dcb3.jpg",_="/Knowledge-base/assets/15.d7271d94.jpg",x="/Knowledge-base/assets/16.e482733d.jpg",H=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/algorithm/10-快慢指针与多指针——玩转链表复杂操作.md","filePath":"docs/algorithm/10-快慢指针与多指针——玩转链表复杂操作.md"}'),f={name:"docs/algorithm/10-快慢指针与多指针——玩转链表复杂操作.md"},q=o(`<h2 id="快慢指针与多指针" tabindex="-1">快慢指针与多指针 <a class="header-anchor" href="#快慢指针与多指针" aria-label="Permalink to &quot;快慢指针与多指针&quot;">​</a></h2><p>链表题目中，有一类会涉及到 <strong>反复的遍历</strong> 。涉及反复遍历的题目，题目本身虽然不会直接跟你说“你好，我是一道需要反复遍历的题目”，但只要你尝试用常规的思路分析它，你会发现它一定涉及反复遍历；同时，涉及反复遍历的题目，还有一个更明显的特征，就是它们往往会涉及 <strong>相对复杂的链表操作</strong> ，比如反转、指定位置的删除等等。</p><p>解决这类问题，我们用到的是双指针中的“快慢指针”。快慢指针指的是两个一前一后的指针，两个指针往同一个方向走，只是一个快一个慢。快慢指针严格来说只能有俩，不过实际做题中，可能会出现一前、一中、一后的三个指针，这种超过两个指针的解题方法也叫“多指针法”。</p><p>快慢指针+多指针，双管齐下，可以帮助我们解决链表中的大部分复杂操作问题。</p><h2 id="快慢指针——删除链表的倒数第-n-个结点" tabindex="-1">快慢指针——删除链表的倒数第 N 个结点 <a class="header-anchor" href="#快慢指针——删除链表的倒数第-n-个结点" aria-label="Permalink to &quot;快慢指针——删除链表的倒数第 N 个结点&quot;">​</a></h2><blockquote><p>真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p></blockquote><blockquote><p>示例：</p></blockquote><p>给定一个链表: 1-&gt;2-&gt;3-&gt;4-&gt;5, 和 n = 2.<br> 当删除了倒数第二个结点后，链表变为 1-&gt;2-&gt;3-&gt;5.</p><blockquote><p>说明：</p></blockquote><p>给定的 n 保证是有效的。</p><h3 id="思路分析" tabindex="-1">思路分析 <a class="header-anchor" href="#思路分析" aria-label="Permalink to &quot;思路分析&quot;">​</a></h3><h4 id="小贴士-dummy-结点的使用" tabindex="-1">小贴士：dummy 结点的使用 <a class="header-anchor" href="#小贴士-dummy-结点的使用" aria-label="Permalink to &quot;小贴士：dummy 结点的使用&quot;">​</a></h4><p>上一节我给大家介绍了 <code>dummy</code> 结点：它可以帮我们处理掉头结点为空的边界问题，帮助我们简化解题过程。因此涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高），我都建议大家写代码的时候直接把 <code>dummy</code> 给用起来，建立好的编程习惯：</p><pre><code>const dummy = new ListNode()
// 这里的 head 是链表原有的第一个结点
dummy.next = head
</code></pre><h4 id="倒数-变-正数" tabindex="-1">“倒数”变“正数” <a class="header-anchor" href="#倒数-变-正数" aria-label="Permalink to &quot;“倒数”变“正数”&quot;">​</a></h4><p>链表的删除我们上节已经讲过，相信都难不倒大家。这道题的难点实际在于这个“倒数第 N 个”如何定位。</p><p>考虑到咱们的遍历不可能从后往前走，因此这个“倒数第 N 个” 咱们完全可以转换为“正数第 <code>len - n + 1</code>&quot;个。这里这个 <code>len</code> 代表链表的总长度，比如说咱们链表长为 7，那么倒数第 1 个就是正数第 7 个。按照这个思路往下分析，如果走直接遍历这条路，那么这个 <code>len</code> 就非常关键了。</p><p>我们可以直接遍历两趟：第一趟，设置一个变量 <code>count = 0</code>，每遍历到一个不为空的结点，<code>count</code> 就加 1，一直遍历到链表结束为止，得出链表的总长度 <code>len</code>；根据这个总长度，咱们就可以算出倒数第 <code>n</code> 个到底是正数第几个了（<code>M = len - n + 1</code>），那么我们遍历到第<code> M - 1</code>（也就是 <code>len - n</code>） 个结点的时候就可以停下来，执行删除操作（想一想，为什么是第 <code>M-1</code> 个，而不是第 <code>M</code> 个？如果你认真读了我们前面的章节，心中一定会有一个清晰的答案^_^）</p><p>不过这种超过一次的遍历必然需要引起我们的注意，我们应该主动去思考，“如果一次遍历来解决这个问题，我可以怎么做？”，这时候，就要请双指针法来帮忙了。</p><h4 id="快慢指针登场" tabindex="-1">快慢指针登场 <a class="header-anchor" href="#快慢指针登场" aria-label="Permalink to &quot;快慢指针登场&quot;">​</a></h4><p>按照我们已经预告过的思路，首先两个指针 <code>slow</code> 和 <code>fast</code>，全部指向链表的起始位——<code>dummy</code> 结点：</p><p><img src="`+r+'" alt=""></p><p>快指针先出发！闷头走上 <code>n</code> 步，在第 <code>n</code> 个结点处打住，这里 <code>n=2</code>：</p><p><img src="'+s+'" alt=""> 然后，快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来：</p><p><img src="'+d+'" alt=""></p><p><img src="'+p+'" alt=""></p><p><img src="'+c+'" alt=""> 此时，慢指针所指的位置，就是倒数第 <code>n</code> 个结点的前一个结点：</p><p><img src="'+l+'" alt=""> 我们基于这个结点来做删除，可以说是手到擒来：</p><p><img src="'+m+`" alt=""></p><p>到这里，我们总结一下：<br> 链表删除问题中，若走两次遍历，我们做了两件事：<br> 1.求长度<br> 2.做减法，找定位。</p><p>若用快慢指针，我们其实是把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“<code>n</code>”上（ <strong>用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆</strong> ），这样当快指针走到链表末尾（第 <code>len</code> 个）时，慢指针刚好就在 <code>len - n</code> 这个地方稳稳落地。</p><h3 id="编码实现" tabindex="-1">编码实现 <a class="header-anchor" href="#编码实现" aria-label="Permalink to &quot;编码实现&quot;">​</a></h3><pre><code>/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    // 初始化 dummy 结点
    const dummy = new ListNode()
    // dummy指向头结点
    dummy.next = head
    // 初始化快慢指针，均指向dummy
    let fast = dummy
    let slow = dummy

    // 快指针闷头走 n 步
    while(n!==0){
        fast = fast.next
        n--
    }

    // 快慢指针一起走
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }

    // 慢指针删除自己的后继结点
    slow.next = slow.next.next
    // 返回头结点
    return dummy.next
};
</code></pre><h2 id="多指针法——链表的反转" tabindex="-1">多指针法——链表的反转 <a class="header-anchor" href="#多指针法——链表的反转" aria-label="Permalink to &quot;多指针法——链表的反转&quot;">​</a></h2><h3 id="完全反转一个链表" tabindex="-1">完全反转一个链表 <a class="header-anchor" href="#完全反转一个链表" aria-label="Permalink to &quot;完全反转一个链表&quot;">​</a></h3><blockquote><p>真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。</p></blockquote><blockquote><p>示例:</p></blockquote><p>输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL<br> 输出: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</p><h3 id="思路解读" tabindex="-1">思路解读 <a class="header-anchor" href="#思路解读" aria-label="Permalink to &quot;思路解读&quot;">​</a></h3><p>这道题虽然是一道新题，但你要说你完全没思路，我真的哭了 orz。老哥，我真想把这句话刻你显示器上—— <strong>处理链表的本质，是处理链表结点之间的指针关系</strong> 。<br> 我啥也不说，就给你一张链表的结构图：</p><p><img src="`+e+'" alt=""></p><p>来，你告诉我，我如何把这货颠倒个顺序呢？<br> 是不是想办法把每个结点 next 指针的指向给反过来就行了：</p><p><img src="'+i+'" alt=""></p><p>你只要能想到这一步，就说明你对链表操作类题目已经有了最关键的感知，给你双击 666~</p><p>接下来我们需要琢磨的是如何去反转指针的指向，这里我们需要用到三个指针，它们分别指向目标结点（cur）、目标结点的前驱结点（pre）、目标结点的后继结点（next）。这里咱们随便找个结点来开刀：</p><p><img src="'+u+'" alt=""></p><p>这里我只需要一个简单的<code>cur.next = pre</code>，就做到了 next 指针的反转：</p><p><img src="'+h+'" alt=""><br> 有同学会说：那 <code>next</code> 不是完全没用到吗？<br> 当然有用，你瞅瞅，咱们反转完链表变成啥样了：</p><p><img src="'+g+`" alt=""></p><p>这会儿我要是不用 next 给你指着 cur 原本的后继结点，你上哪去定位下一个结点呢？遍历都没法继续了嗷。</p><p>咱们从第一个结点开始，每个结点都给它进行一次 next 指针的反转。到最后一个结点时，整个链表就已经被我们彻底反转掉了。</p><h3 id="编码实现-1" tabindex="-1">编码实现 <a class="header-anchor" href="#编码实现-1" aria-label="Permalink to &quot;编码实现&quot;">​</a></h3><pre><code>/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    // 初始化前驱结点为 null
    let pre = null;
    // 初始化目标结点为头结点
    let cur = head;
    // 只要目标结点不为 null，遍历就得继续
    while (cur !== null) {
        // 记录一下 next 结点
        let next = cur.next;
        // 反转指针
        cur.next = pre;
        // pre 往前走一步
        pre = cur;
        // cur往前走一步
        cur = next;
    }
    // 反转结束后，pre 就会变成新链表的头结点
    return pre
};
</code></pre><h3 id="局部反转一个链表" tabindex="-1">局部反转一个链表 <a class="header-anchor" href="#局部反转一个链表" aria-label="Permalink to &quot;局部反转一个链表&quot;">​</a></h3><p>反转链表真是座金矿，反转完整体反转局部，反转完局部还能每 k 个一组花式反转（最后这个略难，我们会放在真题训练环节来做）。虽然难度依次进阶，但只要把握住核心思想就没问题，下面咱们来看看如何反转局部：</p><blockquote><p>真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。</p></blockquote><blockquote><p>说明:</p></blockquote><p>1 ≤ m ≤ n ≤ 链表长度。</p><blockquote><p>示例:</p></blockquote><p>输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL, m = 2, n = 4<br> 输出: 1-&gt;4-&gt;3-&gt;2-&gt;5-&gt;NULL</p><h3 id="思路解读-1" tabindex="-1">思路解读 <a class="header-anchor" href="#思路解读-1" aria-label="Permalink to &quot;思路解读&quot;">​</a></h3><p>我们仍然是从指针反转来入手：</p><p><img src="`+e+'" alt=""></p><p>按照题中的示例，假如我们需要反转的是链表的第 2-4 之间的结点，那么对应的指针逆序后会是这个样子：</p><p><img src="'+b+'" alt=""></p><p>4 指 3，3 指 2，这都没问题，关键在于，如何让 1 指向 4、让 2 指向 5 呢？这就要求我们在单纯的重复“逆序”这个动作之外，还需要对被逆序的区间前后的两个结点做额外的处理：</p><p><img src="'+_+'" alt=""></p><p>由于我们遍历链表的顺序是从前往后遍历，那么为了避免结点 1 和结点 2 随着遍历向后推进被遗失，我们需要提前把 1 结点缓存下来。而结点 5 就没有这么麻烦了：随着遍历的进行，当我们完成了结点 4 的指针反转后，此时 cur 指针就恰好指在结点 5 上：</p><p><img src="'+x+`" alt=""></p><p>此时我们直接将结点 2 的 next 指针指向 cur、将结点 1 的 next 指针指向 pre 即可。</p><h3 id="编码实现-2" tabindex="-1">编码实现 <a class="header-anchor" href="#编码实现-2" aria-label="Permalink to &quot;编码实现&quot;">​</a></h3><pre><code>/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function(head, m, n) {
    // 定义pre、cur，用leftHead来承接整个区间的前驱结点
    let pre,cur,leftHead
    // 别忘了用 dummy 嗷
    const dummy = new ListNode()
    // dummy后继结点是头结点
    dummy.next = head
    // p是一个游标，用于遍历，最初指向 dummy
    let p = dummy
    // p往前走 m-1 步，走到整个区间的前驱结点处
    for(let i=0;i&lt;m-1;i++){
        p = p.next
    }
    // 缓存这个前驱结点到 leftHead 里
    leftHead = p
    // start 是反转区间的第一个结点
    let start = leftHead.next
    // pre 指向start
    pre = start
    // cur 指向 start 的下一个结点
    cur = pre.next
    // 开始重复反转动作
    for(let i=m;i&lt;n;i++){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    //  leftHead 的后继结点此时为反转后的区间的第一个结点
    leftHead.next = pre
    // 将区间内反转后的最后一个结点 next 指向 cur
    start.next=cur
    // dummy.next 永远指向链表头结点
    return dummy.next
};
</code></pre><p>小贴士：楼上的两道反转题目，都可以用递归来实现，你试试？</p><p>（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信 xyalinode 与我交流哈~）</p>`,74),k=[q];function w(y,N,L,P,j,K){return n(),a("div",null,k)}const M=t(f,[["render",w]]);export{H as __pageData,M as default};
