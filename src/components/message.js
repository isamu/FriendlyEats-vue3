const data = {
  ja: {
    app: {
      noConfig:
        "Firebaseの設定ファイルがありません. <br /> WebのコンソールでFirebaseのプロジェクトを作成し、設定をsrc/firebase/firebase.js にコピーしてください。",
      noAuth: "FirebaseコンソールのAuthenticationにいき、Sign-in methodタブでAnonymous Authを有効にしてください。",
    },
    top: {
      addRestaurant: "src/components/FriendlyEats.Data.js の addRestaurant() が未実装です",
      getDocumentsInQuery: "src/components/FriendlyEats.Data.js の getDocumentsInQuery() が未実装です",
      getFilteredRestaurants: "src/components/FriendlyEats.Data.js の getFilteredRestaurants() が未実装です",
      getAllRestaurants: "src/components/FriendlyEats.Data.js の getAllRestaurants() が未実装です",
    },
    restaurant: {
      addRating: "src/components/FriendlyEats.Data.js の addRating() が未実装です",
      getRestaurant: "src/components/FriendlyEats.Data.js の getRestaurant() が未実装です",
    },
  },
  en: {
    app: {
      noConfig: "No firebase config. <br />Setup Firebase and update src/firebase/firebase.js",
      noAuth: "Enable Anonymous Auth on Firebase Authentication console.",
    },
    top: {
      addRestaurant: "addRestaurant() in src/components/FriendlyEats.Data.js is not implemented yet!",
      getFilteredRestaurants: "getFilteredRestaurants() src/components/FriendlyEats.Data.js is not implemented yet!",
      getAllRestaurants: "getAllRestaurants() src/components/FriendlyEats.Data.js is not implemented yet!",
    },
    restaurant: {
      addRating: "addRating() is not implemented yet!",
    },
  },
};

export default data;
