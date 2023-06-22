---
title: "【Vue学习】 Vue 生命周期和其相关过程"
date: 2023-06-21T15:18:43+08:00
author: "Dui"
slug: first-post-cn
draft: false
toc: true
categories:
- vue
  tags:
- vue
---

##  Vue 生命周期
在初学Vue3选项式的时候，很容易对methods:{}、watch:{}、created:{}等用法感到疑惑，所以本文将系统梳理Vue的生命周期以及各种钩子函数在其中发挥的作用。

这个过程分为两个循环：

- 循环一
  1. 首先，数据和方法被加载出来，这是在 "Data & Methods Loaded" 阶段。
  2. 然后执行 "Created Hook"，这是 Vue 生命周期中的一个阶段，此时所有的数据观察已经设置，但是 DOM 还未生成。
  3. 接着是 "Template Rendering" 阶段，这是 Vue 将模板渲染成 HTML 的过程
  4. 渲染完成后，执行 "Mounted Hook"，此时你可以拿到渲染出来的结果，因为此时 Vue 实例已经挂载到 DOM 上。


- 循环二
  1. 在 "Variable Update" 阶段，如果有变量修改，会触发更新。
  2. 在绘制下一帧前，会在 "Computed Variables" 阶段重新计算 computed 变量。
  3. 计算完成后，会在 "Template Rendering" 阶段重新绘制。
  4. 同时，还有一个 "Watch Hook"，你可以在这里定义监听函数，当监听到变量变化时，会执行相应的动作。
  5. 最后，有时也会调用 "Update Hook"，这是 Vue 生命周期中的一个阶段，此时 Vue 实例的数据变化会导致视图重新渲染。

下图为ChatGPT配图

{{<figure src="https://Sleepydui.github.io/image/vuelifecircle.png" caption="知识整理和博客更新流">}}

我还找ChatChatGPT帮我写了一个小朋友都能看懂的版本，小朋友请看这里：
- 小朋友都能看懂的版本
  1. 首先，我们有一些数据和方法（就像我们有一些玩具和玩具的使用说明）。
  2. 然后，我们开始创建一个东西（就像我们开始按照使用说明玩玩具）。这就是所谓的 "created" 钩子函数。
  3. 接着，我们把这个东西画出来，就像在画布上画画，然后这个画就变成了我们可以看到的东西（HTML）。
  4. 画完之后，我们就可以看到我们画的东西了。这就是 "mounted" 钩子函数。
  5. 但是，我们可能会改变一些东西，比如改变一些颜色或者形状。这就是修改变量。每次我们改变一些东西，我们都需要更新我们的画（这就是 "update" 钩子函数）
  6. 在我们画下一张画之前，我们需要重新计算一些东西，比如我们需要计算新的颜色或形状应该是什么。这就是计算变量。
  7. 然后，我们有一个 "watch" 函数，就像一个警察，它会监视我们是否改变了一些东西。如果我们改变了一些东西，警察就会知道，然后做一些事情。
  8. 有时候，我们也会再次调用 "update" 钩子函数，就像我们可能会再次改变我们的画。
- 总结来说，从 "created" 到 "mounted" 就像我们从开始画画到画完一张画。而 "watch" 和 "update" 就像一个循环，我们可以一直改变和更新我们的画。

Tip1: Mounted代表第一个循环的结束，它不会在第二个循环在用到了。

Tip2: Update只管更新信号，数据怎么变是在DrawChart里已经定义好的。

❤️感谢qsjzkadxm对本文的贡献