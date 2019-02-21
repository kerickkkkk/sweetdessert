<template>
  <div>      
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" v-if="pages.has_pre"  
          @click.prevent="updatePage(pages.current_page-1)"
        >
        <!--:class="{'disabled':!pagination.has_pre}" pointer-events: none -->
        <a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
          :class="{'active':pages.current_page === page}"
          @click.prevent="updatePage(page)"
        ><a class="page-link" href="#">{{page}}</a></li>

        <li class="page-item" v-if="pages.has_next" 
          @click.prevent="updatePage(pages.current_page+1)"
        >
        <!--:class="{'disabled':!pagination.has_next}"-->
        <a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name:'Layout',
  props:['pages'],
  data()  {
    return{
  
    }
  }, 
  methods: {
    updatePage(page){
      this.$emit('emitPages',page)
    }
  
  },

}
</script>
