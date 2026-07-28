# 使用 Bootstrap 实现响应式导航与轮播

## 案例介绍

响应式布局让同一个网站适配多种终端，无需为每种终端单独开发版本。

导航栏和轮播是网站页头中的常见组件。导航栏还承担着引导用户访问各个页面的作用。在响应式布局中，导航栏需要根据屏幕宽度切换显示方式。

## Bootstrap 基础知识

### 2.1 导航栏

> 官方解释：导航条是在您的应用或网站中作为导航页头的响应式基础组件。它们在移动设备上可以折叠 (并且可开可关)，且在视口 (viewport) 宽度增加时逐渐变为水平展开模式。

#### 2.1.1 基础导航栏

不使用 Bootstrap 时，可以通过 `<ul>`、`<li>` 和 `<a>` 元素构建导航栏。

```
<!--代码部分-->
<style>
.navigation-past{
    list-style: none;
}
.navigation-past>li{
    float: left;
    padding: 8px;
}
.navigation-past>li>a{
    text-decoration: none;
    color: #000;
}
.active-past{
    background: #E7E7E7;
}
</style>
<ul class="navigation-past">
	   <!--选中-->
    <li class="active-past"><a href="#">Navigation First</a></li>
    <li><a href="#">Navigation Second</a></li>
    <li><a href="#">Navigation Third</a></li>
    <li><a href="#">Navigation Fourth</a></li>
    <li><a href="#">Navigation Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373134.jpg)

使用 Bootstrap 时，可以在上述结构中添加相应样式：

1. 在 `<ul>` 外添加一个 `<div>`，并设置样式 `navbar navbar-default`。
2. 为 `<ul>` 添加样式 `nav navbar-nav`。
3. 为当前选中的 `<li>` 添加样式 `active`。

完成这些步骤后，即可得到基础的 Bootstrap 导航栏。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li><a href="#">Navigation Fifth</a></li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373230.jpg)

最外层元素包含属性 `role="navigation"`。该属性用于说明导航区域的语义，便于屏幕阅读器识别。

#### 2.1.2 进阶的导航栏

Bootstrap 导航栏可以显示品牌标志。使用时，在外层 `<div>` 中添加一个带有 `navbar-header` 样式的 `<div>`，再在其中添加一个带有 `navbar-brand` 样式的 `<a>` 元素。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
			<div class="navbar-header">
						<a href="#" class="navbar-brand">LOGO</a>
			</div>
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li><a href="#">Navigation Fifth</a></li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373367.jpg)

如需展示更多内容，可以在一级导航中添加下拉菜单：

1. 为包含下拉菜单的 `<li>` 元素添加样式 `dropdown`。
2. 为对应的 `<a>` 元素添加样式 `dropdown-toggle` 和属性 `data-toggle="dropdown"`。
3. 在该 `<li>` 元素中添加由 `<ul>` 和 `<li>` 构成的二级导航。
4. 为二级导航的 `<ul>` 元素添加样式 `dropdown-menu`。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
			<div class="navbar-header">
						<a href="#" class="navbar-brand">LOGO</a>
			</div>
    <ul class="nav navbar-nav">
        <li class="active"><a href="#">Navigation First</a></li>
        <li><a href="#">Navigation Second</a></li>
        <li><a href="#">Navigation Third</a></li>
        <li><a href="#">Navigation Fourth</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Navigation Fifth
                <ul class="dropdown-menu">
                    <li><a href="#">Sub-Navigation First</a></li>
                    <li><a href="#">Sub-Navigation Second</a></li>
                    <li><a href="#">Sub-Navigation Third</a></li>
                </ul>
            </a>
        </li>
    </ul>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/820373419.jpg)

示例还使用了属性 `aria-haspopup="true"` 和 `aria-expanded="false"`。以下说明引用自 SegmentFault 社区姜中秋的回答。

`aria-haspopup: true` 表示单击时会出现菜单或浮动元素；`false` 表示没有 `pop-up` 效果。`aria-expanded:` 表示展开状态。默认值为 `undefined`，表示当前展开状态未知。其他可选值包括 `true` 和 `false`，分别表示元素已展开和未展开。

下拉菜单通常带有向下箭头。Bootstrap 可以通过 Glyphicons 字体图标实现该效果。

> 官方介绍：Bootstrap 包括 250 多个来自 Glyphicon Halflings 的字体图标。Glyphicons Halflings 一般是收费的，但是他们的作者允许 Bootstrap 免费使用。为了表示感谢，希望你在使用时尽量为 Glyphicons 添加一个[友情链接](https://glyphicons.com/)。

新建一个 `<span>` 元素，并为其添加样式 `glyphicon glyphicon-triangle-bottom`。

Glyphicons 字体图标使用示例：

```
<!--代码部分-->
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        Navigation Fifth <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Navigation First</a></li>
            <li><a href="#">Sub-Navigation Second</a></li>
            <li><a href="#">Sub-Navigation Third</a></li>
        </ul>
    </a>
</li>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/822103107.jpg)

注意：

* 在 Glyphicons 字体图标和文本之间添加一个空格，否则会影响样式 (`padding`) 的正确显示。
* 服务器需要正确添加相应的 MIME 类型，否则加载字体会报 404 错误。

也可以使用 Bootstrap 的 `caret` 样式，通过 CSS 绘制箭头。用法如下：`<span class="caret"></span>`。

#### 2.1.3 响应式导航栏

在移动端，导航栏通常折叠为由若干横线组成的按钮。Bootstrap 支持这种响应式导航。配置步骤如下：

1. 在导航标题 `<div class="navbar-header">` 中添加示例所示的按钮代码。
2. 在需要于小屏幕中折叠的 `<ul>` 元素外添加一个 `<div>`，并设置样式 `collapse navbar-collapse`。
3. 为该 `<div>` 设置任意名称的 ID，例如 `id="navigation-collapse"`。
4. 在响应式按钮 `<button>` 上添加 `data-target` 属性，使其指向待折叠内容的 ID，例如 `data-target="#navigation-collapse"`。

```
<!--代码部分-->
<div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
						<!--以下为固定写法，用到的时候复制粘贴即可-->
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navigation-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">LOGO</a>
    </div>
    <div class="collapse navbar-collapse" id="navigation-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Navigation First</a></li>
            <li><a href="#">Navigation Second</a></li>
            <li><a href="#">Navigation Third</a></li>
            <li><a href="#">Navigation Fourth</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Navigation Fifth <span class="caret"></span>
                    <ul class="dropdown-menu">
                        <li><a href="#">Sub-Navigation First</a></li>
                        <li><a href="#">Sub-Navigation Second</a></li>
                        <li><a href="#">Sub-Navigation Third</a></li>
                    </ul>
                </a>
            </li>
        </ul>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/822103401.jpg)

### 2.2 轮播

图片轮播常用于展示活动广告或企业宣传图，也称为"幻灯片"。Bootstrap 通过 JavaScript 插件 Carousel 实现轮播效果。

#### 2.2.1 基础轮播

轮播的结构相对固定，可以根据具体场景调整。需要为最外层 `<div>` 设置 `id`，并让轮播指示器指向该 `id`。

```
<!--代码部分-->
<div id="my-banner" class="carousel">
    <!--放置小圆点，点击可以切换轮播-->
    <ol class="carousel-indicators">
        <!--加上样式active表示默认显示的轮播，data-slide-to="0"属性表示显示轮播的顺序-->
        <li data-target="#my-banner" data-slide-to="0" class="active"></li>
        <li data-target="#my-banner" data-slide-to="1"></li>
    </ol>
    <!--这里放置轮播显示的图片-->
    <div class="carousel-inner">
        <!--加上样式active表示默认显示的图片-->
        <div class="item active">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b1.jpg" alt="轮播">
        </div>
        <div class="item">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b2.jpg" alt="轮播">
        </div>
    </div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/230726-1024x398-1.jpg)

#### 2.2.2 进阶的轮播

Bootstrap 轮播支持自动播放、单击切换、悬停暂停和说明文字。

**自动播放**

为最外层 `<div>` 添加属性 `data-ride="carousel"` 和样式 `slide`，可启用自动播放和平滑切换。例如：`<div id="my-banner" class="carousel slide" data-ride="carousel">`。

默认播放间隔为 5 秒。若要改为 3 秒 (3000 ms)，可设置 `data-interval="3000"`。轮播默认在鼠标悬停时暂停 (`data-pause="hover"`)；如需禁用悬停暂停，可设置 `data-pause="false"`。

**添加文字**

在轮播图片 `<img>` 元素后添加带有 `carousel-caption` 样式的 `<div>`，即可在轮播图上显示说明文字。

```
<!--代码部分-->
<div class="carousel-caption">
    <h5>夜里总是下雨</h5>
</div>
```

**单击切换**

在轮播图片后放置两个 `<a>` 元素，并让 `href` 指向轮播的 `id`。添加属性 `data-slide="prev/next 向前/向后"`。

```
<!--代码部分-->
<!--<a>元素的href指向轮播id-->
<a class="left carousel-control" href="#my-banner" data-slide="prev" role="button">
    <span class="glyphicon glyphicon-chevron-left"></span>
</a>
<a class="right carousel-control" href="#my-banner"  data-slide="next" role="button">
    <span class="glyphicon glyphicon-chevron-right"></span>
</a>
```

轮播代码示例：

```
<!--代码部分-->
<div id="my-banner" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false">
    <!--放置小圆点，点击可以切换轮播-->
    <ol class="carousel-indicators">
        <!--加上样式active表示默认显示的轮播，data-slide-to="0"属性表示显示轮播的顺序-->
        <li data-target="#my-banner" data-slide-to="0" class="active"></li>
        <li data-target="#my-banner" data-slide-to="1"></li>
    </ol>
    <!--这里放置轮播显示的图片-->
    <div class="carousel-inner">
        <!--加上样式active表示默认显示的图片-->
        <div class="item active">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b1.jpg" alt="轮播">
            <div class="carousel-caption">
                <h5>夜里总是下雨</h5>
            </div>
        </div>
        <div class="item">
            <img src="//i.mazey.net/x/www/img/upload/image/20170712/b2.jpg" alt="轮播">
            <div class="carousel-caption">
                <h5>提醒君的世界</h5>
            </div>
        </div>
    </div>
    <!--<a>元素的href指向轮播id-->
    <a class="left carousel-control" href="#my-banner" data-slide="prev" role="button">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#my-banner"  data-slide="next" role="button">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/230452-1024x400-1.jpg)

## 组合响应式页面

组合栅格系统、导航栏和轮播，构建一个响应式页面。

电脑端效果图：

![](https://i.mazey.net/uploads/2022/01/231151-1024x586-1.jpg)

移动端效果图：

![](https://i.mazey.net/uploads/2022/01/231419-370x594-1.jpg)

首先了解栅格参数在不同屏幕宽度下的工作方式。

![](https://i.mazey.net/uploads/2022/01/823912301.jpg)

为新闻和资讯区域同时添加 `col-xs-*`、`col-sm-*` 和 `col-md-*`。小屏幕 (宽度 ＜ 992 px) 使用 `col-xs-*` 和 `col-sm-*`。大屏幕 (宽度 ≥ 992 px) 使用 `col-md-*`。

示例：`<div class="col-xs-12 col-sm-12 col-md-6">新闻</div><div class="col-xs-12 col-sm-12 col-md-6">资讯</div>`。

演示地址：<https://i.mazey.net/bootstrap-blueprints/lesson-second-navigation/index.html>

源码地址：<https://github.com/chengchuu/bootstrap-blueprints/tree/main/lesson-second-navigation>

**版权声明**

本博客所有原创文章均保留版权。转载时必须包含本声明并保持文章完整。还需通过超链接注明作者 [除除](https://github.com/chengchuu)和原文地址：<http://blog.mazey.net/2575.html>。
