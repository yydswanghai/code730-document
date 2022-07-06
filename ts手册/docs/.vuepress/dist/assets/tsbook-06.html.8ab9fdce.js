import{_ as n,o as s,c as a,a as e}from"./app.c3e187bd.js";const p={},t=e(`<h1 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E \u{1F3D6}\uFE0F</h1><h2 id="\u5B57\u9762\u91CF\u7C7B\u578B\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B\u7684\u95EE\u9898</h2><ul><li>\u5728\u7C7B\u578B\u7EA6\u675F\u4F4D\u7F6E\uFF0C\u4F1A\u4EA7\u751F\u91CD\u590D\u4EE3\u7801\u3002\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u89E3\u51B3\u8BE5\u95EE\u9898\u3002</li><li>\u903B\u8F91\u542B\u4E49\u548C\u771F\u5B9E\u7684\u503C\u4EA7\u751F\u4E86\u6DF7\u6DC6\uFF0C\u4F1A\u5BFC\u81F4\u5F53\u4FEE\u6539\u771F\u5B9E\u503C\u7684\u65F6\u5019\uFF0C\u4EA7\u751F\u5927\u91CF\u7684\u4FEE\u6539\u3002</li><li>\u5B57\u9762\u91CF\u7C7B\u578B\u4E0D\u4F1A\u8FDB\u5165\u5230\u7F16\u8BD1\u7ED3\u679C\u3002</li></ul><p><strong>\u679A\u4E3E\u901A\u5E38\u7528\u4E8E\u7EA6\u675F\u67D0\u4E2A\u53D8\u91CF\u7684\u53D6\u503C\u8303\u56F4</strong>\uFF0C\u5B57\u9762\u91CF\u548C\u8054\u5408\u7C7B\u578B\u914D\u7F6E\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u8FBE\u5230\u540C\u6837\u7684\u76EE\u6807\u3002</p><p><strong>\u5B9A\u4E49\u4E00\u4E2A\u679A\u4E3E</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> \u679A\u4E3E\u540D <span class="token punctuation">{</span>
    \u679A\u4E3E\u5B57\u6BB5<span class="token number">1</span> <span class="token operator">=</span> \u503C<span class="token number">1</span><span class="token punctuation">,</span>
    \u679A\u4E3E\u5B57\u6BB5<span class="token number">2</span> <span class="token operator">=</span> \u503C<span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
    male <span class="token operator">=</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
    female <span class="token operator">=</span> <span class="token string">&#39;\u5973&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> gender<span class="token operator">:</span> Gender<span class="token punctuation">;</span>
gender <span class="token operator">=</span> Gender<span class="token punctuation">.</span>male<span class="token punctuation">;</span><span class="token comment">// \u7537</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u679A\u4E3E\u4F1A\u51FA\u73B0\u5728\u7F16\u8BD1\u7ED3\u679C\u4E2D\uFF0C\u7F16\u8BD1\u7ED3\u679C\u4E2D\u8868\u73B0\u4E3A\u5BF9\u8C61\u3002</p></div><h2 id="\u679A\u4E3E\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7684\u89C4\u5219" aria-hidden="true">#</a> \u679A\u4E3E\u7684\u89C4\u5219</h2><ul><li>\u679A\u4E3E\u7684\u5B57\u6BB5\u503C\u53EA\u80FD\u4F7F\u7528\u5B57\u7B26\u4E32\u6216\u6570\u5B57</li><li>\u6570\u5B57\u679A\u4E3E\u7684\u503C\u4F1A\u81EA\u52A8\u81EA\u589E\uFF0C\u7B2C\u4E00\u4E2A\u5982\u679C\u4E0D\u8D4B\u503C\u9ED8\u8BA4\u4E3A0</li><li>\u88AB\u6570\u5B57\u679A\u4E3E\u7EA6\u675F\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\u4E3A\u6570\u5B57\uFF08\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\uFF09</li><li>\u6570\u5B57\u679A\u4E3E\u7684\u7F16\u8BD1\u7ED3\u679C \u548C \u5B57\u7B26\u4E32\u679A\u4E3E\u7684\u7F16\u8BD1\u7ED3\u679C\u6709\u5DEE\u5F02</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Level <span class="token punctuation">{</span>
    level1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    level2<span class="token punctuation">,</span>
    level3<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> l<span class="token operator">:</span> Level <span class="token operator">=</span> Level<span class="token punctuation">.</span>level2<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Level <span class="token punctuation">{</span>
    level1<span class="token punctuation">,</span>
    level2<span class="token punctuation">,</span>
    level3<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;level1&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;level2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;level3&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;level1&quot;</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;level2&quot;</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;level3&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h2><ul><li>\u5C3D\u91CF\u4E0D\u8981\u5728\u4E00\u4E2A\u679A\u4E3E\u4E2D\u65E2\u51FA\u73B0\u5B57\u7B26\u4E32\u5B57\u6BB5\uFF0C\u53C8\u51FA\u73B0\u6570\u5B57\u5B57\u6BB5</li><li>\u4F7F\u7528\u679A\u4E3E\u65F6\uFF0C\u5C3D\u91CF\u4F7F\u7528\u679A\u4E3E\u5B57\u6BB5\u7684\u540D\u79F0\uFF0C\u800C\u4E0D\u4F7F\u7528\u771F\u5B9E\u7684\u503C</li></ul><h2 id="\u679A\u4E3E\u7684\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7684\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u679A\u4E3E\u7684\u4F4D\u8FD0\u7B97</h2><p>\u9488\u5BF9\u6570\u5B57\u679A\u4E3E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Permission <span class="token punctuation">{</span>
    Read <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>   <span class="token comment">// 0001 \u53EF\u8BFB</span>
    Write <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">// 0010 \u53EF\u5199</span>
    Create <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 0100 \u53EF\u6DFB\u52A0</span>
    Delete <span class="token operator">=</span> <span class="token number">8</span>  <span class="token comment">// 1000 \u53EF\u5220\u9664</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u901A\u8FC7\u4E8C\u8FDB\u5236\u7684\u6807\u8BC6\u6765\u6807\u793A\u6743\u9650\u4F4D</span>

<span class="token comment">// 1. \u5982\u4F55\u7EC4\u5408\u6743\u9650 (\u4F7F\u7528\u6216\u8FD0\u7B97)</span>
<span class="token comment">// 0001</span>
<span class="token comment">// 0010</span>
<span class="token comment">// \u6216</span>
<span class="token comment">// 0011</span>
<span class="token keyword">let</span> p<span class="token operator">:</span>Permission <span class="token operator">=</span> Permission<span class="token punctuation">.</span>Read <span class="token operator">|</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">;</span>

<span class="token comment">// 2. \u5982\u4F55\u5224\u65AD\u662F\u5426\u62E5\u6709\u67D0\u4E2A\u6743\u9650 (\u4F7F\u7528\u4E14\u8FD0\u7B97)</span>
<span class="token comment">// 0011 target</span>
<span class="token comment">// **** per =&gt; 0010</span>
<span class="token comment">// \u4E14</span>
<span class="token comment">// 0010</span>
<span class="token keyword">function</span> <span class="token function">hasPermission</span><span class="token punctuation">(</span>target<span class="token operator">:</span>Permission<span class="token punctuation">,</span> per<span class="token operator">:</span>Permission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;</span> per<span class="token punctuation">)</span> <span class="token operator">===</span> per<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5224\u65AD\u53D8\u91CFp\u662F\u5426\u62E5\u6709\u53EF\u8BFB/\u53EF\u5199/\u53EF\u6DFB\u52A0/\u53EF\u5220\u9664\u6743\u9650</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Read<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Create<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Delete<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>

<span class="token comment">// 3. \u5982\u4F55\u5220\u9664\u67D0\u4E2A\u6743\u9650 (\u4F7F\u7528\u5F02\u6216\u8FD0\u7B97)</span>
<span class="token comment">// 0011</span>
<span class="token comment">// 0010</span>
<span class="token comment">// \u5F02\u6216</span>
<span class="token comment">// 0001</span>
p <span class="token operator">=</span> p <span class="token operator">^</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> Permission<span class="token punctuation">.</span>Write<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// false</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[t];function o(l,c){return s(),a("div",null,i)}var r=n(p,[["render",o],["__file","tsbook-06.html.vue"]]);export{r as default};
