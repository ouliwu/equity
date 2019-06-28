<template>
  <mt-header title="资讯">
  <router-link to="/" slot="left">
    <mt-button icon="back" @click="goBack"></mt-button>
  </router-link>
</mt-header>
</template>

<script>
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

</style>
