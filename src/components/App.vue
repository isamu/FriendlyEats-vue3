<template>
  <div>
    <header class="container mx-auto">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold">
          <router-link to="/"> Friendly Eats </router-link>
        </h1>
        <div @click="openMenu()" class="cursor-pointer inline-flex justify-center items-center w-14 h-14 flex-shrink-0">
          <span class="material-icons text-warmgray-900 text-opacity-60">{{ navBar ? "close" : "menu" }}</span>
        </div>
      </div>
      <div v-show="navBar">
        <ul>
          <li><router-link to="/">TOP</router-link></li>
        </ul>
      </div>
    </header>

    <div>
      <router-view />
      <modal v-if="showModal" @close="closeModal">
        <div>
          <h3 class="text-2xl text-green-700 font-bold">Error</h3>
        </div>

        <div class="mt-6">
          {{ $t(store.state.errorType) }}
          <div v-if="links[store.state.errorType]">
            <a :href="links[store.state.errorType]" target="_blank" class="text-blue-600"> 実装方法はこちらを参照 </a>
          </div>
        </div>

        <div class="modal-footer"></div>
      </modal>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

import { useStore } from "vuex";
import { auth } from "@/firebase/utils";
import { signInAnonymously } from "firebase/auth";
import modal from "@/components/modal";

const links = {
  "app.noConfig": "https://isamu.github.io/FriendlyEats-vue3/#1",
  "app.noAuth": "https://isamu.github.io/FriendlyEats-vue3/#1",
  "top.addRestaurant": "https://isamu.github.io/FriendlyEats-vue3/#4",
  "top.getAllRestaurants": "https://isamu.github.io/FriendlyEats-vue3/#5",
  "top.getFilteredRestaurants": "https://isamu.github.io/FriendlyEats-vue3/#7",
  "restaurant.addRating": "https://isamu.github.io/FriendlyEats-vue3/#9",
};

export default defineComponent({
  name: "App",
  components: {
    modal,
  },
  setup() {
    const store = useStore();

    const showModal = computed(() => {
      return store.state.showModal;
    });
    const closeModal = () => {
      store.commit("closeModal");
    };

    const navBar = ref(false);
    const openMenu = () => {
      navBar.value = !navBar.value;
    };
    const setError = (type, message = null) => {
      store.commit("setError", type, message);
    };
    const user = signInAnonymously(auth)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        if (e.code === "auth/admin-restricted-operation") {
          setError("app.noAuth");
        } else if (e.code === "auth/internal-error") {
          try {
            const message = JSON.parse(e.message);
            setError("custom", message.error.message);
          } catch (e) {
            setError("custom", "invalid api key or not set Anonymous user on Firebase Authentication.");
          }
        } else {
          setError("custom", "invalid api key or not set Anonymous user on Firebase Authentication.");
        }
      });

    return {
      openMenu,
      navBar,

      showModal,
      closeModal,
      store,

      links,
    };
  },
  methods: {},
});
</script>
