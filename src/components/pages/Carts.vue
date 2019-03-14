<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="wrap vh-100 d-flex justify-content-center align-items-center">
      <div class="col-md-6">
        <h3 class="h2 text-center text-primary mb-3">
          <strong>購物車內容</strong>
        </h3>
        <table class="table table-striped table-hover">
          <thead>
            <tr class="bg-primary text-white">
              <th width="100"></th>
              <th>品名</th>
              <th width="100">數量</th>
              <th width="100">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="delCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ carts.total }}</td>
            </tr>
            <tr v-if="carts.total != carts.final_total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ carts.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼 (試試 QQ22, QQ50)"
            v-model="couponcode"
            @keyup.enter="addcoupon()"
          >
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click.prevent="addcoupon()"
            >套用優惠碼</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <router-link to="/customer_order" class="btn btn-outline-primary btn-block">繼續選購</router-link>
          </div>
          <div class="col-md-6">
            <router-link to="/checkout" class="btn btn-primary btn-block">結帳去</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      isLoading: false,
      pagination: {},
      couponcode: ""
    };
  },
  methods: {
    getcarts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this; //確保從外部取回資料可以順利存到內層
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.carts = response.data.data;
        // console.log(response)
      });
    },
    delCartItem(id) {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        console.log(response.data.message);
        vm.getcarts();
        vm.isLoading = false;
        this.$bus.$emit("messsage:push", response.data.message, "danger");
      });
    },
    addcoupon() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const vm = this;
      vm.isLoading = true;
      let coupon = { code: vm.couponcode };
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response.data.message);
        vm.getcarts();
        vm.isLoading = false;
        let busstyle = "success";
        if (!response.data.success) {
          busstyle = "danger";
        }
        vm.coupon = "";
        this.$bus.$emit("messsage:push", response.data.message, busstyle);
      });
    }
  },
  created() {
    this.getcarts();
    // this.$bus.$emit('messsage:push', '321', 'danger' )
  }
};
</script>



