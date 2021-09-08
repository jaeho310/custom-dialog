// Pathify
import { make } from 'vuex-pathify'

const state = {
  items: [
    {
      title: "홈",
      to: '/home'
    },
    {
      title: 'dialog사용하기',
      to : '/test'
    },
  ]
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
    console.log(dispatch)
  },
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
