<script>
import AppHeader from './components/AppHeader.vue'
import {store} from './components/data/store'
import AppMain from './components/AppMain.vue'
import AppMainSeries from './components/AppMainSeries.vue'
export default{
  components : {
    AppHeader,
    AppMain,
    AppMainSeries
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
    <AppMain/>
    <AppMainSeries/>
  </section>
 
</template>

<style scoped>

</style>
