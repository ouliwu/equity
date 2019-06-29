<template>
  <mt-header title="资讯" v-show="isShowHeaderBack">
    <img class="headerBg" src="../assets/image/title_background@2x.png"/>
  <router-link to="/"  slot="left">
    <mt-button icon="back" @click="goBack"></mt-button>
  </router-link>
</mt-header>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'eq-header',
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .headerBg {
    width: 100%;
    height: 40px;
  }
</style>
