<template>
  <div class="content">
    <div class="banner">
      现代化办公空间与共享办公解决方案可助您保持高效率
    </div>
    <div v-if="condition1" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqs1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a>立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjs1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a>立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szs1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a>立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shs1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a>立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzs1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a>立即预定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
     type : '',
     location : '',
     price : '',
     num : '',
    }
  },
  methods :{
    condition1(){
      return (location=='不限'||location=='chongqing')&&(price=='不限'||price=='pri1')&&(num=='不限'||num=='num4')
    },
    condition2(){
      return (location=='不限'||location=='beijing')&&(price=='不限'||price=='pri1')&&(num=='不限'||num=='num4')
    },
    condition3(){
      return (location=='不限'||location=='shenzhen')&&(price=='不限'||price=='pri1')&&(num=='不限'||num=='num4')
    },
    condition4(){
      return (location=='不限'||location=='shanghai')&&(price=='不限'||price=='pri1')&&(num=='不限'||num=='num4')
    },
    condition5(){
      return (location=='不限'||location=='guangzhou')&&(price=='不限'||price=='pri1')&&(num=='不限'||num=='num4')
    }
    
  },
  mounted: function(){
    this.type = this.$route.params.type,
    this.location = this.$route.params.location,
    this.price = this.$route.params.price,
    this.num = this.$route.params.num
  } 

}
</script>

<style src='./stationsrc/station.css' scoped>

</style>