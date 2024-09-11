import { createApp } from 'vue';
import App from './App.vue';
import router from '/src/router/router.js';
import { createI18n } from 'vue-i18n';
import en from '/src/locales/en.json';
import ms from '/src/locales/ms.json';
import zh from '/src/locales/zh.json';
import store from '/src/store/index.js'; // Import the Vuex store

import '@fortawesome/fontawesome-free/css/all.min.css';

const messages = {
	en,
	ms,
	zh
};

const i18n = createI18n({
	locale: 'en',
	messages
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store); // Add the Vuex store to the app
app.mount('#app');
