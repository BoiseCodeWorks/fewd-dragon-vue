<template>
    <div class="game-setup container-fluid">
       <div class="row">
           <div class="col">
               <h1 class="text-center text-danger">Dragon Duel!</h1>
               <button @click="createGame" v-if="activeChampionId != -1 && activeDragonId > -1" class="btn-block btn btn-danger">Fight!</button>
           </div>
       </div>
       <div class="row">
           <div class="col-6">
               <div class="row">
                   <div class="col-12">
                       <h4 class="text-center">Choose your Champion!</h4>
                   </div>
                   <champion-card v-for="champion in champions" :championData="champion" v-on:setTargetChampion="setActiveChampion" ></champion-card>
               </div>
           </div>
           <div class="col-6">
               <div class="row">
                   <div class="col-12">
                       <h4 class="text-center">Choose a Dragon!</h4>
                   </div>
                   <dragon-card v-for="dragon in dragons" :dragonData="dragon" />
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import ChampionCard from '@/components/ChampionCard.vue'
import DragonCard from '@/components/DragonCard.vue'
export default {
   name: "game-setup",
   props: [],
   data() {
      return {
          activeChampionId: -1
      }
   },
   computed: {
       champions() {
           return this.$store.state.champions
       },
       dragons() {
           return this.$store.state.dragons
       },
       activeDragonId() {
           return this.$store.state.activeDragonId
       }
   },
   methods: {
       setActiveChampion(id) {
           this.activeChampionId = id
       },
       createGame() {
           let payload = {
               championId: this.activeChampionId,
               dragonId: this.activeDragonId
           }
           this.$store.dispatch('createGame', payload)
       }
   },
   components: {
       ChampionCard,
       DragonCard
   }
}
</script>