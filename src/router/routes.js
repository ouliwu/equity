import EqFooter from '@/compnonents/EqFooter'
const Home = () => import('@/views/Home')
const Info = () => import('@/views/Info')
const Qutation = () => import('@/views/Qutation')
const Mine = () => import('@/views/Mine')
const Login = () => import('@/views/Login')
export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isTabItem: false
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: EqFooter
    },
    meta: {
      isTabItem: true,
      title: '首页',
    }
  },
  {
    path: '/quotation',
    name: 'quotation',
    components: {
      default: Qutation,
      footer: EqFooter
    },
    meta: {
      isTabItem: true,
      title: '行情',
      icon: '&#xe603;'
    }
  },
  {
    path: '/info',
    name: 'info',
    components: {
      default: Info,
      footer: EqFooter
    },
    meta: {
      isTabItem: false,
      isShowHeaderBack: true,
      title: '资讯'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: EqFooter
    },
    meta: {
      isTabItem: true,
      title: '我的',
      isAuthRequired: true,
      icon: '&#xe606;'
    }
  }, {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    },
    meta: {
      isTabItem: false,
      title: '我的'
    }
  }
]
v