// Pathify
// import { make } from 'vuex-pathify'

const state = {
  dialogInfo: {
    text: "Dialog 메시지를 입력하세요",
    question: false,
    hideDialog: null,
    submitDialog: null,
  },
  showDialog: false,
  dialogCallback: ()=>{alert("dialog 콜백을 확인해주세요")}
}

const mutations = {
  dialogManager: function(state, payload) {
    if (payload.question != null) {
      state.dialogInfo.question = payload.question
    } else if (payload.question == null) {
      state.dialogInfo.question = false
    }

    if (payload.text) {
      state.dialogInfo.text = payload.text
    } else {
      state.dialogInfo.text = "Dialog 메시지를 입력하세요"
    }
    if (payload.callback != null) {
      state.dialogCallback = payload.callback
    } else {
      state.dialogCallback = null
    }

    state.dialogInfo.hideDialog = () => {
      state.showDialog = false
    }
    state.dialogInfo.submitDialog = () => {
      state.showDialog = false
      if (state.dialogCallback) {
        state.dialogCallback()
      }
    }

    if (payload.delay != null) {
      setTimeout(()=>{state.showDialog=true}, payload.delay)
    } else {
      state.showDialog = true
    }
  },
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
