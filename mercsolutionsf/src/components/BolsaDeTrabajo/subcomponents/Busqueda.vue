<template>
    <div class="container-fluid p-3 text-white" id="contenedor">
      <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="input-group col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 col-md-6 offset-md-3  col-sm-10 offset-sm-1">
                <input  v-model="campo" type="text" name="search" id="search" placeholder="Buscar trabajos" class="form-control">
                <span class="input-group-btn">
                    <button @click="enviar" type="button" name="commit" value="Buscar" class="btn btn-primary" id="button"> Buscar </button>
                 </span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  

  data(){
    return{
      of2:[],
      campo:''
    }
  },

  methods: {
    enviar(){
      let query = 'https://app-merc.herokuapp.com/api/oferta/buscar?puesto='+this.campo+'&descripcion='+this.campo;
      console.log("Haciendo uso del botón buscar")
      try{
          axios.get(query).
          then(response=>
              {
                if(response.status===200){
                    this.$store.state.ofertas =response.data
                    console.log( this.$store.state.ofertas)
                }
              })
          }catch(e){
            console.log(e)
        }
      
     
  
    }
  },

}
</script>

<style scoped>
  #contenedor{
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 32px 32px 32px 32px;
    -moz-border-radius: 32px 32px 32px 32px;
    -webkit-border-radius: 32px 32px 32px 32px;
    border: 1px solid #c9c9c9b4;

  }

  #button{
    background: #00b3c7;
    padding-right:  25px;
    padding-left: 25px;
    -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   border-radius: 10px;
   border-color: #00b3c7;
    font-size: 15px;
  }

  #search{
    border-right-color:#f8f8f800;
  }
</style>