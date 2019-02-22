# Vue-SuperSlide

[SuperSlide](http://www.superslide2.com/) 的 Vue 封装，API 配置及使用方法与 SuperSlide 几乎一致，让你能够便捷的在 Vue 工程中使用 SuperSlide。

# Example

[Demo Page](http://rockyxia.github.io/vue-superslide)

[CDN Example](#)

# Install

#### CDN

```html
<!-- import Vue before SuperSlide -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="path/to/vsuperslide.umd.min.js"></script>
```

#### NPM

```bash
npm install vue-superslide --save
```

### Mount

```javascript
import Vue from 'vue'
import VueSuperSlide from 'vue-superslide'

Vue.use(VueSuperSlide)
```

### SPA

```html
<template>
  <superslide :options="options" class="slideBox">
    <!-- slides -->
    <div class="bd">
      <ul>
        <li>
          <a href="javascript:;"><img src="../images/pic1.jpg"/></a>
        </li>
        <li>
          <a href="javascript:;"><img src="../images/pic2.jpg"/></a>
        </li>
        <li>
          <a href="javascript:;"><img src="../images/pic3.jpg"/></a>
        </li>
      </ul>
    </div>

    <!-- Optional controls -->
    <div class="hd" slot="pagination">
      <ul>
        <li class="on">1</li>
        <li class="">2</li>
        <li class="">3</li>
      </ul>
    </div>

    <a class="prev" href="javascript:void(0)" slot="button-prev"></a>
    <a class="next" href="javascript:void(0)" slot="button-next"></a>
  </superslide>
</template>

<script>
  export default {
    name: "slideBox",
    data () {
      return {
        options: {
          mainCell: ".bd ul",
          autoPlay: true
        }
      }
    }
</script>
<style type="text/css">
  /* 本例子css */
  .slideBox {
    width: 450px;
    height: 230px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
  }
  .slideBox .hd {
    height: 15px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 1;
  }
  .slideBox .hd ul {
    overflow: hidden;
    zoom: 1;
    float: left;
  }
  .slideBox .hd ul li {
    float: left;
    margin-right: 2px;
    width: 15px;
    height: 15px;
    line-height: 14px;
    text-align: center;
    background: #fff;
    cursor: pointer;
  }
  .slideBox .hd ul li.on {
    background: #f00;
    color: #fff;
  }
  .slideBox .bd {
    position: relative;
    height: 100%;
    z-index: 0;
  }
  .slideBox .bd li {
    zoom: 1;
    vertical-align: middle;
  }
  .slideBox .bd img {
    width: 450px;
    height: 230px;
    display: block;
  }

  /* 下面是前/后按钮代码，如果不需要删除即可 */
  .slideBox .prev,
  .slideBox .next {
    position: absolute;
    left: 3%;
    top: 50%;
    margin-top: -25px;
    display: block;
    width: 32px;
    height: 40px;
    background: url(../assets/images/slider-arrow.png) -110px 5px no-repeat;
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
  .slideBox .next {
    left: auto;
    right: 3%;
    background-position: 8px 5px;
  }
  .slideBox .prev:hover,
  .slideBox .next:hover {
    filter: alpha(opacity=100);
    opacity: 1;
  }
  .slideBox .prevStop {
    display: none;
  }
  .slideBox .nextStop {
    display: none;
  }
</style>
```

# API

SuperSlide 官网中的 API 及配置均可使用

- [SuperSlide Params](http://www.superslide2.com/param.html)

# Author

[Rockyxia](https://github.com/rockyxia)
