<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <el-row>
   <el-input
    size="large"
    placeholder="姓名"
    v-model="name">
  </el-input>
  </el-row>
  <el-row>
  <el-input
    size="large"
    placeholder="电话"
    v-model="phone">
  </el-input>
 </el-row>
  <el-row>
   数量：<el-input-number v-model="num1"  @change="handleChange" :min="1" :max="10"></el-input-number>
    </el-row>
  <el-row>
  <el-button v-on:click='back' > 取消 </el-button>
  <el-button type="primary" v-on:click='submit' > 确认 </el-button>
   </el-row>
  </div>
  
</template>

<script>
import $ from 'jquery'
export default {
  name: 'info',
  data () {
    return {
      msg: '请输入订购信息',
      num1: 2
    }
  },
  methods: {
    submit: function (event) {
      var url = '/order?name=' + this.name
      url = url + '&phone=' + this.phone
      url = url + '&num=' + this.num1
      $.get(url, function (data) {
        console.dir(data)
      })
      this.$router.go(-1)
    },
    back: function (event) {
      // `this` 在方法里指当前 Vue 实例
      this.$router.go(-1)
    },
    handleChange: function (value) {
      console.log(value)
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
