<template>
  <div>
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="  carousel-item bg-cover active" 
            style="background-image: url('https://images.unsplash.com/photo-1533864584121-714289e0e746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); height:50vh;"
            >            
            <!-- <img src="https://images.unsplash.com/photo-1533864584121-714289e0e746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="d-block w-100" alt="..."> -->
            <div class="bg-lighter carousel-caption d-none d-md-block">
              <h4>生日好禮</h4>
              <p>凡是當日壽星，可以免費吃到當月特別設計的蛋糕，以及專屬的好禮</p>
            </div>
          </div>
          <div class=" carousel-item bg-cover"
            style="background-image: url('https://images.unsplash.com/photo-1490324028530-3df5a9af0637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); height:50vh;"
            >
            <div class="bg-lighter carousel-caption d-none d-md-block">
              <h4>特調系列</h4>
              <p>每月都會有新系列產品，不停的創新產品，讓每個人都可以吃到別地方吃不到的</p>
            </div>
          </div>
          <div class=" carousel-item bg-cover"
            style="background-image: url('https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); height:50vh;"
          
            >
            <div class="bg-lighter carousel-caption d-none d-md-block">
              <h4>水果系列</h4>
              <p>特選與在地小農合作，所推出的特色甜點，更符合國家安全標準，要您吃得安心。</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

