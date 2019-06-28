<template>
  <mt-tabbar>
  <mt-tab-item id="首页" link="/home">
    <img slot="icon" src="../assets/image/ic_home@2x.png">
    <img slot="icon-active" src="../assets/image/ic_home_xz@2x.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="行情" link="/quotation">
    <img slot="icon" src="../assets/image/ic_hagnqing@2x.png">
    <img slot="icon-active" src="../assets/image/ic_hangqing_xz@2x.png">
    行情
  </mt-tab-item>
  <mt-tab-item id="资讯" link="/info">
    <img slot="icon" src="../assets/image/ic_zixun@2x.png">
    <img slot="icon-active" src="../assets/image/ic_zixun_xz@2x.png">
    资讯
  </mt-tab-item>
  <mt-tab-item id="我的" link="/mine">
    <img slot="icon" src="../assets/image/ic_mine@2x.png">
    <img slot="icon-active" src="../assets/image/ic_mine_xz@2x.png">
    我的
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
  export default {
    name: 'eq-footer'
  }
</script>