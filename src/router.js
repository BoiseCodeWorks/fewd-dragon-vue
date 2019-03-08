import Vue from 'vue'
import Router from 'vue-router'
import GameSetup from './views/GameSetup.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game-setup',
      component: GameSetup
    },
    {
      path: '/games/:id',
      name: 'game',
      component: Game,
      props: true
    }
  ]
})
