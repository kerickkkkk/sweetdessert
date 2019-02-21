<template>
  <div>

  <div class="row justify-content-center">
    <div class="col-md-8">
      <table class="table mt-5 table-striped table-hover">
        <thead>
          <tr class="bg-primary text-white">
            <th width="120">購買時間</th>
            <th width="120">E-mail</th>
            <th>購買款項</th>
            <th width="100">應付金額</th>
            <th width="100">是否付款</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orderlist" :key="item.id" >
            <td>{{item.create_at |day}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul>
                <li v-for="product in item.products" :key="product.id">
                  {{product.product.title}} : {{product.qty}}  {{product.product.unit}} 
                </li>
              </ul>
            </td>
            <td class="text-right">
              {{item.total}}
            </td>
            <td>
              <span class="text-success" v-if="item.is_paid">已付款</span>
              <span class="text-danger " v-else>未付款</span>
            </td>          
          </tr>
        </tbody>
      </table>

      <Pagination :pages="pagination" @emitPages="getOrderlist" ></Pagination>
    </div>
  </div>



  </div>
</template>

<script>
import Pagination from '../Pagination'


export default {
  components: {
    Pagination
  },
  data () {
    return {
      orderlist:[],      
      pagination:{}
    }
  },
  methods: {
    getOrderlist(page=1){ 
      const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`
      const vm = this
      vm.isLoading= true
      this.$http.get(api).then((response) => {
        // console.log(response.data)
        
        vm.isLoading= false
        vm.orderlist = response.data.orders
        vm.pagination = response.data.pagination
      })
    },    
  },
  created() {
    this.getOrderlist()    
  },
}
</script>