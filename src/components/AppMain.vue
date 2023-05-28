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
    }
}
</script>

<template>
    <section>
        <div><h1>Movies</h1></div>
        <div class="movie-conatiner flex" >
            <div class="card" v-for="movie in store.movies">
                <img :src="this.store.UrlImg + movie.backdrop_path" alt=""> 
                <h2>{{movie.title}}</h2>
                <h3>{{movie.original_title}}</h3>
                <p>{{movie.original_lenguage}}</p>
                <span>{{(movie.vote_average / 2).toFixed(1)}}</span>
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