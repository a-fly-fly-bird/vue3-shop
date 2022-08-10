import {createStore} from 'vuex'

export default createStore({
  state: {
    count: 10,
  },
  getters: {
  },
  mutations: {
    setCount(state, num) {
      state.count = num
    }
  },
  // 异步操作
  actions: {
    setCountPromise(context, num) {
      return new Promise((resolve) => {
        if (num > 100) {
          resolve("值不能大于100")
        } else {
          context.commit("setCount", num)
          resolve()
        }
      })
    }
  },
  modules: {
  }
})
