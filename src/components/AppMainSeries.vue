<script>
import {store} from './data/store'
export default{
    components: {
        name: "AppMainSeries",
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
        <div><h1>Series</h1></div>
        <div class="movie-conatiner flex" >
            <div class="card" v-for="serie in store.series">
                <!-- <img :src="movie.backdrop_path" alt=""> -->
                <h2>{{serie.name}}</h2>
                <h3>{{serie.original_name}}</h3>
                <p>{{serie.original_language}}</p>
                <span>{{(serie.vote_average / 2).toFixed(1)}}</span>
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