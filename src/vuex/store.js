import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state={
  count:'[这是Vuex中的值，O(∩_∩)O~]'
}

export default new Vuex.Store({
  state
})
