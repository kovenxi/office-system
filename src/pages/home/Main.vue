<template>
  <div class="home-main">
      <div class="color">
        <div id="main" class="clearfix">
          <h1 class="main-header "> 为何选择雷格斯办公空间？ </h1>
          <div class="item ">
            <h2 class="line-content-holder__header "> 满足您业务需求的办公空间 </h2>
            <p class="line-content-holder__line line-content-holder__line--white"> 雷格斯设有<strong>大型</strong>办公空间和共享办公空间网络。 </p>
            <p class="line-content-holder__line"> 我们拥有专业且激发灵感的办公环境，可满足<strong>多种规模与预算</strong>的业务需求。 </p>
            <p class="line-content-holder__line line-content-holder__line--white"> 办公空间遍布多个城市、机场、服务站、公共建筑和铁路干线 - <strong>办公网络不断扩大</strong>。 </p>
          </div>
          <div class="item ">
            <div class="item-image">
            <img class="lazy-image-js line-content-holder__img line-content-holder__img--tablet-view" alt="雷格斯前台" src="https://iwg-assets.regus.cn/image/upload/w_580,c_fill,f_auto,q_auto/Regus/Website/why-choose-im-d2.jpg" style="display: inline;">
            </div>
          </div>
          <div class="item ">
            <h2 class="line-content-holder__header line-content-holder__header--tablet-view text-center"> 一应俱全，即到即用 </h2>
            <p class="line-content-holder__line line-content-holder__line--white"> 无需办公室建设费用和资本投资，亦可免除持续不断的麻烦：我们为您<strong>消除负担</strong>，让您无需担心物业管理事宜。 </p>
            <p class="line-content-holder__line"> 您将只需签订<strong>一份合约，还可享用清晰明了的账务，</strong>更有专属的客户经理随时为您提供服务。 </p>
            <p class="line-content-holder__line line-content-holder__line--white"> 您可根据业务现状和企业发展需求，<strong>灵活</strong>延长或缩短租期。 </p>
          </div>
        </div>
      </div>
    <div class="main2">
      <div class="main2-container">
          <h1 class="main-header main-header--no-borders text-center"> 雷格斯办公空间解决方案 </h1>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos ">
                <h2 class="text-center"> 办公空间 </h2>
                <h3 class="text-center"> 愉快工作。 </h3>
                <p> 办公空间设备齐全,更配有高速IT设施,可随业务拓展随意调换办公空间的大小。不论是用于个人办公还是团队工作，总有适合的办公空间供您选择。 </p>
                <div class="col-button">
                  <a @click="$router.push('/suite')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic">
                <img alt="雷格斯办公室" src="./homesrc/img/main1.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos2 ">
                <h2 class="text-center"> 共享办公空间 </h2>
                <h3 class="text-center"> 在社交式环境中办公。 </h3>
                <p> 提供多种类型的共享办公位。 </p>
                <div class="col-button">
                  <a @click="$router.push('/shared')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic2">
                <img alt="雷格斯办公室" src="./homesrc/img/main2.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos col2-content">
                <h2 class="text-center"> 会议空间 </h2>
                <h3 class="text-center"> 有志之士齐聚专业环境。</h3>
                <ul class="product-list-ul"> 
                  <li class="product-list-ul__item product-list-ul__item--grey">适用于会议、宣讲或演讲</li>
                  <li class="product-list-ul__item">适用于培训、面试或活动</li>
                  <li class="product-list-ul__item product-list-ul__item--grey">使用时间灵活(1小时至全天,或更长时间）</li> 
                  <li class="product-list-ul__item product-list-ul__item">可定制的办公空间配置</li> 
                </ul>
                <div class="col-button">
                  <a @click="$router.push('/meeting')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic">
                <img alt="雷格斯办公室" src="./homesrc/img/main3.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos2 ">
                <h2 class="text-center"> 商务贵宾室 </h2>
                <h3 class="text-center"> 在旅途中工作。 </h3>
                <p> 设有非正式的即到即用会议空间，免费提供茶水和咖啡，以及安全稳定的WiFi以及打印、扫描和影印等服务。 </p>
                <div class="col-button">
                  <a @click="$router.push('/vip')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic2">
                <img alt="雷格斯办公室" src="./homesrc/img/main4.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos col2-content">
                <h2 class="text-center"> 会员 </h2>
                <h3 class="text-center"> 任意使用众多办公空间。</h3>
                <p>
                   我们的会员计划提供价值颇高的服务，您可使用我们中心的商务贵宾室、共享办公空间和私人办公室网络
                   <br>
                   <br>
                   我们提供一系列方案以满足不同的使用需求
                </p>
                <div class="col-button">
                  <a @click="$router.push('/vip')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic">
                <img alt="雷格斯办公室" src="./homesrc/img/main5.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
          <div class="item1 text-center">
            <div class="col1">
              <div class="col1-content col-content-pos2 col2-content">
                <h2 class="text-center"> 虚拟办公室 </h2>
                <h3 class="text-center"> 令人赞叹不已。 </h3>
                <ul class="product-list-ul"> 
                  <li class="product-list-ul__item product-list-ul__item--grey">理想地段的商务地址</li>
                  <li class="product-list-ul__item">来电应答服务</li>
                  <li class="product-list-ul__item product-list-ul__item--grey">企业邮件托管和转发服务</li> 
                  <li class="product-list-ul__item product-list-ul__item">可定制的方案</li> 
                </ul>
                <div class="col-button">
                  <a @click="$router.push('/ind')">了解详情</a>
                </div>
              </div>
              <div class="col1-pic2">
                <img alt="雷格斯办公室" src="./homesrc/img/main6.jpg" sizes="767vw" style="display: inline;">
              </div>
            </div>
          </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style src='./homesrc/main.css' scoped>

</style>