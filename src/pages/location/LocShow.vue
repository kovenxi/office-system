<template>
  <div class="main">
    <div class="show">
      <div class="img-containner">
        <img src="./locationsrc/img/designer.jpg" alt="">
      </div>
      <div class="article">
        <div class="ph3 ph4">
            <strong>选择地点</strong>
            <span class="line1"></span><span class="line2"></span><span class="line3"></span><span class="line4"></span>
            <small>SELECT LOCATION</small>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="searchcon clearfix">
        <div class="email">
          <span class="ico"></span>
          <p class="x">ahliri@126.com</p>
        </div>
        <div class="addr">
          <span class="ico"></span>
          <p class="x">XXX市XXXX区XX路于XXXXXXXX产业园 </p>
        </div>
        <div class="call">
          <span class="ico"></span>
          <p class="x">电话：023-88888888</p>
        </div>
      </div>
      <div class="searchmain">
        <div class="container">
          <form class="parent">
            <input type="text" class="searchbox" placeholder="您可以根据以下百度地图搜索地名" v-on:input="val = $event.target.value">
            <input type="button"  class="btn" @click="search">
          </form>
        </div>
      </div>
      <div class="map">
         <div style="width:100%;height:550px;border:#ccc solid 1px;" id="dituContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import initMap from "../location/locationsrc/baidumap.js"
export default {
data (){
  return {
    val: ''
  }
},
methods :{
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
},
mounted: function(){
    initMap()
  }
}
</script>

<style src='./locationsrc/locshow.css' scoped>

</style>