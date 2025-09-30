<template>
  <router-view/>
</template>

<style>
/* 基础样式与变量（相对单位） */
:root {
  --container-max: 85rem;
  --rule: hsl(0 0% 92%);
  --text: hsl(0 0% 20%);
  --muted: hsl(0 0% 45%);
  --accent: #1EAA17;
  /* 头部高度 = logo高度(2.875rem) + 内边距(1.125rem + 0.625rem) + 边框约0.125rem */
  --header-offset: calc(2.875rem + 1.75rem + 0.125rem);
}

html, body { height: 100%; }
html { scroll-behavior: smooth; scroll-padding-top: var(--header-offset); }

body {
  margin: 0;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  line-height: 1.75;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* 通用容器：使用calc结合百分比实现动态宽度 */
.container {
  width: calc(100% - 6%);
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
}
</style>
