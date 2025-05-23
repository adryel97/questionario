import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicio from './components/Inicio.vue';
import Questionario from './components/Questionario.vue';
import Resultados from './components/Resultados.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/questionario', component: Questionario },
  { path: '/resultados', component: Resultados }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
