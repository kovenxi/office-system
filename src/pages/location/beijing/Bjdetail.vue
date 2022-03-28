<template>
  <div>
    <div class="nav"><Nav/></div>
    <div class="main">
      <slot name="main">
        <div class="banner" :style="`background: url(${require('@/pages/location/locationsrc/img/bjd.webp')}) rgba(0, 0, 0, .5) no-repeat center center; height: 900px;  background-blend-mode: multiply;
    `">
          <div class="text-center">
            <h1 class="main_block_h">  <span>北京新东安广场</span> </h1>
            <p class="main_block_sub_h"><br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用,具体视办公空间空余情况而定。</span>
            </p>
          </div>
        </div>
      </slot>
      
      <div class="content">
        <div class="container">
          <!-- <h2>选择套餐</h2> -->
          <div class="part">
            <img src="../locationsrc/img/bjd1.webp" >
            <div class="pcontent">
              <h3>共享工位</h3>
              <p>方便实惠，尽在共享工位</p>
              <div  class="btn">
                <slot name="btn1">
                  <a @click="$router.push('/beijing/bjdetail/bjshared')">
                    立即预定
                  </a>
                </slot>
              </div>
            </div>
          </div>
          <div class="part">
            <img src="../locationsrc/img/bjd2.webp" >
            <div class="pcontent">
              <h3>独立办公室</h3>
              <p>独立空间，良好私密性,工作效率翻倍</p>
              <div class="btn">
                <slot name="btn2">
                  <a @click="$router.push('/beijing/bjdetail/bjind')">
                    立即预定
                  </a>
                </slot>
              </div>
            </div>
          </div>
          <div class="part">
            <img src="../locationsrc/img/bjd3.webp" >
            <div class="pcontent">
              <h3>会议室</h3>
              <p>适合举办会议的专业办公空间</p>
              <div  class="btn">
                <slot name="btn3">
                  <a @click="$router.push('/beijing/bjdetail/bjmeeting')">
                    立即预定
                  </a>
                </slot>
              </div>
            </div>
          </div>
          <div class="part">
            <img src="../locationsrc/img/bjd4.webp" >
            <div class="pcontent">
              <h3>办公套间</h3>
              <p>为大中小型企业量身定制办公室</p>
              <div  class="btn">
                <slot name="btn4">
                  <a @click="$router.push('/beijing/bjdetail/bjsuite')">
                    立即预定
                  </a>
                </slot>
              </div>
            </div>
          </div>
          <div class="part">
            <img src="../locationsrc/img/bjd5.webp" >
            <div class="pcontent">
              <h3>商务贵宾室</h3>
              <p>极致服务，重要商业区的繁华地段</p>
              <div  class="btn">
                <slot name="btn5">
                  <a @click="$router.push('/beijing/bjdetail/bjvip')">
                    立即预定
                  </a>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  }
}
</script>

<style src='../locationsrc/bjd.css' scoped>

</style>