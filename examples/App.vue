<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
}

/* css 重置 */
html,
body {
  height: 100%;
}
body,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background: #fff;
  font: normal 12px/22px 宋体;
}
img {
  border: 0;
}
a {
  text-decoration: none;
  color: #333;
}
.clearfix {
  overflow: hidden;
  _zoom: 1;
}
.content {
  margin: 0 auto;
  padding: 22px 30px 30px 30px;
  position: relative;
  text-align: left;
  z-index: 0;
}

.titlebox {
  padding: 0 10px;
  h3 {
    font-size: 30px;
    font-weight: bold;
    color: #39a4dc;
    line-height: 60px;
    span {
      color: #ccc;
      font-style: italic;
      font-size: 60px;
    }
    a {
      margin-left: 20px;
      font-size: 16px;
      color: #666;
      &:hover {
        color: #39a4dc;

        &::after {
          content: ' >';
        }
      }
    }
  }
}

.demobox {
  overflow: hidden;
  float: left;
  width: 452px;
}
.paramsbox {
  width: 580px;
  height: 100%;
  margin-left: 20px;
  float: left;
  _display: inline;
  background: #fff;
  padding-bottom: 10px;
  border: 1px solid #ddd;
  table {
    background: #fff;
    .tit td {
      padding: 5px 10px;
      background: #39a4dc;
      color: #fff;
    }
    td {
      border: 1px solid #fff;
    }
    .n {
      width: 153px;
      text-align: right;
    }
    .new {
      color: #f00;
    }
    i {
      color: #999;
    }
  }
  p {
    margin: 0;
    padding: 10px 0 0 10px;
  }
  .curJsCode {
    color: #f60;
    display: block;
    font-family: SimSun;
  }
}
</style>
