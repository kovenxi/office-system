<template>
  <div class="content">
    <div class="banner">
      现代化办公空间与共享办公解决方案可助您保持高效率
    </div>
    <div v-if="condition1()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqvip1.webp" >
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
            <a @click="$router.push('/chongqing/cqdetail/cqvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition2()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjvip1.webp" >
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
            <a @click="$router.push('/beijing/bjdetail/bjvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition3()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szvip1.webp" >
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
            <a @click="$router.push('/shenzhen/szdetail/szvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition4()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shvip1.webp" >
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
            <a @click="$router.push('/shanghai/shdetail/shvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="condition5()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzvip1.webp" >
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
            <a @click="$router.push('/guangzhou/gzdetail/gzvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!condition6()" class="note">暂无符合条件的办公工位</div>
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
      return (this.type=='不限' || this.type=='vip')&&(this.location=='不限'||this.location=='chongqing')&&(this.price=='不限'||this.price=='pri4')&&(this.num=='不限'||this.num=='num2')
    },
    condition2(){
      return (this.type=='不限' || this.type=='vip')&&(this.location=='不限'||this.location=='beijing')&&(this.price=='不限'||this.price=='pri4')&&(this.num=='不限'||this.num=='num2')
    },
    condition3(){
      return (this.type=='不限' || this.type=='vip')&&(this.location=='不限'||this.location=='shenzhen')&&(this.price=='不限'||this.price=='pri4')&&(this.num=='不限'||this.num=='num2')
    },
    condition4(){
      return (this.type=='不限' || this.type=='vip')&&(this.location=='不限'||this.location=='shanghai')&&(this.price=='不限'||this.price=='pri4')&&(this.num=='不限'||this.num=='num2')
    },
    condition5(){
      return (this.type=='不限' || this.type=='vip')&&(this.location=='不限'||this.location=='guangzhou')&&(this.price=='不限'||this.price=='pri4')&&(this.num=='不限'||this.num=='num2')
    },
    condition6(){
      return this.condition1()||this.condition2()||this.condition3()||this.condition4()||this.condition5()
    }
    
  },
  watch :{
    $route (to,from){
      this.type = to.params.type,
      this.location = to.params.location,
      this.price = to.params.price,
      this.num = to.params.num
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