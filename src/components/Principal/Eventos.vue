
<template>
<div>
             <div class="col-12 titulo" >
                 <h1 class="text-center">Eventos</h1>
                  <!-- Ancho: {{ window.ancho }} px
                    Alto: {{ window.alto}} px-->
             </div>
 
    <div class="container-fluid" id="centrado">
        <div class="row" v-if="window.ancho >= 768">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento1.jpg" class="imagen">
                <h4> Reclutamiento interno </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento3.jpg" class="imagen">
                <h4> Conferencia de desarrollo </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento5.jpg" class="imagen">
                <h4> Viajes de negocios </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento2.jpg" class="imagen">
                <h4> Reclutamiento Masivo </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento4.jpg" class="imagen">
                <h4> Talleres de ventas </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 contenedor-evento">
                <img src="../../assets/evento6.jpg" class="imagen">
                <h4> Conferencia de gerentes </h4>
                <p class="text-justify"> 
                    Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                </p>
            </div>
                
                <!--<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 " >
                    <img src="../../assets/evento1.jpg" class="imagen">
                    <h4> Reclutamiento interno </h4>
                    <p class="text-justify"> 
                        Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                    </p>
                    <br>
                    <img src="../../assets/evento2.jpg" class="imagen">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>
           
          
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <img src="../../assets/evento3.jpg" class="imagen">
                     <h4>Conferencia de desarrollo </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                      <br>
                    <img src="../../assets/evento4.jpg" class="imagen">
                     <h4> Talleres de ventas </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <img src="../../assets/evento5.jpg" class="imagen">
                     <h4> Viajes de negocios </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                      <br>
                    <img src="../../assets/evento6.jpg" class="imagen">
                    <h4> Conferencia de gerentes </h4>
                    <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>-->
        </div>

        <!--<div class="row" v-if="window.ancho <= 992  && window.ancho >= 768">
            
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 " >
                    <img src="../../assets/evento1.jpg" class="imagen2">
                    <h4> Reclutamiento interno </h4>
                    <p class="text-justify"> 
                        Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                    </p>
                    <br>
                    <img src="../../assets/evento2.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>
           
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <img src="../../assets/evento3.jpg" class="imagen2">
                     <h4>Conferencia de desarrollo </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                      <br>
                    <img src="../../assets/evento4.jpg" class="imagen2">
                     <h4> Talleres de ventas </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <img src="../../assets/evento5.jpg" class="imagen2">
                     <h4> Viajes de negocios </h4>
                     <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                      <br>
                    <img src="../../assets/evento6.jpg" class="imagen2">
                    <h4> Conferencia de gerentes </h4>
                    <p class="text-justify"> Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries </p>
                </div>
        </div>-->

         <div class="row" v-if="window.ancho < 768">
        
            <carousel :indicators="true" :per-page=1 id="carrusel">
                <slide class="contenedor-evento">
                    <img src="../../assets/evento1.jpg" class="imagen2">
                    <h4> Reclutamiento interno </h4>
                    <p class="text-justify"> 
                        Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                    </p>
                </slide>
                    
                <slide class="contenedor-evento">
                    <img src="../../assets/evento2.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> 
                       Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                   </p>
                </slide>

                <slide class="contenedor-evento">
                    <img src="../../assets/evento3.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> 
                       Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                   </p>
                </slide>

                 <slide class="contenedor-evento">
                    <img src="../../assets/evento4.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> 
                       Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                   </p>
                </slide>

                 <slide class="contenedor-evento">
                    <img src="../../assets/evento5.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> 
                       Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                   </p>
                </slide>

                 <slide class="contenedor-evento">
                    <img src="../../assets/evento6.jpg" class="imagen2">
                    <h4> Reclutamiento Masivo </h4>
                   <p class="text-justify"> 
                       Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                   </p>
                </slide>

            </carousel>
              
        </div>




    
    </div>    
</div>
    
        
    
   
</template>

<script>
//import Carrusel from '../ComponentesCompartidos/CarruselGaleria';
import { Carousel, Slide } from 'vue-carousel';
export default {
    data() {
        return {
            window:{
                alto:0,
                ancho:0
            },
            ban1:0
        }
    },

     created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.ancho = window.innerWidth;
            this.window.alto = window.innerHeight;
        }
    },

    components:{
        Carousel,
        Slide
    }
}
</script>

<style scoped>

    .container{
        margin: auto;
    }

    .row{
        padding-left: 10%;
        padding-right: 10%;
    }

    #carrusel{
       
        margin-left: auto;
        margin-right: auto;
     
        width: 80%;
      
        padding: 10px;
        padding-top: 15%;

    }

    p{
        font-size: 15px;
        margin-left: 9%;
        margin-right: 9%;
    }

    h4{
        /*padding-top: 5%;*/
        margin-top: 15px;
        text-align: center;
        color: #04b4c4;
    }

    h5{
        margin-left: 9%;
        margin-right: 9%;
    }

    #centrado{
       
        
        text-align: center;
    }

    .titulo{
        margin-top: 80px;
    }
  
    .imagen{
        width: 80%;
        height: 80%;
        align-content: center;
        border-radius: 5%;
        margin-left: 2%;
        margin-top: 3% ;
        -webkit-box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
    }


    .imagen2{
        height: 80%;
        width: 80%;
        align-content: center;
        border-radius: 5%;
        margin-left: 2%;
        margin-top: 3% ;
        -webkit-box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 58px -16px rgba(0,0,0,0.75);
    }

    .abajo{
        margin-top: 20px;
        padding-bottom: 70px;
    }

    .contenedor-evento{
        margin-bottom: 70px;
    }

    .prueba{
        background-color: black;
    }

</style>