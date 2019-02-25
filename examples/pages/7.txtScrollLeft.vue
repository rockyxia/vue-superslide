<template>
  <div>
    <div class="titlebox">
      <h3><span>7. </span>文字滚动-左<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/7.txtScrollLeft.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>
    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="txtScroll-left"
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
          >
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
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
            :class="{additional:isAdditional, additional2:isAdditional2}"
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
                    value="left"
                    class="show"
                  >left</option>
                  <option value="leftLoop">leftLoop</option>
                </select>
              </td>
              <td class="n">自动运行<i>[autoPlay]</i>:</td>
              <td>
                <select
                  name="autoPlay"
                  v-model="autoPlay"
                >
                  <option value="false">false</option>
                  <option
                    selected="selected"
                    value="true"
                  >true</option>
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
                  <option
                    value="2"
                    selected="selected"
                  >2</option>
                </select>
              </td>
              <td class="n">可视个数<i>[vis]</i>:</td>
              <td>
                <select
                  name="vis"
                  v-model="vis"
                >
                  <option value="1">1</option>
                  <option
                    value="2"
                    selected="selected"
                  >2</option>
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
      effect: 'left',
      autoPlay: true,
      scroll: 2,
      vis: 2,
      trigger: 'mouseover',
      easing: 'swing',
      delayTime: 500,
      pnLoop: true,
      mouseOverStop: true,
      isAdditional: false,
      isAdditional2: false,
      options: { titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, scroll: 2, vis: 2 }
    }
  },
  watch: {
    effect (val) {
      console.log("effect:" + val)
      if (val == "leftLoop" && this.scroll == "1") {
        this.isAdditional2 = true
        this.isAdditional = false
      } else if (val == "left" && this.scroll == "1") {
        this.isAdditional2 = false
        this.isAdditional = true
      }
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
      if (val == "1" && this.effect == "left") {
        this.isAdditional = true
        this.isAdditional2 = false
      } else if (val == "1" && this.effect == "leftLoop") {
        this.isAdditional = false
        this.isAdditional2 = true
      } else {
        this.isAdditional = false
        this.isAdditional2 = false
      }

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
.txtScroll-left {
  position: relative;
  border: 1px solid #ccc;
}
.txtScroll-left .pageState {
  position: absolute;
  left: 10px;
  top: 4px;
}
.txtScroll-left .hd {
  overflow: hidden;
  height: 30px;
  background: #f4f4f4;
  padding: 0 10px;
}
.txtScroll-left .prev,
.txtScroll-left .next {
  position: absolute;
  right: 62px;
  top: 10px;
  display: block;
  width: 5px;
  height: 9px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  background: url(../assets/images/arrow.png) no-repeat;
}
.txtScroll-left .prev.additional {
  right: 90px;
}
.txtScroll-left .prev.additional2 {
  right: 103px;
}
.txtScroll-left .next {
  right: 10px;
  background-position: 0 -50px;
}
.txtScroll-left .prevStop {
  background-position: -60px 0;
}
.txtScroll-left .nextStop {
  background-position: -60px -50px;
}
.txtScroll-left .hd ul {
  float: right;
  overflow: hidden;
  zoom: 1;
  margin-top: 10px;
  margin-right: 10px;
}
.txtScroll-left .hd ul li {
  float: left;
  width: 9px;
  height: 9px;
  overflow: hidden;
  margin-right: 5px;
  text-indent: -999px;
  cursor: pointer;
  background: url(../assets/images/icoCircle.gif) 0 -9px no-repeat;
}
.txtScroll-left .hd ul li.on {
  background-position: 0 0;
}
.txtScroll-left .bd {
  padding: 10px;
  width: 430px;
  overflow: hidden;
}
.txtScroll-left .bd ul {
  overflow: hidden;
  zoom: 1;
}
.txtScroll-left .bd ul li {
  margin-right: 20px;
  float: left;
  height: 24px;
  line-height: 24px;
  text-align: left;
  _display: inline;
}
.txtScroll-left .bd ul li span {
  color: #999;
}
</style>