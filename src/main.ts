import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue2Filters from 'vue2-filters';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Installs BootstrapVue globally
Vue.use(BootstrapVue);
// Installs BootstrapVue Icons globally
Vue.use(IconsPlugin);
// Installs Vue2Filters globally
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
