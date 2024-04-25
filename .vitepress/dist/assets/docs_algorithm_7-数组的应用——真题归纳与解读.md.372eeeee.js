import{_ as n,v as a,b as e,R as s}from"./chunks/framework.eb2f4134.js";const t="/Knowledge-base/assets/1.2a67955c.jpg",r="/Knowledge-base/assets/2.c4cdb6d0.jpg",p="/Knowledge-base/assets/3.8876f984.jpg",o="/Knowledge-base/assets/4.da282573.jpg",m="/Knowledge-base/assets/5.693bea85.jpg",u="/Knowledge-base/assets/6.99b6aa9a.jpg",j=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/algorithm/7-数组的应用——真题归纳与解读.md","filePath":"docs/algorithm/7-数组的应用——真题归纳与解读.md"}'),i={name:"docs/algorithm/7-数组的应用——真题归纳与解读.md"},l=s('<p>我们现在要开始做题啦！</p><p>万里长征第一步，仍然是数组。<br> 单纯针对数组来考察的题目，总体来说，都不算太难——数组题目要想往难了出，基本都要结合排序、二分和动态规划这些相对复杂的算法思想才行。</p><p>咱们本节要解决的正是这一类“不算太难”的数组题目——并不是只有难题才拥有成为真题的入场券，一道好题不一定会难，它只要能够反映问题就可以了。<br> 本节所涉及的题目在面试中普遍具有较高的出镜率、同时兼具一定的综合性，对培养大家的通用解题能力大有裨益 。<br> 相信这节你会学得很开心，在轻松中收获自己的第一份算法解题锦囊。</p><h2 id="map-的妙用——两数求和问题" tabindex="-1">Map 的妙用——两数求和问题 <a class="header-anchor" href="#map-的妙用——两数求和问题" aria-label="Permalink to &quot;Map 的妙用——两数求和问题&quot;">​</a></h2><blockquote><p>真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p></blockquote><p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p><blockquote><p>示例:</p></blockquote><p>给定 nums = [2, 7, 11, 15], target = 9<br> 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]</p><h3 id="思路分析" tabindex="-1">思路分析： <a class="header-anchor" href="#思路分析" aria-label="Permalink to &quot;思路分析：&quot;">​</a></h3><h4 id="一个-淳朴-的解法" tabindex="-1">一个“淳朴”的解法 <a class="header-anchor" href="#一个-淳朴-的解法" aria-label="Permalink to &quot;一个“淳朴”的解法&quot;">​</a></h4><p>这道题相信很多同学看一眼就很快能得出一个最基本的思路：两层循环来遍历同一个数组；第一层循环遍历的值记为 a，第二层循环时遍历的值记为 b；若 <code>a+b = 目标值</code>，那么 a 和 b 对应的数组下标就是我们想要的答案。</p><h4 id="对-淳朴-解法的反思" tabindex="-1">对“淳朴”解法的反思 <a class="header-anchor" href="#对-淳朴-解法的反思" aria-label="Permalink to &quot;对“淳朴”解法的反思&quot;">​</a></h4><p>大家以后做算法题的时候，要有这样的一种本能：当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。</p><p>因为两层循环很多情况下都意味着 O(n^2) 的复杂度，这个复杂度非常容易导致你的算法超时。即便没有超时，在明明有一层遍历解法的情况下，你写了两层遍历，面试官对你的印象分会大打折扣。</p><h4 id="空间换时间-map-来帮忙" tabindex="-1">空间换时间，Map 来帮忙 <a class="header-anchor" href="#空间换时间-map-来帮忙" aria-label="Permalink to &quot;空间换时间，Map 来帮忙&quot;">​</a></h4><p>拿我们这道题来说，其实二层遍历是完全不必要的。<br> 大家记住一个结论：几乎所有的求和问题，都可以转化为 <strong>求差问题</strong> 。 这道题就是一个典型的例子，通过把求和问题转化为求差问题，事情会变得更加简单。</p><p>我们可以在遍历数组的过程中，增加一个 Map 来记录已经遍历过的数字及其对应的索引值。然后每遍历到一个新数字的时候，都回到 Map 里去查询 targetNum 与该数的 <strong>差值</strong> 是否已经在前面的数字中出现过了。若出现过，那么答案已然显现，我们就不必再往下走了。</p><p>我们以 <code>nums = [2, 7, 11, 15]</code> 这个数组为例，来模拟一下这个思路：<br> 第一次遍历到 2，此时 Map 为空：</p><p><img src="'+t+'" alt=""></p><p>以 2 为 key，索引 0 为 value 作存储，继续往下走；遇到了 7：</p><p><img src="'+r+'" alt=""></p><p>计算 targetNum 和 7 的差值为 2，去 Map 中检索 2 这个 key，发现是之前出现过的值：</p><p><img src="'+p+`" alt=""> 那么 2 和 7 的索引组合就是这道题的答案啦。<br> 键值对存储我们可以用 ES6 里的 Map 来做，如果图省事，直接用对象字面量来定义也没什么问题。</p><h4 id="编码实现" tabindex="-1">编码实现 <a class="header-anchor" href="#编码实现" aria-label="Permalink to &quot;编码实现&quot;">​</a></h4><pre><code>/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    // 这里我用对象来模拟 map 的能力
    const diffs = {}
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for(let i=0;i&lt;len;i++) {
        // 判断当前值对应的 target 差值是否存在（是否已遍历过）
        if(diffs[target-nums[i]]!==undefined) {
            // 若有对应差值，那么答案get！
            return [diffs[target - nums[i]], i]
        }
        // 若没有对应差值，则记录当前值
        diffs[nums[i]]=i
    }
};
</code></pre><p>tips：这道题也可以用 ES6 中的 Map 来做，你试试呢？</p><h2 id="强大的双指针法" tabindex="-1">强大的双指针法 <a class="header-anchor" href="#强大的双指针法" aria-label="Permalink to &quot;强大的双指针法&quot;">​</a></h2><h3 id="合并两个有序数组" tabindex="-1">合并两个有序数组 <a class="header-anchor" href="#合并两个有序数组" aria-label="Permalink to &quot;合并两个有序数组&quot;">​</a></h3><blockquote><p>真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。</p></blockquote><p>说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。</p><blockquote><p>示例:</p></blockquote><p>输入:<br> nums1 = [1,2,3,0,0,0], m = 3<br> nums2 = [2,5,6], n = 3<br> 输出: [1,2,2,3,5,6]</p><h3 id="思路分析-1" tabindex="-1">思路分析 <a class="header-anchor" href="#思路分析-1" aria-label="Permalink to &quot;思路分析&quot;">​</a></h3><h4 id="标准解法" tabindex="-1">标准解法 <a class="header-anchor" href="#标准解法" aria-label="Permalink to &quot;标准解法&quot;">​</a></h4><p>这道题没有太多的弯弯绕绕，标准解法就是双指针法。首先我们定义两个指针，各指向两个数组生效部分的尾部：</p><p><img src="`+o+'" alt=""></p><p><strong>每次只对指针所指的元素进行比较</strong> 。取其中较大的元素，把它从 nums1 的末尾往前面填补：</p><p><img src="'+m+`" alt=""> 这里有一点需要解释一下：<br> 为什么是从后往前填补？因为是要把所有的值合并到 nums1 里，所以说我们这里可以把 nums1 看做是一个“容器”。但是这个容器，它不是空的，而是前面几个坑有内容的。如果我们从前往后填补，就没法直接往对应的坑位赋值了（会产生值覆盖）。<br> 从后往前填补，我们填的都是没有内容的坑，这样会省掉很多麻烦。</p><p>由于 nums1 的有效部分和 nums2 并不一定是一样长的。我们还需要考虑其中一个提前到头的这种情况：</p><ol><li><p>如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。</p></li><li><p>如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作。</p></li></ol><h4 id="编码实现-1" tabindex="-1">编码实现： <a class="header-anchor" href="#编码实现-1" aria-label="Permalink to &quot;编码实现：&quot;">​</a></h4><pre><code>/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    // 初始化两个指针的指向，初始化 nums1 尾部索引k
    let i = m - 1, j = n - 1, k = m + n - 1
    // 当两个数组都没遍历完时，指针同步移动
    while(i &gt;= 0 &amp;&amp; j &gt;= 0) {
        // 取较大的值，从末尾往前填补
        if(nums1[i] &gt;= nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }

    // nums2 留下的情况，特殊处理一下
    while(j&gt;=0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
};
</code></pre><p>找点乐子：<br> 上面我们给出的，是面试官最喜欢看到的一种解法，这种解法适用于各种语言。<br> 但是就 JS 而言，我们还可以“另辟蹊径”，仔细想想，你有什么妙招？</p><h3 id="三数求和问题" tabindex="-1">三数求和问题 <a class="header-anchor" href="#三数求和问题" aria-label="Permalink to &quot;三数求和问题&quot;">​</a></h3><p>双指针法能处理的问题多到你想不到。不信来瞅瞅两数求和它儿子——三数求和问题！<br> 俗话说，青出于蓝而胜于蓝，三数求和虽然和两数求和只差了一个字，但是思路却完全不同。</p><blockquote><p>真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。</p></blockquote><p>注意：答案中不可以包含重复的三元组。</p><blockquote><p>示例：</p></blockquote><p>给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]</p><h4 id="思路分析-2" tabindex="-1">思路分析 <a class="header-anchor" href="#思路分析-2" aria-label="Permalink to &quot;思路分析&quot;">​</a></h4><p>三数之和延续两数之和的思路，我们可以 <strong>把求和问题变成求差问题</strong> ——固定其中一个数，在剩下的数中寻找是否有两个数和这个固定数相加是等于 0 的。</p><p>虽然乍一看似乎还是需要三层循环才能解决的样子，不过现在我们有了双指针法，定位效率将会被大大提升，从此告别过度循环~</p><p>（这里大家相信已经能察觉出来双指针法的使用场景了，一方面，它可以做到空间换时间；另一方面，它也可以帮我们降低问题的复杂度。）</p><p>双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义。因此这道题的第一步是将数组排序：</p><pre><code> nums = nums.sort((a,b)=&gt;{
    return a-b
})
</code></pre><p>然后，对数组进行遍历，每次遍历到哪个数字，就固定哪个数字。然后把左指针指向该数字后面一个坑里的数字，把右指针指向数组末尾，让左右指针从起点开始，向中间前进：</p><p><img src="`+u+`" alt=""> 每次指针移动一次位置，就计算一下两个指针指向数字之和加上固定的那个数之后，是否等于 0。如果是，那么我们就得到了一个目标组合；否则，分两种情况来看：</p><ul><li><p>相加之和大于 0，说明右侧的数偏大了，右指针左移</p></li><li><p>相加之和小于 0，说明左侧的数偏小了，左指针右移</p></li></ul><p>tips：这个数组在题目中要求了“不重复的三元组”，因此我们还需要做一个重复元素的跳过处理。这一点在编码实现环节大家会注意到。</p><h4 id="编码实现-2" tabindex="-1">编码实现 <a class="header-anchor" href="#编码实现-2" aria-label="Permalink to &quot;编码实现&quot;">​</a></h4><pre><code>/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    // 用于存放结果数组
    let res = []
    // 给 nums 排序
    nums = nums.sort((a,b)=&gt;{
        return a-b
    })
    // 缓存数组长度
    const len = nums.length
    // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
    for(let i=0;i&lt;len-2;i++) {
        // 左指针 j
        let j=i+1
        // 右指针k
        let k=len-1
        // 如果遇到重复的数字，则跳过
        if(i&gt;0&amp;&amp;nums[i]===nums[i-1]) {
            continue
        }
        while(j&lt;k) {
            // 三数之和小于0，左指针前进
            if(nums[i]+nums[j]+nums[k]&lt;0){
                j++
               // 处理左指针元素重复的情况
               while(j&lt;k&amp;&amp;nums[j]===nums[j-1]) {
                    j++
                }
            } else if(nums[i]+nums[j]+nums[k]&gt;0){
                // 三数之和大于0，右指针后退
                k--

               // 处理右指针元素重复的情况
               while(j&lt;k&amp;&amp;nums[k]===nums[k+1]) {
                    k--
                }
            } else {
                // 得到目标数字组合，推入结果数组
                res.push([nums[i],nums[j],nums[k]])

                // 左右指针一起前进
                j++
                k--

                // 若左指针元素重复，跳过
                while(j&lt;k&amp;&amp;nums[j]===nums[j-1]) {
                    j++
                }

               // 若右指针元素重复，跳过
               while(j&lt;k&amp;&amp;nums[k]===nums[k+1]) {
                    k--
                }
            }
        }
    }

    // 返回结果数组
    return res
};
</code></pre><h3 id="双指针法中的-对撞指针-法" tabindex="-1">双指针法中的“对撞指针”法 <a class="header-anchor" href="#双指针法中的-对撞指针-法" aria-label="Permalink to &quot;双指针法中的“对撞指针”法&quot;">​</a></h3><p>在上面这道题中，左右指针一起从两边往中间位置相互迫近，这样的特殊双指针形态，被称为“对撞指针”。</p><p>什么时候你需要联想到对撞指针？<br> 这里我给大家两个关键字——“有序”和“数组”。<br> 没错，见到这两个关键字，立刻把双指针法调度进你的大脑内存。普通双指针走不通，立刻想对撞指针！</p><p>即便数组题目中并没有直接给出“有序”这个关键条件，我们在发觉普通思路走不下去的时候，也应该及时地尝试手动对其进行排序试试看有没有新的切入点——没有条件，创造条件也要上。</p><p>对撞指针可以帮助我们缩小问题的范围，这一点在“三数求和”问题中体现得淋漓尽致：因为数组有序，所以我们可以用两个指针“画地为牢”圈出一个范围，这个范围以外的值不是太大就是太小、直接被排除在我们的判断逻辑之外，这样我们就可以把时间花在真正有意义的计算和对比上。如此一来，不仅节省了计算的时间，更降低了问题本身的复杂度，我们做题的速度也会大大加快。</p><p>（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信 xyalinode 与我交流哈~）</p>`,67),c=[l];function h(d,b,k,g,f,_){return a(),e("div",null,c)}const x=n(i,[["render",h]]);export{j as __pageData,x as default};
