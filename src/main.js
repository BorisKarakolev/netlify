import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";
import Antd from "ant-design-vue";
import "@/assets/tailwind.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(Antd)
  .mount("#app");
