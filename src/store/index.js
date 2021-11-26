import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    user_loading: true,

    showModal: false,
    errorType: null,
    errorMessage: null,
  },
  mutations: {
    closeModal(state) {
      state.showModal = false;
      state.errorType = null;
      state.errorMessage = null;
    },
    openModal(state, errorType, errorMessage) {
      state.showModal = true;
      state.errorType = errorType;
      state.errorMessage = errorMessage;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
