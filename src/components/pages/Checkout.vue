<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="container my-5">
      <div class="row mb-5">
        <div class="col-md-4">
          <h2 class="text-center p-2 bg-primary text-white">1. 訂單填寫</h2>
        </div>
        <div class="col-md-4">
          <h2 class="text-center p-2 text-dark">2. 訂單結帳</h2>
        </div>
        <div class="col-md-4">
          <h2 class="text-center p-2 text-dark">3. 付款完成</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3 class="h2 text-center text-secondary mb-3">
            <strong>購物車內容</strong>
          </h3>
          <table class="table table-striped table-hover">
            <thead>
              <tr class="bg-secondary text-white">
                <th>品名</th>
                <th width="100">數量</th>
                <th width="100">單價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
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
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
              </tr>
              <tr v-if="cart.total != cart.final_total">
                <td colspan="2" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <form class="col-md-6 bg-dark py-3 text-white" @submit.prevent="createOrder">
          <h3 class="h2 text-center mb-3">
            <strong>請填請訂單資料</strong>
          </h3>
          <div class="form-group">
            <label for="useremail">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-validate="'required|email'"
              :class="{'is-invalid':errors.has('email')}"
              v-model="form.user.email"
              placeholder="請輸入 Email"
            >
            <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>

          <div class="form-group">
            <label for="username">收件人姓名</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              :class="{'is-invalid':errors.has('name')}"
              v-model="form.user.name"
              v-validate="'required'"
              placeholder="輸入姓名"
            >
            <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
          </div>

          <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input
              type="tel"
              class="form-control"
              id="usertel"
              v-model="form.user.tel"
              placeholder="請輸入電話"
            >
          </div>

          <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input
              type="address"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="form.user.address"
              v-validate="'required'"
              :class="{'is-invalid':errors.has('address')}"
              placeholder="請輸入地址"
            >
            <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
          </div>

          <div class="form-group">
            <label for="useraddress">留言</label>
            <textarea name id class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger">送出訂單</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: "",
      cart: [],
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getcarts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        // console.log(response.data)
        vm.cart = response.data.data;
        // console.log(vm.cart)
      });
    },
    createOrder() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;

      this.$validator.validate().then(result => {
        if (result) {
          vm.isLoading = true;
          this.$http.post(api, { data: order }).then(response => {
            vm.isLoading = false;
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/payconfirm/${response.data.orderId}`);
            }
          });
        } else {
          this.$bus.$emit("messsage:push", "欄位不完全", "danger");
        }
      });
    }
  },
  created() {
    this.getcarts();
  }
};
</script>