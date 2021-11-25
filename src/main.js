import { createApp } from "vue";
//import VueI18n from 'vue-i18n';
import App from "@/components/App";
import router from "@/router";
import store from "@/store/index.js";
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import data from '@/components/message'

createApp(App).use(store).use(router).mount("#app");
