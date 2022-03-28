<template>
  <div>
    <div class="nav"><Nav/></div>
    <div class="main">
      <h1>会议室</h1>
      <div class="content clearfix">
        <hr>
        <div class="col">
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
          <div @click="$router.push('/beijing/bjdetail/bjmeeting')" class="btn">
            立即预定
          </div>
          <span class="phone">
            <img src="./propacksrc/img/phone-icon.webp">
            +023 10 5775 0588
          </span>
        </div>
        <div class="col">
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
          <div @click="$router.push('/chongqing/cqdetail/cqmeeting')" class="btn">
            立即预定
          </div>
          <span class="phone">
            <img src="./propacksrc/img/phone-icon.webp">
            +023 10 5773 0588
          </span>
        </div>
        <div class="col">
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
          <div @click="$router.push('/shanghai/shdetail/shmeeting')" class="btn">
            立即预定
          </div>
          <span class="phone">
            <img src="./propacksrc/img/phone-icon.webp">
            +023 10 3675 0588
          </span>
        </div>
        <div class="col">
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
          <div @click="$router.push('/guangzhou/gzdetail/gzmeeting')" class="btn">
            立即预定
          </div>
          <span class="phone">
            <img src="./propacksrc/img/phone-icon.webp">
            +023 10 5775 0588
          </span>
        </div>
        <div class="col">
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
          <div @click="$router.push('/shenzhen/szdetail/szmeeting')" class="btn">
            立即预定
          </div>
          <span class="phone">
            <img src="./propacksrc/img/phone-icon.webp">
            +023 10 5775 0788
          </span>
        </div>

      </div>
    </div>
    <!-- <div class="footer"><Footer/></div> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '../../components/Footer.vue'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style src='./propacksrc/shared.css' scoped>

</style>