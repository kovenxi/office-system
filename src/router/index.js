import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/pages/home/Home')
const Location = () => import('@/pages/location/Location')
const Beijing = () => import('@/pages/location/beijing/Beijing')
const Shanghai = () => import('@/pages/location/shanghai/Shanghai')
const Shenzhen = () => import('@/pages/location/shenzhen/Shenzhen')
const Guangzhou = () => import('@/pages/location/guangzhou/Guangzhou')
const Chongqing = () => import('@/pages/location/chongqing/Chongqing')
const Bjdetail = () => import('@/pages/location/beijing/Bjdetail')
const Bjdetail2 = () => import('@/pages/location/beijing/Bjdetail2')
const Bjdetail3 = () => import('@/pages/location/beijing/Bjdetail3')
const Bjdetail4 = () => import('@/pages/location/beijing/Bjdetail4')
const Bjshared = () => import('@/pages/location/beijing/Bjshared')
const Bjind = () => import('@/pages/location/beijing/Bjind')
const Bjmeeting = () => import('@/pages/location/beijing/Bjmeeting')
const Bjsuite = () => import('@/pages/location/beijing/Bjsuite')
const Bjvip = () => import('@/pages/location/beijing/Bjvip')
const Cqdetail = () => import('@/pages/location/chongqing/Cqdetail')
const Cqdetail2 = () => import('@/pages/location/chongqing/Cqdetail2')
const Cqdetail3 = () => import('@/pages/location/chongqing/Cqdetail3')
const Cqdetail4 = () => import('@/pages/location/chongqing/Cqdetail4')
const Cqshared = () => import('@/pages/location/chongqing/Cqshared')
const Cqind = () => import('@/pages/location/chongqing/Cqind')
const Cqmeeting = () => import('@/pages/location/chongqing/Cqmeeting')
const Cqsuite = () => import('@/pages/location/chongqing/Cqsuite')
const Cqvip = () => import('@/pages/location/chongqing/Cqvip')
const Shdetail = () => import('@/pages/location/shanghai/Shdetail')
const Shdetail2 = () => import('@/pages/location/shanghai/Shdetail2')
const Shdetail3 = () => import('@/pages/location/shanghai/Shdetail3')
const Shdetail4 = () => import('@/pages/location/shanghai/Shdetail4')
const Shshared = () => import('@/pages/location/shanghai/Shshared')
const Shind = () => import('@/pages/location/shanghai/Shind')
const Shmeeting = () => import('@/pages/location/shanghai/Shmeeting')
const Shsuite = () => import('@/pages/location/shanghai/Shsuite')
const Shvip = () => import('@/pages/location/shanghai/Shvip')
const Gzdetail = () => import('@/pages/location/guangzhou/Gzdetail')
const Gzdetail2 = () => import('@/pages/location/guangzhou/Gzdetail2')
const Gzdetail3 = () => import('@/pages/location/guangzhou/Gzdetail3')
const Gzdetail4 = () => import('@/pages/location/guangzhou/Gzdetail4')
const Gzshared = () => import('@/pages/location/guangzhou/Gzshared')
const Gzind = () => import('@/pages/location/guangzhou/Gzind')
const Gzmeeting = () => import('@/pages/location/guangzhou/Gzmeeting')
const Gzsuite = () => import('@/pages/location/guangzhou/Gzsuite')
const Gzvip = () => import('@/pages/location/guangzhou/Gzvip')
const Szdetail = () => import('@/pages/location/shenzhen/Szdetail')
const Szdetail2 = () => import('@/pages/location/shenzhen/Szdetail2')
const Szdetail3 = () => import('@/pages/location/shenzhen/Szdetail3')
const Szdetail4 = () => import('@/pages/location/shenzhen/Szdetail4')
const Szshared = () => import('@/pages/location/shenzhen/Szshared')
const Szind = () => import('@/pages/location/shenzhen/Szind')
const Szmeeting = () => import('@/pages/location/shenzhen/Szmeeting')
const Szsuite = () => import('@/pages/location/shenzhen/Szsuite')
const Szvip = () => import('@/pages/location/shenzhen/Szvip')
const Shared = () => import('@/pages/propack/Shared')
const Ind = () => import('@/pages/propack/Ind')
const Meeting = () => import('@/pages/propack/Meeting')
const Suite = () => import('@/pages/propack/Suite')
const Vip = () => import('@/pages/propack/Vip')
const Personal = () => import('@/pages/scale/Personal')
const Smallbusy = () => import('@/pages/scale/Smallbusy')
const Largebusy = () => import('@/pages/scale/Largebusy')
const Station = () => import('@/pages/station/Station')
const All = () => import('@/pages/station/All')
const Nothree = () => import('@/pages/station/Nothree')
const Typesd = () => import('@/pages/station/Typesd')
const Typeshared = () => import('@/pages/station/Typeshared')
const Typeind = () => import('@/pages/station/Typeind2')
const Typemeeting = () => import('@/pages/station/Typemeeting')
const Typesuite = () => import('@/pages/station/Typesuite')
const Typevip = () => import('@/pages/station/Typevip')
const Lbeijing = () => import('@/pages/station/Lbeijing')
const Lchongqing = () => import('@/pages/station/Lchongqing')
const Lguangzhou = () => import('@/pages/station/Lguangzhou')
const Lshenzhen = () => import('@/pages/station/Lshenzhen')
const Lshanghai = () => import('@/pages/station/Lshanghai')
const Pritwo = () => import('@/pages/station/Pritwo')
const Profile = () => import('@/pages/profile/Profile')
// import Home from '@/pages/home/Home'
// import Location from '@/pages/location/Location'
// import Beijing from '@/pages/location/beijing/Beijing'
// import Shanghai from '@/pages/location/shanghai/Shanghai'
// import Shenzhen from '@/pages/location/shenzhen/Shenzhen'
// import Guangzhou from '@/pages/location/guangzhou/Guangzhou'
// import Chongqing from '@/pages/location/chongqing/Chongqing'
// import Bjdetail from '@/pages/location/beijing/Bjdetail'
// import Bjdetail2 from '@/pages/location/beijing/Bjdetail2'
// import Bjdetail3 from '@/pages/location/beijing/Bjdetail3'
// import Bjdetail4 from '@/pages/location/beijing/Bjdetail4'
// import Bjshared from '@/pages/location/beijing/Bjshared'
// import Cqdetail from '@/pages/location/chongqing/Cqdetail'
// import Cqdetail2 from '@/pages/location/chongqing/Cqdetail2'
// import Cqdetail3 from '@/pages/location/chongqing/Cqdetail3'
// import Cqdetail4 from '@/pages/location/chongqing/Cqdetail4'
// import Cqshared from '@/pages/location/chongqing/Cqshared'
// import Shdetail from '@/pages/location/shanghai/Shdetail'
// import Shdetail2 from '@/pages/location/shanghai/Shdetail2'
// import Shdetail3 from '@/pages/location/shanghai/Shdetail3'
// import Shdetail4 from '@/pages/location/shanghai/Shdetail4'
// import Shshared from '@/pages/location/shanghai/Shshared'
// import Gzdetail from '@/pages/location/guangzhou/Gzdetail'
// import Gzdetail2 from '@/pages/location/guangzhou/Gzdetail2'
// import Gzdetail3 from '@/pages/location/guangzhou/Gzdetail3'
// import Gzdetail4 from '@/pages/location/guangzhou/Gzdetail4'
// import Gzshared from '@/pages/location/guangzhou/Gzshared'
// import Szdetail from '@/pages/location/shenzhen/Szdetail'
// import Szdetail2 from '@/pages/location/shenzhen/Szdetail2'
// import Szdetail3 from '@/pages/location/shenzhen/Szdetail3'
// import Szdetail4 from '@/pages/location/shenzhen/Szdetail4'
// import Szshared from '@/pages/location/shenzhen/Szshared'
// import Shared from '@/pages/propack/Shared'
// import Ind from '@/pages/propack/Ind'
// import Meeting from '@/pages/propack/Meeting'
// import Suite from '@/pages/propack/Suite'
// import Vip from '@/pages/propack/Vip'
// import Personal from '@/pages/scale/Personal'
// import Smallbusy from '@/pages/scale/Smallbusy'
// import Largebusy from '@/pages/scale/Largebusy'
// import Station from '@/pages/station/Station'
export default new VueRouter({
  routes:
  [
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: "/home",
      component: Home
    },
    {
      path: "/location",
      component: Location
    },
    {
      path: "/beijing",
      component: Beijing,
    },
    {
      path: "/beijing/bjdetail",
      component: Bjdetail
    },
    {
      path: "/beijing/bjdetail/bjshared",
      component: Bjshared
    },
    {
      path: "/beijing/bjdetail/bjind",
      component: Bjind
    },
    {
      path: "/beijing/bjdetail/bjmeeting",
      component: Bjmeeting
    },
    {
      path: "/beijing/bjdetail/bjsuite",
      component: Bjsuite
    },
    {
      path: "/beijing/bjdetail/bjvip",
      component: Bjvip
    },
    {
      path: "/beijing/bjdetail2",
      component: Bjdetail2
    },
    {
      path: "/beijing/bjdetail3",
      component: Bjdetail3
    },
    {
      path: "/beijing/bjdetail4",
      component: Bjdetail4
    },
    {
      path: "/chongqing/cqdetail",
      component: Cqdetail
    },
    {
      path: "/chongqing/cqdetail/cqshared",
      component: Cqshared
    },
    {
      path: "/chongqing/cqdetail/cqind",
      component: Cqind
    },
    {
      path: "/chongqing/cqdetail/cqmeeting",
      component: Cqmeeting
    },
    {
      path: "/chongqing/cqdetail/cqsuite",
      component: Cqsuite
    },
    {
      path: "/chongqing/cqdetail/cqvip",
      component: Cqvip
    },
    {
      path: "/chongqing/cqdetail2",
      component: Cqdetail2
    },
    {
      path: "/chongqing/cqdetail3",
      component: Cqdetail3
    },
    {
      path: "/chongqing/cqdetail4",
      component: Cqdetail4
    },
    {
      path: "/shanghai",
      component: Shanghai
    },
    {
      path: "/shanghai/shdetail",
      component: Shdetail
    },
    {
      path: "/shanghai/shdetail/shshared",
      component: Shshared
    },
    {
      path: "/shanghai/shdetail/shind",
      component: Shind
    },
    {
      path: "/shanghai/shdetail/shmeeting",
      component: Shmeeting
    },
    {
      path: "/shanghai/shdetail/shsuite",
      component: Shsuite
    },
    {
      path: "/shanghai/shdetail/shvip",
      component: Shvip
    },
    {
      path: "/shanghai/shdetail2",
      component: Shdetail2
    },
    {
      path: "/shanghai/shdetail3",
      component: Shdetail3
    },
    {
      path: "/shanghai/shdetail4",
      component: Shdetail4
    },
    {
      path: "/shenzhen",
      component: Shenzhen
    },
    {
      path: "/shenzhen/szdetail",
      component: Szdetail
    },
    {
      path: "/shenzhen/szdetail/szshared",
      component: Szshared
    },
    {
      path: "/shenzhen/szdetail/szind",
      component: Szind
    },
    {
      path: "/shenzhen/szdetail/szmeeting",
      component: Szmeeting
    },
    {
      path: "/shenzhen/szdetail/szsuite",
      component: Szsuite
    },
    {
      path: "/shenzhen/szdetail/szvip",
      component: Szvip
    },
    {
      path: "/shenzhen/szdetail2",
      component: Szdetail2
    },
    {
      path: "/shenzhen/szdetail3",
      component: Szdetail3
    },
    {
      path: "/shenzhen/szdetail4",
      component: Szdetail4
    },
    {
      path: "/guangzhou",
      component: Guangzhou
    },
    {
      path: "/guangzhou/gzdetail",
      component: Gzdetail
    },
    {
      path: "/guangzhou/gzdetail/gzshared",
      component: Gzshared
    },
    {
      path: "/guangzhou/gzdetail/gzshared",
      component: Gzshared
    },
    {
      path: "/guangzhou/gzdetail/gzind",
      component: Gzind
    },
    {
      path: "/guangzhou/gzdetail/gzmeeting",
      component: Gzmeeting
    },
    {
      path: "/guangzhou/gzdetail/gzsuite",
      component: Gzsuite
    },
    {
      path: "/guangzhou/gzdetail/gzvip",
      component: Gzvip
    },
    {
      path: "/guangzhou/gzdetail2",
      component: Gzdetail2
    },
    {
      path: "/guangzhou/gzdetail3",
      component: Gzdetail3
    },
    {
      path: "/guangzhou/gzdetail4",
      component: Gzdetail4
    },
    {
      path: "/chongqing",
      component: Chongqing
    },
    {
      path: "/shared",
      component: Shared
    },
    {
      path: "/ind",
      component: Ind
    },
    {
      path: "/meeting",
      component: Meeting
    },
    {
      path: "/suite",
      component: Suite
    },
    {
      path: "/vip",
      component: Vip
    },
    {
      path: "/personal",
      component: Personal
    },
    {
      path: "/smallbusy",
      component: Smallbusy
    },
    {
      path: "/largebusy",
      component: Largebusy
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/station',
      component: Station,
      children: [
        // {
        //   path: '/',
        //   redirect: 'all'
        // },
        { 
          name: 'all',
          path: 'all/:random',
          component: All
        },
        {
          name: 'num3',
          path: 'num3',
          component: Nothree
        },
        {
          name: 'pri2',
          path: 'pri2',
          component: Pritwo
        },
        {
          name: 'lbeijing',
          path: 'lbeijing',
          component: Lbeijing
        },
        {
          name: 'lshanghai',
          path: 'lshanghai',
          component: Lshanghai
        },
        {
          name: 'lguangzhou',
          path: 'lguangzhou',
          component: Lguangzhou
        },
        {
          name: 'lshenzhen',
          path: 'lshenzhen',
          component: Lshenzhen
        },
        {
          name: 'lchongqing',
          path: 'lchongqing',
          component: Lchongqing
        },
        {
          name: 'typeshared',
          path: 'typeshared/:random',
          component: Typeshared
        },
        {
          name: 'typeind',
          path: 'typeind/:random',
          component: Typeind
        },
        {
          name: 'typemeeting',
          path: 'typemeeting',
          component: Typemeeting
        },
        {
          name: 'typesuite',
          path: 'typesuite/:random',
          component: Typesuite
        },
        { 
          name: 'typevip',
          path: 'typevip/:random',
          component: Typevip
        },

      ]
    },
  




  ]
})
