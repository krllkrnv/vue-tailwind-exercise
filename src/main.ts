import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import store from "./store/index.ts";

createApp(App).use(store).mount("#app");
