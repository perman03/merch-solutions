<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Principal</router-link> |
      <router-link to="/BolsaDeTrabajo">Bolsa de Trabajo</router-link> |
      <router-link  v-if="!logueado" to="/LogIn">LogIn</router-link>
      <button class="btn-danger"  v-if="logueado" @click="salir()"> SALIR </button> 
    </div> -->
    <router-view/> 
  </div>
</template>

<script>
export default {
  computed: {
    logueado(){
        return this.$store.state.usuario;
    },

    esAdministrador(){
        return this.$store.state.usuario && this.$store.state.usuario.rol == 'ADMIN_ROL'
    },

    esRh(){
        return this.$store.state.usuario && this.$store.state.usuario.rol == 'RH_ROL'
    },

    esMedia(){
        return this.$store.state.usuario && this.$store.state.usuario.rol == 'MEDIA_ROL'
    }
  },

  created() {
      this.$store.dispatch("autoLogin")
      
  },

  methods: {
      salir(){
        console.log("Saliendo")
        this.$store.dispatch("salir") 
      }
  }
}
</script>

