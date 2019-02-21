<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
//   created(){
//     const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
//     //'https://vue-course-api.hexschool.io/api/eric/products'
//     console.log(api)
//     this.$http.get(api).then((response) => {
//       console.log('appvue'+response.data)
//     })
//   }
}
</script>

<style lang="scss">
@import "./assets/all";

</style>
