<template>
<div>
  <div class="nav"><Nav/></div>
  <div class="banner">
    <img src="./stationsrc/img/1.webp" alt="">
  </div>
  <div class="main">
    <div class="titile">
      <h2>共享办公 工位信息查询</h2>
    </div>
    <div class="options">
      <div class="type ops1">
        <span>类型</span>
        <ul @click="choose();final()">
          <li @click="type='不限';index=0">不限</li>
          <li @click="type='share';index=1">共享工位</li>
          <li @click="type='ind';index=2">独立办公室</li>
          <li @click="type='meeting';index=3">会议室</li>
          <li @click="type='suite';index=4">办公套间</li>
          <li @click="type='vip';index=5">商务贵宾室</li>
        </ul>
      </div>
      <div class="type ops2">
        <span>位置</span>
        <ul @click="choose();final()">
          <li @click="location='不限';index2=0">不限</li>
          <li @click="location='chongqing';index2=1">重庆</li>
          <li @click="location='beijing';index2=2">北京</li>
          <li @click="location='guangzhou';index2=3">广州</li>
          <li @click="location='shenzhen';index2=4">深圳</li>
          <li @click="location='shanghai';index2=5">上海</li>
        </ul>
      </div>
      <div class="type ops3">
        <span>价格</span>
        <ul @click="choose();final()">
          <li @click="price='不限';index3=0">不限</li>
          <li @click="price='pri1';index3=1">¥ 0-100人/日</li>
          <li @click="price='pri2';index3=2">¥ 100-200人/日</li>
          <li @click="price='pri3';index3=3">¥ 200-300人/日</li>
          <li @click="price='pri4';index3=4">¥ 300-400人/日</li>
        </ul>
      </div>
      <div class="type ops4">
        <span>人数</span>
        <ul @click="choose();final()">
          <li @click="num='不限';index4=0">不限</li>
          <li @click="num='num1';index4=1">1-5人</li>
          <li @click="num='num2';index4=2">6-10人</li>
          <li @click="num='num3';index4=3">11-20人</li>
          <li @click="num='num4';index4=4">>=20人</li>
        </ul>
      </div>
    </div>
    <router-view></router-view> 
  </div>
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
      type: '不限',
      location: '不限',
      price: '不限',
      num: '不限',
      index: 0,
      index2: 0,
      index3: 0,
      index4: 0
    }
  },

  methods :{
    getrandom :function(){
      var d = new Date()
      return d.getTime()
    },
    choose : function(){
      // console.log(this.type)
      // console.log(this.location)
      // console.log(this.price)
      // console.log(this.num)
      if(this.type=='不限'&&this.location=='不限'&&this.price=='不限'&&this.num=='不限')
        this.$router.push({
          name: 'all',
          params: {
            random: this.getrandom()
          }
        })
      else if((this.price=='pri1'||this.type=='share'||this.num=='num4'))
          {
          this.$router.push({
            name: 'typeshared',
            params: {
              type: this.type,
              location: this.location,
              price: this.price,
              num: this.num,
              random: this.getrandom()
            }
          })}
      else if((this.type=='ind' || this.num=='num1'))
        this.$router.push({
          name: 'typeind',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num,
            random: this.getrandom()
          }
        })
      else if((this.$route.path!='/station/typemeeting')&&this.type=='meeting')
        this.$router.push({
          name: 'typemeeting',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.type=='suite' || this.price=='pri3'))
        this.$router.push({
          name: 'typesuite',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num,
            random: this.getrandom()
          }
        })
      else if((this.$route.path!='/station/typevip')&&(this.type=='vip' || this.price=='pri4' || this.num=='num2'))
        this.$router.push({
          name: 'typevip',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num,
            random: this.getrandom()
          }
        })
      else if((this.$route.path!='/station/lchongqing')&&this.location=='chongqing')
        this.$router.push({
          name: 'lchongqing',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/lbeijing')&&this.location=='beijing')
        this.$router.push({
          name: 'lbeijing',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/lguangzhou')&&this.location=='guangzhou')
        this.$router.push({
          name: 'lguangzhou',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/lshenzhen')&&this.location=='shenzhen')
        this.$router.push({
          name: 'lshenzhen',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/lshanghai')&&this.location=='shanghai')
        this.$router.push({
          name: 'lshanghai',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/num3')&&this.num=='num3')
        this.$router.push({
          name: 'num3',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
      else if((this.$route.path!='/station/pri2')&&this.price=='pri2')
        this.$router.push({
          name: 'pri2',
          params: {
            type: this.type,
            location: this.location,
            price: this.price,
            num: this.num
          }
        })
    },
    final :function()
    {
      let lis = document.querySelectorAll('.options .ops1 ul li');
      let lis2 = document.querySelectorAll('.options .ops2 ul li');
      let lis3 = document.querySelectorAll('.options .ops3 ul li');
      let lis4 = document.querySelectorAll('.options .ops4 ul li');
      lis[this.index].style.color="#ffdb00";
      lis2[this.index2].style.color="#ffdb00";
      lis3[this.index3].style.color="#ffdb00";
      lis4[this.index4].style.color="#ffdb00";

        for( let j=0;j<6;j++)
          {
            if (j!=this.index)
              lis[j].style.color="#000"
          }
        for( let j=0;j<6;j++)
          {
            if (j!=this.index2)
              lis2[j].style.color="#000"
          }
        for( let j=0;j<5;j++)
          {
            if (j!=this.index3)
              lis3[j].style.color="#000"
          }
        for( let j=0;j<5;j++)
          {
            if (j!=this.index4)
              lis4[j].style.color="#000"
          }
    },

  },
  // updated(){
  //   this.$router.push('all')
  // },
  mounted: function(){
    let lis = document.querySelectorAll('.options .ops1 ul li');
    lis[0].style.color="#ffdb00";
    let lis2 = document.querySelectorAll('.options .ops2 ul li');
    lis2[0].style.color="#ffdb00";
    let lis3 = document.querySelectorAll('.options .ops3 ul li');
    lis3[0].style.color="#ffdb00";
    let lis4 = document.querySelectorAll('.options .ops4 ul li');
    lis4[0].style.color="#ffdb00";
    this.$router.push({
      name: 'all',
      params: {
        random: this.getrandom()
      }
    })
  } 

}
</script>

<style src='./stationsrc/station.css' scoped>

</style>