<template>
    <div class="container">
    <br>
    <input class="input-field" v-model="search" type="text" placeholder="Filtrar">
    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('recibido')" :class="{ active: isActive('recibido') }" href="#recibido">Recibidos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('archivados')" :class="{ active: isActive('archivados') }" href="#archivados">Archivados</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('eliminados')" :class="{ active: isActive('eliminados') }" href="#eliminados">Eliminados</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade" :class="{ 'active show': isActive('recibido') }" id="recibido">
        <app-solicitudes :search="search" :activeItem="activeItem" v-if="ready"></app-solicitudes>
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('archivados') }" id="archivados">
       <app-solicitudes :search="search" :activeItem="activeItem" v-if="ready"></app-solicitudes>

      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('eliminados') }" id="eliminados">
        <app-solicitudes :search="search" :activeItem="activeItem" v-if="ready"></app-solicitudes>
      </div>
    </div>
  </div>
</template>

<script>
    import Solicitudes from "./Solicitudes.vue";
    import axios from "axios";
    export default {
        components:{
            appSolicitudes:Solicitudes
        },
        data(){
            return{
              activeItem:'recibido',
              ready:false,
              search:''
            }
        },
        methods:{
            isActive (menuItem) {
                return this.activeItem === menuItem
            },
            setActive (menuItem) {
                this.activeItem = menuItem
            }
        },
        async mounted(){
          try{
            axios.get('https://app-merc.herokuapp.com/api/solicitud/listar').
              then(response=>
                {
                  if(response.status===200){
                    this.$store.state.solicitudes =response.data;
                    this.ready = true;
                }
          })
          }catch(e){
            console.log("Error al obtener solicitudes");
          }
        },
    }
</script>

<style scoped>
    body {
        padding: 20px 0;
    }
</style>