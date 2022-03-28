<template>
  <div class="content">
    <div class="banner">
      现代化办公空间与共享办公解决方案可助您保持高效率
    </div>
    <div v-if="page==1"    class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqs1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/chongqing/cqdetail/cqshared')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==1" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqind1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/chongqing/cqdetail/cqind')" >立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==1" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqsuite1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/chongqing/cqdetail/cqsuite')" >立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==1" class="items ">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqvip1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/chongqing/cqdetail/cqvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==1" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/cqmeeting1.webp" >
        </div>
        <div class="inform">
          <h1>重庆中国人寿保险大厦</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/chongqing/cqdetail/cqmeeting')" >立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjs1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/beijing/bjdetail/bjshared')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjind1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/beijing/bjdetail/bjind')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjmeeting1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/beijing/bjdetail/bjmeeting')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjsuite1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/beijing/bjdetail/bjsuite')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==2" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/bjvip1.webp" >
        </div>
        <div class="inform">
          <h1>北京新东安广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/beijing/bjdetail/bjvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szs1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shenzhen/szdetail/szshared')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szind1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shenzhen/szdetail/szind')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szmeeting1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shenzhen/szdetail/szmeeting')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szsuite1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shenzhen/szdetail/szsuite')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==3" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/szvip1.webp" >
        </div>
        <div class="inform">
          <h1>深圳安联中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shenzhen/szdetail/szvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shs1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shanghai/shdetail/shshared')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shind1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shanghai/shdetail/shind')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shsuite1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shanghai/shdetail/shsuite')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shmeeting1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shanghai/shdetail/shmeeting')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==4" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/shvip1.webp" >
        </div>
        <div class="inform">
          <h1>来福士广场</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/shanghai/shdetail/shvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzs1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/guangzhou/gzdetail/gzshared')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzind1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a  @click="$router.push('/guangzhou/gzdetail/gzind')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzmeeting1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/guangzhou/gzdetail/gzmeeting')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzsuite1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/guangzhou/gzdetail/gzsuite')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page==5" class="items">
      <div class="cq-shared">
        <div class="pic">
          <img src="@/pages/location/locationsrc/img/gzvip1.webp" >
        </div>
        <div class="inform">
          <h1>广州中华国际中心</h1>
          <div class="addr">
            <img src="./stationsrc/img/positionActive.png" height="14px" >&nbsp;渝北区-冉家坝&nbsp;轨道交通5号线、轨道交通6号线、轨道交通环线
          </div>
          <div class="appraise2">
            <div class="text">"立减2000起,看房免车费"</div>
          </div>
          <div class="surplus">
            房型:6-10人 &nbsp;&nbsp;&nbsp;剩余工位：
          </div>
        </div>
        <div class="inform2">
          <div class="price">
            <img src="./stationsrc/img/priceIcon.svg" >
            <span class="num">￥300</span>
            <span class="company">人/日</span>
          </div>
          <div class="finalprice">预计成交价:285</div>
          <div class="btn">
            <a @click="$router.push('/guangzhou/gzdetail/gzvip')">立即预定</a>
          </div>
        </div>
      </div>
    </div>
    <div class="pages">
      <ul @click="final">
        <li @click="pagedown">上一页</li>
        <li class="pagenum"  @click="page=1">1</li>
        <li class="pagenum"  @click="page=2">2</li>
        <li class="pagenum"  @click="page=3">3</li>
        <li class="pagenum"  @click="page=4">4</li>
        <li class="pagenum"  @click="page=5">5</li>
        <li @click="pageup">下一页</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      page: 1,
    }
  },
  methods :{
    pageup :function(){
      if(this.page<5)
        this.page++;
    },
    pagedown :function(){
      if(this.page>1)
        this.page--;
    },
    final :function()
    {
      let lis = document.querySelectorAll('.pages ul .pagenum');

      lis[this.page-1].style.backgroundColor="#747476";
        for( let j=0;j<5;j++)
          {
            if (j!=this.page-1)
              lis[j].style.backgroundColor="#fff"
          }
    }
  },
  mounted : function(){
    let lis = document.querySelectorAll('.pages ul .pagenum');
    lis[0].style.backgroundColor="#747476";
  }
}
</script>

<style src='./stationsrc/station.css' scoped>

</style>