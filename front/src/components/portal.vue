<template>
<div class="portal">
  <el-label
    v-on:onload="openFullScreen"
    element-loading-text="拼命加载中"
    v-loading.fullscreen.lock="fullscreenLoading">
  </el-label>
</div>  
</template>

<script>
  export default {
    name: 'portal',
    data () {
      return {
        fullscreenLoading: true
      }
    },
    created () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
<<<<<<< HEAD
        this.$router.push('test')
=======
        this.$router.push('Hello')
>>>>>>> 627a6e36d3f40ceed120e92425338cf28474ee7a
      }, 1000)
    },
    methods: {
      openFullScreen () {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
<<<<<<< HEAD
        }, 3000)
=======
        }, 500)
>>>>>>> 627a6e36d3f40ceed120e92425338cf28474ee7a
      }
    }
  }
</script>