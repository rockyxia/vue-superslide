// 导入组件，组件必须声明 name
import superslide from './src/superslide.vue'

// 为组件提供 install 安装方法，供按需引入
superslide.install = function(Vue) {
  Vue.component(superslide.name, superslide)
}

// 默认导出组件
export default superslide
