<template>
    <div class="container-fluid ">
        <div class="row main">
            <app-busqueda ></app-busqueda>
        </div>
        <div class="row h-50">
             <div class="col-sm-3 div-filtro h-25">
                <app-filtro  v-if="ban"></app-filtro>
            </div>
            
            <div class="col-sm-9  altura">
                <app-ofertas  v-if="ban"></app-ofertas>
            </div>
        </div> 
        <!--<router-link to='/BolsaDeTrabajo/Formulario'>Solicitud</router-link>-->
        <!--v-bind:style="{ height: nOfertasString+'px' }"-->
    </div>
</template>

<script>
    import Busqueda from "./subcomponents/Busqueda.vue";
    import Filtros from "./subcomponents/Filtros.vue";
    import Ofertas from "./subcomponents/Ofertas.vue";
    import axios from "axios"
    export default {
        components:{
            appBusqueda:Busqueda,
            appFiltro:Filtros,
            appOfertas:Ofertas
        },
        data(){
            return{
                ops:{

                },
                ban:0,
                nOfertas:0,
                nOfertasString:'',
                activeColor: '',
                
                
                
            }
        },

        

        async mounted(){
            try{
                axios.get('https://app-merc.herokuapp.com/api/oferta/listar').
                then(response=>
                    {
                        if(response.status===200){
                            this.$store.state.ofertas =response.data
                            
                            console.log(this.$store.state.ofertas)
                            this.nOfertas = 150 * this.$store.state.ofertas.length;
                            this.nOfertasString = this.nOfertas.toString(10)
                            this.nOfertasString
                            console.log(this.nOfertasString)
                            this.activeColor = 'red'
                            this.ban = 1
                        }
                    })
            }catch(e){
                console.log("Error");
            }
            
            
        }
    }
</script>

<style scoped>
    .div-filtro{
        background-color: #e4fcff;
        border-radius: 25px;
  
    }

    .main{
        margin-top: 90px;
    }

    .prueba{
        background-color: black;
    }
    
    .altura{
        height: 1100px;
       
        
    }
</style>