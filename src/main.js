import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import VueMaterial from 'vue-material';
require('vuetify/dist/vuetify.min.css');


Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

Vue.material.registerTheme('default', {
    primary: {
        color: 'grey',
        hue: 900
    },
    accent: {
        color: 'blue-grey',
        hue: 300
    },
    warn: {
        color: 'red',
        hue: 600
    },
    background: {
        color: 'grey',
        hue: 200
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
