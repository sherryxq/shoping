<template>

<div class="test">
  <div class="topdiv">百福水果商城</div>

  <img src="/static/img/baixiangguo.jpg" width="30%" />
  <div>
    <div class="baixiangguodiv">桂林阳朔产百香果</div>
    <div class="pricediv">￥58</div>
    <div class="expressdiv">快递：免费配送</div>
    <div class="introducediv">介绍：产自广西阳朔，农场新鲜采摘，免费配送。礼品包装，10斤/箱。百香果酸甜可口，消食解腻，是食用佳品。</div>
  </div>
  
  <div class="line"></div>
  
  <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">产品介绍</el-menu-item>
    <el-menu-item index="2">食用价值</el-menu-item>
    <el-menu-item index="3">食用方法</el-menu-item>
  </el-menu>
  
  <img src="/static/img/introduce01.jpg" width="100%" />
  <br />
  <img src="/static/img/introduce02.jpg" width="100%"/>
  <br />
  <img src="/static/img/introduce03.jpg" width="100%"/>
  
  <hr />
  <div>
    	<p>了解更多，关注“百福速鲜”微信公众号</p>
    	<img src="/static//img/baifu.jpg" width="80%"  />
	</div>
  <el-button class="buybutton" type="primary" v-on:click='click'>立即购买</el-button>
</div>

</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        num1: 1
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
.topdiv {
  position:fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 8%;
  background: #000000;
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  vertical-align: center;
}

.baixiangguodiv {
  font-size: 3rem;
  color: #949494;
  text-align: left;
}

.pricediv {
  font-size: 3rem;
  color: #FF0000;
  text-align: left;
}

.expressdiv {
  font-size: 2rem;
  text-align: left;
  color: #949494;
}

.introducediv {
  font-size: 2rem;
  text-align: left;
  color: #949494;
}

.buybutton {
  position:fixed;
  bottom:0;
  left: 0;
  width: 100%;
  height: 10%;
  background: #FF0000;
}
</style>