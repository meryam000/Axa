import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Import the router
import router from './router'

const app = createApp(App);

app.use(router);

app.mount('#app');
