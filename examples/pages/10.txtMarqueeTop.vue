<template>
  <div>
    <div class="titlebox">
      <h3><span>10. </span>文字无缝滚动-上<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/10.txtMarqueeTop.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>

    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="txtMarquee-top"
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
                  <option value="topMarquee">topMarquee</option>
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
              <td class="n">运行速度<i>[interTime]</i>:</td>
              <td>
                <select
                  name="interTime"
                  v-model="interTime"
                >
                  <option value="50">50</option>
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
      effect: 'topMarquee',
      vis: 5,
      interTime: 50,
      opp: false,
      pnLoop: true,
      trigger: 'click',
      mouseOverStop: true,
      options: { mainCell: ".bd ul", autoPlay: true, effect: "topMarquee", vis: 5, interTime: 50, trigger: "click" }
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
.txtMarquee-top {
  overflow: hidden;
  position: relative;
  border: 1px solid #ccc;
}
.txtMarquee-top .hd {
  overflow: hidden;
  height: 30px;
  background: #f4f4f4;
  padding: 0 10px;
}
.txtMarquee-top .prev,
.txtMarquee-top .next {
  position: absolute;
  top: 12px;
  right: 20px;

  display: block;
  width: 9px;
  height: 5px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  background: url(../assets/images/arrow.png) 0 -100px no-repeat;
}
.txtMarquee-top .next {
  right: 6px;
  background-position: 0 -140px;
}
.txtMarquee-top .prevStop {
  background-position: -60px -100px;
}
.txtMarquee-top .nextStop {
  background-position: -60px -140px;
}
.txtMarquee-top .bd {
  padding: 15px;
}
.txtMarquee-top .infoList li {
  height: 24px;
  line-height: 24px;
}
.txtMarquee-top .infoList li .date {
  float: right;
  color: #999;
}
</style>
