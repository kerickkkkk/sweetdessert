<template>
  <div>
    <CustomerNavbar></CustomerNavbar>
    <Alert></Alert>   
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


<script>
import CustomerNavbar from './CustomerNavbar'
import Alert from './AlertMessage'
import Footer from './Footer'

export default {  
  components: {
      CustomerNavbar,
      Alert,
      Footer
  }
}
</script>