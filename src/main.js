import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Vue3Geolocation from "vue3-geolocation";

const app = createApp(App);
app.use(store);
app.use(Vue3Geolocation);
app.mount("#app");
