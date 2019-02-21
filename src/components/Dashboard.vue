<template>
  <div>
  
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">       

        <Siderbar></Siderbar>   
        
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

          <router-view></router-view>

        </main>
      </div>
    </div>

  
  </div>
</template>

<script>
import Navbar from './Navbar'
import Siderbar from './Siderbar'
import Alert from './AlertMessage'

export default {  
  components: {
      Navbar,
      Siderbar,
      Alert,
  }
}
</script>