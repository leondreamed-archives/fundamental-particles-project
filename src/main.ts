import simpleVueIcon from 'simple-vue-icon';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import './index.css';
import 'tw-elements';
import { router } from './router';

const app = createApp(App);
app.use(simpleVueIcon);
app.use(createPinia());
app.use(router);
app.mount('#app');
