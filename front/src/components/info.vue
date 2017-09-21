<template>

<div class="infoform">
 
  <el-row :gutter="2">
    <el-col :span="9">
      <hr style="height:2px;width:500px;border:none;border-top:1px solid #E4E4E4" />
    </el-col>
    <el-col :span="2">
      <label>购物车</label>
    </el-col>
    <el-col :span="9">
      <hr style="height:2px;width:500px;border:none;border-top:1px solid #E4E4E4" />
    </el-col>
  </el-row>
  <br />
  <el-row :gutter="4">
    <el-col :span="6">
      <label>百香果</label>
    </el-col>
    <el-col :span="4">
       <label id="orderid">BXG-10000001</label>
    </el-col>
    <el-col :span="6">
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
    </el-col>
    <el-col :span="4">
       <label id="labelprice">￥58</label>
    </el-col>
  </el-row>
  <br />
  <el-row>
    <el-col :span="24">
      <hr align="left" style="height:2px;width:1024px;border:none;border-top:1px solid #E4E4E4" />
    </el-col>
  </el-row>
  <br />
  
  <el-form ref="form" :model="form" label-width="100px">

    <el-form-item label="酒店名称">
      <el-row :gutter="3">
        <el-col :span="6">
          <el-select class="myselect" v-model="form.hotelname" clearable placeholder="请选择酒店名称">
            <el-option label="新西街大酒店" value="xinxijie"></el-option>
            <el-option label="幸福人家大酒店" value="xingfurenjia"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2" offset="6">
          <label>房间号</label>
        </el-col>
        <el-col :span="6">
          <el-input v-model="form.roomnum" placeholder="请输入房间号"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
  
    <el-form-item label="收件人姓名">
      <el-row :gutter="2">
        <el-col :span="6">
          <el-input v-model="form.recvname" placeholder="请输入收件人姓名"></el-input>
        </el-col>
        <el-col :span="2" offset="6">
          <label>手机号码</label>
        </el-col>
        <el-col :span="6">
          <el-input v-model="form.phonenum" placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="配送时间">
      <el-row :gutter="6">
        <el-col :span="8">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="8">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-row>
    </el-form-item>
  
    <el-form-item>
      <el-button type="primary" @click='onSubmit'>立即下单</el-button>
      <el-button type="primary" @click='onReturn'>取消</el-button>
    </el-form-item>
  </el-form>

</div>

</template>

<script>
  export default {
    data () {
      return {
        num1: 1,
        orderid: '',
        form: {
          hotelname: '',
          roomnum: '',
          recvname: '',
          phonenum: '',
          date1: '',
          date2: ''
        }
      }
    },
    methods: {
      onSubmit: function (event) {
        if (this.form.hotelname === '') {
          this.$message('请选择酒店名称')
        } else
        if (this.form.roomnum === '') {
          this.$message('请输入房间号')
        } else
        if (this.form.recvname === '') {
          this.$message('请输入收件人姓名')
        } else
        if (this.form.phonenum === '') {
          this.$message('请输入收件人手机号码')
        } else
        if (this.form.date1 === '') {
          this.$message('请输入收货时间')
        } else {
          // `this` 在方法里指当前 Vue 实例
          this.$router.push('result')
        }
      },
      onReturn: function (event) {
        // `this` 在方法里指当前 Vue 实例
        this.$router.push('test')
      },
      handleChange (value) {
        var a = '￥'
        var b = value * 58
        a = a + b
        document.getElementById('labelprice').innerHTML = a
        console.log(value)
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
