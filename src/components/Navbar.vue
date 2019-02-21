<template>
  <div>    
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        <i class="fas fa-user-tag"></i>
         甜吱吱甜點 後台管理
      </a>
      
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#"
            @click.prevent="logout"
          >Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {   
  methods: {
    logout(){
      const vm = this
      const api =`${process.env.APIPATH}/logout`
      // console.log(api)
      vm.isLoading= true
      vm.$http.post(api).then((response) => {
        // console.log(response)
        if(response.data.success){
          vm.isLoading = false
          vm.$router.push('/login')
        }
      })
    }
  },
}
</script>

