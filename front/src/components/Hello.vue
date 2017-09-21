<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    	<p>了解更多，关注“百福速鲜”微信公众号</p>
    	<img src="/static//img/baifu.jpg" width="900" height="500" />
		</div>
		<hr/>
    <el-row>
	    <p style="color:red;font-size:20px;">百香果</p>
		</el-row>
		<el-row>
      <img v-on:click='click' src="/static/img/baixiangguo.jpg" width="280" height="210"/>
      <h1 v-on:click='click' >点击购买</h1>
    </el-row>  
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
