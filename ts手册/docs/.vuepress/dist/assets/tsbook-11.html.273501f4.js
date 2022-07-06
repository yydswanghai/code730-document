import{_ as n,o as s,c as a,a as t}from"./app.c3e187bd.js";const p={},e=t(`<h1 id="\u7C7B\u578B\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u7C7B\u578B\u517C\u5BB9\u6027 \u{1F3AF}</h1><p>\u82E5\u5C06 B \u8D4B\u503C A\uFF0C\u5982\u679C\u80FD\u5B8C\u6210\u8D4B\u503C\uFF0C\u5219 B \u548C A\u7C7B\u578B\u517C\u5BB9</p><p>\u9E2D\u5B50\u8FA8\u578B\u6CD5 (\u5B50\u7ED3\u6784\u8FA8\u578B\u6CD5)\uFF1A\u76EE\u6807\u7C7B\u578B\u9700\u8981\u67D0\u4E00\u4E9B\u7279\u5F81\uFF0C\u8D4B\u503C\u7684\u7C7B\u578B\u53EA\u8981\u80FD\u6EE1\u8DB3\u8BE5\u7279\u5F81\u5373\u53EF</p><ol><li><strong>\u57FA\u672C\u7C7B\u578B</strong>\uFF1A\u5B8C\u5168\u5339\u914D</li><li><strong>\u5BF9\u8C61\u7C7B\u578B</strong>\uFF1A\u9E2D\u5B50\u8FA8\u578B\u6CD5\uFF0C\u5F53\u76F4\u63A5\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C\u66F4\u52A0\u4E25\u683C\u7684\u5224\u65AD</li></ol><h3 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h3><p>\u544A\u8BC9TS\u5F53\u524D\u6570\u636E\u662F\u4EC0\u4E48\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>\u6570\u636E <span class="token keyword">as</span> \u7C7B\u578B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u975E\u7A7A\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u975E\u7A7A\u65AD\u8A00" aria-hidden="true">#</a> \u975E\u7A7A\u65AD\u8A00</h3><p>\u5728\u6570\u636E\u4E4B\u540E\u52A0\u4E0A\u4E00\u4E2A<code>!</code>\uFF0C\u544A\u8BC9TS\uFF0C\u4E0D\u7528\u8003\u8651\u8BE5\u6570\u636E\u4E3A\u7A7A\u7684\u60C5\u51B5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Duck</span> <span class="token punctuation">{</span>
    sound<span class="token operator">:</span> <span class="token string">&quot;\u560E\u560E\u560E&quot;</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;\u4F2A\u88C5\u6210\u9E2D\u5B50\u7684\u4EBA&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sound<span class="token operator">:</span> <span class="token string">&quot;\u560E\u560E\u560E&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;\u560E\u560E\u560E&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//   \u6570\u636E&quot;\u560E\u560E\u560E&quot; \u65AD\u8A00 \u7C7B\u578B&quot;\u560E\u560E\u560E&quot;</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;\u6B63\u5728\u6E38\u6CF3\uFF0C\u5E76\u53D1\u51FA\u4E86&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// person \u53EF\u4EE5\u8D4B\u503C\u7ED9 Duck\u7C7B\u578B\uFF0C\u800C\u4E14 duck \u91CC\u53EA\u6709 sound \u5C5E\u6027\u548C swin \u65B9\u6CD5</span>
<span class="token keyword">let</span> duck<span class="token operator">:</span> Duck <span class="token operator">=</span> person<span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4F60\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u76F4\u63A5\u8D4B\u503C\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4F60\u660E\u786E\u7684\u77E5\u9053\u662FDuck\u7684\u7C7B\u578B</span>
<span class="token keyword">let</span> duck2<span class="token operator">:</span> Duck <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;\u4F2A\u88C5\u6210\u9E2D\u5B50\u7684\u4EBA&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sound<span class="token operator">:</span> <span class="token string">&quot;\u560E\u560E\u560E&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;\u560E\u560E\u560E&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//   \u6570\u636E&quot;\u560E\u560E\u560E&quot; \u65AD\u8A00 \u7C7B\u578B&quot;\u560E\u560E\u560E&quot;</span>
    <span class="token function">swin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;\u6B63\u5728\u6E38\u6CF3\uFF0C\u5E76\u53D1\u51FA\u4E86&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>\u51FD\u6570\u7C7B\u578B</strong></li></ol><p><strong>\u53C2\u6570</strong>\uFF1A\u4F20\u9012\u7ED9\u76EE\u6807\u51FD\u6570\u7684\u53C2\u6570\u53EF\u4EE5\u5C11\uFF0C\u4F46\u4E0D\u53EF\u4EE5\u591A <strong>\u8FD4\u56DE\u503C</strong>\uFF1A\u8981\u6C42\u8FD4\u56DE\u5FC5\u987B\u8FD4\u56DE\uFF1B\u4E0D\u8981\u6C42\u8FD4\u56DE\uFF0C\u4F60\u968F\u610F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> Condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            s <span class="token operator">+=</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.\u4E0D\u9700\u8981i\u7684\u65F6\u5019</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=&gt;</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.\u9700\u8981i\u5F97\u65F6\u5019</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","tsbook-11.html.vue"]]);export{r as default};
