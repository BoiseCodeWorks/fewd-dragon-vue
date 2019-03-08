import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let _api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    activeDragonId: -1,
    game: {}
  },
  mutations: {
    setChampions(state, champions) {
      state.champions = champions
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setActiveDragonId(state, id) {
      state.activeDragonId = id
    },
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {
    getChampions({commit}) {
      _api.get('champions')
        .then(res => {
          console.log(res)
          commit('setChampions', res.data)
        })
    },
    getDragons({commit}) {
      _api.get('dragons')
        .then(res => commit('setDragons', res.data))
    },
    setActiveDragon({commit}, dragonId) {
      commit('setActiveDragonId', dragonId)
    },
    createGame({commit}, payload) {
      _api.post('games', payload)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
          router.push({name: 'game', params: {id: res.data.game._id}})
        })
    },
    getGame({commit}, id) {
      _api.get('games/' + id)
        .then(res => commit('setGame', res.data))
    },
    dealDamage({commit}, payload) {
      _api.put('games/'+ this.state.game._id, payload)
        .then(res => {
          console.log(res)
          commit('setGame', res.data)
          //logic to check if game is over
            //extend this logic to make the UI/UX more friendly
          if (!res.data._dragon.currentHP || !res.data._champion.hp) window.alert('the game is over')
        })
    }
  }
})
