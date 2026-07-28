# 使用 Bootstrap 实现瀑布流布局

网上已有许多 Bootstrap 基础教程。Bootstrap 中文网 (`bootcss.com`) 也提供了详细文档，但完整的实战案例相对较少。本教程以瀑布流布局为目标，仅讲解案例涉及的知识点。开始前，需要具备 HTML 和 CSS 基础。

## 案例介绍

瀑布流是一种多栏布局，各列内容的高度并不一致。本案例演示如何使用 Bootstrap 实现瀑布流布局。

![瀑布流布局效果图](https://i.mazey.net/uploads/2021/12/lesson-first-waterfall-demo-800x849-1.jpg)

## Bootstrap 基础知识

### 2.1 配置 Bootstrap

#### 1. 下载 Bootstrap

从 [Bootstrap 中文网](https://v3.bootcss.com/getting-started/#download)下载用于生产环境的 Bootstrap。

#### 2. 引入样式表

在 `<head>` 标签内引入 CSS 目录中的压缩样式表 `bootstrap.min.css`。

#### 3. 引入脚本

Bootstrap 的 JavaScript 插件依赖 jQuery。请先引入 jQuery，再引入 JS 目录中的 `bootstrap.min.js`。

```
<!--BootstrapCSS文件，放在<head>内-->
<link type="text/css" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<!--jQuery文件，引入BootstrapJS插件前必需引入-->
<script language="javascript" type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
<!--BootstrapJS文件，一般放在底部-->
<script language="javascript" type="text/javascript" src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- 让 IE 使用最新的渲染模式，支持 CSS3 -->
<meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1">
<!-- 如果 IE 版本低于 IE9，使浏览器支持 HTML5 和 CSS3 -->
<!--[if lt IE 9]>
<script src="http://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
```

### 2.2 栅格系统

> 官方解释：Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。它包含了易于使用的预定义类。

Bootstrap 提供以下三类样式，用于快速构建栅格布局：

* 使用固定宽度的 `.container` 或宽度为 100% 的 `.container-fluid` 作为外层容器；
* 将 `.row` 行容器放在 `.container` 或 `.container-fluid` 中；
* 将 `.col-md-*` 列或 `.col-md-offset-*` 列偏移放在 `.row` 中。`*` 可以是 1～12。在中等屏幕上，`.col-md-1` 占 `.row` 宽度的 1/12，`.col-md-12` 占据整行。

`.col-md-*` 示例：

```
<!--代码部分-->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
    </div>
    <div class="row">
        <div class="col-md-1">1/12</div>
        <div class="col-md-3">3/12</div>
        <div class="col-md-4">4/12</div>
        <div class="col-md-4">4/12</div>
    </div>
    <div class="row">
        <div class="col-md-6">6/12</div>
        <div class="col-md-6">6/12</div>
    </div>
</div>
```

`.col-md-*` 效果图：

![效果图](https://i.mazey.net/uploads/2021/12/814835874.jpg)

使用列偏移 `.col-md-offset-*` 示例：

```
<!--代码部分-->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <!--这里向右偏移4/12-->
        <div class="col-md-1 col-md-offset-4">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
        <div class="col-md-1">1/12</div>
    </div>
    <div class="row">
        <div class="col-md-3 col-md-offset-1">3/12</div>
        <div class="col-md-4 col-md-offset-4">4/12</div>
    </div>
    <div class="row">
        <div class="col-md-4  col-md-offset-4">6/12</div>
    </div>
</div>
```

`.col-md-offset-*` 效果图：

![效果图](https://i.mazey.net/uploads/2021/12/814835921.jpg)

组合使用 `.col-md-*` 和 `.col-md-offset-*` 时，每行的数值总和不能超过 12，否则内容会换行。

### 2.3 缩略图

缩略图常用于产品展示页，例如购物网站的商品列表。

缩略图需要配合栅格系统使用。将 `<img>` 标签放入带有 `.thumbnail` 样式的容器；如需添加文字说明，可在容器内增加一个带有 `.caption` 样式的元素。

`.thumbnail` 示例：

```
<!--代码部分-->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <div class="thumbnail">
                <img src="img/1.jpg">
                <div class="caption">
                    <h4>标题 - 缩略图</h4>
                    <small>我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述。</small>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
                <img src="img/1.jpg">
                <div class="caption">
                    <h4>标题 - 缩略图</h4>
                    <small>我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述。</small>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
                <img src="img/1.jpg">
                <div class="caption">
                    <h4>标题 - 缩略图</h4>
                    <small>我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述，我是缩略图里面的描述。</small>
                </div>
            </div>
        </div>
    </div>
</div>
```

`.thumbnail` 效果图：

![效果图](https://i.mazey.net/uploads/2021/12/814836067.jpg)

### 2.4 响应式图片

为了让图片适应容器的大小，可以为图片添加 `.img-responsive` 样式。

`.img-responsive` 示例：

```
<img src="img/1.jpg" class="img-responsive" alt="响应式图片">
```

还可以添加 `img-rounded`、`img-circle` 或 `img-thumbnail`，让图片呈现圆角、圆形或缩略图样式。

改变图片形状示例：

```
<!--代码部分-->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <img src="img/1.jpg" class="img-responsive img-rounded" alt="圆角">
        </div>
        <div class="col-md-4">
            <img src="img/1.jpg" class="img-responsive img-circle" alt="圆形">
        </div>
        <div class="col-md-4">
            <img src="img/1.jpg" class="img-responsive img-thumbnail" alt="缩略图">
        </div>
    </div>
</div>
```

改变图片形状效果图：

![改变图片形状效果图](https://i.mazey.net/uploads/2021/12/814836134.jpg)

## 实现瀑布流布局

### 3.1 排列图片

首先使用栅格系统创建图片区域，并在左右两侧各保留 1/12 的空白。

```
<!--代码部分-->
<section class="container-fluid">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
        <!--这里放图片-->
        </div>
    </div>
</section>
```

效果图：

![效果图](https://i.mazey.net/uploads/2021/12/814836227.jpg)

然后添加带说明文字的缩略图。将中间 10/12 的区域视为一个整体，每个缩略图占该区域的 4/12。每行放置 3 个缩略图，共放置 3 行。为其中的图片添加响应式样式 `.img-responsive` 和圆角样式 `.img-rounded`。

```
<!--代码部分-->
<section class="container-fluid">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!--图片开始-->
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="javascript:void(0);">
                        <img src="img/1.jpg" class="img-responsive img-rounded">
                    </a>
                    <div class="caption">
                        <h4>标题 - 实战</h4>
                        <p>
                            <small>阅读是运用语言文字来获取信息，认识世界，发展思维，并获得审美体验的活动。它是从视觉材料中获取信息的过程。视觉材料主要是文字和图片，也包括符号、公式、图表等。</small>
                        </p>
                    </div> 
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="javascript:void(0);">
                        <img src="img/2.jpg" class="img-responsive img-rounded">
                    </a>
                    <div class="caption">
                        <h4>标题 - 实战</h4>
                        <p>
                            <small>阅读是运用语言文字来获取信息，认识世界，发展思维，并获得审美体验的活动。它是从视觉材料中获取信息的过程。视觉材料主要是文字和图片，也包括符号、公式、图表等。</small>
                        </p>
                    </div> 
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="javascript:void(0);">
                        <img src="img/3.jpg" class="img-responsive img-rounded">
                    </a>
                    <div class="caption">
                        <h4>标题 - 实战</h4>
                        <p>
                            <small>阅读是运用语言文字来获取信息，认识世界，发展思维，并获得审美体验的活动。它是从视觉材料中获取信息的过程。视觉材料主要是文字和图片，也包括符号、公式、图表等。</small>
                        </p>
                    </div> 
                </div>
            </div>
            <!--第四到第九个缩略图-->
            ...
            ...
            ...
            ...
            ...
            ...
            <!--图片结束-->
        </div>
    </div>
</section>
```

效果图：

![效果图](https://i.mazey.net/uploads/2021/12/lesson-first-waterfall-normal-800x905-1.jpg)

### 3.2 实现瀑布流

此时图片已经完成排列，但上下图片之间仍有空隙。瀑布流布局需要保持列宽一致，并根据内容高度紧密排列。当前布局已实现统一列宽，接下来使用 CSS3 属性 `column-width` 调整排列方式。

> 官方解释：设置或检索对象每列的宽度，对应的脚本特性为 columnWidth。

为容器设置 `column-width` 后，浏览器会根据容器宽度计算其中 `<div>` 元素的列数。

首先，为缩略图的外层容器添加 `id="container"`。

```
<!--代码部分-->
<div class="row">
    <div class="col-md-10 col-md-offset-1" id="container">
        <!--图片开始-->
        <div class="col-md-4">
            <div class="thumbnail">
```

然后，为该元素设置 `column-width`。

```
<!--代码部分-->
#container{
    -webkit-column-width:354px; /*Safari and Chrome*/
    -moz-column-width:354px; /*Firefox*/
    -o-column-width:354px; /*Opera*/
    -ms-column-width:354px; /*IE*/
    column-width:354px;
}
#container>div{
    width:354px; /*宽度根据实际情况调节，应与上面一致*/
    overflow:auto; /*防止内容溢出导致布局错位*/
}
```

效果图：

![效果图](https://i.mazey.net/uploads/2021/12/lesson-first-waterfall-ok-800x806-1.jpg)

也可以使用 CSS 变量改写上述样式，以便调试和维护。

```
<!--代码部分-->
body{
    body{
    font-family:"微软雅黑";
    --img-width:354px; /*两根连词线"--"加变量名"img-width"声明变量*/
}
#container{
    -webkit-column-width:var(--img-width); /*用"var(--变量名)"使用变量*/
    -moz-column-width:var(--img-width);
    -o-column-width:var(--img-width);
    -ms-column-width:var(--img-width);
    column-width:var(--img-width);
}
/*另：var()里面可以放第二个参数，在变量不存在时取第二个值，例如var(--img-width,200px)中，如果"--img-width"不存在则使用第二个参数"200px"*/
#container>div{
    width:var(--img-width);
    overflow:auto;
}
```

至此，Bootstrap 瀑布流布局已完成。

演示地址：<https://i.mazey.net/bootstrap-blueprints/lesson-first-waterfall/index.html>

源码地址：<https://github.com/chengchuu/bootstrap-blueprints/tree/main/lesson-first-waterfall>

### 3.3 扩展

除 CSS3 外，还可以使用 JavaScript 实现瀑布流。参考代码如下。

```
//页面加载完之后再加载瀑布流
window.onload = function(){
    //这里引用col-md-4是因为在盒子里包裹图片没有其他作用，如果不想冲突也可以创建其他Class
    loadWaterfall('container','col-md-4');
}

//加载瀑布流函数//思路来自Amy老师
function loadWaterfall(boxID,thumbnailClass){
    //获取装缩略图外部的盒子
    var box = document.getElementById(boxID);
    //获取装缩略图的数组
    var thumbnail = box.getElementsByClassName(thumbnailClass);
    //获取每个缩略图的宽度
    var thumbnailWidth = thumbnail[0].offsetWidth;
    //计算盒子内每行可以排列几个缩略图
    var colCount = Math.floor((document.documentElement.clientWidth*(10/12))/thumbnailWidth);
    //创建放每次整理好的高度数组
    var thumbnailHeightArr = [];
    for(var i = 0; i < thumbnail.length; i++){
        //获取第一行高度数组
        if(i < colCount){
            thumbnailHeightArr.push(thumbnail[i].offsetHeight);
        }else{
            //获取之前最小高度
            var minHeight = Math.min.apply(null,thumbnailHeightArr);
            //第一行最小高度索引
            var minIndex = thumbnailHeightArr.indexOf(minHeight);
            //将此缩略图放在上面那行最小高度下面
            thumbnail[i].style.position = 'absolute';
            //距离顶部长度为这个缩略图上面那个缩略图的长度
            thumbnail[i].style.top = minHeight + 'px';
            //距离左边长度为这个缩略图上面那个缩略图距离左边的长度
            thumbnail[i].style.left = thumbnail[minIndex].offsetLeft + 'px';
            //更新最小高度
            thumbnailHeightArr[minIndex] += thumbnail[i].offsetHeight;
        }
    }
}
```

JavaScript 方案可以改善对 IE 的兼容性。

JavaScript 实现瀑布流参考源码地址：<https://github.com/chengchuu/bootstrap-blueprints/tree/main/lesson-first-waterfall-javascript>。

## 总结

本文介绍了 Bootstrap 的基本配置、栅格系统、缩略图、响应式图片和部分 CSS3 样式。其中，栅格系统是实现响应式布局的基础。

**版权声明**

本博客所有原创文章均保留版权。转载时必须包含本声明并保持文章完整。还需通过超链接注明作者 [除除](https://github.com/chengchuu)和原文地址：<http://blog.mazey.net/2399.html>。
