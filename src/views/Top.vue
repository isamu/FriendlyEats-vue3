<template>
  <div>
    <div>
      <Select
        v-model="city"
        :options="cityOptions"
        placeholder="都道府県"
      ></Select>
    </div>
    <div>
      <Select
        v-model="category"
        :options="categoryOptions"
        placeholder="カテゴリー"
      ></Select>
    </div>
    <div>
      <Select
        v-model="price"
        :options="priceOptions"
        placeholder="金額"
      ></Select>
    </div>
    <div>
      <Select
        v-model="sortOrder"
        :options="sortOrderOptions"
        placeholder="順"
      ></Select>
    </div>
    <div>
      <v-btn color="success" @click="filterData">Filter Data</v-btn>
    </div>
    <div></div>
    <template v-if="restaurants.length === 0">
      <div />
      <div>
        <div id="guy-container" class="mdc-toolbar-fixed-adjust">
          <img class="guy" src="/img/guy_fireats.png" />
          <div class="text">
            This app is connected to the Firebase project "<b>{{
              appData.projectId
            }}</b
            >".<br />
            <br />
            Your Cloud Firestore has no documents in <b>/restaurants/</b>.
          </div>
          <br />
          <v-btn color="success" @click="importData">Import Data</v-btn>
        </div>
      </div>
      <div />
    </template>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      align-content-center="true"
    >
      <div
        @click="link(restaurant.id)"
        max-width="80%"
        :style="{ margin: 'auto' }"
      >
        <img :src="restaurant.photo" :style="{ width: '100%' }" /><br />
        <span
          v-for="(price, key) in getPrice(restaurant.price)"
          :style="{ position: 'relative', float: 'right' }"
          :key="`${restaurant.id}price${key}`"
          >{{ price.value }}</span
        >
        <h2>{{ restaurant.name }}</h2>
        <v-icon
          v-for="star in getStar(restaurant.avgRating)"
          v-bind:key="star.id"
          :style="{ color: '#feb22c' }"
          >{{ star.value }}</v-icon
        ><br />
        {{ restaurant.city }}
        ●
        {{ restaurant.category }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onUnmounted } from "vue";

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
    const restaurants = reactive([]);
    let detacher = null;

    const importData = async () => {
      try {
        await FriendlyEatsMock.addMockRestaurants();
      } catch (e) {
        // todo fix
        this.$eventHub.$emit("openModal", {
          type: "top.addRestaurant",
        });
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
          console.log(restaurants);
        },
        empty: () => {
          restaurants.splice(0, restaurants.length);
        },
      };
    };
    const watchData = (query) => {
      restaurants.splice(0, restaurants.length);
      detacher = FriendlyEatsData.getDocumentsInQuery(query, renderer());
    };
    const getAllRestaurants = () => {
      const query = FriendlyEatsData.getAllRestaurants();
      if (query) {
        watchData(query);
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

    const appData = app._options;
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
