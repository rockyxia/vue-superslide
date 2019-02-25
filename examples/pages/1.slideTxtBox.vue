<template>
  <div>
    <div class="titlebox">
      <h3><span>1. </span>标签切换 / 书签切换 / 默认效果<a
          href="https://github.com/rockyxia/vue-superslide/tree/master/examples/pages/1.slideTxtBox.vue"
          target="_blank"
        >查看本Example完整代码</a></h3>
    </div>
    <div class="container clearfix">
      <div class="demobox">
        <superslide
          :options="options"
          class="slideTxtBox"
          v-if="hackReset"
        >

          <div class="bd">
            <ul>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >中国打破了世界软件巨头规则</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >口语：会说中文就能说英语！</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >农场摘菜不如在线学外语好玩</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >数理化老师竟也看学习资料？</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >学英语送ipad2,45天突破听说</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >学外语，上北外！</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >那些无法理解的荒唐事</a></li>
            </ul>
            <ul>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >名师教作文：３妙招巧写高分</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >耶鲁小子：教你备考SAT</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >施强：高端专业语言教学</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >数理化老师竟也看学习资料？</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >【推荐】名校英语方法曝光！</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >2012高考“考点”大曝光!!</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >涨价仍爆棚假日旅游冰火两重天</a></li>
            </ul>
            <ul>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >澳大利亚八大名校招生说明会</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >2012世界大学排名新鲜出炉</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >新加坡留学，国际双语课程</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >高考后留学日本名校随你选</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >教育培训行业优势资源推介</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >即刻预约今年最后一场教育展</a></li>
              <li><span class="date">2011-11-11</span><a
                  href="http://www.SuperSlide2.com"
                  target="_blank"
                >女友坚持警局完婚不抛弃</a></li>
            </ul>
          </div>

          <div
            class="hd"
            slot="titCell"
          >
            <ul>
              <li>教育</li>
              <li>培训</li>
              <li>出国</li>
            </ul>
          </div>

          <!-- 下面是前/后按钮代码，如果不需要删除即可 -->

          <a
            class="next"
            href="javascript:void(0)"
            slot="next"
          ></a><a
            class="prev"
            href="javascript:void(0)"
            slot="prev"
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
      autoPlay: false,
      trigger: 'mouseover',
      easing: 'swing',
      delayTime: 500,
      pnLoop: true,
      options: {
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
.slideTxtBox {
  position: relative;
  width: 450px;
  border: 1px solid #ddd;
  text-align: left;
}
.slideTxtBox .hd {
  height: 30px;
  line-height: 30px;
  background: #f4f4f4;
  padding: 0 10px 0 20px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.slideTxtBox .hd ul {
  float: left;
  position: absolute;
  left: 20px;
  top: -1px;
  height: 32px;
}
.slideTxtBox .hd ul li {
  float: left;
  padding: 0 15px;
  cursor: pointer;
}
.slideTxtBox .hd ul li.on {
  height: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-bottom: 2px solid #fff;
}
.slideTxtBox .bd ul {
  padding: 15px;
  zoom: 1;
}
.slideTxtBox .bd li {
  height: 24px;
  line-height: 24px;
}
.slideTxtBox .bd li .date {
  float: right;
  color: #999;
}

/* 下面是前/后按钮代码，如果不需要删除即可 */
.slideTxtBox .prev,
.slideTxtBox .next {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 5px;
  height: 9px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  background: url(../assets/images/arrow.png) 0 0 no-repeat;
}
.slideTxtBox .next {
  right: 5px;
  background-position: 0 -50px;
}
.slideTxtBox .prevStop {
  background-position: -60px 0;
}
.slideTxtBox .nextStop {
  background-position: -60px -50px;
}
</style>