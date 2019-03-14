<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row p-5">
        <div class="col-md-6">
          <div class>
            <div
              class="bg-cover"
              style="height: 50vh; "
              :style="{backgroundImage: `url(${product.imageUrl})`}"
            ></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-around h-100 py-lg-2">
            <div>
              <h2 class>{{product.title}}</h2>
              <p>{{product.content}}</p>
            </div>
            <div>
              <div class="d-flex justify-content-between align-items-baseline">
                <div
                  class="h5 ml-auto"
                  v-if="product.origin_price == product.price"
                >原價{{product.origin_price|currency}}元</div>
                <del
                  class="h6"
                  v-if="product.origin_price != product.price"
                >原價{{product.origin_price|currency}}元</del>
                <div class="h5" v-if="product.origin_price != product.price">
                  現在只要
                  <span class="text-danger">{{product.price|currency}}</span> 元
                </div>
              </div>
              <select class="custom-select" v-model="product.num">
                <option v-for="num in 10" :key="num" :value="num">選購 {{num}} {{product.unit}}</option>
              </select>
              <div class="text-right m-2">
                <span>小計{{product.price*product.num|currency}}元</span>
              </div>
            </div>
            <div>
              <div class="text-right m-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addCart(product.id, product.num)"
                >加到購物車</button>
              </div>
            </div>
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
      orderId: "",
      product: {},
      isLoading: false
    };
  },
  methods: {
    getProdcut() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data.product);
        vm.isLoading = false;
        vm.product = response.data.product;
        vm.product.num = 1; //修正數字會亂跳
      });
    },
    addCart(id, qty = 1) {
      console.log("aa");
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      let vm = this;
      const cart = { product_id: id, qty: qty };
      // vm.status.addcartloadingItem = id;
      vm.isLoading = true;

      this.$http.post(api, { data: cart }).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        this.$bus.$emit("messsage:push", response.data.message, "success");
        // vm.cartnumcount();
        // vm.status.addcartloadingItem = "";
        vm.$router.push("/customer_order");
      });
    }
  },

  created() {
    this.orderId = this.$route.params.orderId;
    this.getProdcut();
    // console.log(this.orderId);
  }
};
</script>