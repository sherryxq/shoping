<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<div>
    <p>了解更多，关注“百福速鲜”微信公众号</p>
    <img src="/img/baifu.jpg" width="900" height="500" />
</div>

<hr/>
    <div class="main">
        <div class="l-box fl">
	    <div class=" shadow border">
	        <div class="l-th">
	            <p style="color:red;font-size:20px;">百香果</p>
		</div>
		<div class="l-tbody clearfix">   
                    <div class="pb20 fr">
                          <img v-on:click='click' src="/img/baixiangguo.jpg" width="280" height="210"/>
                          <h1 v-on:click='click' >点击购买</h1>
                    </div>
                    <div>
                       <p>百香果，又名鸡蛋果。含有17种氨基酸，丰富的蛋白质、脂肪、糖、维生素、钙、磷、铁、钾等165种对人体有益物质，更被称为水果中的VC（维生素）之王，口感独特。</p>
                    </div>  
                </div>
            </div>
<div class="mb30 border shadow mt30">
    <div id="ldjc4ta=baby_tbody1" class="bodyMark pt22"></div>
         <div class="l-tbody">
             <p class="m-th pt22"><i>百香果的正确吃法</i></p> 
             <div class="art-text">
                 <p>1.直接鲜食：将百香果剖开，用调羹挖出瓤包直接食用(籽可食用，富含高级蛋白，高级脂肪)。</p>
                 <p>2、制成果汁：取一个百香果，切开，用勺子将果肉舀入杯中，加200ml水，加少许白糖调整甜度，搅拌即可得一杯色、香、味俱佳的营养果汁。夏天用冰水，冬天用温开水，加上几滴蜂蜜，风味更佳。</p>
                 <p>3、治疗失眠：百香果除了具有镇定的功效，还有助于提高睡眠质量，每晚睡前喝一杯由它泡的茶，也可帮助入眠。</p>
                 <p>4、降血压：取百香果三个，冷开水约200毫升，蜂蜜少许，柠檬汁少许，碎冰少许。然后将百香果洗净切开，以汤匙将果肉挖出，放入果汁机中，加入蜂蜜、冷开水、柠檬汁打匀过滤后倒入杯中，加入碎冰即可饮用。</p>
                 <p>5、果壳除了用于提取果胶、医药成份和加工饲料外，也可用于泡酒或泡茶，以及烹饪菜肴。</p>
             </div>
         </div>
    </div>
    <div id="ldjc4ta=baby_tbody2" class="bodyMark pt22"></div>
        <div class="l-tbody">
            <p class="m-th pt22"><i>吃百香果的注意事项</i></p> 
                <div class="art-text">
                    <p>1、患有消化系统疾病、胃不好的人应当谨慎进食。</p>
                    <p>2、果壳出现凹陷、干瘪属正常现象，果瓤却更加香甜。。</p>
                </div>
         </div>
    </div>
</div>
        </div>
    </div>

<br/>

  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '百香果已上线，敬请品尝！'
    }
  },
  methods: {
    click: function (event) {
      // `this` 在方法里指当前 Vue 实例
      this.$router.push('info')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
