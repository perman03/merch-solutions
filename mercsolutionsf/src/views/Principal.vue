<template>
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light">
            
            <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand" href="/">
                <img src="../assets/logo_merc_mini.png" alt="Logo">
            </a>

            <div class="collapse navbar-collapse justify-content-end scroll flex" id="navbarTogglerDemo01">
                <div class="navbar-nav menu" id="menu">
                    <a class="nav-link active" data-menuanchor="Inicio" href="#Inicio">Inicio</a>
                    <a class="nav-link" data-menuanchor="Presencia" href="#Presencia">Presencia</a>
                    <a class="nav-link" data-menuanchor="Conocenos" href="#Conocenos">Conocenos</a>
                    <a class="nav-link" data-menuanchor="Galeria" href="#Galeria">Galeria</a>
                    <a class="nav-link" data-menuanchor="Eventos" href="#Eventos">Eventos</a>
                    <a class="nav-link" data-menuanchor="Unete" href="#Unete">Unete</a>
                    <router-link class="nav-link" to='/BolsaDeTrabajo'>Bolsa de Trabajo</router-link>
                </div>
            </div>
            
        </nav>
       
        <full-page ref="fullpage" :options="options" id="fullpage" @after-load="afterLoad">
            <div class="section">
                <app-inicio> </app-inicio>
            </div>
            <div class="section">
            
                <app-presencia ></app-presencia>
               
            </div>
            <div class="section">
                <app-conocenos></app-conocenos>
            </div>
            <div class="section">
                <app-galeria></app-galeria>
            </div>
            <div class="section">
                <app-eventos></app-eventos>
            </div>
           <div class="section">
                <app-unete></app-unete>
            </div>
            <div class="section fp-auto-height">
               <!-- <app-Beneficios></app-Beneficios>-->
               
               <div class="myContent">
                    <app-Footer></app-Footer>
                </div>
            </div>
        </full-page>
    </div>
</template>



<script>
    import Inicio from '../components/Principal/Inicio'
    import Presencia from '../components/Principal/Presencia'
    import Conocenos from '../components/Principal/Conoce'
    import Galeria from '../components/Principal/Galeria'
    import Eventos from '../components/Principal/Eventos'
    import Unete from '../components/Principal/Unete'
    import Footer from '../components/ComponentesCompartidos/Footer'
    export default {
        components: {
            appInicio: Inicio,
            appPresencia: Presencia,
            appConocenos: Conocenos,
            appGaleria: Galeria,
            appEventos: Eventos,
            appUnete: Unete,
            appFooter: Footer
        },
        data() {
            return {
                options: {                    
                    autoScrolling: true, // Se activa el scroll.
                    afterLoad: this.afterLoad,
                    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
                    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
                    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
                    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
                    css3: true, // Si usara CSS3 o javascript.
                    easingcss3: 'ease-out', // Curva de velocidad del efecto.
                    loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
                                
                    //licenseKey: 'YOUR_KEY_HEERE',
                    navigation: true, // Muesta la barra de navegación.
                    menu: '#menu',// Menu de navegación.
                    anchors: ['Inicio', 'Presencia', 'Conocenos','Galeria','Eventos','Unete','Footer'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
                    navigationTooltips: ['Inicio', 'Presencia', 'Conocenos','Galeria','Eventos','Unete','Footer'], // Tooltips que mostrara por cada boton.
                    showActiveTooltip: false, // Mostrar tooltip activa.
                    sectionsColor: ['', '', '','','','','#DCDCDC'], // Color de fondo de cada seccion.
                    scrollOverflow: true
                    
                },
            }
        },
        computed: {
            logueado(){

            },

            esAdministrador(){

            },

            esRh(){

            },

            esMedia(){
                
            }
        },

        created() {
            
        },
        methods: {
            salir(){
               this.$store.dispatch("salir");
           },
            afterLoad(origin, destination, direction){
               if(origin.index == 0 || destination.index == 1){
                    this.$store.state.mapa=true
                    console.log("Presencia, mapa: "+this.$store.state.mapa);
                    //console.log("seccion: "+origin.index);
                }else{
                    this.$store.state.mapa=false
                    console.log("Presencia, mapa: "+this.$store.state.mapa);
                }
                //console.log("seccion: "+origin.index);
           }
        },
    }
    
</script>



<style scoped>

    @import "../assets/fullpage.css";

    .myContent{
        height: auto;
      }

    .navbar{
        position: fixed;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 70;
        width: 100%;
        padding-left: auto;
        padding-right: 45px;
        /*padding: 10px 20px;*/
        min-height: 0px;
    }

    .navbar a{
        /*margin: 10px;*/
        text-decoration: none;
        text-transform: uppercase;
        font-family: sans-serif;
        font-size: 16px;
    }

    .navbar a.active{
        border-bottom: solid #04b4c4;             
    }

    .navbar .menu a.active,
    .navbar .menu a:hover{
        color: #04b4c4;       
    }



    @media (max-width: 992px) {
        .navbar-collapse
        {
            background-color:#e4fcff;
        }

        .navbar-toggler{
            background-color:white;            
        }       

        .scroll{
            overflow-y: auto;
            /*padding-top: 0%;*/
            /*max-height: 650px;*/
            height: 78vh;
            
        }    
    }  

    

</style>