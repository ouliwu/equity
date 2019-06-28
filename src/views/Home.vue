<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/image/lunbobanner#1 _home@2x.png" alt=""></div>
        <div class="swiper-slide"><img src="../assets/image/lunbobanner#2 _home@2x.png" alt=""></div>
        <div class="swiper-slide"><img src="../assets/image/lunbobanner#3 _home@2x.png" alt=""></div>
      </div>
    </div>
      <!-- 如果需要分页器
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
export default {
  
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
</style>
