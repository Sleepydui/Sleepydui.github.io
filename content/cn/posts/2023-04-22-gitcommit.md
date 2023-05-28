---
title: "【工作流】知识输入与输出流兼论终端提交指令"
date: 2023-04-22T15:18:43+08:00
author: "Dui"
slug: first-post-cn
draft: false
toc: true
categories:
  - workflow
tags:
  - workflow
---

## 知识输入与输出

我的目标是建立一个正向可循环的、高效的知识输入输出体系。

- 具体来说：
  - 首先建立一个从外界输入的知识库，这个数据库应该易于存储、访问和查找。
  - 其次优化知识的加工处理流程，利用零碎时间去消化和理解尽可能多的知识。
  - 最后进行输出，以得到对知识更深的理解，如果这些输出能帮助到别人，则是这个体系的bonus。

目前，这个体系暂时是长下图这样，我会在这篇博文记录它的迭代和优化。

{{<figure src="https://Sleepydui.github.io/image/knowledge.png" caption="知识整理和博客更新流">}}

## 终端指令备忘录

鉴于我还是个建站的初学者，对hugo等建站工具的大部分认识都来自于[hongtao](https://hongtaoh.com/)，在这里记下一些常用指令和自己探索中的notes以便查阅。

### MD模版与预览

MD文档模版与HTML对照：
> 2021-01-07-intro.md
> https://sleepydui.github.io/cn/2021/01/07/first-post-cn/#%E4%BB%A3%E7%A0%81

另一个对照，也来自hongtao：
> https://raw.githubusercontent.com/hongtaoh/hongtaoh.github.io/sources/content/cn/blog/2021-03-02-personal-website.md
> https://hongtaoh.com/cn/2021/03/02/personal-website-tutorial/

### 终端指令：

⚠️以下操作都需要先cd到文件夹（我的文件夹叫quickstart）

⚠️以下指令都学习自[hongtao的建站教程](https://hongtaoh.com/cn/2021/03/02/personal-website-tutorial/)

1.更新网站:

```bash
git add .  
git commit -m “0422update"
git push origin master
```
2.新添加内容:

```bash
hugo new cn/posts/2023-04-22-gitcommit.md
```
3.在导航栏新加一个分栏:

```bash
mkdir content/cn/hobby # hobby 可以换成别的名字
cp content/cn/about/_index.md content/cn/hobby # hobby 可以换成别的名字
open content/cn/hobby/_index.md -a TextEdit 
```
更改这个 `_index.md` 的 Title 和内容即可。

4.新添加文件:

你可以直接把文件，比如 `myPDF.pdf` 放到 `static` 文件夹，这样的话，这个文件的地址就是 `https://USERNAME.github.io/myPDF.pdf`。当你的文件比较多时，建议你在 `static` 文件夹下新建一个子文件夹，比如 `files`，然后把文件统一放到 `files` 里，这样的话，地址就是 `https://USERNAME.github.io/files/myPDF.pdf`

⚠️一些注意点

1.我踩的第一个坑是commit以后github响应很慢，不会立刻帮你更新网站，此时不要在github里再提交一遍所有网页，那会花费大量时间重新搭建，只需要耐心等一天。

2.网络问题：我的terminal经常停留在commit进程中不响应，经过测试，需要关闭魔法🪜，最好也不要用校园网，直接连接热点再commit会比较快。

3.想把md分行，之间需要空一行才行，并不像文档中那样回车就是另起一行。
