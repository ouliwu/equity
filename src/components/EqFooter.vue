<template>
  <mt-tabbar v-model="tabItemActive" fixed>
  <mt-tab-item id="home" @click.native="toggleTab('H')">
    <img slot="icon" src="../assets/image/ic_home@2x.png" v-show="s.isH">
    <img slot="icon-active" src="../assets/image/ic_home_xz@2x.png" v-show="!s.isH">
    首页
  </mt-tab-item>
  <mt-tab-item id="quotation"  @click.native="toggleTab('Q')">
    <img slot="icon" src="../assets/image/ic_hagnqing@2x.png" v-show="s.isQ">
    <img slot="icon-active" src="../assets/image/ic_hangqing_xz@2x.png" v-show="!s.isQ">
    行情
  </mt-tab-item>
  <mt-tab-item id="info"  @click.native="toggleTab('I')">
    <img slot="icon" src="../assets/image/ic_zixun@2x.png" v-show="s.isI">
    <img slot="icon-active" src="../assets/image/ic_zixun_xz@2x.png" v-show="!s.isI">
    资讯
  </mt-tab-item>
  <mt-tab-item id="mine"  @click.native="toggleTab('M')">
    <img slot="icon" src="../assets/image/ic_mine@2x.png"  v-show="s.isM">
    <img slot="icon-active" src="../assets/image/ic_mine_xz@2x.png" v-show="!s.isM">
    我的
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
  export default {
    name: 'eq-footer',
    data() {
      return {
       s: {
          isH: !1,
          isQ: !0,
          isI: !0,
          isM: !0
       },
        tabItemActive: 'home'
      }   
    },
    methods: {
    clear: function(state) { //清空状态
      for (var k in this.s) 
        this.$set(this.s, k, !0);
    },
    tabItemActive: function(state) {  //更换图标
      this.clear(state); // 选中前先重置其他tab
      if (this.s["is" + state]) //如果没有选中则取反显示
      	this.$set(this.s, ["is" + state], !1);
      }
    }
  }
</script>