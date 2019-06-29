import EqFooter from '@/components/EqFooter'
const Home = () => import('@/views/Home')
const Info = () => import('@/views/Info')
const Quotation = () => import('@/views/Quotation')
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
      'eq-footer': EqFooter
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
      default: Quotation,
      'eq-footer': EqFooter
    },
    meta: {
      isTabItem: true,
      title: '行情'
    }
  },
  {
    path: '/info',
    name: 'info',
    components: {
      default: Info,
      'eq-footer': EqFooter
    },
    meta: {
      isTabItem: true,
      isShowHeaderBack: true,
      title: '资讯'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      'eq-footer': EqFooter
    },
    meta: {
      isTabItem: true,
      title: '我的',
      isAuthRequired: true,
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
