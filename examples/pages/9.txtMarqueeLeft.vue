<template>
  <div>
    <div class="titlebox">
      <h3><span>9. </span>文字无缝滚动-左<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/9.txtMarqueeLeft.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>

    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="txtMarquee-left"
          v-if="hackReset"
        >
          <div class="bd">
            <ul class="infoList">
              <li><a href="javascript:;">中国打破了世界软件巨头规则</a><span>[11-11]</span></li>
              <li><a href="javascript:;">施强：高端专业语言教学</a><span>[11-11]</span></li>
              <li><a href="javascript:;">新加坡留学，国际双语课程</a><span>[11-11]</span></li>
              <li><a href="javascript:;">高考后留学日本名校随你选</a><span>[11-11]</span></li>
              <li><a href="javascript:;">教育培训行业优势资源推介</a><span>[11-11]</span></li>
              <li><a href="javascript:;">女友坚持警局完婚不抛弃</a><span>[11-11]</span></li>
            </ul>
          </div>

          <div
            class="hd"
            slot="titCell"
          ></div>

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
                  <option
                    value="leftMarquee"
                    class="show"
                  >leftMarquee</option>
                </select>
              </td>
              <td class="n">可视个数<i>[vis]</i>:</td>
              <td>
                <select
                  name="vis"
                  v-model="vis"
                >
                  <option value="2">2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="n">运行速度<i>[interTime]</i>:</td>
              <td>
                <select
                  name="interTime"
                  v-model="interTime"
                >
                  <option
                    value="50"
                    class="show"
                  >50</option>
                  <option value="25">25</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td class="n">默认反方向运动<i>[opp]</i>:</td>
              <td>
                <select
                  name="opp"
                  v-model="opp"
                >
                  <option value="false">false</option>
                  <option value="true">true</option>
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
              <td
                class="n new"
                title="v2.1 新增：长按按钮10倍加速运行。"
              >触发方式<i>[trigger]</i>:</td>
              <td>
                <select
                  rel="string"
                  name="trigger"
                  v-model="trigger"
                >
                  <option value="mouseover">mouseover</option>
                  <option
                    value="click"
                    selected="selected"
                  >click</option>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picScrollLeft",
  data () {
    return {
      hackReset: true,
      effect: 'leftMarquee',
      vis: 2,
      interTime: 50,
      opp: false,
      pnLoop: true,
      trigger: 'click',
      mouseOverStop: true,
      options: { mainCell: ".bd ul", autoPlay: true, effect: "leftMarquee", interTime: 50, trigger: "click" }
    }
  },
  watch: {
    effect (val) {
      console.log("effect:" + val)
      this.options.effect = val
      this.hackResetFun()

    },
    vis (val) {
      console.log("vis:" + val)
      this.options.vis = val
      this.hackResetFun()
    },
    interTime (val) {
      console.log("interTime:" + val)
      this.options.interTime = val
      this.hackResetFun()
    },
    opp (val) {
      console.log("opp:" + val)
      this.options.opp = val
      this.hackResetFun()
    },
    trigger (val) {
      console.log("trigger:" + val)
      this.options.trigger = val
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

<style>
/* 本例子css */
.txtMarquee-left {
  position: relative;
  border: 1px solid #ccc;
}
.txtMarquee-left .hd {
  overflow: hidden;
  height: 30px;
  background: #f4f4f4;
  padding: 0 10px;
}
.txtMarquee-left .prev,
.txtMarquee-left .next {
  position: absolute;
  top: 10px;
  right: 20px;
  display: block;
  width: 5px;
  height: 9px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  cursor: pointer;
  background: url(../assets/images/arrow.png) no-repeat;
}
.txtMarquee-left .next {
  right: 8px;
  background-position: 0 -50px;
}
.txtMarquee-left .prevStop {
  background-position: -60px 0;
}
.txtMarquee-left .nextStop {
  background-position: -60px -50px;
}
.txtMarquee-left .bd {
  padding: 10px;
}
.txtMarquee-left .bd .tempWrap {
  width: 425px !important;
} /* 用 !important覆盖SuperSlide自动生成的宽度，这样就可以手动控制可视宽度。 */
.txtMarquee-left .bd ul {
  overflow: hidden;
  zoom: 1;
}
.txtMarquee-left .bd ul li {
  margin-right: 20px;
  float: left;
  height: 24px;
  line-height: 24px;
  text-align: left;
  _display: inline;
  width: auto !important;
} /* 用 width:auto !important 覆盖SuperSlide自动生成的宽度，解决文字不衔接问题 */
</style>
