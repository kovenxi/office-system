<template>
  <div>
    <Bjdetail>
      <div class="banner" :style="`background: url(${require('@/pages/location/locationsrc/img/cqd3.webp')}) rgba(0, 0, 0, .5) no-repeat center center; background-size:cover; height: 900px;  background-blend-mode: multiply;
    `">
          <div class="text-center">
            <h1 class="main_block_h">  <span>鸿祥大厦</span> </h1>
            <p class="main_block_sub_h"><br> 
            <span class="sub-text-16">报价基于签订24个月协议时每人每天的费用,具体视办公空间空余情况而定。</span>
            </p>
          </div>
      </div>
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