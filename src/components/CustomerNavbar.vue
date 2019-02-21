<template>
  <div>
    <div class="pt64"></div>
    <nav class="navbar-mb navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

      <router-link  to="/" class="navbar-brand">
      <i class="fas fa-kiwi-bird"></i>
        甜吱吱甜點屋
      </router-link>      
    
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" @click.prevent="clicktype ='home'" :class="{active: clicktype==='home'}" >            
            <router-link  to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" @click.prevent="clicktype ='order'" :class="{active: clicktype==='order'}">
            <router-link  to="/customer_order" class="nav-link">選購商品</router-link>
          </li>
          <li class="nav-item" @click.prevent="clicktype ='carts'" :class="{active: clicktype==='carts'}">
            <router-link  to="/orderlist" class="nav-link">訂單列表</router-link>
          </li>            
        </ul>   
          
        <router-link class="btn btn-outline-primary"  to="/admin"> 
          <i class="fas fa-user-tie"></i> 後臺管理
        </router-link>


      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clicktype:'home'    
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.pt64{
  padding-top:64px;
}
  
</style>
