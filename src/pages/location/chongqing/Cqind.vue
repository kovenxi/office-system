<template>
  <div>
    <div class="nav"><Nav/></div>
    <div class="main">
      <div class="container">
        <div class="banner">
          <img src="../locationsrc/img/banner.png" alt="">
          <div class="title">重庆中国人保寿险大厦</div>
          <div class="title2">独立办公室</div>
        </div>
        <div class="content clearfix">
          <div class="rotation">
            <ul class="slides">
              <input type="radio" id='control1' name='control' :checked='true' >
              <input type="radio" id='control2' name='control' :checked="false">
              <input type="radio" id='control3' name='control' :checked="false">
              <input type="radio" id='control4' name='control' :checked="false">
              <li class="slide"><img src="../locationsrc/img/cqind1.webp"></li>
              <li class="slide"><img src="../locationsrc/img/cqind2.webp"></li>
              <li class="slide"><img src="../locationsrc/img/cqs3.webp"></li>
              <li class="slide"><img src="../locationsrc/img/cqs4.webp"></li>
              <div class="controls">
                <label for="control1"></label>  
                <label for="control2"></label>
                <label for="control3"></label>
                <label for="control4"></label>
              </div>
              <div class="button">
                <div class="button-left"> &lt; </div>
                <div class="button-right"> &gt; </div>
              </div>
            </ul>
          </div>  
          <div class="inform">  
            <div class="info-title">
              <h2>重庆中国人保寿险大厦独立办公室</h2>
            </div>
            <div class="price">
              <dl class="price-1">
                <dt>价格</dt>
                <dd>
                  <em class="tm-yen">¥</em>
                  <span>230</span>
                </dd>
              </dl>
              <dl class="price-2">
                <dt>促销价</dt>
                <dd>
                  <em class="tm-yen">¥</em>
                  <span class="tm-price">200</span>
                </dd>
              </dl>
              <dl class="price-3">
                <dt class="tb-metatit">本店活动</dt>
                <dd >满200元减20元</dd>
              </dl>
            </div>
            <div class="num">
              <span>数量</span> &nbsp;&nbsp;
              <input type="text"  v-model="num" maxlength="8">
              <span class="ctr">
                <span class="mui-amount-increase" @click="increase">⬆</span>
                <span class="mui-amount-increase" @click="decrease">⬇</span>
              </span>
              
            </div>
            <div class="date">
              <span>租用起始时间</span>&nbsp;&nbsp;
              <input type='datetime-local' v-model="startTime">
              <br>
              <span>租用结束时间</span>&nbsp;&nbsp;
              <input type='datetime-local' v-model="endTime">
            </div>
            <div class="btn">
              <button class="buy" @click="buy()">确认购买</button>
              <button class="car" @click="buy2()">加入购物车</button>
            </div>
          </div>  
        </div>
      </div>
    </div>
    <div class="frame frame1">
      <div>您确定要预定重庆中国人保寿险大厦共享办公室吗？</div>
      <div>预计付款：¥{{final}}</div>
      <button class="yes" @click="sure();cancle()"> 确定 </button>
      <button class="no" @click="cancle()"> 取消 </button>
    </div>
    <div class="frame frame2">
      <div>您确定要将该商品加入购物车吗？</div>
      <div>预计付款：¥{{final}}</div>
      <button class="yes1" @click="sure2();cancle2()"> 确定 </button>
      <button class="no1" @click="cancle2()"> 取消 </button>
    </div>
    <div class="footer"><Footer/></div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components: {
    Nav,
    Footer
  },
  data() {
     return{
       num: 1,
       final: '',
       startTime:'',
       endTime: ''
     } 
  },
  methods :{
    motation :function(){
      let left = document.querySelector('.button-left');
      let right = document.querySelector('.button-right');
      let slides = document.querySelectorAll('.slide');
      let inputs = document.querySelectorAll('.slides input')
      let labels = document.querySelectorAll('.controls label')
      let index = 0;
      let time;
      function position() {
        for(let i = 0;i < slides.length;i++)
          slides[i].style.transform ='translateX'+'('+(index*-100)+'%'+')';
      }
      function add(){
        if (index >= slides.length-1){
          index = 0;
        }else{
          index++;
        }
      }
      function desc(){
        if (index < 1 ){
          index = slides.length-1;
        }else{
          index--;
        }
      }
      function timer(){
        time = setInterval(() => {   
          index++;
          desc();
          add();
          inputs[index].checked=true;
          position()
        },3000)
      }
      for(let i = 0;i < slides.length;i++)
      {
        labels[i].addEventListener('click',() => {
          for(let j = 0;j < slides.length;j++)
            {
              slides[j].style.transform ='translateX'+'('+(i*-100)+'%'+')';
              index = i;
            }
          desc();
          add();
          clearInterval(time);
          timer();
        })
      }
      left.addEventListener('click',() => {
        desc();
        inputs[index].checked=true;
        position();
        clearInterval(time);
        timer();
      })
      right.addEventListener('click',() => {
        add();
        inputs[index].checked=true;
        position();
        clearInterval(time);
        timer();
      })
      timer();
    
    },
    increase :function(){
      if (this.num>=8)
        this.num=8
      else this.num++
    },
    decrease :function(){
      if (this.num<=1)
        this.num=1
      else this.num--
    },
    buy(){
      let fra = document.querySelector('.frame1')
        fra.style.display='block'
      let date1 = new Date(this.startTime)
      let date2 = new Date(this.endTime)
      let finalTime = date2.getUTCHours()-date1.getUTCHours()
        if((date2.getUTCMinutes()-date1.getUTCMinutes())>40)
          finalTime++
        if((date2.getUTCDay()-date1.getUTCDay())>0)
          finalTime = finalTime +(date2.getUTCDay()-date1.getUTCDay())*24
      this.final = finalTime*this.num*20
    },
    buy2(){
      let fra = document.querySelector('.frame2')
        fra.style.display='block'
      let date1 = new Date(this.startTime)
      let date2 = new Date(this.endTime)
      let finalTime = date2.getUTCHours()-date1.getUTCHours()
        if((date2.getUTCMinutes()-date1.getUTCMinutes())>40)
          finalTime++
        if((date2.getUTCDay()-date1.getUTCDay())>0)
          finalTime = finalTime +(date2.getUTCDay()-date1.getUTCDay())*24
      this.final = finalTime*this.num*20
    },
    cancle(){
      let fra = document.querySelector('.frame1')
        fra.style.display='none'
    },
    cancle2(){
      let fra = document.querySelector('.frame2')
        fra.style.display='none'
    },
    sure(){
      let list = {}
      list.title = '重庆中国人保寿险大厦-独立办公室'
      list.stime = this.startTime
      list.etime = this.endTime
      list.pic = require('@/pages/location/locationsrc/img/cqind1.webp')
      list.htype = '>=20'
      list.num = this.num
      list.price = 20
      list.priceType = '人/时'
      list.fprice = this.final
      list.path = '/chongqing/cqdetail/cqind'
      this.$store.commit('addBuyList',list)
    },
    sure2(){
      let list = {}
      list.title = '重庆中国人保寿险大厦-独立办公室'
      list.stime = this.startTime
      list.etime = this.endTime
      list.pic = require('@/pages/location/locationsrc/img/cqind1.webp')
      list.htype = '>=20'
      list.num = this.num
      list.price = 20
      list.priceType = '人/时'
      list.fprice = this.final
      this.$store.commit('addCarList',list)
    }

  },
  mounted: function(){
    this.motation()

  }

}
</script>

<style src='../locationsrc/bjs.css' scoped>

</style>