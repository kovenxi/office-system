<template>
  <div class="color">
  <div id="head">
    <div class="search">
      <h1 class="text-center"> 现代化办公空间与共享办公解决方案可助您保持高效率 </h1>
      <h2>
      <span>大型办公室、共享办公空间及会议空间网络</span>&nbsp;|
      <span>120个国家/地区的3000个办公地点</span>
      </h2>
      <input title="输入城市" class="searchBox"   type="text" data-value="输入城市" onblur="if (this.value == '') { this.value = this.getAttribute('data-value'); }" onfocus="if (this.value == this.getAttribute('data-value')) { this.value = '';}" value="输入城市"   v-model="val" >
      <span> </span>
      <input class="submit" type="submit" @click="search">
    </div>
  </div>
  </div>
</template>
<script>

export default {
  data(){
      return{
        val: '输入城市'
      }
    },
  methods:{
    search(){
      if(this.val=='重庆')
        this.$router.push('/chongqing')
      else if(this.val=='北京')
        this.$router.push('/beijing')
      else if(this.val=='上海')
        this.$router.push('/shanghai')
      else if(this.val=='广州')
        this.$router.push('/guangzhou')
      else if(this.val=='深圳')
        this.$router.push('/shenzhen')
    }
  }
}

</script>

<style src='./homesrc/head.css' scoped>

</style>