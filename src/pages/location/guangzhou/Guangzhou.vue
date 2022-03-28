<template>
  <div class="beijing">
    <div><Nav/></div>
    <div class="main">
      <div class="wrapper_w">
        <div class="text-center">
          <h1 class="main_block_h"> 广州市 <span>共享/联合办公</span> </h1>
          <p class="main_block_sub_h"> 灵活租期<br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用，具体视办公空间空余情况而定。</span>
          </p>
        </div>
        <div class="row clearfix">
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/13.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  广州中华国际中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  中山三路33号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 80.00 元 
                </span> 
              </div>
              <div @click="$router.push('/guangzhou/gzdetail')" class="detail">
                <a class="btn-link" >了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/14.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  广州侨鑫国际中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  珠江新城金穗路62号
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
                <img src="../locationsrc/img/15.jpg">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  广州珠江城
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  珠江西路15号
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
                <img src="../locationsrc/img/16.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  粤海天河城大厦中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  天河路208号
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