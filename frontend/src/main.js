import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router';
import MainPage from './components/mainpage/MainPage.vue';
import SingleAnnouncement from './components/singleannouncement/SingleAnnouncement.vue';


Vue.use(SuiVue);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: MainPage },
    { path: '/:id', component: SingleAnnouncement },
]

const router = new VueRouter({
    routes,
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
