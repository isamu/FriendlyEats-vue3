<template>
  <div>
    <div>
      <div>
        <Select v-model="city" :options="cityOptions" placeholder="都道府県"></Select>
      </div>
      <div>
        <Select v-model="category" :options="categoryOptions" placeholder="カテゴリー"></Select>
      </div>
      <div>
        <Select v-model="price" :options="priceOptions" placeholder="金額"></Select>
      </div>
      <div>
        <Select v-model="sortOrder" :options="sortOrderOptions" placeholder="順"></Select>
      </div>
      <div>
        <button class="h-10 w-32 rounded-lg bg-yellow-400" @click="filterData">Filter Data</button>
      </div>
      <div></div>
    </div>
    <div class="flex flex-wrap">
      <div class="text-center w-full" v-if="!appData?.projectId">
        <div>This app is <b>not</b> connected to the Firebase project.</div>
        setup Firebase
      </div>
      <div class="text-center w-full" v-else-if="restaurants.length === 0">
        <div id="guy-container" class="mdc-toolbar-fixed-adjust">
          <div class="mx-auto">
            <img class="mx-auto w-4/12" src="/img/guy_fireats.png" />
          </div>
          <div>
            This app is connected to the Firebase project "<b>{{ appData?.projectId }}</b
            >".<br />
            <br />
            Your Cloud Firestore has no documents in <b>/restaurants/</b>.
          </div>
          <br />
          <button color="success" @click="importData()">Import Data</button>
        </div>
      </div>
      <div class="w-1/3" v-for="restaurant in restaurants" :key="restaurant.id" v-else>
        <div @click="link(restaurant.id)">
          <img :src="restaurant.photo" /><br />
          {{ restaurant.name }}
          <span v-for="(price, key) in getPrice(restaurant.price)" :key="key">
            {{ price.value }} </span
          ><br />
          <span v-for="star in getStar(restaurant.avgRating)" key="star.id" class="material-icons text-yellow-500">
            {{ star.value }} </span
          ><br />
          {{ restaurant.city }}
          ●
          {{ restaurant.category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onUnmounted } from "vue";

import { useStore } from "vuex";

import * as FriendlyEats from "@/components/FriendlyEats";
import * as FriendlyEatsData from "@/components/FriendlyEats.Data";
import * as FriendlyEatsMock from "@/components/FriendlyEats.Mock";
import Select from "@/components/Select";

import { useRouter } from "vue-router";

import { app } from "@/firebase/utils";

export default defineComponent({
  name: "Top",
  components: { Select },
  setup() {
    const router = useRouter();
    const store = useStore();

    const restaurants = reactive([]);
    let detacher = null;
    const appData = app._options;

    const importData = async () => {
      try {
        await FriendlyEatsMock.addMockRestaurants();
      } catch (e) {
        console.log(e);
        store.commit("openModal", "top.addRestaurant");
      }
    };
    const getPrice = (price) => {
      const ret = [];
      for (let r = 0; r < price; r += 1) {
        ret.push({ id: r, value: "$" });
      }
      return ret;
    };
    const getStar = (rating) => {
      const ret = [];
      for (let r = 0; r < 5; r += 1) {
        if (r < Math.floor(rating)) {
          ret.push({ id: r, value: "star" });
        } else {
          ret.push({ id: r, value: "star_border" });
        }
      }
      return ret;
    };
    const filterData = () => {
      // TODO
      const filters = {
        city: this.city || "Any",
        category: this.category || "Any",
        price: this.price || "Any",
        sortOrder: this.sortOrder,
      };
      if (detacher) {
        detacher();
      }
      this.getFilteredRestaurants(filters);
    };
    const link = (id) => {
      router.push({ name: "restaurant", params: { id } });
    };
    const renderer = () => {
      return {
        remove: (doc) => {
          const index = restaurants.findIndex((element) => {
            return element.id === doc.id;
          });
          restaurants.splice(index, 1);
        },
        display: (doc) => {
          const data = doc.data();
          data.id = doc.id;

          const index = restaurants.findIndex((element) => {
            return element.id === doc.id;
          });
          if (index !== -1) {
            restaurants[index] = data;
          } else {
            restaurants.push(data);
          }
        },
        empty: () => {
          restaurants.splice(0, restaurants.length);
        },
      };
    };
    const watchData = (query) => {
      restaurants.splice(0, restaurants.length);
      detacher = FriendlyEatsData.getDocumentsInQuery(query, renderer());

      if (!detacher) {
        store.commit("openModal", "getDocumentsInQueryNotImplmented");
      }
    };
    const getAllRestaurants = () => {
      const query = FriendlyEatsData.getAllRestaurants();
      if (query) {
        watchData(query);
      } else {
        if (appData?.projectId) {
          store.commit("openModal", "getAllRestaurantsNotImplmented");
        }
      }
    };
    const getFilteredRestaurants = (filters) => {
      const query = FriendlyEatsData.getFilteredRestaurants(filters);
      if (query) {
        watchData(query);
      } else {
        this.$eventHub.$emit("openModal", {
          type: "top.getFilteredRestaurants",
        });
      }
    };

    getAllRestaurants();

    onUnmounted(() => {
      if (detacher) {
        detacher();
      }
    });

    return {
      appData,
      restaurants,
      detacher,
      categoryOptions: FriendlyEats.data.categories,
      category: null,
      cityOptions: FriendlyEats.data.cities,
      city: null,
      priceOptions: ["$", "$$", "$$$", "$$$$"],
      price: null,
      sortOrderOptions: ["Rating", "Reviews"],
      sortOrder: null,

      getPrice,
      getStar,
      link,
      importData,
    };
  },
});
</script>

<style>
#guy-container {
  padding-top: 100px;
  text-align: center;
}

#guy-container .mdc-button {
  background-color: #ccc;
}

.guy {
  max-width: 200px;
  margin-bottom: 20px;
}
.vs__dropdown-menu {
  position: absolute;
  z-index: 100;
  background: white;
  width: 100%;
  border: 2px solid #000000;
}
</style>
