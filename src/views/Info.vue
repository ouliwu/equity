<template>
  <div>
    <mt-navbar>
    <mt-tab-item id="1">资讯直播</mt-tab-item>
    <mt-tab-item id="2">行情分析</mt-tab-item>
    <mt-tab-item id="3">行情资讯</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected" v-for="n in title" :key="n.id">
  <mt-tab-container-item>{{n.title}}
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
  data() {
    return {
      title: [{
        id: 1,
        title: '资讯直播'
      },{
        id: 2,
        title: '行情分析'
      },{
        id: 3,
        title: '行情资讯'
      }]
    }
  }
}
</script>

<style>

</style>
