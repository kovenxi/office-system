<template>
  <div>
    <Bjdetail>
      <div slot="main" class="banner" :style="`background: url(${require('@/pages/location/locationsrc/img/gzd1.webp')}) rgba(0, 0, 0, .5) no-repeat center center; background-size:cover; height: 900px;  background-blend-mode: multiply;
    `">
          <div class="text-center">
            <h1 class="main_block_h">  <span>广州中华国际中心</span> </h1>
            <p class="main_block_sub_h"><br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用,具体视办公空间空余情况而定。</span>
            </p>
          </div>
      </div>
      <a slot="btn1" @click="$router.push('/guangzhou/gzdetail/gzshared')">
        立即预定
      </a>
      <a slot="btn2" @click="$router.push('/guangzhou/gzdetail/gzind')">
        立即预定
      </a>
      <a slot="btn3" @click="$router.push('/guangzhou/gzdetail/gzmeeting')">
        立即预定
      </a>
      <a slot="btn4" @click="$router.push('/guangzhou/gzdetail/gzsuite')">
        立即预定
      </a>
      <a slot="btn5" @click="$router.push('/guangzhou/gzdetail/gzvip')">
        立即预定
      </a>
    </Bjdetail>
  </div>
</template>

<script>
import Bjdetail from '../beijing/Bjdetail.vue'
export default {
  components: {
    Bjdetail
  }
}
</script>

<style>

</style>