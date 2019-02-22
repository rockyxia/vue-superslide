<template>
  <div class="indexpage">
    <h2 class="title"><span>Vue-SuperSlide</span></h2>
    <h5 class="subtitle">SuperSlide component for Vue</h5>
    <div class="indIntro">
      <p>Vue-SuperSlide 是 SuperSlide 的 Vue 封装版本，API 配置及使用方法与 SuperSlide 几乎一致，<br>让你能够便捷的在 Vue 工程中使用 SuperSlide。<br>
        关于 SuperSlide 的介绍可以到 <a
          href="http://www.superslide2.com/"
          target="_blank"
        >SuperSlide 官方网站 - 大话主席</a> 进行查看。
      </p>
    </div>
    <div class="actions">
      <a
        href="https://github.com/rockyxia/vue-superslide"
        target="_blank"
      >View on GitHub</a>
      <a
        href="https://github.com/rockyxia/vue-superslide/issues"
        target="_blank"
      >Issues</a>
      <a
        href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages"
        target="_blank"
      >Example Code</a>
      <a
        href="http://www.superslide2.com/param.html"
        target="_blank"
      >api docs</a>
    </div>

    <div class="examples">
      <div class="examples-title">Examples</div>
      <ul class="clearfix">
        <li
          v-for="(example, index) in examplesList"
          :key="index"
        >
          <router-link
            :to="example.router"
            v-text="example.title"
          ></router-link>
        </li>
      </ul>
    </div>

    <div class="footer"><a href="https://github.com/rockyxia/vue-superslide">Vue-SuperSlide</a> IS MAINTAINED BY <a href="https://github.com/rockyxia">Rockyxia</a> .</div>
  </div>
</template>

<script>
const examples = require('../examples.json')
export default {
  name: "index",
  data () {
    return {
      examplesList: examples
    }
  }
};
</script>

<style lang="scss" scoped>
.indexpage {
  background: #39a4dc;
  color: #fff;
  min-height: 100%;
  text-align: center;

  .title {
    margin: 0;
    padding: 50px 0 30px;
    font: italic bold 80px/100% Arial;
    letter-spacing: -3px;
    text-shadow: 2px 2px 0 #1a668e;
  }
  .subtitle {
    margin: 0 0 30px;
    font: 30px/100% Arial;
    text-shadow: 1px 2px 0 #1a668e;
    opacity: 0.9;
  }

  .indIntro {
    width: 1000px;
    margin: 0 auto;
    font: normal 18px/200% 'Microsoft YaHei';
    text-shadow: 1px 1px 0 #1a668e;
    text-align: center;

    a {
      color: #ff0;
      cursor: pointer;
    }
  }
  .actions {
    font-size: 18px;
    text-transform: uppercase;

    a {
      color: #fff;
      margin: 0 10px;
      padding: 4px 8px;
      background: rgba($color: #000, $alpha: 0.2);
      border-radius: 3px;
      &:hover {
        background: rgba($color: #000, $alpha: 0.3);
      }
    }
  }

  .examples {
    padding: 30px 0;
    &-title {
      margin: 10px 0;
      font: 30px/100% Arial;
      text-shadow: 1px 2px 0 #1a668e;
    }
    ul {
      width: 800px;
      margin: 0 auto;
    }

    li {
      // width: 50%;
      // float: left;
      // text-align: left;
      line-height: 30px;
    }

    a {
      color: #fff;
      font-size: 16px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer {
    width: 100%;
    background: #dfdfdf;
    position: fixed;
    bottom: 0;
    left: 0;
    line-height: 40px;
    color: #333;
    text-transform: uppercase;

    a {
      &:hover {
        color: #f00;
        text-decoration: underline;
      }
    }
  }
}
</style>
