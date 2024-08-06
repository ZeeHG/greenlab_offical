import "./assets/main.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import 'swiper/swiper-bundle.css';
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
