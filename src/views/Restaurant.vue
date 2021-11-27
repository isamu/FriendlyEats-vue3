<template>
  <div>
    <template v-if="restaurant">
      <div xs12 :style="{ backgroundImage: 'url(' + restaurant.photo + ')' }" class="imageHeader">
        <h2>{{ restaurant.name }}</h2>
        <span v-for="star in getStar(restaurant.avgRating)" :key="star.id" class="material-icons">{{ star.value }}</span
        ><br />
        {{ restaurant.city }} / {{ restaurant.category }}<br />
        <div class="iconBox">
          <span class="material-icons" @click="showModal = true">add_circle</span>
        </div>
      </div>
      <template v-if="ratings.length === 0">
        <div xs12>
          <div id="guy-container" class="mdc-toolbar-fixed-adjust">
            <img class="guy" src="/img/guy_fireats.png" />
            <div class="text">This restaurant has no ratings.<br /></div>
            <br />
            <button color="success" @click="AddRating()">Add Rating</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-for="(rating, k) in ratings" :key="k">
          <div xs2 />
          <div xs8 class="ratingBox">
            <div :style="{ marginBottom: '10px' }">
              <span class="ratingStar">
                <span v-for="(star, l) in getStar(rating.rating)" class="material-icons text-yellow-500" :key="l">{{ star.value }}</span
                ><br />
              </span>
              <span :style="{ color: '#999' }">{{ rating.userName }}</span>
            </div>
            {{ rating.text }}
          </div>
          <div xs2 />
        </div>
      </template>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Add a Review</h3>
        <div slot="body">
          <div
            :style="{
              borderBottom: '1px solid',
              paddingBottom: '20px',
              textAlign: 'center',
            }"
          >
            <span v-for="star in getStar(selectedRating)" :key="star.id" v-on:mouseenter="changeRating(star)" class="material-icons text-yellow-500">
              {{ star.value }}
            </span>
          </div>
          <div :style="{ borderBottom: '1px solid' }">
            <textarea v-model="message" class="textarea"> </textarea>
          </div>
        </div>
        <div slot="footer">
          <button class="modal-default-button" @click="showModal = false">CANCEL</button>
          <button class="modal-default-button" @click="saveRating()">SAVE</button>
        </div>
      </modal>
    </template>
    <template v-else>
      <div class="flex flex-wrap">
        <div id="guy-container" class="text-center w-full">
          <img class="mx-auto w-4/12" src="/img/guy_fireats.png" />
          <div class="text">
            No restaurant data.<br />
            Implement getRestaurant.
          </div>
          <br />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onSnapshot } from "firebase/firestore";

import * as FriendlyEatsData from "@/components/FriendlyEats.Data";
import * as FriendlyEatsMock from "@/components/FriendlyEats.Mock";
import modal from "@/components/modal";

import { auth } from "../firebase/utils";
import { getStar } from "@/components/FriendlyEats";


export default defineComponent({
  name: "Top",
  components: {
    modal,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const { id } = route.params;

    const restaurant = ref(null);
    const ratings = reactive([]);

    const showModal = ref(false);
    const selectedRating = ref(5);
    const message = ref("");

    let detacher = null;

    const AddRating = async () => {
      try {
        await FriendlyEatsMock.addMockRatings(id);
      } catch (e) {
        store.commit("openModal", "restaurant.addRating");
      }
    };
    const changeRating = (rating) => {
      selectedRating.value = rating.id + 1;
    };
    const saveRating = async () => {
      const res = await FriendlyEatsData.addRating(id, {
        rating: selectedRating.value,
        text: message.value,
        userName: "Anonymous (Web)",
        timestamp: new Date(),
        userId: auth.currentUser.uid,
      });
      message.value = "";
      selectedRating.value = 5;
      showModal.value = false;

      if (!res) {
        store.commit("openModal", "restaurant.addRating");
      }
    };
    (async () => {
      const restaurantDoc = await FriendlyEatsData.getRestaurant(id);
      if (restaurantDoc === undefined) {
        return store.commit("openModal", "restaurant.getRestaurant");
      }
      if (restaurantDoc && restaurantDoc.exists) {
        restaurant.value = restaurantDoc.data();

        const data = await FriendlyEatsData.getRating(id);
        detacher = onSnapshot(data, (snapshot) => {
          ratings.splice(0, ratings.length);
          snapshot.forEach((doc) => {
            const rating = doc.data();
            rating.id = doc.id;
            ratings.push(rating);
          });
        });
      }
    })();

    onUnmounted(() => {
      if (detacher) {
        detacher();
      }
    });

    return {
      detacher,
      restaurant,
      ratings,
      selectedRating,
      showModal,
      message,
      getStar,

      changeRating,
      AddRating,
      saveRating,
    };
  },
});
</script>

<style scoped>
.imageHeader {
  background-repeat: repeat;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 30px;
}
.imageHeader h2 {
  margin-top: 10px;
  font-size: 2em;
}
.ratingBox {
  margin-top: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid;
}
.ratingStar {
  float: right;
  color: #feb22c;
}
.iconBox {
  width: 60%;
  margin: auto;
}
.iconHover {
  float: right;
  margin: 0px;
  position: relative;
  top: 23px;
  margin-right: 10px;
  align-self: flex-end;
  color: gold;
  font-size: 46px;
}
.iconHover:hover {
  color: orange;
}
.textarea {
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  resize: none;
  border-width: 1px 0px 1px 0px;
  padding: 10px;
}
</style>
