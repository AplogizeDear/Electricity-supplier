<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import tabbar from '@/components/Tabbar.vue'
  export default {
    name: 'App',
    components:{
      tabbar
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>
