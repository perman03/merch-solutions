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
                    <a class="nav-link active" data-menuanchor="Publicidad" href="#Publicidad">Publicidad</a>
                    <a class="nav-link" data-menuanchor="TiposTrabajo" href="#TiposTrabajo">Tipos De Trabajo</a>
                    <a class="nav-link" data-menuanchor="Beneficios" href="#Beneficios">Beneficios</a>
                    <a class="nav-link" data-menuanchor="Tabla" href="#Tabla">Tabla</a>
                    <a class="nav-link" data-menuanchor="Organigrama" href="#Organigrama">Organigrama</a>
                    
                    <button class="btn btn-primary btnEntrar " type="button"  v-if="!logueado" @click="entrar()">Log In</button>
                    
                    <div class="dropdown" v-if="logueado">
                        <button class="btn btn-primary dropdown-toggle btnSalir" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="../assets/usuario.svg" height="20px" width="20px">

                            {{usuario}}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" @click="irSolicitudes()">Solicitudes</a>
                            <a class="dropdown-item itemSalir" @click="salir()">Salir</a>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </nav>

       <full-page ref="fullpage" :options="options" id="fullpage">
             <div class="section">
                <app-publicidad> </app-publicidad>
            </div>
            <div class="section">
                <app-tiposdetrabajo> </app-tiposdetrabajo>
            </div>
            <div class="section">
                <app-beneficios> </app-beneficios>
            </div>
            <div class="section" >
                <app-bolsadetrabajocomponent> </app-bolsadetrabajocomponent>
            </div>
            <div class="section">
                <app-organigrama> </app-organigrama>
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

    import Publicidad from '../components/BolsaDeTrabajo/Publicidad'
    import TiposDeTrabajo from '../components/BolsaDeTrabajo/TipoDeTrabajo'
    import Beneficios from '../components/BolsaDeTrabajo/Beneficios'
    import BolsaDeTrabajoComponent from '../components/BolsaDeTrabajo/BolsaDeTrabajoComponent'
    import Organigrama from '../components/BolsaDeTrabajo/Organigrama'
    import Footer from '../components/ComponentesCompartidos/Footer'

    export default {
        components:{
            appPublicidad: Publicidad,
            appTiposdetrabajo: TiposDeTrabajo,
            appBeneficios: Beneficios,
            appBolsadetrabajocomponent: BolsaDeTrabajoComponent,
            appOrganigrama: Organigrama,
            appFooter: Footer


        },
        data() {
            return {
                usuario:'Usuario',
                query:'',
                etiquetaTabla: 'Tabla',
                options: {
                    autoScrolling: true, // Se activa el scroll.
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
                    anchors: ['Publicidad', 'TiposTrabajo', 'Beneficios','Tabla','Organigrama','Footer'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
                    navigationTooltips: ['Publicidad', 'TiposTrabajo', 'Beneficios','Tabla','Organigrama','Footer'], // Tooltips que mostrara por cada boton.
                    showActiveTooltip: false, // Mostrar tooltip activa.
                    scrollOverflow: true,
                    sectionsColor: ['', '', '','','','#DCDCDC'] // Color de fondo de cada seccion.
                },
            }

            
        },

        computed: {
           

            logueado(){
                return this.$store.state.usuario;
                
            },

            esAdministrador(){
                this.usuario +=' Admin'
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'ADMIN_ROL'

            },

            esRh(){
                this.usuario +=' Rh'
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'RH_ROL'
            },

            esMedia(){
                this.usuario +=' Media'
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'MEDIA_ROL'
            },

             
        },

        created() {
            this.$store.dispatch("autoLogin")
            
            //this.comprobar();
        },

        methods: {
           salir(){
               this.$store.dispatch("salir");
           },

           entrar(){
               this.$router.push({name:'LogIn'})
           },

           irSolicitudes(){
               this.$router.push({name:'Solicitudes'})
           }
        },

        watch: {
         
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
        z-index: 1;
        width: 100%;
        padding-left: auto;
        padding-right: 45px;
        /*margin: 10;*/
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
            height: 31vh;
        }

        

    }

    .itemSalir{
        color: red;
    }

    .btnSalir{
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    border: 0px solid #000000;


    }

    .btnEntrar{
border-radius: 24px 24px 24px 24px;
-moz-border-radius: 24px 24px 24px 24px;
-webkit-border-radius: 24px 24px 24px 24px;
border: 0px solid #000000;
         background: #04b4c4;       
    }

    .dropdown-item{
        border-radius: 20px 20px 20px 20px;
        -moz-border-radius: 20px 20px 20px 20px;
        -webkit-border-radius: 20px 20px 20px 20px;
    }

    .dropdown-menu{
        border-radius: 20px 20px 20px 20px;
        -moz-border-radius: 20px 20px 20px 20px;
        -webkit-border-radius: 20px 20px 20px 20px;    
    }

   
</style>