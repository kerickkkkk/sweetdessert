<template>
  <div> 
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"> 
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>管理員</span>
            <a class="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">    

                <router-link  to="/admin/products" class="nav-link">產品列表</router-link>

            </li>
            <li class="nav-item">

              <router-link  to="/admin/orderlist" class="nav-link">訂單列表</router-link>

            </li>
            <li class="nav-item">
              <router-link  to="/admin/coupons" class="nav-link">優惠眷</router-link>
           
            </li>        
          </ul>
          <hr>
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>goto前台</span>
            <a class="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <router-link  to="/customer_order" class="nav-link">
                <i class="fas fa-shopping-cart"></i>
                <span data-feather="file-text"></span>
                顧客購買頁
              </router-link>
            </li>     
          </ul>
        </div>
      </nav>
    </main>
  </div>
</template>

