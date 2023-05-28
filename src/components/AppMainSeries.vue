<script>
import {store} from './data/store'
import {flags} from "./data/flags";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default{
    components: {
        name: "AppMainSeries",
    },
    data(){
        return{
            store,
            flags
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
    },
        getFlag(lang) {
                return 'fi fi-' + this.flags[lang]
            },
    },
}

</script>

<template>
    <section>
        <div><h1>Series</h1></div>
        <div class="movie-conatiner flex" >
            <div class="card" v-for="serie in store.series">
                <img :src="this.store.UrlImg + serie.backdrop_path" :alt="serie.name"> 
                <h2>{{serie.name}}</h2>
                <h3>{{serie.original_name}}</h3>
                <span>Lang:<p :class="getFlag(serie.original_language)"></p></span>
                <div>
                    <span v-for="star in getStars(serie.vote_average)" class="star-icon">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="emptyStar in getEmptyStars(serie.vote_average)" class="star-icon">
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