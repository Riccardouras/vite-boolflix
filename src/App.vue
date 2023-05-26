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
