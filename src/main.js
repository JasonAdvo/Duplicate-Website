import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { createI18n } from 'vue-i18n';
import store from './store/index.js';

import en from './locales/en.json';
import ms from './locales/ms.json';
import zh from './locales/zh.json';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Create i18n instance with locale messages
const i18n = createI18n({
	locale: 'en', // Set default locale
	fallbackLocale: 'en', // Fallback locale
	messages: {
		en,
		ms,
		zh
	}
});

// Create Vue app and use the necessary plugins
const app = createApp(App);

app.use(i18n); // Install the i18n instance
app.use(router); // Install router
app.use(store); // Install Vuex store

// Mount the app
app.mount('#app');
