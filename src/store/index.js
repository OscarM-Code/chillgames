import { createStore } from 'vuex'

export default createStore({
  state: {
    allLinks: []
  },
  mutations: {
    getAllLinks(state, data){
      data.map(item => {
        state.allLinks.push({id: item._id, name: item.name})
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
