export default {
  state: {
    data: false,
  },
  getters: {
    //
  },
  actions: {
    logout(context) {
      context.commit("updateAuth", false);
    },
  },
  mutations: {
    updateAuth(state, data) {
      state.data = data;
    },
  },
};
