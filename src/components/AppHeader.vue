<script>
import {store} from './data/store'
import axios from 'axios'
console.log(store)
export default{
    components: {
        name: "AppHeader",
    },
    data(){
        return {
        store
    }
    },
    methods :{
        search(){
      const movieReaserch = `${this.store.searchMoviesAPI}+${this.store.searchText}`
      axios.get( movieReaserch ).then(r =>{
        const response = r.data;
        const movies = response.results;
        this.store.movies = movies;
        console.log(movieReaserch, r)
      })
    }
}
}
</script>

<template>
    <nav>
        <div>
            <div>
                <input v-model="store.searchText" type="search" placeholder="movie list" >
            </div>
            <div>
                <button @click="search(movieReaserch)">Cerca</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>