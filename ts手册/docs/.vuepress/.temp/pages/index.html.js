export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"指南\",\"link\":\"/page/tsbook-01.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Welcome to read\",\"details\":\"欢迎阅读文档\"},{\"title\":\"Docment\",\"details\":\"点击指南直接进入文档开始阅读\"},{\"title\":\"VuePress\",\"details\":\"一个基于VuePress生成的文档\"},{\"title\":\"No more\",\"details\":\"没有更多了\"},{\"title\":\"No more\",\"details\":\"没有更多了\"},{\"title\":\"No more\",\"details\":\"没有更多了\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present wanghai\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1657006497000,\"contributors\":[{\"name\":\"wanghai\",\"email\":\"2275981101@qq.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
