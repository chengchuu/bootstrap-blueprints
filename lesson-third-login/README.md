# 使用 Bootstrap 3 构建注册和登录模块

## 案例介绍

注册和登录是社交网站与商业网站中的常见功能。本教程介绍标签页、按钮和表单，并使用这些组件构建可切换的注册和登录模块。

## Bootstrap 基础知识

### 2.1 标签页

#### 2.1.1 基础标签页

标签页与导航栏的用法相似，两者都依赖基础样式 `nav`。标签页使用附加样式 `nav-tabs` 或 `nav-pills` (胶囊式)，外层无需添加带有 `navbar navbar-*` 样式的 `<div>`。

**Tab 式标签页**

使用 `<ul>`、`<li>` 和 `<a>` 元素构建标签页。为外层 `<ul>` 添加样式 `nav nav-tabs`，并为当前标签页的 `<li>` 添加样式 `active`。

```
<!--代码部分-->
<ul class="nav nav-tabs">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation"><a href="#">Tab Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773559.jpg)

**胶囊式标签页**

胶囊式标签页的结构与 Tab 式标签页相同，只需将样式 `nav-tabs` 替换为 `nav-pills`。

```
<!--代码部分-->
<ul class="nav nav-pills">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation"><a href="#">Tab Fifth</a></li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773632.jpg)

#### 2.1.2 带下拉框的标签页

标签页也可以包含下拉菜单。配置步骤如下：

1. 在需要显示下拉菜单的 `<li>` 中嵌入由 `<ul>`、`<li>` 和 `<a>` 组成的二级导航。
2. 为一级标签页的 `<a>` 元素添加样式 `dropdown-toggle` 和属性 `data-toggle="dropdown"`。
3. 为二级导航的 `<ul>` 元素添加样式 `dropdown-menu`。

```
<!--代码部分-->
<ul class="nav nav-tabs">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tab Fifth <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Tab First</a></li>
            <li><a href="#">Sub-Tab Second</a></li>
            <li><a href="#">Sub-Tab Third</a></li>
        </ul>
    </li>
</ul>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827773750.jpg)

#### 2.1.3 响应式标签页

标签页也支持响应式样式。为一级标签页的 `<ul>` 元素添加样式 `nav-justified` 即可。

```
<!--代码部分-->
<ul class="nav nav-tabs nav-justified">
    <li class="active" role="presentation"><a href="#">Tab First</a></li>
    <li role="presentation"><a href="#">Tab Second</a></li>
    <li role="presentation"><a href="#">Tab Third</a></li>
    <li role="presentation"><a href="#">Tab Fourth</a></li>
    <li role="presentation">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tab Fifth <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Sub-Tab First</a></li>
            <li><a href="#">Sub-Tab Second</a></li>
            <li><a href="#">Sub-Tab Third</a></li>
        </ul>
    </li>
</ul>
```

大屏效果图：

![按比例把不同标签页等分成几个部分](https://i.mazey.net/uploads/2022/01/827773951.jpg)

小屏效果图：

![浏览器宽度小于 768 px 时触发的小屏显示效果](https://i.mazey.net/uploads/2022/01/827774153.jpg)

#### 2.1.4 标签页内容

标签页通常用于切换不同内容。配置步骤如下：

1. 在标签页 `<ul>` 元素后添加两层 `<div>` 容器。
2. 为外层 `<div>` 添加样式 `tab-content`。
3. 为内层的各个 `<div>` 添加样式 `tab-pane fade`，并为默认内容添加样式 `in active`。其中，`fade in` 用于实现渐入效果。
4. 为内层 `<div>` 分别设置不同的 `id`，并与标签页中对应的 `href` 匹配。例如，`href="#first"` 对应 `id="first"`。

```
<!--代码部分-->
<ul class="nav nav-tabs nav-justified">
    <li class="active" role="presentation"><a href="#first" data-toggle="tab">Tab First</a></li>
    <li role="presentation"><a href="#second" data-toggle="tab">Tab Second</a></li>
    <li role="presentation"><a href="#third" data-toggle="tab">Tab Third</a></li>
    <li role="presentation"><a href="#fourth" data-toggle="tab">Tab Fourth</a></li>
    <li role="presentation"><a href="#fifth" data-toggle="tab">Tab Fifth</a></li>
</ul>
<!--标签页内容部分-->
<div class="tab-content">
    <div class="tab-pane fade in active" id="first" role="tabpanel">Hello, I'm Tab First, How are you?</div>
    <div class="tab-pane fade" id="second" role="tabpanel">Hello, I'm Tab Second, How are you?</div>
    <div class="tab-pane fade" id="third" role="tabpanel">Hello, I'm Tab Third, How are you?</div>
    <div class="tab-pane fade" id="fourth" role="tabpanel">Hello, I'm Tab Fourth, How are you?</div>
    <div class="tab-pane fade" id="fifth" role="tabpanel">Hello, I'm Tab Fifth, How are you?</div>
</div>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827803797.jpg)

### 2.2 按钮

按钮是网页布局中的常见组件，不同场景可以使用不同的按钮样式。

#### 2.2.1 基础按钮

为 `<button>`、`<a>` 或 `<input>` 元素添加样式 `btn btn-*`。其中，`*` 可以是 `default`、`primary`、`success`、`info`、`warning`、`danger` 或 `link`。

```
<!--代码部分-->
<!--白色 标准按钮-->
<button type="button" class="btn btn-default">默认 - default</button>
<!--深蓝色-->
<button type="button" class="btn btn-primary">首选项 - primary</button>
<!--原谅色-->
<button type="button" class="btn btn-success">成功 - success</button>
<!--浅蓝色-->
<button type="button" class="btn btn-info">提示 - info</button>
<!--黄色-->
<button type="button" class="btn btn-warning">警告 - warning</button>
<!--红色-->
<button type="button" class="btn btn-danger">危险 - danger</button>
<!--链接样式-->
<button type="button" class="btn btn-link">首选项 - link</button>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827774713.jpg)

#### 2.2.2 进阶的按钮

**改变按钮大小**

可以添加样式 `btn-xs`、`btn-sm` 或 `btn-lg`，改变按钮大小。

```
<!--代码部分-->
<p>
    <button type="button" class="btn btn-primary btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-success btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-info btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-warning btn-xs">超小按钮 - xs</button>
    <button type="button" class="btn btn-danger btn-xs">超小按钮 - xs</button>
</p>
<p>
    <button type="button" class="btn btn-primary btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-success btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-info btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-warning btn-sm">小按钮 - sm</button>
    <button type="button" class="btn btn-danger btn-sm">小按钮 - sm</button>
</p>
<p>
    <button type="button" class="btn btn-primary">默认按钮</button>
    <button type="button" class="btn btn-success">默认按钮</button>
    <button type="button" class="btn btn-info">默认按钮</button>
    <button type="button" class="btn btn-warning">默认按钮</button>
    <button type="button" class="btn btn-danger">默认按钮</button>
</p>
<p>
    <button type="button" class="btn btn-primary btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-success btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-info btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-warning btn-lg">大按钮 - lg</button>
    <button type="button" class="btn btn-danger btn-lg">大按钮 - lg</button>
</p>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777534.jpg)

**块状按钮**

如需让按钮占满父容器的宽度，可以为按钮添加样式 `btn-block`。

```
<!--代码部分-->
<button type="button" class="btn btn-primary btn-xs btn-block">超小按钮 - xs</button>
<button type="button" class="btn btn-primary btn-sm btn-block">小按钮 - sm</button>
<button type="button" class="btn btn-primary btn-block">默认按钮</button>
<button type="button" class="btn btn-primary btn-lg btn-block">大按钮 - lg</button>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777763.jpg)

### 2.3 表单

#### 2.3.1 基础表单

Bootstrap 为 `<input>`、`<select>` 和 `<label>` 等表单元素提供了基础样式。使用带有 `form-group` 样式的 `<div>` 包含 `<label>` 和 `<input>`，可以组织表单元素的排列。

```
<!--代码部分-->
<form>
    <div class="form-group">
        <label for="username">帐号：</label>
        <!--样式form-control会让input元素宽度为父容器100%-->
        <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
    </div>
    <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" class="form-control" id="password" placeholder="请输入密码" />
    </div>
    <button type="submit" class="btn btn-default">登录</button>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827777983.jpg)

#### 2.3.2 水平表单

上例中的"帐号："和"密码："位于输入框上方。如需改为水平排列，可以为表单添加样式 `form-horizontal`，并配合栅格系统布局。在水平表单中，`form-group` 的作用类似于栅格系统中的 `row`，因此可以在其中使用 `col-md-*` 等样式。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778277.jpg)

Bootstrap 提供了表示校验状态的提示样式。为需要提示的 `<input>` 容器添加 `has-*`，其中 `*` 可以是 `success`、`warning` 或 `error`。

如需显示 √、× 或其他符号，请为容器添加样式 `has-feedback`。然后，在带有 `form-control` 样式的 `<input>` 元素后添加 Glyphicons 字体图标，并为图标设置样式 `form-control-feedback`。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9 has-feedback has-success">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
            <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9 has-feedback has-error">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
            <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778385.jpg)

#### 2.3.3 输入框组

输入框组可以将其他元素与 `<input>` 组合。将 `<input>` 放入带有 `input-group` 样式的 `<div>`，然后在 `<input>` 后添加带有 `input-group-addon` 样式的元素。

```
<!--代码部分-->
<form class="form-horizontal">
    <div class="form-group">
        <!--样式control-label使内容居右-->
        <label for="username" class="col-sm-3 control-label">帐号：</label>
        <div class="col-sm-9 has-feedback has-success">
            <input type="text" class="form-control" id="username" placeholder="请输入帐号" />
            <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-3 control-label">密码：</label>
        <div class="col-sm-9 has-feedback has-error">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" />
            <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-3 control-label">邮箱：</label>
        <div class="col-sm-9">
            <div class="input-group">
                <input type="email" class="form-control" id="email" placeholder="请输入邮箱" />
                <span class="input-group-addon">@mazey.net</span>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <!--样式checkbox为input[type='checkbox']指定合适的样式，相应的还有input[type='radio']的样式radio-->
            <div class="checkbox">
                <label>
                    <input type="checkbox" /> 记住密码
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <button type="submit" class="btn btn-primary btn-sm">登录</button>
            <a href="#" class="btn btn-link btn-sm">忘记密码？</a>
        </div>
    </div>
</form>
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778459.jpg)

也可以将附加元素替换为按钮。把样式 `input-group-addon` 改为 `input-group-btn`，再在元素中添加一个 `<button>`。

```
<!--代码部分-->
...
<div class="input-group">
    <input type="email" class="form-control" id="email" placeholder="请输入邮箱" />
    <span class="input-group-btn">
        <button class="btn btn-default" type="button">@mazey.net</button>
    </span>
</div>
...
```

效果图：

![](https://i.mazey.net/uploads/2022/01/827778526.jpg)

## 完成案例

组合标签页与表单，构建一个可以切换注册和登录界面的模块。

![](https://i.mazey.net/uploads/2022/01/827805044.jpg)

演示地址：<https://i.mazey.net/bootstrap-blueprints/lesson-third-login/index.html>

源码地址：<https://github.com/chengchuu/bootstrap-blueprints/tree/main/lesson-third-login>

**版权声明**

本博客所有原创文章均保留版权。转载时必须包含本声明并保持文章完整。还需通过超链接注明作者 [除除](https://github.com/chengchuu)和原文地址：<http://blog.mazey.net/2594.html>。
