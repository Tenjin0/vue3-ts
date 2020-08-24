import { createApp } from "vue";
import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import App from "./App.vue";

import router from "./router";

const app  = createApp(App).use(router).use(antd).mount('#app');

window["app"] = app
