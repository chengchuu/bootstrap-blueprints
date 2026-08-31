# 使用 Bootstrap 3 构建评论列表

## 案例介绍

评论是社交媒体网站中的常见功能，用户可以通过评论表达观点。本教程介绍 Bootstrap 媒体对象，并使用它构建评论列表。

## Bootstrap 基础知识

> 官方解释：这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片 (就像博客评论或 Twitter 消息等)。

### 基础媒体对象

一个基础的媒体对象由四个部分组成：

1. 媒体容器：位于最外层，使用样式 `media`。
2. 媒体对象：通常是用户头像，使用样式 `media-object`。
3. 媒体主体：包含文本内容，使用样式 `media-body`。
4. 媒体标题：表示文本内容的标题，使用样式 `media-heading`。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
        </div>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831670743.jpg)

样式 `media-left` 和 `media-right` 用于控制对象 (头像) 的位置。若要将对象放在右侧，需要把带有 `media-right` 样式的元素放在 `media-body` 后。

```
<!--代码部分-->
<div class="media">
    <div class="media-body">
        <h4 class="media-heading">我是标题</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
    <div class="media-right">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831671559.jpg)

也可以使用 `pull-left` 和 `pull-right` 代替 `media-left` 和 `media-right`。

```
<!--代码部分-->
<div class="media">
    <div class="pull-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 左边</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="pull-right">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 右边</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
```
效果图：

![](https://i.mazey.net/uploads/2022/01/831671938.jpg)

**注意：从 v3.3.0 开始，官方不再建议使用 `.pull-left` 和 `.pull-right`。**

### 多层媒体对象

回复评论时，可以通过嵌套媒体对象展示评论之间的层级关系。

将整个 `media` 容器嵌套在上一级的 `media-body` 容器内即可。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 一级</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img src="img/header-girl-3.jpg" class="media-object">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">我是标题 - 二级</h4>
                <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 三级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

效果图：

![为展示效果，将图片宽度设置为 50 px](https://i.mazey.net/uploads/2022/01/831672604.jpg)

Bootstrap 没有规定媒体对象的嵌套层数。

![](https://i.mazey.net/uploads/2022/01/831673281.jpg)

为保持页面清晰，通常使用两层嵌套即可。

### 媒体对象的对齐

媒体对象 (头像) 默认采用顶部对齐。添加 `media-middle` 或 `media-bottom`，可以将其改为中部或底部对齐。

```
<!--代码部分-->
<div class="media">
    <div class="media-left">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 顶部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="media-left media-middle">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 中部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
<div class="media">
    <div class="media-left media-bottom">
        <a href="#">
            <img src="img/header-animal-1.jpg" class="media-object">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">我是标题 - 底部对齐</h4>
        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674055.jpg)

### 媒体对象列表

评论列表可以使用 `<ul>` 和 `<li>` 元素构建。为最外层 `<ul>` 添加样式 `media-list`，并使用带有 `media` 样式的 `<li>` 表示每条评论。

只有一层的列表：

```
<!--代码部分-->
<ul class="media-list">
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
        </div>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674270.jpg)

两层嵌套的列表：

```
<!--代码部分-->
<ul class="media-list">
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题 - 一级</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
            <ul class="media-list">
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-3.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>
    <li class="media">
        <div class="media-left">
            <a href="#">
                <img src="img/header-animal-1.jpg" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">我是标题 - 一级</h4>
            <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
            <ul class="media-list">
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-3.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
                <li class="media">
                    <div class="media-left">
                        <a href="#">
                            <img src="img/header-girl-2.jpg" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">我是标题 - 二级</h4>
                        <p>我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容；我是一大串重复的内容。</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/831674155.jpg)

## 完成案例

使用 Bootstrap 媒体对象构建豆瓣日记页面中的评论列表。

![](https://i.mazey.net/uploads/2022/01/831674385.jpg)

演示地址：<https://i.mazey.net/bootstrap-blueprints/lesson-fourth-comment/index.html>

源码地址：<https://github.com/chengchuu/bootstrap-blueprints/tree/main/lesson-fourth-comment>

**版权声明**

本博客所有原创文章均保留版权。转载时必须包含本声明并保持文章完整。还需通过超链接注明作者 [除除](https://github.com/chengchuu)和原文地址：<http://blog.mazey.net/2613.html>。
