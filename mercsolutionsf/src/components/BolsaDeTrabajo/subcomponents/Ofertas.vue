<template>
    <div class="container-fluid ">
       <div id="centrar">
           <app-Pop v-if="$store.state.banPopUp" >
            <h2 slot="titulo" class="col-3 col-sm-6 col-md-10 col-lg-12 col-xl-12"> Añadir oferta laboral </h2>
            <div slot="subItem">
                <div class="row mx-auto my-3">
                    <div class="col-3 col-sm-6 col-md-10 col-lg-12 col-xl-12">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nombre">Puesto*</label>
                            <input v-model="puesto" type="text" class="form-control" placeholder="Puesto">
                            
                        </div>
                    </div>
                </div>

                <div class="row mx-auto my-3">
                    <div class="col-3 col-sm-6 col-md-10 col-lg-12 col-xl-12">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nombre">Ubicación*</label>
                            <input v-model="ubicacion" type="text" class="form-control" placeholder="Ubicación">
                        </div>
                    </div>
                </div>

                <div class="row mx-auto my-3">
                    <div class="col-3 col-sm-6 col-md-10 col-lg-12 col-xl-12">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nombre">Salario</label>
                            <input v-model="salario" type="text" class="form-control" placeholder="Agregue un Salario">
                        </div>
                    </div>
                </div>

                 <div class="row">
                    <div class="col-3 col-xl-12   col-lg-12  col-md-9 col-sm-7">
                        <div class="form-group">
                            <label class="font-weight-bold" for="nombre">Agregue una descripción*</label>
                            <textarea v-model="descripcion" class="form-control" cols="30" rows="5" placeholder="Añada una descripción del puesto"></textarea>
                        </div>
                    </div>
                   
                </div>

                 <div class="row">
                     <div class="col-3 col-xl-12   col-lg-12 col-md-9 col-sm-7" >
                        <div class="form-group">
                            <label class="font-weight-bold" for="nombre">Agregue algunos requerimientos*</label>
                            <textarea v-model="requerimientos" class="form-control" cols="30" rows="5" placeholder="Añada los requerimientos del puesto"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                     <div class="col-2 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                        <button class="btn btn-outline boton" @click="enviar()"> Subir nueva oferta  </button>
                       
                    </div>

                    <div class="col-3  col-sm-6 offset-sm-3  col-md-6 offset-md-7  col-lg-1   col-xl-1">
                           <button type="button" class="btn btn-danger boton-invertido" @click="desactivarPop()">
                            Cerrar
                        </button>
                    </div>
                </div>

                <div v-show="valida">
                     <div class="text-danger" v-for="v in validaMensaje" :key="v" v-text="v">
                     </div>
                </div>
        </div>

        </app-Pop>
       </div>
         <div class="card" v-if="esRh || esAdministrador">
                 <div class="card-body" @click="activarPop()">
                     <div class="card-text"> <img src="../../../assets/anadir.svg" width="20px" height="20px"> 
                     Añadir oferta  
                     </div>
                 </div>
        </div>

        <datatable  :title="titulo" :columns="columnas" :rows="filas" v-on:row-click="aplicarOferta" :perPage="[10, 20]" :exportable="false" :printable="false" :searchable="false" >
            <th slot="thead-tr" v-if="esRh || esAdministrador">
                Eliminar
            </th>
            <template slot="tbody-tr" scope="props" v-if="esRh || esAdministrador">
                <td>
                    <button class="btn red darken-2 waves-effect waves-light compact-btn"
                        @click="(e) => eliminarOferta(props.row._id)">
                        <i class="material-icons white-text">delete</i>
                    </button>
                </td>
            </template>

         
        
        
        
        </datatable>
        <!--<ul class="list-group" >
            <div class="card" v-if="esRh || esAdministrador">
                 <div class="card-body" @click="activarPop()">
                     <div class="card-text"> <img src="../../../assets/anadir.svg" width="20px" height="20px"> 
                     Añadir oferta  
                     </div>
                 </div>
            </div>
            
            <div class="">

                 <app-oferta  class="list-group-item " v-for="oferta in this.$store.state.ofertas" :key="oferta._id">
              
                    
                    <div>
                        <h5>{{oferta.puesto}}</h5>
                        
                        <div class="div-ubicacion row align-items-center">
                            <i class="fas fa-map-marker-alt i-ubicacion"></i>
                            <h6>{{oferta.ubicacion}}</h6>
                        </div>

                        <div v-show="selection[oferta._id]">
                            <p>{{oferta.salario}}</p>
                            <p>{{oferta.descripcion}}</p>
                            <p><router-link to='/BolsaDeTrabajo/Formulario'>Aplica Aquí</router-link></p>
                        </div>

                        <div class="d-flex justify-content-between">
                            <button class="btn btn-link " @click="toggleId(oferta._id, oferta.ubicacion, oferta.puesto)">
                                <i v-if="!selection[oferta._id]" class="fas fa-chevron-down"></i> 
                                <i v-else class="fas fa-chevron-up"></i> 
                                {{ cambiarTexto(selection[oferta._id]) }}
                            </button>
                            <img v-if="esRh || esAdministrador" @click="eliminarOferta(oferta._id)" class="imagen" src="../../../assets/basura.svg" height="20px" width="20px">
                        </div>
                    
                    </div>
             
                </app-oferta>
            </div>  
        </ul>-->
    </div>
</template>

<script>
    import Oferta from "./Oferta.vue";
    import PopUp from '../../ComponentesCompartidos/PopUp'
    import axios from 'axios'
    import DataTable from "vue-materialize-datatable";

    export default {
     
        created() {
           
            this.selection = Object.assign({}, ...this.$store.state.ofertas.map((x) => ({[x._id]: false})))
           let ofers = this.$store.state.ofertas;
           console.log("Esto es this.selection")
           console.log(ofers[0].puesto)
           this.filas = ofers
           /*for (let i = 0; i < ofers.length; i++){
                this.filas[i].puesto = ofers[i].puesto;
                this.filas[i].ubicacion = ofers[i].ubicacion;
                this.filas[i].salario = ofers[i].salario;
           }*/

           /*ofers.forEach(oferta => {
               console.log(oferta.puesto)
           });*/
            this.$store.dispatch("autoLogin")
        },

        components:{
            appOferta:Oferta,
            appPop:PopUp,
            datatable: DataTable
        },
        data(){
            return{ 
                window:{
                    alto:0,
                    ancho:0
                },
                ban:false,
                selection:null,
                ubicacion:'',
                salario:'0',
                descripcion:'',
                requerimientos:'',
                puesto:'',
                validaMensaje:[],
                valida:0,
                textoExpandir: true,
                titulo:"Ofertas Laborales",
                columnas: [{
                        label: "Cargo", // Column name
                        field: "puesto", // Field name from row
                                        // Use dot for nested props
                                        // Can be function with row as 1st param
                        numeric: false,// Affects sorting
                        html: false    // Escapes output if false.
                    },

                    {
                        label: "Ubicación",
                        field: "ubicacion",
                        numeric: false
                    },

                    {
                        label: "Salario",
                        field: "salario",
                        numeric: true
                    },
                ],

                filas: [ // Array of objects 
                        {
                            puesto:'',
                            salario:0,
                            ubicacion:''
                        }
                    ]
                //selection: Object.assign({}, ...this.ofertas.map((x) => ({[x._id]: false})))
            }
        },

        //Métodos   
      

        methods:{
              aplicarOferta: function (row) {
                 this.$store.state.idActual = row._id;
                this.$store.state.lugarActual = row.ubicacion;
                this.$store.state.puestoActual = row.puesto;
                this.selection[row._id]=!this.selection[row._id];
                console.log(row)
                this.$router.push({name:'Formulario', params: {userId:row._id, puesto:row.puesto, ubicacion:row.ubicacion } } )
              },
            deleteItem(row, e){
                console.log("Haciendo click en borrar")
                //console.log(row)
            },

    
            haciendoClick(){
                console.log("Hola")
            },
            

            toggleId(id, lugar, puesto){
                console.log("Toggle")
                this.$store.state.idActual = id;
                this.$store.state.lugarActual = lugar;
                this.$store.state.puestoActual = puesto;

                this.selection[id]=!this.selection[id];
                console.log(this.selection);
            },

            activarPop(){
                this.$store.state.banPopUp = true;
            },


            desactivarPop(){
                this.$store.state.banPopUp = false;
            },

            validar(){
                this.valida=0;
                this.validaMensaje=[];

                if(this.ubicacion.length < 1){
                    this.validaMensaje.push('Se necesita agregar una ubicación');
                }

                if (this.puesto.length < 1){
                    this.validaMensaje.push('Se necesita agregar un puesto')
                }

                if (this.descripcion.length < 1){
                    this.validaMensaje.push('Se necesita agregar una descripción')
                }

                if (this.requerimientos.length < 1){
                    this.validaMensaje.push('Se necesita agregar requerimientos')
                }

                 if (this.validaMensaje.length){
                    this.valida=1;
                }

                return this.valida;
            },

            enviar(){


                if(this.validar()){
                    return
                }

                //Recordar mandar el token con el header si el back lo necesita
                let header = {"Token": this.$store.state.token}    
                let configuracion = {headers: header}

                axios.post('https://app-merc.herokuapp.com/api/oferta/agregar', {
                    'puesto': this.puesto,
                    'ubicacion': this.ubicacion,
                    'salario': Number(this.salario),
                    'requerimientos':this.requerimientos,
                    'descripcion':this.descripcion

                }, configuracion).then( respuesta =>{
                    console.log(respuesta)
                    this.desactivarPop();
                    this.limpiar();
                    location.reload();
                }
                    
                ).catch(e => {
                    console.log(e)
                })


            },

            limpiar(){
                this.puesto = '';
                this.ubicacion = '';
                this.requerimientos = '';
                this.descripcion = '';
                this.salario = '0'
                this.valida = 0;
                this.validaMensaje = [];

            },

            eliminarOferta(id){
                let header = {"Token": this.$store.state.token}    
                let configuracion = {headers: header}

                axios.delete('https://app-merc.herokuapp.com/api/oferta/borrar/'+id, configuracion)
                .then(respuesta => {
                    console.log("HECHO")
                    console.log(respuesta)
                    location.reload();

                }).catch(e => {
                    console.log("Error: "+e)
                })
            },

            cambiarTexto(id){
                //this.textoExpandir = !this.textoExpandir;

                return id ? 'Ver menos' : 'Expandir Oferta';
            }
        },

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


    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }

    .imagen{
        margin-top: 15px;
        margin-right: 15px;
    }

    .imagen:hover{
        background-color: red;
    }

    .card:hover{
       
        
    }

    .scroll{
        overflow-y: auto;
        /*padding-top: 0%;*/
        /*max-height: 650px;*/
        height: 78vh;
    }

    #centrar{
        vertical-align: baseline;
    }

    .div-ubicacion{
        margin-left: 5px;
        border-radius: 7px;
        border: 1px solid black;
    }

    .i-ubicacion{
        padding: 5px;
        margin-left: 1%;
        position: absolute;
    }

    h6{
        padding: 5px;
        margin-left:4%;
        margin-top: 5px;
    }

    .prueba{
        background-color: black;
    }

    .boton{
        color: #00b4c7;
        border-color: #00b4c7;
    }
    .boton-invertido{
        color: white;
        background-color: #00b4c7;
        border-color: #00b4c7;
    }

   @import url(http://fonts.googleapis.com/icon?family=Material+Icons);

</style>