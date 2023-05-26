<script>
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'
import {store} from './components/data/store'
export default{
  components : {
    AppHeader
  },
  data(){
    return{
      store
    }
  }, 
  methods: {
    search(){
      const movieReaserch = `${this.store.searchMoviesAPI}+${this.searchText}`
      axios.get( movieReaserch ).then(r =>{
        const response = r.data;
        const movies = response.results;
        this.store.movies = movies;
      })
    }
  },
  created () {
    console.log(this.store)
  }
}
</script>

<template>
  <section>
    <AppHeader/>
  </section>
 
</template>

<style scoped>

</style>
