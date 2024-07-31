import { createApp } from 'vue';
import App from './App.vue';
import router from '/src/router/router.js';
import { createI18n } from 'vue-i18n';
import en from '/src/locales/en.json';
import ms from '/src/locales/ms.json';
import zh from '/src/locales/zh.json';

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
app.mount('#app');
