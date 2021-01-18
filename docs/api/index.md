# 基本语法

## 标题

``` md
# 基本语法

## 标题

### 标题三

#### 标题四

##### 标题五

###### 标题六

```

## 列表

**有序**

``` md

1. 富强、民主、文明、和谐
2. 自由、平等、公正、法治
3. 爱国、敬业、诚信、友善

```

1. 富强、民主、文明、和谐
2. 自由、平等、公正、法治
3. 爱国、敬业、诚信、友善

**无序**

``` md

* 富强、民主、文明、和谐
* 自由、平等、公正、法治
* 爱国、敬业、诚信、友善

```

* 富强、民主、文明、和谐
* 自由、平等、公正、法治
* 爱国、敬业、诚信、友善

::: tip 提醒
`*` 可以是 `-` 或 `+` ， `markdown-formatter` 语法标准中以 `*` 为标准。
:::

## 图片

``` md

![markdow](/assets/images/markdown.svg)

```

``` html
<img src="/assets/images/markdown.svg" alt="markdwon">
```

![markdow](/assets/images/markdown.svg)

## 文本

``` html
<font face="STCAIYUN">~~华文彩云字体带删除线~~</font>
<font color=teal size=3>***青色3号字体加粗倾斜***</font>
```

<font face="STCAIYUN">~~华文彩云字体带删除线~~</font>

<font color=teal size=3>***青色3号字体加粗倾斜***</font>

::: tip 提醒
markdown 的文本字体，颜色，大小操作跟 `HTML` 一样麻烦。其实也不需要，因为它一开始就声明了：一种轻量级标记语言。
:::

## 链接

**行内**

``` md
[Google](http://www.google.com)
```

[Google](http://www.google.com)

**参考**

``` md
<http://www.google.com>
```

<http://www.google.com>

## 代码

**行内**

``` md
C语言里的函数 `scanf()` 怎么使用？
```

C语言里的函数 `scanf()` 怎么使用？

**块状**

``` markdown
    ``` js
    function handler() {
        console.log('do something');
    }
    ```
```

``` js
function handler() {
    console.log('do something');
}
```

## 引用

``` md
>> 请问大佬，什么是面向对象？ -菜鸟

> 阿弥陀佛，一切皆为对象！ -大佬
```

>> 请问大佬，什么是面向对象？ - 菜鸟

> 阿弥陀佛，一切皆为对象！ - 大佬

## 表格

``` md
| 序号 | 姓名   | 年龄 |
| :----: | :------ | ----: |
| 1    | 鸣人   | 15   |
| 2    | 佐助   | 18   |
| 3    | 雏田   | 15   |
| 4    | 卡卡西 | 20   |
```

| 序号 | 姓名   | 年龄 |
| :----: | :------ | ----: |
| 1    | 鸣人   | 15   |
| 2    | 佐助   | 18   |
| 3    | 雏田   | 15   |
| 4    | 卡卡西 | 20   |

::: tip 提醒
`:` 可以控制居中，左右对齐。
:::

## 目录

``` md
[[TOC]] 或 [[toc]]
```

[[TOC]]

::: tip 提醒
`[[TOC]]` 可以识别当前 `md` 文档中所有标题类的语法标记。其实很多 `markdown` 编辑器中语法是 `[TOC]` 。
:::

## 分隔线

``` md
---
***
___
```

::: tip 提醒
一共三种写法， `___` 是三个 `_` 符号相连。渲染如分割线标题下的分隔效果。
:::
