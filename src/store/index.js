import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    user_loading: true,

    showModal: false,
    errorType: null,
    link: null,
  },
  mutations: {
    closeModal(state) {
      state.showModal = false;
      state.errorType = null;
      state.link = null;
    },
    openModal(state, errorType) {
      state.showModal = true;
      state.errorType = errorType;
    },
    setError(state, errorType) {
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
