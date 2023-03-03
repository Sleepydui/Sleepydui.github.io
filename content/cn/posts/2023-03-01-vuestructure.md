---
title: "Vuestructure"
date: 2023-03-01T20:02:39+08:00
author: "dui"
slug:
draft: false
toc: false
---

- Vue实现原理
  - main.js
    - 是入口文件我们的项目默认访问index.html，这个文件里面<div id="app"></div>和App.vue组件里面的容器完美的重合了，也就是把组件挂载到了index页面，然后我们只需要去建设其他组件就好了，在App组件中我们也可以引入，注册，应用其他组件，可以通过路由将其他组件渲染在App组件，这样我们就只需要去关注每个组件的功能完善。
    - 就是说vue的默认页面是index.html，index中的<div id="app"></div>挂载了App.vue这个大组件，然后所有的其他子组件（hello.vue等）都归属在App.vue这个主组件下。

- 主要文件详解
    - App.vue——[根组件]
      - 一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)
      - 【template】
        - 其中模板只能包含一个父节点，也就是说顶层的div只能有一个（例如上面代码，父节点为#app的div，其没有兄弟节点）
        - <router-view></router-view>是子路由视图，后面的路由页面都显示在此处
        - 打一个比喻吧,<router-view>类似于一个插槽，跳转某个路由时，该路由下的页面就插在这个插槽中渲染显示
      - 【script】
        - vue通常用es6来写，用export default导出，其下面可以包含数据data，生命周期(mounted等)，方法(methods)等，具体语法请看vue.js文档。
      - 【style】
        - 样式通过style标签<style></style>包裹，默认是影响全局的，如需定义作用域只在该组件下起作用，需在标签上加scoped.
        - <style scoped></style>
    - main.js——[入口文件]
      - main.js主要是引入vue框架，根组件及路由设置，并且定义vue实例，下面的 components:{App}就是引入的根组件App.vue

```javascript
/*引入vue框架*/
import Vue from 'vue'
/*引入根组件*/
import App from './App'
/*引入路由设置*/
import router from './router'

/*定义实例*/ 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

- 主要文件详解
    - router——[路由配置]
      - vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。
      - router文件夹下，有一个index.js，即为路由配置文件。
      - 这里定义了路径为'/'的路由，该路由对应的页面是Hello组件，所以当我们在浏览器url访问http://localhost:8080/#/时就渲染的Hello组件
      - 类似的，我们可以设置多个路由，‘/index’,'/list'之类的，当然首先得引入该组件，再为该组件设置路由。

```javascript
/*引入vue框架*/
import Vue from 'vue'
/*引入路由依赖*/
import Router from 'vue-router'
/*引入页面组件，命名为Hello*/ 
import Hello from '@/components/Hello'

/*使用路由依赖*/ 
Vue.use(Router)

/*定义路由*/ 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
```

###### vue 模板文件

```html
<!--  -->
<template>
  <div/>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {

  }
}

</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>
```