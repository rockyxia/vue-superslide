<template>
  <div class="header">
    <router-link
      v-if="showIndex"
      to="/"
    >返回首页</router-link>
    <router-link
      v-for="(example, index) in examplesList"
      :key="index"
      :to="example.router"
      v-text="example.title"
    ></router-link>
  </div>
</template>

<script>

const examples = require('../examples.json')
export default {
  name: "slideHeader",
  data () {
    return {
      examplesList: examples
    }
  },
  props: {
    showIndex: {
      type: Boolean,
      default: true
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  a {
    font-size: 16px;
    display: block;
    color: #39a4dc;

    &:hover {
      text-decoration: underline;
      color: #f60;
    }

    &.router-link-exact-active {
      color: #f60;
    }
  }
}
</style>
