<template>
  <div>
    <loading :active.sync="isLoading"></loading>  
    <div class="text-right mt-4">
      <button @click="couponModelopen(true)" class="btn btn-primary btn-sm">新增 coupon 眷</button>
    </div>
    <table class="table" >
    <thead>
      <tr>
          <th>coupon名稱</th>
          <th width="120">時間</th>
          <th width="120">折扣比</th>
          <th width="80">折扣碼</th>
          <th width="100">是否啟用</th>
          <th class="text-center" width="160">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in coupons.coupons" :key="item.id" >
        <td>{{item.title}}</td>
        <td>{{item.due_date}}</td>
        <td>{{item.percent}}</td>
        <td>{{item.code}}</td>
        <td>
          <span v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </td>        
        <td>
          <button 
            @click.prevent="couponModelopen(false,item)" 
            class="btn btn-outline-primary btn-sm">編輯
          </button>  
          <button 
            @click.prevent="couponDelModelopen(item)"
            class="btn btn-outline-primary btn-sm">刪除
          </button>  
        </td>

      </tr>
    </tbody>
    
    
    </table>
    
    





        <!--couponsmodel-->

<div class="modal fade" id="couponsmodel" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增coupon</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">          
          <div class="form-group">
            <label for="coupon_title">標題</label>
            <input type="text" class="form-control" id="coupon_title"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
              >
          </div>
          <div class="form-group">
            <label for="coupon_percent">折扣比 (%)</label>
            <input type="number" class="form-control" id="coupon_percent"
              placeholder="0" 
              v-model="tempCoupon.percent"
            >
          </div>
          <div class="form-group">
            <label for="coupon_code">折扣碼</label>
            <input type="text" class="form-control" id="coupon_code"
              placeholder="請輸入使用的折扣碼"
              v-model="tempCoupon.code"  
            >
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                id="is_enabled"
                v-model="tempCoupon.is_enabled" 
                :true-value="1"
                :false-value="0"  
              >
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary"
          @click.prevent="updataCoupon"
        >確認</button>
      </div>
    </div>
  </div>
</div>

   <!--delcouponsmodel-->
<div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> Coupon(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger"
          @click.prevent="delCoupon()"
          >確認刪除</button>
      </div>
    </div>
  </div>
</div>
    

    
    </div>
</template>

<script>

import $ from 'jquery'

export default {
  
  data () {
    return {
      coupons:{},
      tempCoupon:{},
      isLoading: false,
      isNew:false,
    }
  },
  methods: {
    getCoupon(){
      const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons`
      const vm = this 
      vm.isLoading= true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.isLoading= false
        vm.coupons = response.data
      })
    },    
    // addCoupon(){
    //   const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`
    //   const vm = this 
    //   let timestamp = Math.floor(Date.now())
    //   vm.tempCoupon.due_date = timestamp 
    //   vm.isLoading= true
    //   this.$http.post(api,{'data': vm.tempCoupon}).then((response) => {
    //     vm.isLoading= false
    //     this.getCoupon()
    //     $('#couponsmodel').modal('hide')
    //   })
    // },
    couponModelopen(isNew,item){
      if(isNew){
        this.tempCoupon ={}
        this.isNew=true

      }else{
        this.tempCoupon = Object.assign({},item)
        this.isNew=false
        
      }
      // console.log(this.isNew,item)
      $('#couponsmodel').modal('show')
    },
    updataCoupon(){
      const vm = this 
      let api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      let httpMehod='put'
      if(vm.isNew){
        api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`    
        httpMehod='post'
        let timestamp = Math.floor(Date.now())        
        vm.tempCoupon.due_date = timestamp 
      }     
      vm.isLoading= true
      this.$http[httpMehod](api,{'data': vm.tempCoupon}).then((response) => {
        vm.isLoading= false
        this.getCoupon()
        $('#couponsmodel').modal('hide')
      })
    },
    couponDelModelopen(item){
      this.tempCoupon = Object.assign({},item)
      $('#delCouponModal').modal('show')
    },
    delCoupon(){
      const vm = this 
      let api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`    
      
      vm.isLoading= true
      this.$http.delete(api).then((response) => {
        vm.isLoading= false
        this.getCoupon()
        vm.tempCoupon ={}
        $('#delCouponModal').modal('hide')
      })
    }

  },
  created() {
      this.getCoupon()
  },
}
</script>