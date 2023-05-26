<script>
import {store} from './data/store'

export default{
    components: {
        name: "AppHeader",
    },
    data(){
        store
    },
    methods :{
         reaserch(){
            this.store.searchText = capture,
            console.log(this.store.searchText)
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
                <button @click="search()">Cerca</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>