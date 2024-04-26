<template>
    <div class="container-fluid h-100 w-100">
        <h4 class="text-center">Filtros</h4>
        <dl>
            
          
                <button class="btn btn-link" @click="cambiarBanUbicacion()">Ubicaciones
                    <i v-if="!banUbicaciones" class="fas fa-chevron-down"></i> 
                    <i v-else class="fas fa-chevron-up"></i> 
                </button>
          
         
            
    
            <dt class="tab" v-for="(ubicacion, i) in ubicacionesList"  :key="ubicacion">
                 <label v-if="banUbicaciones">
                    <input type="checkbox" :value="ubicacion" v-model="checkedLugares" :id="'checkBoxU' + i"  v-on:change="cargarUrl">
                    <label :for="'checkBoxU' + i">
                        {{ ubicacion }}
                    </label>
                </label>
            </dt>
           
        </dl>
        <dl>
                <button class="btn btn-link" @click="cambiarBanCargo()">Cargos
                    <br>
                    <i v-if="!banCargos" class="fas fa-chevron-down"></i> 
                    <i v-else class="fas fa-chevron-up"></i> 
                </button>

            <dt class="tab espaciado" v-for="(cargo, i) in cargosList" :key="cargo">
                 <label v-if="banCargos">
                    <input type="checkbox" :value="cargo" v-model="checkedCargos" :id="'checkBoxC' + i" v-on:change="cargarUrl">
                    <label :for="'checkBoxC' + i">
                        {{ cargo}}
                    </label>
                </label>
            </dt>
           
        </dl>
        <div class="row justify-content-around prueba">
            <!--<div class="col-xs-6">
                <div class="input-group">
                    <span>-->
                        <button @click="limpiar" class="btn btn-outline-secondary col-sm-4 filtros-boton">Limpiar</button>
                    <!--</span>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
   created() {
       this.ofer = this.$store.state.ofertas
       this.ubicaciones = Array.from(new Set(this.ofer.map(oferta=>oferta.ubicacion)));
       this.cargos = Array.from(new Set(this.ofer.map(oferta=>oferta.puesto)))
       //this.cargarUrl();
       this.aplicarUrl();
       //this.cargarUrl();
        
   },
    
    data(){

        return{
            query:'',
            queryUbicaciones:'',
            queryCargos:'',
            checkedLugares:[],
            checkedCargos:[],
            ban1:0,
            ofer: this.$store.state.ofertas,
            ubicaciones:null,
            cargos:null,
            banCargos: false,
            banUbicaciones:false
        }
    },
    methods:{
        cambiarBanUbicacion(){
            this.banUbicaciones = !this.banUbicaciones
        },

         cambiarBanCargo(){
            this.banCargos = !this.banCargos
        },

        sortLugares(){
            
            return this.ubicaciones.sort();
        },
        sortPuestos(){
           
            return this.cargos.sort();
        },

        listar(){
            if(this.checkedLugares.length >= 1 || this.checkedCargos.length >= 1){
                //console.log(this.checkedLugares.length)
                if(this.checkedLugares.length >= 1 ){
                    for(var i = 0; i < this.checkedLugares.length ; i++){
                        if (i != this.checkedLugares.length-1){
                            this.queryUbicaciones  = this.queryUbicaciones +'ubicacion='+ this.checkedLugares[i] +'&' 
                        }else{
                            this.queryUbicaciones  = this.queryUbicaciones +'ubicacion='+ this.checkedLugares[i]
                        }
                        
                    }

                }

                if(this.checkedCargos.length >= 1){
                    for(var i = 0; i < this.checkedCargos.length ; i++){
                        if (i != this.checkedCargos.length-1){
                            this.queryCargos  = this.queryCargos +'puesto='+ this.checkedCargos[i] +'&' 
                        }else{
                            this.queryCargos  = this.queryCargos +'puesto='+ this.checkedCargos[i]
                        }
                        
                    }
                }
            } 
            console.log(this.queryUbicaciones)
            console.log(this.queryCargos)
            
            this.query = this.queryUbicaciones + '&' +this.queryCargos
            this.queryUbicaciones = '';
            this.queryCargos = '';


            console.log(this.query)
           try{
               //console.log("ejecutanto query: "+'http://localhost:3000/api/oferta/listar?'+this.query)
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar?'+this.query).
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                        }
                    })
            }catch(e){
                console.log(e)
            }
        }, 

        cargarUrl(){
            if(this.checkedLugares.length >= 1 || this.checkedCargos.length >= 1){
                console.log("Cargando la URL")
                //console.log(this.checkedLugares.length)
                if(this.checkedLugares.length >= 1 ){
                    for(var i = 0; i < this.checkedLugares.length ; i++){
                        if (i != this.checkedLugares.length-1){
                            this.queryUbicaciones  = this.queryUbicaciones +'ubicacion='+ this.checkedLugares[i] +'&' 
                        }else{
                            this.queryUbicaciones  = this.queryUbicaciones +'ubicacion='+ this.checkedLugares[i]
                        }
                        
                    }

                }

                if(this.checkedCargos.length >= 1){
                    for(var i = 0; i < this.checkedCargos.length ; i++){
                        if (i != this.checkedCargos.length-1){
                            this.queryCargos  = this.queryCargos +'puesto='+ this.checkedCargos[i] +'&' 
                        }else{
                            this.queryCargos  = this.queryCargos +'puesto='+ this.checkedCargos[i]
                        }
                        
                    }
                }
            }

            this.query = this.queryUbicaciones + '&' +this.queryCargos
            this.queryUbicaciones = '';
            this.queryCargos = '';
            
            //location.href = 'https://app-merc.herokuapp.com/BolsaDeTrabajo#Tabla/?'+this.query;
            this.$router.push({name:'BolsaDeTrabajoTabla', params: {query:this.query}})


            try{
               //console.log("ejecutanto query: "+'http://localhost:3000/api/oferta/listar?'+this.query)
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar?'+this.query).
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                            
                           
                        }
                    })
            }catch(e){
                console.log(e)
            }
        },

       async aplicarUrl(){
            let urlQuery = window.location.href.split('/');
            console.log(urlQuery)
            this.query = urlQuery[4];
            console.log("El query es"+this.query)
           if (this.query == null){
               
                try{
               //console.log("ejecutanto query: "+'http://localhost:3000/api/oferta/listar?'+this.query)
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar').
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                            console.log("Aplicando query inicial")
                            
                        }
                    })
            }catch(e){
                console.log(e)
            }

           }else{
               //console.log("Hay un query")
               
               try{
               //console.log("ejecutanto query: "+'http://localhost:3000/api/oferta/listar?'+this.query)
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar'+this.query).
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                        }
                    })
            }catch(e){
                console.log(e)
            }
        
            //Sacar los lugares de la url
            console.log(this.query)
            let lugaresUrl = this.query.split('ubicacion=')
            //console.log(lugaresUrl);
            for (var i  = 1; i < lugaresUrl.length; i++){
                //console.log(i)
                if (i != lugaresUrl.length-1){
                    lugaresUrl[i] = lugaresUrl[i].replace('&','');
                    
                }else{
                    console.log(lugaresUrl[i])
                    let temp = lugaresUrl[i].split('&')
                    lugaresUrl[i] = temp[0];
                    
                }
                this.checkedLugares[i-1] = lugaresUrl[i];
            }

            //Sacar los puestos de la url
            let puestosUrl = this.query.split('puesto=')
            //console.log(puestosUrl)
            for (var i = 1; i < puestosUrl.length; i++){
                if(i != puestosUrl.length-1){
                    puestosUrl[i] = puestosUrl[i].replace('&','');
                }
                this.checkedCargos[i-1] = puestosUrl[i];

            }
            
            //Se debería estar poniendo esta dirección
            //location.href = 'http://localhost:8080/BolsaDeTrabajo#Tabla/?'+this.query;
            this.cargarUrl();
           }
        },

        limpiar(){
            this.checkedLugares = [];
            this.checkedCargos = [];
            this.queryUbicaciones = "";
            this.queryCargos = '';
            this.queryTemporal = ''
            this.$router.push({name:'BolsaDeTrabajoTablaLimpiar'})
            //location.href = 'https://app-merc.herokuapp.com/BolsaDeTrabajo#Tabla/?'
            try{
               
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar').
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                            
                           
                        }
                    })
            }catch(e){
                console.log(e)
            }
        }

        
        
    },
    computed:{
        ubicacionesList(){
            
            return this.sortLugares();
        },
        cargosList(){
            return this.sortPuestos();
        }
    }
}
</script>

<style scoped>
    .tab {
        
        margin-left: 20%;
    }

    .tab2 {
        
        margin-left: 15%;
    }

    .titulos{
        font-weight: bold;

    }

    .elementos{
        font-weight: normal;
    }

    .prueba{
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .filtros-boton{
        margin-bottom: 5px;
        margin-left: 20px;
        margin-right: 20px;

        
    }


    input[type="checkbox"] {
        visibility: hidden;
        margin-top: 6px;
    }
    label {
        cursor: pointer;
    }
    input[type="checkbox"] + label:before {
        border: 2px solid #64aaac;
        content: "\00a0";
        display: inline-block;
        font: 15px/1em sans-serif;
        height: 16px;
        margin: 0 .25em 0 0;
        padding: 0;
        width: 16px;
    }
    input[type="checkbox"]:checked + label:before {
        background: transparent;
        color: #64aaac;
        content: "\2713";
        text-align: center;
    }

    .espaciado{
        padding-bottom:16px ;
    }

</style>