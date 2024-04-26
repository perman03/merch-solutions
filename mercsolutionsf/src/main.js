import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

//import vuescroll from "vuescroll/dist/vuescroll-native";
//import "vuescroll/dist/vuescroll.css";

import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel3d from 'vue-carousel-3d';
//Tabla de juan
import VueGoodTable from 'vue-good-table';

Vue.config.productionTip = false

//Vue.use(vuescroll);
Vue.use(VueFullPage)
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad)
Vue.use(LightBox)
Vue.use(Carousel3d);
//Tabla de Juan
Vue.use(VueGoodTable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
