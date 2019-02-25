<template>
  <div>
    <div class="titlebox">
      <h3><span>2. </span>焦点图 / 幻灯片<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/2.slideBox.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>
    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="slideBox"
          v-if="hackReset"
        >
          <div class="bd">
            <ul>
              <li><a href="javascript:;"><img src="http://www.superslide2.com/demo/images/pic1.jpg"></a></li>
              <li><a href="javascript:;"><img src="http://www.superslide2.com/demo/images/pic2.jpg"></a></li>
              <li><a href="javascript:;"><img src="http://www.superslide2.com/demo/images/pic3.jpg"></a></li>
            </ul>
          </div>

          <div
            class="hd"
            slot="titCell"
          >
            <ul>
              <li class="on">1</li>
              <li class="">2</li>
              <li class="">3</li>
            </ul>
          </div>

          <a
            class="prev"
            href="javascript:void(0)"
            slot="prev"
          ></a>
          <a
            class="next"
            href="javascript:void(0)"
            slot="next"
          ></a>
        </superslide>
      </div>
      <div class="paramsbox">
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tbody>
            <tr class="tit">
              <td colspan="4">常用参数(切换看看)</td>
            </tr>
            <tr>
              <td class="n">效果<i>[effect]</i>:</td>
              <td>
                <select
                  rel="string"
                  name="effect"
                  v-model="effect"
                >
                  <option value="fade">fade</option>
                  <option value="fold">fold</option>
                  <option value="left">left</option>
                  <option value="top">top</option>
                  <option value="leftLoop">leftLoop</option>
                  <option value="topLoop">topLoop</option>
                </select>
              </td>
              <td class="n">自动运行<i>[autoPlay]</i>:</td>
              <td>
                <select
                  name="autoPlay"
                  v-model="autoPlay"
                >
                  <option value="false">false</option>
                  <option value="true">true</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="n">触发方式<i>[trigger]</i>:</td>
              <td>
                <select
                  rel="string"
                  name="trigger"
                  v-model="trigger"
                >
                  <option value="mouseover">mouseover</option>
                  <option value="click">click</option>
                </select>
              </td>
              <td class="n">缓动效果<i>[easing]</i>:</td>
              <td>
                <select
                  rel="string"
                  name="easing"
                  v-model="easing"
                >

                  <option value="swing">swing</option>
                  <option value="easeOutCirc">easeOutCirc</option>
                  <option value="easeInQuint">easeInQuint</option>
                  <option value="easeInBack">easeInBack</option>
                  <option value="easeOutBounce">easeOutBounce</option>
                  <option value="easeOutElastic">easeOutElastic</option>
                  <option value="easing-more">更多</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="n">效果速度<i>[delayTime]</i>:</td>
              <td>
                <select
                  name="delayTime"
                  v-model="delayTime"
                >
                  <option value="500">500</option>
                  <option value="700">700</option>
                  <option value="1000">1000</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td
                class="n new"
                title="v2.1 新增：鼠标移到容器层是否停止播放"
              >停止播放<i>[mouseOverStop]</i>:</td>
              <td>
                <select
                  name="mouseOverStop"
                  v-model="mouseOverStop"
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </td>
            </tr>
            <tr>
              <td
                class="n"
                title="前/后按钮是否继续循环，若为false则当翻动到最前/后页时，前/后按钮点击无效"
              >前后按钮循环<i>[pnLoop]</i>:</td>
              <td>
                <select
                  name="pnLoop"
                  v-model="pnLoop"
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="jsCode">当前调用参数：<span class="curJsCode">options: {{options}}</span></p>
        <p class="notice">注意：缓动效果对于fade影响不大;不同缓动效果设置适当“效果速度”，会有最佳效果。<br></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "slideBox",
  data () {
    return {
      hackReset: true,
      effect: 'fade',
      autoPlay: true,
      trigger: 'mouseover',
      easing: 'swing',
      delayTime: 500,
      mouseOverStop: true,
      pnLoop: true,
      options: {
        mainCell: ".bd ul",
        autoPlay: true
      }
    }
  },
  watch: {
    effect (val) {
      console.log("effect:" + val)
      this.options.effect = val
      this.hackResetFun()
    },
    autoPlay (val) {
      console.log("autoPlay:" + val)
      this.options.autoPlay = val
      this.hackResetFun()
    },
    trigger (val) {
      console.log("trigger:" + val)
      this.options.trigger = val
      this.hackResetFun()
    },
    easing (val) {
      console.log("easing:" + val)
      if (val == "easing-more") {
        window.open("http://www.superslide2.com/otherDemo/T2.1/easing.html")
        return
      } else {
        this.options.easing = val
        this.hackResetFun()
      }
    },
    delayTime (val) {
      console.log("delayTime:" + val)
      this.options.delayTime = val
      this.hackResetFun()
    },
    mouseOverStop (val) {
      console.log("mouseOverStop:" + val)
      this.options.mouseOverStop = val
      this.hackResetFun()
    },
    pnLoop (val) {
      console.log("pnLoop:" + val)
      this.options.pnLoop = val
      this.hackResetFun()
    }
  },
  methods: {
    // vue hack 之强制刷新组件
    hackResetFun: function () {
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    }
  }
};
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