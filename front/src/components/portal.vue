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
        this.$router.push('test')
      }, 1000)
    },
    methods: {
      openFullScreen () {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 3000)
      }
    }
  }
</script>