<script>
import {store} from './data/store'
export default{
    components: {
        name: "AppMain",
    },
    data(){
        return{
            store
        }
    },
    methods: {
    getStars(voto) {
      const intero = Math.ceil(voto / 2); 
      return Array(intero).fill('');
    },
    getEmptyStars(voto) {
      const intero = Math.ceil(voto / 2); 
      const vuote = 5 - intero;
      return Array(vuote).fill('');
    }
  }
}
</script>

<template>
    <section>
        <div><h1>Movies</h1></div>
        <div class="movie-conatiner flex" >
            <div class="card" v-for="movie in store.movies">
                <img :src="this.store.UrlImg + movie.backdrop_path" :alt="movie.title"> 
                <h2>{{movie.title}}</h2>
                <h3>{{movie.original_title}}</h3>
                <p>{{movie.original_lenguage}}</p>
                <div>
                    <span v-for="star in getStars(movie.vote_average)" :key="star" class="star-icon">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="emptyStar in getEmptyStars(movie.vote_average)" :key="emptyStar" class="star-icon">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.movie-conatiner {
    max-width: 100vw;
}
.card{
    max-width: 200px;
    background-color: brown;
}
.flex{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

</style>