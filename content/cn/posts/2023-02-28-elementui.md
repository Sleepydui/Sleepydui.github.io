---
title: “Vue3安装Element-ui"
date: 2023-02-28T19:50:22+08:00
author: “dui"
slug:
draft: false
toc: false
---

- 关于npm install element-ui 报错的问题
  - 情境是在ancientvis中，用到了element-ui中的el-popover 弹出框
  - 我下载以后打算写这个模块显示未安装依赖
  - 报错为：“npm ERR! ERESOLVE unable to resolve dependency tree”
  - 这个错误表明在解析依赖树时遇到了问题。 Element-ui 2.15.13 要求 Vue 的对等版本为 ^2.5.17，但是我的项目中安装的 Vue 版本为 3.2.47。
  - 解决方案：尝试升级 Element-ui：升级 Element-ui 到与 Vue 3 兼容的版本（例如 Element-ui 3 或 Element Plus）
  - 然后在我的应用程序中使用 Element Plus
    - 具体来说，是在我的 main.js 或 app.js 文件中引入 Element Plus，并在 Vue 实例中注册 Element Plus 组件。
    - 具体使用的el-button等语法稍有区别，需要查文档