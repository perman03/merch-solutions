import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import VueCarousel from 'vue-carousel';
//import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
//import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueRouter)
Vue.use(VueCarousel)
Vue.use(VueFullPage)

  const routes = [
  {
    path: '/',
    name: 'Principal',
    meta:{
      libre: true 
    },
    component: () => import(/* webpackChunkName: "Principal" */ '../views/Principal.vue')
  },

  {
    path: '/BolsaDeTrabajo',
    name: 'BolsaDeTrabajo',
    meta:{
      libre: true
    },
    component: () => import(/* webpackChunkName: "BolsaDeTrabajo" */ '../views/BolsaDeTrabajo.vue')
  },

  {
    path: '/ofertas',
    name: 'ofertas',
    meta:{
      libre: true
    },
    component: () => import(/* webpackChunkName: "BolsaDeTrabajo" */ '../views/Ofertas.vue')
  },

  

  {
    path: '/BolsaDeTrabajo#Tabla/:query',
    name: 'BolsaDeTrabajoTabla',
    meta:{
      libre: true
    },
    component: () => import(/* webpackChunkName: "BolsaDeTrabajo" */ '../views/BolsaDeTrabajo.vue')
  },

  {
    path: '/BolsaDeTrabajo#Tabla/?',
    name: 'BolsaDeTrabajoTablaLimpiar',
    meta:{
      libre: true
    },
    component: () => import(/* webpackChunkName: "BolsaDeTrabajo" */ '../views/BolsaDeTrabajo.vue')
  },

  

  {
    path: '/BolsaDeTrabajo/Formulario/:userId/:puesto/:ubicacion',
    name: 'Formulario',
    meta:{
      libre: true,
    },
    component: () => import(/* webpackChunkName: "Formulario" */ '../views/Formulario.vue')
  },
  {
    path: '/LogIn',
    name: 'Login',
    meta: {
      libre: true
    },
    component: () => import(/* webpackChunkName: "Login" */ '../views/LogIn.vue')
  },
  {
    path: '/Solicitudes',
    name: 'Solicitudes',
    meta: {
      admin: true,
      rh: true
     
    },

    component: () => import(/* webpackChunkName: "Solicitudes" */ '../views/Solicitudes.vue')
  },
  {
    path: '/Solicitudes/Versolicitud/:userId',
    name: 'Versolicitud',
    meta:{
      admin: true,
      rh: true
     
    },
    component: () => import(/* webpackChunkName: "Versolicitud" */ '../views/Versolicitud')
  },
  {
    path: '/*',
    name: 'PageNotFound',
    meta:{
      libre: true
    },
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound')
  }



]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  

})

router.beforeEach((to, from, next) =>{
  store.dispatch("autoLogin")
  //store.dispatch("page")
  if(to.matched.some(record => record.meta.libre)){
    console.log("Entrado a una ruta libre")
    next();

  }else if(store.state.usuario && store.state.usuario.rol == 'ADMIN_ROL'){
   
    if(to.matched.some(record => record.meta.admin)){
      next();
    }
  } else if(store.state.usuario && store.state.usuario.rol == 'RH_ROL'){
    if(to.matched.some(record => record.meta.rh)){
      next();
    }
  }else if(store.state.usuario && store.state.usuario.rol == 'MEDIA_ROL'){
    if(to.matched.some(record => record.meta.media)){
      next();
    }
  }else{
    next({name: 'Login'})

  } 
})

export default router
