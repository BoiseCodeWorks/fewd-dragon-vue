<template>
    <div class="champion-card col-6">
       <div @click="$emit('setTargetChampion', championData.id)" class="card m-1">
           <img :src="championData.imgUrl" class="card-img-top">
           <div class="card-body text-center">
               <h2>{{championData.name}}</h2>
               <p>{{championData.race}} | {{championData.class}}</p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
   name: "champion-card",
   props: ["championData"],
   data() {
      return {}
   },
   computed: {},
   methods: {},
   components: {}
}
</script>