<template>
  <div>
    <div class="nav"><Nav/></div>
    <div class="main">
      <div class="banner">
        <h1> 在家办公并不一定是明智之举 </h1>
      </div>
      <div class="content1">
        <div class="row1">
          <h2> 在家办公并不一定是明智之举 </h2>
          <p class="main_block_sub_h"> 在家办公会限制业务机会，让人无法身心愉悦地工作 </p>
        </div>
        <div class="row2">
          <div class="col">
            <i class="fgb-sad-smile-ico"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">感到孤单</h3>
            <p class="text_descr">独自工作时，无法与他人交流互动，亦无法拓展业务，还会时常感到孤独。</p>
          </div>
          <div class="col">
            <i class="fgb-sad2-smile-ico"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">效率低下</h3>
            <p class="text_descr">没有专门的专业办公环境，无法集中精力，事倍功半。</p>
          </div>
          <div class="col">
            <i class="fgb-note-smile-ico"></i>
            <h3 class="sub_header" style="min-height: 0px; max-height: none; height: 30px;">专业性低</h3>
            <p class="text_descr">没有专业的商务地址、商务电话号码、业务专用会议室，客户可能会看轻您的公司。</p>
          </div>
        </div>
        <div class="row3">
          <p class="phone-rebranded-text-headline">欢迎联系我们，物色理想的办公地点。</p>
          <span>联系电话： 040 0921 0399</span>
        </div>
      </div>
      <div class="banner2">
        <img src='@/pages/scale/scalesrc/img/banner2.webp' >
      </div>
      <div class="content2">
        <div class="intro">
          <h2>如何助力个人企业发展</h2>
          <p class="main_block" style="margin-left: -20px; margin-right: -20px;"> 我们帮助众多个体营业者、企业家和小型企业，找到理想的办公空间。 </p>
          <p class="main_block_sub_h">  我们为您推荐以下适合个人的办公空间。 </p>
        </div>
        <hr>
        <div class="items">
          <div class="col1">
            <header>
              <h2>重庆中国人保寿险大厦-共享办公室</h2>
            </header>
            <div class="addr">
              <img src="../location/locationsrc/img/17.webp">
              <div class="property-address">
                23楼
                <br> 
                巴南区东三环中路5号
                <br>
                <br>
                <span class="access-info">
                  重庆市 100020
                </span> <br>
              </div>
            </div>
            <div @click="$router.push('/chongqing/cqdetail/cqshared')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5773 0588
            </span>
          </div>
          <div class="col1">
            <header>
              <h2>广州中华国际中心-共享办公室</h2>
            </header>
            <div class="addr">
              <img src="../location/locationsrc/img/13.webp">
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
            <div @click="$router.push('/guangzhou/gzdetail/gzshared')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5775 0588
            </span>
          </div>
          <div class="col1">
            <header>
              <h2>深圳安联中心-共享办公室</h2>
            </header>
            <div class="addr">
              <img src="../location/locationsrc/img/pic9.jpg">
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
            <div @click="$router.push('/shenzhen/szdetail/szshared')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5775 0788
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
            <div @click="$router.push('/beijing/bjdetail/bjind')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5775 0588
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
            <div @click="$router.push('/chongqing/cqdetail/cqind')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5773 0588
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
            <div @click="$router.push('/shenzhen/szdetail/szind')" class="btn">
              立即预定
            </div>
            <span class="phone">
              <img src="../propack/propacksrc/img/phone-icon.webp">
              +023 10 5775 0788
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer"><Footer/></div> -->
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

<style src='./scalesrc/personal.css' scoped>

</style>