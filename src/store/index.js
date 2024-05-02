import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ofertas:null,
    idActual:'',
    puestoActual:'',
    lugarActual:'',
    solicitudes:null,
    idSolicitud:'',
    token: null,
    usuario: null,
    banPopUp: false,
    banPopUpReconocimientos: false,
    banPopUpCertificaciones: false,
    banPopUpContactanos: false,
    mapa: false,
    alturaTabla:0
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },

    setUsuario(state, usuario){
      state.usuario = usuario;
    },

    ver(state, solicitudId){
      const record = state.solicitudes.find(element => element._id == solicitudId);
      if(record){
        record.visto=!record.visto;
      }
    },
    archivar(state, solicitudId){
      const record = state.solicitudes.find(element => element._id == solicitudId);
      if(record){
        record.archivar=!record.archivar;
      }
    },
    eliminar(state, solicitudId){
      const record = state.solicitudes.find(element => element._id == solicitudId);
      if(record){
        record.archivar = false;
        record["Eliminar"]=!record["Eliminar"];
      }
    },

    seleccionar(state, solicitudId){
      const record = state.solicitudes.find(element => element._id == solicitudId);
      if(record){
        
        state.idSolicitud = record._id;
        console.log("Id guardado por la accion"+ state.idSolicitud );
      }
    }
  },

  actions: {
    guardarToken({commit}, token){
      commit("setToken", token);
      commit("setUsuario", decode(token))
      localStorage.setItem("token", token)
    },

    autoLogin({ commit }){
      //console.log("Haciendo autologin")
      let token = localStorage.getItem("token");
      if (token){
        commit("setToken", token);
        commit("setUsuario", decode(token))
        //router.push({name: 'Principal'})
      }
    },

    page({ commit }){
      console.log("Entrando a Bolsa de trabajo/Tabla")
    },



    salir({ commit }){
        commit("setToken", null),
        commit("setUsuario", null);
        localStorage.removeItem("token");
        router.push({name: 'login'})
    },


    ver({commit}, solicitudId){
      commit('ver',solicitudId);
    },
    archivar({commit}, solicitudId){
      commit('archivar',solicitudId);
    },
    eliminar({commit}, solicitudId){
      commit('eliminar',solicitudId);
    },

    seleccionar({commit}, solicitudId){
      commit('seleccionar', solicitudId)
    }
  },
  modules: {
  },
  getters:{
    solicitudesRecibidas:state=>{
      return state.solicitudes.filter(e=>!e.archivar && !e.Eliminar)
    },
    solicitudesArchivadas:state=>{
      return state.solicitudes.filter(e=>e["archivar"])
    },
    solicitudesEliminadas:state=>{
      return state.solicitudes.filter(e=>e["Eliminar"])
    }
  }
})
