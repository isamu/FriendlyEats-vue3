import { createApp } from "vue";
import { createI18n } from 'vue-i18n';

import App from "@/components/App";
import router from "@/router";
import store from "@/store/index.js";

import "./index.css";

import messages from "@/components/message";

const i18n = createI18n({
  locale: 'ja',
  messages,
});

createApp(App).use(store).use(router).use(i18n).mount("#app");
