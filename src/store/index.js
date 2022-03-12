import { createStore } from 'vuex'

export default createStore({
  state: {
    diaryList : []
  },
  mutations: {
    addDiaryList (state,obj) {
      state.diaryList.push(obj)
    },
    allClear(state){
      state.diaryList.length = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
