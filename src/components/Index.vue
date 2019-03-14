<template>
  <div>
    <CustomerNavbar></CustomerNavbar>
    <CustomerCarousel></CustomerCarousel>
    <section class="bg-secondary bg-cover section_threeintroduct">
      <div class="container-fluid">
        <div class="row text-white text-center">
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_1 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="fas fa-birthday-cake"></i>
              </div>

              <h3>甜點</h3>
              <p>主打繽紛系列，從馬卡龍，蛋糕，還有主廚每月新出產品，讓您少女心噴發。</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_2 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="fas fa-coffee"></i>
              </div>
              <h3>飲品</h3>
              <p>從台灣產的到國外的茶飲，咖啡特調系列，或者是水果茶都有，讓您椰漿噴發。</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_3 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="fas fa-fill-drip"></i>
              </div>
              <h3>特調</h3>
              <p>身為科技人，還是秉持著實驗的精神，飛龍在天的產品，還是暗黑料理就由您來判定了。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-5 text-white bg-dark text-center bg-cover">
      <h3 class="mb-3">
        <i class="fas fa-fire"></i> 熱賣商品
        <i class="fas fa-fire"></i>
      </h3>
      <p class="h4">
        <i class="fas fa-fire"></i>
        <i class="fas fa-fire"></i>年度熱銷太陽系甜點，年後火熱開賣
        <i class="fas fa-fire"></i>
        <i class="fas fa-fire"></i>
      </p>
    </section>
    <div class="container-fluid">
      <section
        class="section_dessert section_dessert_maka p-5 bg-cover text-white row align-items-center"
      >
        <div class="col-lg-4 offset-lg-2">
          <h3 class="text-success h1">金星馬卡龍</h3>
          <p
            class="h4 lh"
          >較邊結來時別詩化我節有結：北都區然日人心：錯價以然才房黨二地目位道人；少笑北去少管存收然子半地意看，向方市做學化亞史為南西陸下……過計反力形。現教主放方義樣好初青，義神證的境臺操間事</p>
          <div class="text-right">
            <router-link to="/customer_order" class="btn btn-outline-light p-2 mt-3">
              <i class="fas fa-kiwi-bird"></i>...選購去
            </router-link>
          </div>
        </div>
      </section>
      <section
        class="section_dessert section_dessert_muffin p-5 bg-cover row text-white align-items-center"
      >
        <div class="col-lg-4 offset-lg-6">
          <h3 class="text-warning h1">太陽鬆餅</h3>
          <p
            class="h4 lh"
          >較邊結來時別詩化我節有結：北都區然日人心：錯價以然才房黨二地目位道人；少笑北去少管存收然子半地意看，向方市做學化亞史為南西陸下……過計反力形。現教主放方義樣好初青，義神證的境臺操間事</p>
          <div class="text-right">
            <router-link to="/customer_order" class="btn btn-outline-light p-2 mt-3">
              <i class="fas fa-kiwi-bird"></i>...選購去
            </router-link>
          </div>
        </div>
      </section>
      <section
        class="section_dessert section_dessert_donut p-5 bg-cover text-white row align-items-center"
      >
        <div class="col-lg-4 offset-lg-2">
          <h3 class="text-light h1">土星甜甜圈</h3>
          <p
            class="h4 lh"
          >較邊結來時別詩化我節有結：北都區然日人心：錯價以然才房黨二地目位道人；少笑北去少管存收然子半地意看，向方市做學化亞史為南西陸下……過計反力形。現教主放方義樣好初青，義神證的境臺操間事</p>
          <div class="text-right">
            <router-link to="/customer_order" class="btn btn-outline-light p-2 mt-3">
              <i class="fas fa-kiwi-bird"></i>...選購去
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <section class="p-5 text-white bg-dark text-center bg-cover">
      <h3 class="mb-3">
        <i class="fas fa-bell"></i> 暖冬專案 ! 手刀搶購 ! 錯過不在
        <i class="fas fa-bell"></i>
      </h3>
      <p class="h4">新品特調，彗星銀河飲品，請來小X家穿越時空來幫忙，還不快下好下滿。</p>
    </section>
    <section class="section_aboutus bg-cover p-5 text-white text-center">
      <h3 class="mb-0">聯絡我們</h3>
      <p class="display-3">0800-xxxxxx</p>
      <p class="h3">產品練習，練習合作</p>
    </section>
    <Footer></Footer>
  </div>
</template>


<script>
import CustomerNavbar from "./CustomerNavbar";
import CustomerCarousel from "./CustomerCarousel";
import Footer from "./Footer";

Footer;
export default {
  components: {
    CustomerNavbar,
    CustomerCarousel,
    Footer
  }
};
</script>

