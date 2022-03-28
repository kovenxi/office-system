<template>
<div id='home'>
  <div class="nav"> <Nav @user="openUser()" @vip="openVip()" @admin="openAdmin()" @epidemic="openEpidemic()"></Nav> </div>
  <div class="head"><Head/></div>
  <div class="main"><Main/></div>
  <div class="footer"><Footer/></div>
  <div class="userLogin sr"><UserLogin @close="clo" @register="clo();openReg()"></UserLogin></div>
  <div class="userRegister sr"><UserRegister @close="clo" ></UserRegister></div>
  <div class="vipLogin sr"><VipLogin @close="clo" @register="clo();openVreg()"></VipLogin></div>
  <div class="vipRegister sr"><VipRegister @close="clo" ></VipRegister></div>
  <div class="adminLogin sr"><AdminLogin @close="clo"></AdminLogin></div>
  <div class="emRegister sr"><EmRegist @close="clo"></EmRegist></div>
</div>
</template>

<script>
import UserLogin from '@/components/UserLogin'
import VipLogin from '@/components/VipLogin'
import AdminLogin from '@/components/AdminLogin'
import EmRegist from '@/components/EmRegist'
import Nav from '@/components/Nav'
import Head from './Head'
import Main from './Main.vue'
import Footer from '../../components/Footer.vue'
import UserRegister from '@/components/UserRegister'
import VipRegister from '@/components/VipRegister'
export default {
  components : {
    UserLogin,
    VipLogin,
    AdminLogin,
    EmRegist,
    Nav,
    Head,
    Main,
    Footer,
    Head,
    UserRegister,
    VipRegister
  },
  methods :{
    clo(){
      let clo = document.querySelector('.userLogin')
      let clo2 = document.querySelector('.userRegister')
      let clo3 = document.querySelector('.vipLogin')
      let clo4 = document.querySelector('.vipRegister')
      let clo5 = document.querySelector('.adminLogin')
      let clo6 = document.querySelector('.emRegister')
      clo.style.display='none'
      clo2.style.display='none'
      clo3.style.display='none'
      clo4.style.display='none'
      clo5.style.display='none'
      clo6.style.display='none'
    },
    openUser(){
      let op = document.querySelector('.userLogin')
        op.style.display='block'
    },
    openReg(){
      let op = document.querySelector('.userRegister')
        op.style.display='block'
    },
    openVip(){
      let op = document.querySelector('.vipLogin')
        op.style.display='block'
    },
    openVreg(){
      let op = document.querySelector('.vipRegister')
        op.style.display='block'
    },
    openAdmin(){
      let op = document.querySelector('.adminLogin')
        op.style.display='block'
    },
    openEpidemic(){
      let op = document.querySelector('.emRegister')
        op.style.display='block'
    }
  }
}
</script>

<style scoped>
.sr{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 99;
  display: none;
  opacity: 0.9
}
#home{
  position: relative;
}
</style>