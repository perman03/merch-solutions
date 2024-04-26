<template>
    <div class="container h-100">
        
        <div class="row align-items-center h-100" v-if="window.ancho >=992" id="">
            <div class=" col-lg-12 col-xl-12">
                <CarouselCard :interval="7000" height="400px" type="card" indicator-position="none"	 arrow="always">

                    <CarouselCardItem >
                        
                    <div class="card ">
                        <img src="../../assets/icono2.png" class="imagen">
                        <h4 class="card-title"> Gerente </h4>
                        <p class="text-justify "> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>

               <CarouselCardItem id="prueba">
                    <div class="card">
                        <img src="../../assets/icono1.png" class="imagen">
                        <h4 class="card-title"> Promotor </h4>
                        <p class="text-justify"> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>

                

                <CarouselCardItem >
                    <div class="card">
                        <img src="../../assets/icono3.png" class="imagen">
                        <h4> Administrador </h4>
                        <p class="text-justify"> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>
            </CarouselCard>
            </div>
            
        </div>
        
         <div class="row align-items-center h-100 centrarV" v-if="window.ancho  < 992" id="">
            <div class=" col-lg-12 col-xl-12" >
                <CarouselCard :interval="9000" height="600px" type="string" indicator-position="none" arrow="always" id="centrar">
                    
           
                    <CarouselCardItem >
                        
                    <div class="card ">
                        <img src="../../assets/icono2.png" class="imagen">
                        <h4 class="card-title"> Gerente </h4>
                        <p class="text-justify "> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>

               <CarouselCardItem id="prueba">
                    <div class="card">
                        <img src="../../assets/icono1.png" class="imagen">
                        <h4 class="card-title"> Promotor </h4>
                        <p class="text-justify"> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>

                

                <CarouselCardItem >
                    <div class="card">
                        <img src="../../assets/icono3.png" class="imagen">
                        <h4> Administrador </h4>
                        <p class="text-justify"> 
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries
                            Lorem ipsum is placeholder text commnonly used in graphic, print, and publishing industries 
                        </p>
                    </div>
            
                </CarouselCardItem>
            </CarouselCard>
            </div>
            
        </div>
    </div>

    
</template>


<script>
    import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
    import 'vue-carousel-card/styles/index.css'
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

    components: { CarouselCard, CarouselCardItem }
}
</script>

<style scoped>
    .card{
        background-color: #65e1ec00;
        border-color:white ;
        
         border-radius: 6%;
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        margin-left: 20%;
        margin-right: 20%;
    }

    .card:hover{
        border-color: gray;
        background-color:#04b4c4 ;
        color: white;
    }   

    .col-xl-12{
        padding-top: 0%
    }

    .col-lg-12{
        padding-top: 0%
    }

    .col-md-12{
        padding-top: 10px
    }

    .col-sm-12{
        padding-top: 90px
    }

    p{
        font-size: 15px;
        margin-left: 22%;
        margin-right: 22%;
    }

    h4{
        padding-top: 5%;
        text-align: center;
        
    }


    .imagen{
        height: 100px;
        width: 100px;
        align-content: center;
        border-radius: 10%;
        margin-left: auto;
        margin-right: auto;
         display: block;
        box-shadow: 1px 1px;
    }

    .centrarV{
        margin-top: 30%;
        
        
    }

</style>