<template>
    <div class="fighter row">
       <div class="card">
           <img :src="fighter.imgUrl" class="card-img-top">
           <div class="card-header d-flex justify-content-between">
               <h1>{{fighter.name}}</h1>
               <h4>HP: {{fighter.hp || fighter.currentHP}}</h4>
           </div>
           <div v-if="fighter.attacks" class="card-body d-flex justify-content-between">
               <button @click="dealDamage(key)" class="btn btn-outline-danger" v-for="(value, key) in fighter.attacks">{{key}}</button>
            </div>
       </div>
    </div>
</template>

<script>
export default {
   name: "fighter",
   props: ['fighter'],
   data() {
      return {}
   },
   computed: {},
   methods: {
       dealDamage(attack) {
           this.$store.dispatch('dealDamage', {attack})
       }
   },
   components: {}
}
</script>