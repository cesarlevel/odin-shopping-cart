import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

createApp(App)
    .use(router)
    .mount('#app');

let { redirect } = sessionStorage;
delete sessionStorage.redirect;

if (redirect && redirect !== location.pathname) {
    redirect = redirect.replace(import.meta.env.BASE_URL, '/');
    router.replace(redirect);
}
