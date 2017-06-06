// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './components/App'
import Albums from './components/Albums'
import Next from './components/Next'
import Best from './components/Best'

Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Albums
        },
        {
            path: '/next',
            component: Next
        },
        {
            path: '/best',
            component: Best
        }
    ]
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
