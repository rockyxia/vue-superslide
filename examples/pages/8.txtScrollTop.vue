<template>
  <div>
    <div class="titlebox">
      <h3><span>8. </span>文字滚动-上<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/8.txtScrollTop.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>
    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="txtScroll-top"
          v-if="hackReset"
        >

          <div class="bd">
            <ul class="infoList">
              <li><span class="date">2011-11-11</span><a href="javascript:;">中国打破了世界软件巨头规则</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">口语：会说中文就能说英语！</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">农场摘菜不如在线学外语好玩</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">数理化老师竟也看学习资料？</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">学英语送ipad2,45天突破听说</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">学外语，上北外！</a></li>
              <li><span class="date">2011-11-11</span><a href="javascript:;">那些无法理解的荒唐事</a></li>

            </ul>
          </div>

          <div
            class="hd"
            slot="titCell"
          >
            <ul>
            </ul>
          </div>

          <span
            class="pageState"
            slot="pageStateCell"
          ></span>

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
                  <option value="top">top</option>
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
              <td class="n">滚动个数<i>[scroll]</i>:</td>
              <td>
                <select
                  name="scroll"
                  v-model="scroll"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td class="n">可视个数<i>[vis]</i>:</td>
              <td>
                <select
                  name="vis"
                  v-model="vis"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
          </tbody>
        </table>
        <p class="jsCode">当前调用参数：<span class="curJsCode">options: {{options}}</span></p>
        <p class="notice">注意1：不同缓动效果设置适当“效果速度”，会有最佳效果。<br>
          注意2：现在是全按钮开启情况，不需要按钮的时候，只要删除按钮html或者隐藏即可。
        </p>
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
      effect: 'top',
      autoPlay: true,
      scroll: 1,
      vis: 5,
      trigger: 'mouseover',
      easing: 'swing',
      delayTime: 500,
      pnLoop: true,
      mouseOverStop: true,
      options: { titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "top", autoPlay: true, vis: 5 }
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
    scroll (val) {
      console.log("scroll:" + val)
      this.options.scroll = val
      this.hackResetFun()
    },
    vis (val) {
      console.log("vis:" + val)
      this.options.vis = val
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
    pnLoop (val) {
      console.log("pnLoop:" + val)
      this.options.pnLoop = val
      this.hackResetFun()
    },
    mouseOverStop (val) {
      console.log("mouseOverStop:" + val)
      this.options.mouseOverStop = val
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
.txtScroll-top {
  overflow: hidden;
  position: relative;
  border: 1px solid #ccc;
}
.txtScroll-top .pageState {
  position: absolute;
  left: 10px;
  top: 4px;
}
.txtScroll-top .hd {
  overflow: hidden;
  height: 30px;
  background: #f4f4f4;
  padding: 0 10px;
}
.txtScroll-top .prev,
.txtScroll-top .next {
  position: absolute;
  right: 62px;
  top: 12px;
  display: block;
  width: 9px;
  height: 5px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  background: url(../assets/images/arrow.png) 0 -100px no-repeat;
}
.txtScroll-top .next {
  right: 6px;
  background-position: 0 -140px;
}
.txtScroll-top .prevStop {
  background-position: -60px -100px;
}
.txtScroll-top .nextStop {
  background-position: -60px -140px;
}
.txtScroll-top .hd ul {
  float: right;
  overflow: hidden;
  zoom: 1;
  margin-top: 10px;
  margin-right: 10px;
}
.txtScroll-top .hd ul li {
  float: left;
  width: 9px;
  height: 9px;
  overflow: hidden;
  margin-right: 5px;
  text-indent: -999px;
  cursor: pointer;
  background: url(../assets/images/icoCircle.gif) 0 -9px no-repeat;
}
.txtScroll-top .hd ul li.on {
  background-position: 0 0;
}
.txtScroll-top .bd {
  padding: 15px;
}
.txtScroll-top .infoList li {
  height: 24px;
  line-height: 24px;
}
.txtScroll-top .infoList li .date {
  float: right;
  color: #999;
}
</style>