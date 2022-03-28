<template>
  <div class="beijing">
    <div><Nav/></div>
    <div class="main">
      <div class="wrapper_w">
        <div class="text-center">
          <h1 class="main_block_h"> 北京市 <span>共享/联合办公</span> </h1>
          <p class="main_block_sub_h"> 灵活租期<br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用，具体视办公空间空余情况而定。</span>
          </p>
        </div>
        <div class="row clearfix">
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic1.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  北京新东安广场
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  王府井大街138号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 80.00 元 
                </span> 
              </div>
              <div @click="$router.push('/beijing/bjdetail')"  class="detail">
                <a class="btn-link">了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic2.jpg">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  北京新华保险大厦中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  建国门外大街甲12号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 100.00 元 
                </span> 
              </div>
              <div class="detail">
                <a class="btn-link" href="">了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic3.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  中国人寿大厦西区的灵活办公室
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  朝外大街16号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 90.00 元 
                </span> 
              </div>
              <div class="detail">
                <a class="btn-link" href="">了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic4.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  国际财源中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  建国门外大街甲8号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 140.00 元 
                </span> 
              </div>
              <div class="detail">
                <a class="btn-link" href="">了解详情</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
    <div><Footer/></div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '../../../components/Footer.vue'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style src="../locationsrc/beijing.css" scoped>

</style>