<template>
  <div class="beijing">
    <div><Nav/></div>
    <div class="main">
      <div class="wrapper_w">
        <div class="text-center">
          <h1 class="main_block_h"> 上海市 <span>共享/联合办公</span> </h1>
          <p class="main_block_sub_h"> 灵活租期<br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用，具体视办公空间空余情况而定。</span>
          </p>
        </div>
        <div class="row clearfix">
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic5.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  来福士广场
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  西藏中路268号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 120.00 元 
                </span> 
              </div>
              <div @click="$router.push('/shanghai/shdetail')" class="detail">
                <a class="btn-link" >了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic6.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  上海都市总部中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  西藏中路168号
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
                <a class="btn-link" href="#chinaPageForm">了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/pic7.jpg">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  鸿祥大厦
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  黄河路21号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 80.00 元 
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
                <img src="../locationsrc/img/pic8.jpg">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  SPACES 无限极大厦中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  湖滨路168号
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