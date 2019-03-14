<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="cart">
      <a @click="iscartempaty" class="text-white">
        <i class="fas fa-shopping-cart"></i>
        <span>{{cartnum}}</span>
      </a>
    </div>
    <CustomerCarousel></CustomerCarousel>

    <div
      class="conatainer p-5 bg-cover"
      style=" background-image: linear-gradient(to right bottom,rgba(0,0,0, 0.8),rgba(255,255,255, 0.8)),url('https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80');"
    >
      <div class="row">
        <div class="col-md-2">
          <div class="pt-64 sticky-top">
            <button
              type="button"
              class="btn btn-block"
              @click.prevent="sortStatus ='all'"
              :class="{'btn-primary' : sortStatus==='all', 'btn-outline-primary' : sortStatus !='all'}"
            >
              <strong>全部產品</strong>
            </button>
            <button
              type="button"
              class="btn btn-block"
              @click.prevent="sortStatus ='甜點'"
              :class="{'btn-primary' : sortStatus==='甜點', 'btn-outline-primary' : sortStatus !='甜點'}"
            >甜點</button>
            <button
              type="button"
              class="btn btn-block"
              @click.prevent="sortStatus ='飲品'"
              :class="{'btn-primary' : sortStatus==='飲品', 'btn-outline-primary' : sortStatus !='飲品'}"
            >飲品</button>
            <button
              type="button"
              class="btn btn-block"
              @click.prevent="sortStatus ='特調'"
              :class="{'btn-primary' : sortStatus==='特調', 'btn-outline-primary' : sortStatus !='特調'}"
            >特調</button>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row mt-4">
            <div class="col-lg-4 col-md-6 mb-4" v-for="item in filterproduct" :key="item.id">
              <div class="card border-0 shadow-sm">
                <div
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                >
                  <!--:style="{backgroundImage: `url(${item.imageUrl})`}"好了再加上去-->
                </div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                  <h5 class="card-title">
                    <a
                      href="#"
                      class="text-dark"
                      @click.prevent="getproduct(item.id)"
                    >{{item.title}}</a>
                  </h5>
                  <p class="card-text">{{item.content}}</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div
                      class="h5 ml-auto"
                      v-if="item.origin_price == item.price"
                    >原價{{item.origin_price|currency}}元</div>

                    <del
                      class="h6"
                      v-if="item.origin_price != item.price"
                    >原價{{item.origin_price|currency}}元</del>
                    <div class="h5" v-if="item.origin_price != item.price">
                      現在只要
                      <span class="text-danger">{{item.price|currency}}</span> 元
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click.prevent="getproduct(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="item.id === status.readmoreloadingItem"></i>
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                    @click.prevent="addCart(item.id, qty=1)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="item.id === status.addcartloadingItem"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- <Pagination></Pagination> -->
          </div>
        </div>
      </div>
      <nav
        aria-label="Page navigation example"
        class="d-flex justify-content-center"
        v-if="sortStatus==='all'"
      >
        <ul class="pagination">
          <li
            class="page-item"
            v-if="pagination.has_pre"
            @click.prevent="getproducts(pagination.current_page-1)"
          >
            <!--:class="{'disabled':!pagination.has_pre}" pointer-events: none -->
            <a class="page-link" href="#">Previous</a>
          </li>
          <li
            class="page-item"
            v-for="page in pagination.total_pages"
            :key="page"
            :class="{'active':pagination.current_page === page}"
            @click.prevent="getproducts(page)"
          >
            <a class="page-link" href="#">{{page}}</a>
          </li>

          <li
            class="page-item"
            v-if="pagination.has_next"
            @click.prevent="getproducts(pagination.current_page+1)"
          >
            <!--:class="{'disabled':!pagination.has_next}"-->
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>

    <!--productModal-->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-light">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{product.title}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="bg-cover"
              style="height: 50vh; "
              :style="{backgroundImage: `url(${product.imageUrl})`}"
            >
              <!--:style="{backgroundImage: `url(${product.imageUrl})`}"好了再加上去-->
            </div>
            <p>{{product.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div
                class="h5"
                v-if="product.origin_price == product.price"
              >原價{{product.origin_price|currency}}元</div>
              <del
                class="h6"
                v-if="product.origin_price != product.price"
              >原價{{product.origin_price|currency}}元</del>
              <div
                class="h5"
                v-if="product.origin_price != product.price"
              >現在只要{{product.price|currency}} 元</div>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="product.num">
              <option v-for="num in 10" :key="num" :value="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <span>小計{{product.price*product.num|currency}}元</span>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="addCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.addcartloadingItem"></i>加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerCarousel from "../CustomerCarousel";
import $ from "jquery";

export default {
  components: {
    CustomerCarousel
  },
  data() {
    return {
      // allproducts:[],
      products: [],
      product: {},
      pagination: {},
      sortStatus: "all",
      isLoading: false,

      status: {
        readmoreloadingItem: "",
        addcartloadingItem: ""
      },
      cartnum: "0"
    };
  },
  methods: {
    // getallproducts() {
    //   const api = `${process.env.APIPATH}/api/${
    //     process.env.CUSTOMPATH
    //   }/products`;
    //   const vm = this;
    //   vm.isLoading = true;
    //   this.$http.get(api).then(response => {
    //     vm.products = response.data.allproducts;
    //     vm.isLoading = false;
    //   });
    // },
    getproducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    getproduct(id) {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${id}`;
      const vm = this;

      vm.status.readmoreloadingItem = id;
      this.$http.get(api).then(response => {
        if (response.data.success) {
          // console.log(response.data)
          vm.product = response.data.product;
          $("#productModal").modal("show");
          vm.status.readmoreloadingItem = "";
        }
      });
    },
    addCart(id, qty = 1) {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      let vm = this;
      const cart = { product_id: id, qty: qty };
      vm.status.addcartloadingItem = id;

      this.$http.post(api, { data: cart }).then(response => {
        console.log(response.data);

        $("#productModal").modal("hide");
        this.$bus.$emit("messsage:push", response.data.message, "success");
        vm.cartnumcount();
        vm.status.addcartloadingItem = "";
      });
    },
    iscartempaty() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.carts = response.data.data;
        console.log(response);
        if (response.data.data.carts.length == 0) {
          console.log("length=0");
          this.$bus.$emit("messsage:push", "購物車是空的請選購產品", "danger");
        } else {
          this.$router.push("/carts");
        }
      });
    },
    cartnumcount() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      // vm.isLoading= true
      this.$http.get(api).then(response => {
        let num = response.data.data.carts.length;
        vm.cartnum = num;
        // vm.isLoading= false
      });
    }
  },
  computed: {
    filterproduct() {
      const vm = this;
      // if (!vm.products.is_enabled) {
      //   return;
      // }
      switch (vm.sortStatus) {
        case "all":
          return vm.products;
        case "甜點":
          return vm.products.filter(item => item.category === "甜點");
        case "飲品":
          return vm.products.filter(item => item.category === "飲品");
        case "特調":
          return vm.products.filter(item => item.category === "特調");
        default:
          break;
      }
    }
  },
  created() {
    this.getproducts();
    this.cartnumcount();
  }
};
</script>

