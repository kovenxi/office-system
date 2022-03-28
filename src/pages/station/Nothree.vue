<template>
  <div class="content">
    <div class="banner">
      现代化办公空间与共享办公解决方案可助您保持高效率
    </div>
    <div v-if="(page==1 || page=='null') && condition1()"  class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqmeeting1.webp" >
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
    <div v-if="(page==1 || page=='null') && condition2()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjmeeting1.webp" >
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
    <div v-if="(page==1 || page=='null') && condition3()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szmeeting1.webp" >
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
    <div v-if="(page==1 || page=='null') && condition4()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shmeeting1.webp" >
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
    <div v-if="(page==1 || page=='null') && condition5()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzmeeting1.webp" >
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
    <div v-if="(page==2 || page=='null') && condition6()"  class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqsuite1.webp" >
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
    <div v-if="(page==2 || page=='null') && condition7()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjsuite1.webp" >
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
    <div v-if="(page==2 || page=='null') && condition8()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szsuite1.webp" >
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
    <div v-if="(page==2 || page=='null') && condition9()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shsuite1.webp" >
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
    <div v-if="(page==2 || page=='null') && condition10()" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzsuite1.webp" >
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
    <div v-if="!condition11()" class="note">暂无符合条件的办公工位</div>
    <div v-if="ispage()" class="pages">
      <ul @click="final">
        <li @click="pagedown">上一页</li>
        <li class="pagenum"  @click="page=1">1</li>
        <li class="pagenum"  @click="page=2">2</li>
        <li @click="pageup">下一页</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      page: 'null',
      type: '不限',
      location: '不限',
      price: '不限',
      num: '不限'
    }
  },
  methods :{
    pageup :function(){
      if(this.page<2)
        this.page++;
    },
    pagedown :function(){
      if(this.page>1)
        this.page--;
    },
    final :function()
    {
      let lis = document.querySelectorAll('.pages ul .pagenum');

      lis[this.page-1].style.backgroundColor="#747476";
        for( let j=0;j<2;j++)
          {
            if (j!=this.page-1)
              lis[j].style.backgroundColor="#fff"
          }
    },
    condition1(){
      return (this.type=='不限' || this.type=='meeting')&&(this.location=='不限'||this.location=='chongqing')&&(this.price=='不限'||this.price=='pri2')&&(this.num=='不限'||this.num=='num3')
    },
    condition2(){
      return (this.type=='不限' || this.type=='meeting')&&(this.location=='不限'||this.location=='beijing')&&(this.price=='不限'||this.price=='pri2')&&(this.num=='不限'||this.num=='num3')
    },
    condition3(){
      return (this.type=='不限' || this.type=='meeting')&&(this.location=='不限'||this.location=='shenzhen')&&(this.price=='不限'||this.price=='pri2')&&(this.num=='不限'||this.num=='num3')
    },
    condition4(){
      return (this.type=='不限' || this.type=='meeting')&&(this.location=='不限'||this.location=='shanghai')&&(this.price=='不限'||this.price=='pri2')&&(this.num=='不限'||this.num=='num3')
    },
    condition5(){
      return (this.type=='不限' || this.type=='meeting')&&(this.location=='不限'||this.location=='guangzhou')&&(this.price=='不限'||this.price=='pri2')&&(this.num=='不限'||this.num=='num3')
    },
    condition6(){
      return (this.type=='不限' || this.type=='suite')&&(this.location=='不限'||this.location=='chongqing')&&(this.price=='不限'||this.price=='pri3')&&(this.num=='不限'||this.num=='num3')
    },
    condition7(){
      return (this.type=='不限' || this.type=='suite')&&(this.location=='不限'||this.location=='beijing')&&(this.price=='不限'||this.price=='pri3')&&(this.num=='不限'||this.num=='num3')
    },
    condition8(){
      return (this.type=='不限' || this.type=='suite')&&(this.location=='不限'||this.location=='shenzhen')&&(this.price=='不限'||this.price=='pri3')&&(this.num=='不限'||this.num=='num3')
    },
    condition9(){
      return (this.type=='不限' || this.type=='suite')&&(this.location=='不限'||this.location=='shanghai')&&(this.price=='不限'||this.price=='pri3')&&(this.num=='不限'||this.num=='num3')
    },
    condition10(){
      return (this.type=='不限' || this.type=='suite')&&(this.location=='不限'||this.location=='guangzhou')&&(this.price=='不限'||this.price=='pri3')&&(this.num=='不限'||this.num=='num3')
    },
    condition11(){

      return this.condition1()||this.condition2()||this.condition3()||this.condition4()||this.condition5()||this.condition6()||this.condition7()||this.condition8()||this.condition9()||this.condition10()
    },
    ispage(){
      this.page==1
      return this.type=='不限' && this.location=='不限' && this.price=='不限'
    }
  },
  mounted : function(){
    this.type = this.$route.params.type,
    this.location = this.$route.params.location,
    this.price = this.$route.params.price,
    this.num = this.$route.params.num
    this.ispage()
    let lis = document.querySelectorAll('.pages ul .pagenum');
    lis[0].style.backgroundColor="#747476";
    
  }
}
</script>

<style src='./stationsrc/station.css' scoped>

</style>