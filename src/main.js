import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

createApp(App)
.use(moshaToast)
.use(router)
.use(store)
.mount('#app')
