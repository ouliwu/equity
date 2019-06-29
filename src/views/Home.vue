<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div 
          class="swiper-slide"
          v-for="banner in bannerSrc"
          :key="banner.id"
        >
          <img :src="banner.src" alt="">
        </div>
      </div>
    </div>
      <!-- 如果需要分页器
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div> -->
      <div class="eq-header-risk">
        <div>
          <span>做空</span>
          <span>风险提示</span>
        </div>
        <div class="eq-header-risk-sort">
          <div class="sort-item">
            <img class="itemImg" src="../assets/image/ic_gold coin mode_home@2x.png"/>
            <span>金币模式</span>
          </div>
          <div class="sort-item">
            <img class="itemImg" src="../assets/image/新手入门@2x.png">
            <span>投资课堂</span>
          </div>
          <div class="sort-item">
            <img class="itemImg" src="../assets/image/ic_promote making money_home@2x.png"/>
            <span>推广赚钱</span>
          </div>
          <div class="sort-item">
            <img class="itemImg" src="../assets/image/ic_online service_home@2x.png"/>
            <span>在线客服</span>
          </div>
        </div>
      </div>
      <div class="international">
        <span class="guoji">国际股票</span>
        <span class="more">更多>></span>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      bannerSrc: [
      {
        id: '0',
        src: '../assets/image/lunbobanner#1 _home@2x.png'
      },
      {
        id: '1',
        src: '../assets/image/lunbobanner#2 _home@2x.png'
      },
      {
        id: '2',
        src: '../assets/image/lunbobanner#3 _home@2x.png'
      },
    ]
    }
  },
  created() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })        
    }
  }
}
</script>

<style lang="scss" scoped>

.swiper-container {
  width: 100%;
  height: 0;
  padding-top: percentage( 480 / 1080 );

  .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    max-width: 100%;
  }
}
.eq-header-risk-sort {
  display: flex;
  justify-content: space-between;

  .sort-item {
    align-items: center;

    .itemImg {
      width: 74px;
      height: 97px;
    }
  }
}
.international {
  margin-top: 30px;

  .guoji {
    float: left;
    font-size: 17px;
    color: #666666
  }
  .more {
    font-size:13px;
    float: right;
    color: #666666
  }
}
</style>
