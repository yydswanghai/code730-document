import{_ as n,o as s,c as a,a as p}from"./app.c3e187bd.js";const t={},e=p(`<h1 id="\u51FD\u6570\u76F8\u5173\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u76F8\u5173\u7684\u7EA6\u675F" aria-hidden="true">#</a> \u51FD\u6570\u76F8\u5173\u7684\u7EA6\u675F \u{1F4AB}</h1><h2 id="\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D</h2><p>\u5728\u51FD\u6570\u5B9E\u73B0\u4E4B\u524D\uFF0C\u5BF9\u51FD\u6570\u8C03\u7528\u7684\u591A\u79CD\u60C5\u51B5\u8FDB\u884C\u58F0\u660E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> a
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> b
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> \u5F97\u5230a*b
 */</span>
<span class="token keyword">function</span> <span class="token function">conbine</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> a
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> b
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> \u5F97\u5230a+b\u62FC\u63A5\u7684\u7ED3\u679C
 */</span>
<span class="token keyword">function</span> <span class="token function">conbine</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">conbine</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;a\u548Cb\u7C7B\u578B\u5FC5\u987B\u662F\u76F8\u540C\u7684&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">conbine</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">conbine</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570</h2><p>\u53EF\u4EE5\u5728\u67D0\u4E9B\u53C2\u6570\u540D\u540E\u52A0\u4E0A\u95EE\u53F7\uFF0C\u8868\u793A\u8BE5\u53C2\u6570\u53EF\u4EE5\u4E0D\u7528\u4F20\u9012</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u53EF\u9009\u53C2\u6570\u5FC5\u987B\u5728\u53C2\u6570\u5217\u8868\u7684\u672B\u5C3E\uFF0C\u5047\u5982\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u9009\uFF0C\u90A3\u4F60\u6BCF\u6B21\u8C03\u7528<code>sum</code>\u4F9D\u7136\u8FD8\u662F\u9700\u8981\u4F20\u9012\u4E09\u4E2A\u53C2\u6570\uFF0C\u8FD9\u6837\u53EF\u9009\u5C31\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\u4E86\u3002</p></div>`,8),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","tsbook-04.html.vue"]]);export{r as default};
