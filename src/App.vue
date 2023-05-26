<script>
import AppHeader from './components/AppHeader.vue'
import {store} from './components/data/store'
import AppMain from './components/AppMain.vue'
export default{
  components : {
    AppHeader,
    AppMain
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
  </section>
 
</template>

<style scoped>

</style>
