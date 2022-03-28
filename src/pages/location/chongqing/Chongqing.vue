<template>
  <div class="beijing">
    <div><Nav/></div>
    <div class="main">
      <div class="wrapper_w">
        <div class="text-center">
          <h1 class="main_block_h"> 重庆市 <span>共享/联合办公</span> </h1>
          <p class="main_block_sub_h"> 灵活租期<br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用，具体视办公空间空余情况而定。</span>
          </p>
        </div>
        <div class="row clearfix">
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/17.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  重庆中国人保寿险大厦
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  金融街3号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 80.00 元 
                </span> 
              </div>
              <div @click="$router.push('/chongqing/cqdetail')" class="detail">
                <a class="btn-link" >了解详情</a>
              </div>
            </div> 
          </div>
          <div class="row1">
            <div class="pic1">
              <a href="">
                <img src="../locationsrc/img/18.webp">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  重庆海航保利国际广场
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  民生路235号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 130.00 元 
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
                <img src="../locationsrc/img/19.jpg">
              </a>
            </div>
            <div class="content">
              <div class="city_opt_header headercorroptlytiles"> 
                <h2> 
                  <a class="centrs-url" href="">
                  重庆环球金融中心
                  </a>
                </h2> 
              </div>
              <div class="city_opt_descr text-center" > 
                <h3 class="hor-desk-formaddress">
                  民族路188号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 160.00 元 
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
                  王家坡208号
                </h3> 
              </div>
              <div class="city__fromto"> 
                共享办公空间 
                <br>
                <span class="pricingwithText">
                  起租价 300.00 元 
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