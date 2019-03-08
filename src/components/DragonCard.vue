<template>
    <div class="dragon-card col-6">
       <div @click="setActiveDragon" class="card">
           <img :src="dragonData.imgUrl" class="card-img-top">
           <div class="card-body text-center">
               <h2>{{dragonData.name}}</h2>
           </div>
       </div>
    </div>
</template>

<script>
export default {
   name: "dragon-card",
   props: ["dragonData"],
   data() {
      return {}
   },
   computed: {},
   methods: {
       setActiveDragon() {
           this.$store.dispatch('setActiveDragon', this.dragonData.id)
       }
   },
   components: {}
}
</script>