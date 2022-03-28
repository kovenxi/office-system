<template>
  <div>
    <div class="nav clearfix"><Nav/></div>
    <div class="banner">
      <div class="title">我的regus</div>
    </div>
    <div class="banner2">
      <h2>我的预定</h2>
    </div>
    <!-- <div class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjs1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场-共享办公室</h1>
          <div class="addr">
            <img src="@/pages/station/stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">预定起始时间 : 2009 - 12.3 - 16:45</div>
            <div class="text">预定结束时间 : 2009 - 12.3 - 16:45</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;预定数量：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="@/pages/station/stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">实际成交价:285</div>
          <div class="btn">
            <a>再来一单</a>
          </div>
          <div class="btn btn2">
            <a>取消预订</a>
          </div>
        </div>
      </div>
    </div> -->
    <div v-for="(item, index) in buyList" :key="index" class="items">  
      <div class="pic">
        <img :src="item.pic"  height="14px" >
      </div>
      <div class="inform">
        <h1>{{item.title}}</h1>
        <div class="addr">
          <img src="@/pages/station/stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
        </div>
        <div class="appraise2">
          <div class="text">预定起始时间 : {{item.stime}}</div>
          <div class="text">预定结束时间 : {{item.etime}}</div>
        </div>
        <div class="surplus">
          房型:{{item.htype}} &nbsp;&nbsp;&nbsp;预定数量：{{item.num}}
        </div>
      </div>
      <div class="inform2">
        <div class="price">
          <img src="@/pages/station/stationsrc/img/priceIcon.svg" >
          <span class="num">￥{{item.price}}</span>
          <span class="company">{{item.priceType}}</span>
        </div>
        <div class="finalprice">实际成交价:{{item.fprice}}</div>
        <div @click="$router.push(item.path)" class="btn">
          <a>再来一单</a>
        </div>
        <div @click="cancle(index)" class="btn btn2">
          <a>取消预订</a>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in buyList2" :key="index" class="items">  
      <div class="pic">
        <img :src="item.pic"  height="14px" >
      </div>
      <div class="inform">
        <h1>{{item.title}}</h1>
        <div class="addr">
          <img src="@/pages/station/stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
        </div>
        <div class="appraise2">
          <div class="text">预定起始时间 : {{item.stime}}</div>
          <div class="text">预定结束时间 : {{item.etime}}</div>
        </div>
        <div class="surplus">
          房型:{{item.htype}} &nbsp;&nbsp;&nbsp;预定数量：{{item.final}}
        </div>
      </div>
      <div class="inform2">
        <div class="price">
          <img src="@/pages/station/stationsrc/img/priceIcon.svg" >
          <span class="num">￥{{item.price}}</span>
          <span class="company">{{item.priceType}}</span>
        </div>
        <div class="finalprice">实际成交价:{{item.fprice}}</div>
        <div @click="$router.push('/smallbusy')" class="btn">
          <a>再来一单</a>
        </div>
        <div @click="cancle3(index)" class="btn btn2">
          <a>取消预订</a>
        </div>
      </div>
    </div>
    <div v-show="buyList.length==0 && buyList2.length==0" class="note">您暂未预定任何商品</div>
    <div class="banner2">
      <h2>我的购物车</h2>
    </div>
    <div v-for="(item, index) in carList" :key="'car'+index" class="items">  
      <div class="pic">
        <img :src="item.pic"  height="14px" >
      </div>
      <div class="inform">
        <h1>{{item.title}}</h1>
        <div class="addr">
          <img src="@/pages/station/stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
        </div>
        <div class="appraise2">
          <div class="text">预定起始时间 : {{item.stime}}</div>
          <div class="text">预定结束时间 : {{item.etime}}</div>
        </div>
        <div class="surplus">
          房型:{{item.htype}} &nbsp;&nbsp;&nbsp;预定数量：{{item.num}}
        </div>
      </div>
      <div class="inform2">
        <div class="price">
          <img src="@/pages/station/stationsrc/img/priceIcon.svg" >
          <span class="num">￥{{item.price}}</span>
          <span class="company">{{item.priceType}}</span>
        </div>
        <div class="finalprice">预计总金额:{{item.fprice}}</div>
        <div @click="buy(index);cancle2(index)" class="btn">
          <a>立即预定</a>
        </div>
        <div @click="cancle2(index)" class="btn btn2">
          <a>移除购物车</a>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in carList2" :key="index" class="items">  
      <div class="pic">
        <img :src="item.pic"  height="14px" >
      </div>
      <div class="inform">
        <h1>{{item.title}}</h1>
        <div class="addr">
          <img src="@/pages/station/stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
        </div>
        <div class="appraise2">
          <div class="text">预定起始时间 : {{item.stime}}</div>
          <div class="text">预定结束时间 : {{item.etime}}</div>
        </div>
        <div class="surplus">
          房型:{{item.htype}} &nbsp;&nbsp;&nbsp;预定数量：{{item.final}}
        </div>
      </div>
      <div class="inform2">
        <div class="price">
          <img src="@/pages/station/stationsrc/img/priceIcon.svg" >
          <span class="num">￥{{item.price}}</span>
          <span class="company">{{item.priceType}}</span>
        </div>
        <div class="finalprice">预计成交价:{{item.fprice}}</div>
        <div @click="buy2(index);cancle4(index)" class="btn">
          <a>立即预定</a>
        </div>
        <div @click="cancle4(index)" class="btn btn2">
          <a>移除购物车</a>
        </div>
      </div>
    </div>
    <div v-show="carList.length==0 && carList2.length==0" class="note">您的购物车暂时没有商品</div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '../../components/Footer.vue'
export default {
  data() {
    return{
      buyList : [],
      carList : [],
      buyList2 : [],
      carList2 : [],
    }
  },
  methods :{
    cancle(index){
      this.$store.commit('delBuyList',index)
    },
    cancle2(index){
      this.$store.commit('delCarList',index)
    },
    cancle3(index){
      this.$store.commit('delBuyList2',index)
    },
    cancle4(index){
      this.$store.commit('delCarList2',index)
    },
    buy(index){
      this.$store.commit('addBuyList',this.carList[index])
    },
    buy2(index){
      this.$store.commit('addBuyList2',this.carList2[index])
    },
  },
  components :{
    Nav,
    Footer
  },
  created(){
    this.buyList = this.$store.state.buyList
    this.carList = this.$store.state.carList
    this.buyList2 = this.$store.state.buyList2
    this.carList2 = this.$store.state.carList2
  }
}
</script>

<style src='./profilesrc/profile.css' scoped>

</style>