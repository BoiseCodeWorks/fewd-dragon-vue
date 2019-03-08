<template>
    <div class="game container-fluid">
        <div class="row">
            <div class="col-6">
                <fighter :fighter="game._champion" />
            </div>
            <div class="col-6">
                <fighter :fighter="game._dragon" />
            </div>
        </div>
    </div>
</template>

<script>
import Fighter from '@/components/Fighter.vue'
export default {
   name: "game",
   props: [],
   mounted() {
       if(!this.game._id) {
           this.$store.dispatch('getGame', this.$route.params.id)
       }
   },
   data() {
      return {}
   },
   computed: {
       game() {
           return this.$store.state.game
       }
   },
   methods: {},
   components: {
       Fighter
    }
}
</script>