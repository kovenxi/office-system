<template>
  <div id="nav" class="clearfix">
    <div class="container">
      <div class="nav-logo">
        <img src="@/assets/img/navlogo.png">
      </div>
      <div class="top-nav">
        <ul>
          <li class="top-items" @click="user"><div>用户登录</div></li>
          <li class="top-items" @click="vip"><div>会员登录</div></li>
          <li class="top-items" @click="admin"><div>管理员登录</div></li>
          <li class="top-items" @click="epidemic"><div>疫情登记</div></li>
          <li class="top-items" @click="pushProfile"><div>我的</div></li>
        </ul>
      </div>
      <div class="nav-main">
        <ul>
          <li class="nav-item" @click="$router.push('/home')"><div>首页</div></li>
          <li class="nav-item">
            <div>业务规模</div>
            <ol>
              <li @click="$router.push('/personal')">个人</li>
              <li @click="$router.push('/smallbusy')">小型公司</li>
              <li @click="$router.push('/largebusy')">大型公司</li>
            </ol>
          </li>
          <!-- <li class="nav-item">
            <div>时间套餐</div>
            <ol>
              <li>时租</li>
              <li>日租</li>
              <li>月租</li>
              <li>年租</li>
            </ol>
          </li> -->
          <li class="nav-item">
            <div>产品套餐</div>
            <ol>
              <li @click="$router.push('/shared')">共享工位</li>
              <li @click="$router.push('/ind')">独立办公室</li>
              <li @click="$router.push('/meeting')">会议室</li>
              <li @click="$router.push('/suite')">办公套间</li>
              <li @click="$router.push('/vip')">商务贵宾室</li>
            </ol> 
          </li>
          <li class="nav-item" @click="$router.push('/station')"><div>工位信息</div></li>
          <li class="nav-item" @click="$router.push('/location')"><div>地点查询</div></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods :{
    user(){
      this.$emit('user')
    },
    vip(){
      this.$emit('vip')
    },
    admin(){
      this.$emit('admin')
    },
    epidemic(){
      this.$emit('epidemic')
    },
    pushProfile(){
      this.$router.push('/profile')
    }
  }
}
</script>

<style src='@/assets/css/nav.css' scoped>

</style>