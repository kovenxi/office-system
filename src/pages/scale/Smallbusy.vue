<template>
  <div>
    <div class="nav"><Nav/></div>
    <div class="main">
      <div class="banner" :style="`background: url(${require('@/pages/scale/scalesrc/img/banner3.jpg')}) rgba(0, 0, 0, .5) no-repeat center center; height: 500px;  background-blend-mode: multiply;background-size:cover;z-index=99;
    `">
        <h1> 传统办公室无法满足快速成长型企业的发展需求 </h1>
      </div>
      <div class="content1">
        <div class="row1">
          <h2> 传统办公室无法满足企业发展需要 </h2>
          <p class="main_block_sub_h"> 在传统型办公室易限制企业发展，阻碍企业发展壮大。 </p>
        </div>
        <div class="row2">
          <div class="col">
            <i class="fgb-sad-smile-ico" style="background-position: 0 0;"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">发展受限</h3>
            <p class="text_descr">影响企业发展的三大限制条件：固定租期、固定地点和固定空间</p>
          </div>
          <div class="col">
            <i class="fgb-sad2-smile-ico"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">员工效率低</h3>
            <p class="text_descr">员工将时间浪费在通勤上，在无法启发灵感、提升工作效率的环境中工作</p>
          </div>
          <div class="col">
            <i class="fgb-note-smile-ico" style="background-position: -119px -3px;"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">运营成本高</h3>
            <p class="text_descr">成本花销大，如高昂的租金、服务和设施费用</p>
          </div>
        </div>
        <div class="row3">
          <p class="phone-rebranded-text-headline">欢迎联系我们，物色理想的办公地点。</p>
          <span>联系电话： 040 0921 0399</span>
        </div>
      </div>
      <div class="banner2">
        <img src='@/pages/scale/scalesrc/img/banner4.webp' >
      </div>
      <div class="content2">
        <div class="intro">
          <h2>快速成长型企业该如何打破传统办公室的束缚</h2>
          <p class="main_block" style="margin-left: -20px; margin-right: -20px;"> 我们帮助众多个体营业者、企业家和小型企业，找到理想的办公空间。 </p>
          <p class="main_block_sub_h">  我们为您推荐以下适合成长型企业的办公空间。 </p>
        </div>
        <hr>
        <div class="items">
          <div class="package clearfix">

            <div class="title">
              <span>套餐一</span>
            </div>
            <div class="col1">
              <header>
                <h2>重庆中国人保寿险大厦-会议室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/cqmeeting1.webp">
                <div class="property-address">
                  18楼
                  <br> 
                  巴南区东三环中路5号
                  <br>
                  <br>
                  <span class="access-info">
                    重庆市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5773 0588
              </span>
            </div>
            <div class="col1">
              <header>
                <h2>重庆中国人保寿险大厦-独立办公室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/cqind1.webp">
                <div class="property-address">
                  19楼
                  <br> 
                  巴南区东三环中路5号
                  <br>
                  <br>
                  <span class="access-info">
                    重庆市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5773 0588
              </span>
            </div>
            <div class="pay">
              <div class="date1 date" tabindex="1" @click="day1()">日租</div>
              <div class="date2 date" tabindex="1" @click="month1()">月租</div>
              <div class="date3 date" tabindex="1" @click="year1()">年租</div>
              <div class="choice1">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥350</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                </div>
              </div>
              <div class="choice2">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥3600</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                </div>
              </div>
              <div class="choice3">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥39000</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入起始年份" value="2022">
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入结束年份"/>
                </div>
              </div>
              <button @click="det();buysure()">立即预定</button>
              <button @click="det();carsure()">加入购物车</button>
            </div>
          </div>
          
          <div class="package clearfix">

            <div class="title">
              <span>套餐二</span>
            </div>
            <div class="col1">
              <header>
                <h2>广州中华国际中心-会议室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/gzmeeting1.webp">
                <div class="property-address">
                  30楼
                  <br> 
                  越秀区中山三路33号
                  <br>
                  <br>
                  <span class="access-info">
                    广州市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0588
              </span>
            </div>

            <div class="col1">
              <header>
                <h2>广州中华国际中心-独立办公室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/gzind1.webp">
                <div class="property-address">
                  28楼
                  <br> 
                  越秀区中山三路33号
                  <br>
                  <br>
                  <span class="access-info">
                    广州市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0588
              </span>
            </div>
            <div class="pay">
              <div class="date1 date" tabindex="1" @click="day2()">日租</div>
              <div class="date2 date" tabindex="1" @click="month2()">月租</div>
              <div class="date3 date" tabindex="1" @click="year2()">年租</div>
              <div class="choice1">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥350</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                </div>
              </div>
              <div class="choice2">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥3600</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                </div>
              </div>
              <div class="choice3">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥39000</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入起始年份"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入结束年份"/>
                </div>
              </div>
              <button @click="det();buysure()">立即预定</button>
              <button @click="det();carsure()">加入购物车</button>
            </div>
            
          </div>
          
          <div class="package clearfix">

            <div class="title">
              <span>套餐三</span>
            </div>

            <div class="col1">
              <header>
                <h2>上海来福士广场-会议室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/shmeeting1.webp">
                <div class="property-address">
                  29楼
                  <br> 
                  上海市黄浦区西藏中路268号
                  <br>
                  <br>
                  <span class="access-info">
                    上海市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 3675 0588
              </span>
            </div>

            <div class="col1">
              <header>
                <h2>上海来福士广场-独立办公室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/shind1.webp">
                <div class="property-address">
                  27楼
                  <br> 
                  上海市黄浦区西藏中路268号
                  <br>
                  <br>
                  <span class="access-info">
                    上海市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 3675 0588
              </span>
            </div>
            <div class="pay">
              <div class="date1 date" tabindex="1" @click="day3()">日租</div>
              <div class="date2 date" tabindex="1" @click="month3()">月租</div>
              <div class="date3 date" tabindex="1" @click="year3()">年租</div>
             <div class="choice1">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥350</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                </div>
              </div>
              <div class="choice2">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥3600</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                </div>
              </div>
              <div class="choice3">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥39000</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入起始年份"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入结束年份"/>
                </div>
              </div>
              <button @click="det();buysure()">立即预定</button>
              <button @click="det();carsure()">加入购物车</button>
            </div> 
          </div>
          
          <div class="package clearfix">
            
            <div class="title">
              <span>套餐四</span>
            </div>

            <div class="col1">
              <header>
                <h2>深圳安联中心-会议室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/szmeeting1.webp">
                <div class="property-address">
                  25楼
                  <br> 
                  深圳市南山区科苑南路3331号
                  <br>
                  <br>
                  <span class="access-info">
                    深圳市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0788
              </span>
            </div>

            <div class="col1">
              <header>
                <h2>深圳安联中心-独立办公室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/szind1.webp">
                <div class="property-address">
                  18楼
                  <br> 
                  深圳市南山区科苑南路3331号
                  <br>
                  <br>
                  <span class="access-info">
                    深圳市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0788
              </span>
            </div>
            <div class="pay">
              <div class="date1 date" tabindex="1" @click="day4()">日租</div>
              <div class="date2 date" tabindex="1" @click="month4()">月租</div>
              <div class="date3 date" tabindex="1" @click="year4()">年租</div>
              <div class="choice1">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥350</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                </div>
              </div>
              <div class="choice2">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥3600</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                </div>
              </div>
              <div class="choice3">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥39000</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入起始年份"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入结束年份"/>
                </div>
              </div>
              <button @click="det();buysure()">立即预定</button>
              <button @click="det();carsure()">加入购物车</button>
            </div>
          </div>

          <div class="package clearfix">

            <div class="title">
              <span>套餐五</span>
            </div>
            
            <div class="col1">
              <header>
                <h2>北京新东安广场-会议室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/bjmeeting1.webp">
                <div class="property-address">
                  23楼
                  <br> 
                  朝阳区东三环中路5号
                  <br>
                  <br>
                  <span class="access-info">
                    北京市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0588
              </span>
            </div>

            <div class="col1">
              <header>
                <h2>北京新东安广场-独立办公室</h2>
              </header>
              <div class="addr">
                <img src="../location/locationsrc/img/bjind1.webp">
                <div class="property-address">
                  27楼
                  <br> 
                  朝阳区东三环中路5号
                  <br>
                  <br>
                  <span class="access-info">
                    北京市 100020
                  </span> <br>
                </div>
              </div>
              <div class="btn">
                立即预定
              </div>
              <span class="phone">
                <img src="../propack/propacksrc/img/phone-icon.webp">
                +023 10 5775 0588
              </span>
            </div>
            <div class="pay">
              <div class="date1 date" tabindex="1" @click="day5()">日租</div>
              <div class="date2 date" tabindex="1" @click="month5()">月租</div>
              <div class="date3 date" tabindex="1" @click="year5()">年租</div>
              <div class="choice1"> 
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥350</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="date"/>
                </div>
              </div>
              <div class="choice2">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥3600</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="month"/>
                </div>
              </div>
              <div class="choice3">
                <div class="price">
                  <span class="one">套餐价:</span>
                  <span class="two">¥39000</span> 
                </div>
                <div class="time">
                  <span>起始时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入起始年份"/>
                  <br>
                  <span>结束时间</span>&nbsp;&nbsp;
                  <input type="year" placeholder="请输入结束年份"/>
                </div>
              </div>
              <button @click="det();buysure()">立即预定</button>
              <button @click="det();carsure()">加入购物车</button>
            </div>
          </div>
        </div>
      </div>
      <div class="frame frame1">
        <div>您确定要预定该商品吗？</div>
        <div>预计付款：¥{{fprice}}</div>
        <button class="yes" @click="sure();cancle()"> 确定 </button>
        <button class="no" @click="cancle()"> 取消 </button>
      </div>
      <div class="frame frame2">
        <div>您确定要将该商品加入购物车吗？</div>
        <div>预计付款：¥{{fprice}}</div>
        <button class="yes1" @click="sure2();cancle2()"> 确定 </button>
        <button class="no1" @click="cancle2()"> 取消 </button>
      </div>
    </div>
    <!-- <div class="footer"><Footer/></div> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  data(){
    return{
      title : '',
      price : '',
      final : '',
      startTime : '',
      endTime : '',
      pic : '',
      index : 0,
      htype : '',
      priceType : '',
      fprice : '',

    }
  },
  components: {
    Nav,
    Footer
  },
  methods :{
    day1() {
      let cho1 = document.querySelectorAll('.choice1')
        cho1[0].style.display='block'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[0].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[0].style.display='none'
      this.index = 1 
    },
    month1(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[0].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[0].style.display='block'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[0].style.display='none'
      this.index = 2
    },
    year1(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[0].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[0].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[0].style.display='block'
      this.index = 3
    },
    day2() {
      let cho1 = document.querySelectorAll('.choice1')
        cho1[1].style.display='block'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[1].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[1].style.display='none'
      this.index = 4
    },
    month2(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[1].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[1].style.display='block'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[1].style.display='none'
      this.index = 5
    },
    year2(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[1].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[1].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[1].style.display='block'
      this.index = 6
    },
    day3() {
      let cho1 = document.querySelectorAll('.choice1')
        cho1[2].style.display='block'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[2].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[2].style.display='none'
      this.index = 7
    },
    month3(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[2].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[2].style.display='block'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[2].style.display='none'
      this.index = 8
    },
    year3(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[2].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[2].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[2].style.display='block'
      this.index = 9
    },
    day4() {
      let cho1 = document.querySelectorAll('.choice1')
        cho1[3].style.display='block'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[3].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[3].style.display='none'
    this.index = 10
    },
    month4(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[3].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[3].style.display='block'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[3].style.display='none'
      this.index = 11
    },
    year4(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[3].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[3].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[3].style.display='block'
      this.index = 12
    },
    day5() {
      let cho1 = document.querySelectorAll('.choice1')
        cho1[4].style.display='block'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[4].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[4].style.display='none'
      this.index = 13
    },
    month5(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[4].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[4].style.display='block'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[4].style.display='none'
      this.index = 14
    },
    year5(){
      let cho1 = document.querySelectorAll('.choice1')
        cho1[4].style.display='none'
      let cho2 = document.querySelectorAll('.choice2')
        cho2[4].style.display='none'
      let cho3 = document.querySelectorAll('.choice3')
        cho3[4].style.display='block'
      this.index = 15
    },
    det(){
      if(this.index==1)
      {
        let time = document.querySelectorAll('.choice1 input')
        this.startTime = time[0].value
        this.endTime = time[1].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCDay()-date1.getUTCDay()
        if((date2.getUTCMonth()-date1.getUTCMonth())>0)
          finalTime = finalTime +(date2.getUTCMonth()-date1.getUTCMonth())*30
        this.title = '小型企业租赁日租套餐一'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/cqmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每日'
        this.fprice = this.price*this.final
      }
      if(this.index==2)
      {
        let time = document.querySelectorAll('.choice2 input')
        this.startTime = time[0].value
        this.endTime = time[1].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCMonth()-date1.getUTCMonth()
        if((date2.getUTCFullYear()-date1.getUTCFullYear())>0)
          finalTime = finalTime +(date2.getUTCFullYear()-date1.getUTCFullYear())*12
        this.title = '小型企业租赁月租套餐一'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/cqmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每月'
        this.fprice = this.price*this.final
      }
      if(this.index==3)
      {
        let time = document.querySelectorAll('.choice3 input')
        this.startTime = time[0].value
        this.endTime = time[1].value
        let finalTime = this.endTime-this.startTime
        this.title = '小型企业租赁年租套餐一'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/cqmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每年'
        this.fprice = this.price*this.final
      }
      if(this.index==4)
      {
        let time = document.querySelectorAll('.choice1 input')
        this.startTime = time[2].value
        this.endTime = time[3].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCDay()-date1.getUTCDay()
        if((date2.getUTCMonth()-date1.getUTCMonth())>0)
          finalTime = finalTime +(date2.getUTCMonth()-date1.getUTCMonth())*30
        this.title = '小型企业租赁日租套餐二'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/gzmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每日'
        this.fprice = this.price*this.final
      }
      if(this.index==5)
      {
        let time = document.querySelectorAll('.choice2 input')
        this.startTime = time[2].value
        this.endTime = time[3].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCMonth()-date1.getUTCMonth()
        if((date2.getUTCFullYear()-date1.getUTCFullYear())>0)
          finalTime = finalTime +(date2.getUTCFullYear()-date1.getUTCFullYear())*12
        this.title = '小型企业租赁月租套餐二'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/gzmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每月'
        this.fprice = this.price*this.final
      }
      if(this.index==6)
      {
        let time = document.querySelectorAll('.choice3 input')
        this.startTime = time[2].value
        this.endTime = time[3].value
        let finalTime = this.endTime-this.startTime
        this.title = '小型企业租赁年租套餐二'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/gzmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每年'
        this.fprice = this.price*this.final
      }
      if(this.index==7)
      {
        let time = document.querySelectorAll('.choice1 input')
        this.startTime = time[4].value
        this.endTime = time[5].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCDay()-date1.getUTCDay()
        if((date2.getUTCMonth()-date1.getUTCMonth())>0)
          finalTime = finalTime +(date2.getUTCMonth()-date1.getUTCMonth())*30
        this.title = '小型企业租赁日租套餐三'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/shmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每日'
        this.fprice = this.price*this.final
      }
      if(this.index==8)
      {
        let time = document.querySelectorAll('.choice2 input')
        this.startTime = time[4].value
        this.endTime = time[5].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCMonth()-date1.getUTCMonth()
        if((date2.getUTCFullYear()-date1.getUTCFullYear())>0)
          finalTime = finalTime +(date2.getUTCFullYear()-date1.getUTCFullYear())*12
        this.title = '小型企业租赁月租套餐三'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/shmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每月'
        this.fprice = this.price*this.final
      }
      if(this.index==9)
      {
        let time = document.querySelectorAll('.choice3 input')
        this.startTime = time[4].value
        this.endTime = time[5].value
        let finalTime = this.endTime-this.startTime
        this.title = '小型企业租赁年租套餐三'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/shmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每年'
        this.fprice = this.price*this.final
      }
      if(this.index==10)
      {
        let time = document.querySelectorAll('.choice1 input')
        this.startTime = time[6].value
        this.endTime = time[7].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCDay()-date1.getUTCDay()
        if((date2.getUTCMonth()-date1.getUTCMonth())>0)
          finalTime = finalTime +(date2.getUTCMonth()-date1.getUTCMonth())*30
        this.title = '小型企业租赁日租套餐四'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/szmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每日'
        this.fprice = this.price*this.final
      }
      if(this.index==11)
      {
        let time = document.querySelectorAll('.choice2 input')
        this.startTime = time[6].value
        this.endTime = time[7].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCMonth()-date1.getUTCMonth()
        if((date2.getUTCFullYear()-date1.getUTCFullYear())>0)
          finalTime = finalTime +(date2.getUTCFullYear()-date1.getUTCFullYear())*12
        this.title = '小型企业租赁月租套餐四'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/szmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每月'
        this.fprice = this.price*this.final
      }
      if(this.index==12)
      {
        let time = document.querySelectorAll('.choice3 input')
        this.startTime = time[6].value
        this.endTime = time[7].value
        let finalTime = this.endTime-this.startTime
        this.title = '小型企业租赁年租套餐四'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/szmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每年'
        this.fprice = this.price*this.final
      }
      if(this.index==13)
      {
        let time = document.querySelectorAll('.choice1 input')
        this.startTime = time[8].value
        this.endTime = time[9].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCDay()-date1.getUTCDay()
        if((date2.getUTCMonth()-date1.getUTCMonth())>0)
          finalTime = finalTime +(date2.getUTCMonth()-date1.getUTCMonth())*30
        this.title = '小型企业租赁日租套餐五'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/bjmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每日'
        this.fprice = this.price*this.final
      }
      if(this.index==14)
      {
        let time = document.querySelectorAll('.choice2 input')
        this.startTime = time[8].value
        this.endTime = time[9].value
        let date1 = new Date(this.startTime)
        let date2 = new Date(this.endTime)
        let finalTime = date2.getUTCMonth()-date1.getUTCMonth()
        if((date2.getUTCFullYear()-date1.getUTCFullYear())>0)
          finalTime = finalTime +(date2.getUTCFullYear()-date1.getUTCFullYear())*12
        this.title = '小型企业租赁月租套餐二'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/bjmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每月'
        this.fprice = this.price*this.final
      }
      if(this.index==15)
      {
        let time = document.querySelectorAll('.choice3 input')
        this.startTime = time[0].value
        this.endTime = time[1].value
        let finalTime = this.endTime-this.startTime
        this.title = '小型企业租赁年租套餐五'
        this.price = 350
        this.final = finalTime
        this.pic = require('@/pages/location/locationsrc/img/bjmeeting1.webp')
        this.htype = '会议室+独立办公室'
        this.priceType = '每年'
        this.fprice = this.price*this.final
      }
    },
    buysure(){
      let fra = document.querySelector('.frame1')
        fra.style.display='block'
    },
    carsure(){
      let fra = document.querySelector('.frame2')
        fra.style.display='block'
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
      list.title = this.title
      list.stime = this.startTime
      list.etime = this.endTime
      list.pic = this.pic
      list.htype = this.htype
      list.final = this.final
      list.price = this.price
      list.priceType = this.priceType
      list.fprice = this.fprice
      this.$store.commit('addBuyList2',list)
    },
    sure2(){
      let list = {}
      list.title = this.title
      list.stime = this.startTime
      list.etime = this.endTime
      list.pic = this.pic
      list.htype = this.htype
      list.final = this.final
      list.price = this.price
      list.priceType = this.priceType
      list.fprice = this.fprice
      this.$store.commit('addCarList2',list)
    }
  }

}
</script>

<style src='./scalesrc/busy.css' scoped>

</style>