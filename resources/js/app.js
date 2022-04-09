require('./bootstrap');

import {createApp} from "vue"
import App from '../vue/App.vue'
import router from '../vue/router'
import store from "../vue/vuex/store";

window.store = store;
window.state = store.state;

const app = createApp(App).use(router).use(store);
app.mount("#app");