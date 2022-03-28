<template>
  <div id="location">
    <div class="nav"> <Nav/> </div>
    <div class="main"> <LocShow/></div>
    <div class="footer"><Footer/></div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import LocShow from './LocShow'
import Footer from '../../components/Footer.vue'
export default {
  components : {
    Nav,
    LocShow,
    Footer
  }
}
</script>

<style>

</style>