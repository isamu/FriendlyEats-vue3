import { createApp } from "vue";

import App from "@/components/App";
import router from "@/router";
import store from "@/store/index.js";

import "./index.css";

// import data from '@/components/message'

createApp(App).use(store).use(router).mount("#app");
