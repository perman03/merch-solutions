<template>
    <div>
        <ul class="list-group" @click="seleccionar(solicitud._id)">
            <app-solicitud @click="seleccionar(solicitud._id)" v-show="activeItem==='recibido'" :class="[{'font-weight-bold':!solicitud.visto}, solicitud.visto?'visto':'no-visto']" 
                class="list-group-item my-list-group spaced" v-for="solicitud in solicitudesRecibidas  " 
                :key="solicitud._id">
                

                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        <!-- <p><router-link  @click="seleccionar(solicitud._id)"  to='/solicitudes/Versolicitud'>{{solicitud.puesto}}</router-link></p> -->
                        {{solicitud.puesto}}  
                        
                    </div> 
                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        {{solicitud.nombre}}  
                    </div>
                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        
                        {{solicitud.apellidos}}  
                    </div>
                    <div class="col-sm-2 offset-sm-1">
                        <div class="row">
                            <div class="col-xs-4 mx-2"><i @click="marcarArchivado(solicitud._id)" title="Archivar" class="fa fa-archive" aria-hidden="true" id="i"></i></div>
                            <div class="col-xs-4 mx-2"><i @click="marcarVisto(solicitud._id)" :title="solicitud.visto?'No visto':'Visto'" class="fa fa-eye" aria-hidden="true" id="i"></i></div>
                            <div class="col-xs-4 mx-2"><i @click="marcarEliminar(solicitud._id)" title="Eliminar" class="fa fa-trash" aria-hidden="true" id="i"></i></div>
                        </div>
                    </div>
            </app-solicitud>
            <app-solicitud v-show="activeItem==='archivados'" :class="[{'font-weight-bold':!solicitud.visto}, solicitud.visto?'visto':'no-visto']" 
                class="list-group-item my-list-group spaced" v-for="solicitud in solicitudesArchivadas" 
                :key="solicitud._id">
                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        <!-- <p><router-link  @click="seleccionar(solicitud._id)"  to='/solicitudes/Versolicitud'>{{solicitud.puesto}}</router-link></p> -->
                        {{solicitud.puesto}}  
                        
                    </div> 
                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        {{solicitud.nombre}}  
                    </div>
                    <div @click="seleccionar(solicitud._id)" id="i" class="col-sm-2 offset-sm-1">
                        
                        {{solicitud.apellidos}}  
                    </div>
                    <div class="col-sm-2 offset-sm-1">
                        <div class="row">
                            <div class="col-xs-4 mx-2"><i @click="marcarArchivado(solicitud._id)"  title="Desarchivar" class="fas fa-box-open" aria-hidden="true" id="i"></i></div>
                            <div class="col-xs-4 mx-2"><i @click="marcarVisto(solicitud._id)"  :title="solicitud.visto?'No visto':'Visto'" class="fa fa-eye" aria-hidden="true" id="i"></i></div>
                            <div class="col-xs-4 mx-2"><i @click="marcarEliminar(solicitud._id)" title="Eliminar" class="fa fa-trash" aria-hidden="true" id="i"></i></div>
                        </div>
                    </div>
            </app-solicitud>
            <app-solicitud v-show="activeItem==='eliminados'" :class="[{'font-weight-bold':!solicitud.visto}, solicitud.visto?'visto':'no-visto']" 
                class="list-group-item my-list-group spaced" v-for="solicitud in solicitudesEliminadas" 
                :key="solicitud._id">
                    <div class="col-sm-2 offset-sm-1">
                        {{solicitud.puesto}}
                    </div> 
                    <div class="col-sm-2 offset-sm-1">
                        {{solicitud.nombre}}  
                    </div>
                    <div class="col-sm-2 offset-sm-1">
                        {{solicitud.apellidos}}  
                    </div>
                    <div class="col-sm-2 offset-sm-1">
                        <div class="row">
                            
                            <div class="col-xs-4 mx-2"><i @click="marcarEliminar(solicitud._id)" title="Deseliminar" class="fas fa-trash-restore" aria-hidden="true" id="i"></i></div>
                        </div>
                    </div>
            </app-solicitud>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import Solicitud from "./Solicitud.vue";
    export default {
        props:["activeItem", "search"],
        components:{
            appSolicitud:Solicitud
        },
        computed:{
            solicitudesRecibidas(){
                return this.$store.getters.solicitudesRecibidas.filter(solicitud=>{
                    return solicitud.puesto.toLowerCase().includes(this.search.toLowerCase()) || solicitud.apellidos.toLowerCase().includes(this.search.toLowerCase()) || solicitud.nombre.toLowerCase().includes(this.search.toLowerCase());
                });

            },
            solicitudesArchivadas(){
                return this.$store.getters.solicitudesArchivadas.filter(solicitud=>{
                    return solicitud.puesto.toLowerCase().includes(this.search.toLowerCase()) || solicitud.apellidos.toLowerCase().includes(this.search.toLowerCase()) || solicitud.nombre.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            solicitudesEliminadas(){
                return this.$store.getters.solicitudesEliminadas.filter(solicitud=>{
                    return solicitud.puesto.toLowerCase().includes(this.search.toLowerCase()) || solicitud.apellidos.toLowerCase().includes(this.search.toLowerCase()) || solicitud.nombre.toLowerCase().includes(this.search.toLowerCase());
                });
            }
        },
        
        methods:{
             marcarVisto(id){
                this.$store.dispatch('ver', id);
                this.guardar(id).then(resp=>{console.log(resp)})
            },
             marcarEliminar(id){
                console.log("Eliminando")
              
                this.$store.dispatch('eliminar', id);
                this.guardar(id).then(resp=>{console.log(resp)})
            }, 
             marcarArchivado(id){
                this.$store.dispatch('archivar', id);
                this.guardar(id).then(resp=>{console.log(resp)})
            },
            async guardar(id){
                const data=this.$store.state.solicitudes.find(element => element._id == id);
                await axios.patch(`https://app-merc.herokuapp.com/api/solicitud/actualizar/${id}`, data);
            },

            seleccionar(id){
                
               
                this.$router.push({name:'Versolicitud', params: {userId:id}})
                /*this.$store.dispatch('ver', id);
                this.guardar(id).then(resp=>{console.log(resp)})*/
                
                
            }
        }
    }
</script>

<style scoped>
    .my-list-group{
        display: inherit;
    }
    #i:hover{
        cursor: pointer;
    }
    .list-group-item:hover {
        /*
        border:1px solid black ;
        overflow: hidden;
        */
        box-shadow: 0 0 5px black;
        background-color: #04b4c46b;
    }
    .visto{
        background-color: #e0e0e0;
    }
    .no-visto{
        background-color: white;
    }
    .spaced{
        margin-top: 1px;
        margin-bottom: 1px;
    }
</style>style