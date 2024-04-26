<template>
    <div class="container h-100 main">
        <div class="row align-items-center h-100">
            <div class="col-md-4 to-hover">
                <div class="card mcard text-center">
                    <div class="card-body hoverable">
                    <h5 class="card-title">Misión</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="card mt-5 text-center border-0">
                    <div class="card-body ">
                        <i class="pt-4 mx-auto d-block awards fas fa-award fa-4x text-white" @click="activarPopReconocimientos()"></i>
                        <h5 class="pt-5 card-title reconocimientos text-truncate">Nuestros reconocimientos</h5>
                        <app-Pop v-if="$store.state.banPopUpReconocimientos">
                                
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos"></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos"></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>

                                      <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros reconocimientos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                
                                  <div slot="botonCerrar">
                                    <button class="btn btn-danger" id="boton" @click="desactivarPopReconocimientos()"> cerrar </button>
                                </div>
                        </app-Pop>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 to-hover">
                <div class="card mcard text-center">
                    <div class="card-body hoverable">
                    <h5 class="card-title">Historia</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="card mt-5 text-center border-0">
                    <div class="card-body ">
                        <i class="pt-4 mx-auto d-block awards far fa-id-badge fa-4x text-white" @click=" activarPopCertificaciones()"></i>
                        <h5 class="pt-5 card-title reconocimientos">Nuestras certificaciones</h5>

                        <app-Pop v-if="$store.state.banPopUpCertificaciones">
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros certificaciones</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros certificaciones</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros certificaciones</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="botonCerrar">
                                    <button class="btn btn-danger" id="boton" @click="desactivarPopCertificaciones()"> cerrar </button>
                                </div>
                        </app-Pop>
                    </div>
                </div>
            </div>
            <div class="col-md-4 to-hover">
                <div class="card mcard text-center">
                    <div class="card-body hoverable">
                    <h5 class="card-title">Visión</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div> 
                <div class="card mt-5 text-center border-0">
                    <div class="card-body ">
                        <i class="pt-4 mx-auto d-block awards far fa-address-card fa-4x text-white"  @click="activarPopContactanos()"></i>
                        <h5 class="pt-5 card-title reconocimientos">Contáctanos</h5>
                            <app-Pop v-if="$store.state.banPopUpContactanos">
                        
                                 
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros contactos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros contactos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div slot="carta" class="card-width border-0">
                                    <div class="card-body">
                                        <i class="pt-4 mx-auto d-block white-awards fas fa-award fa-4x reconocimientos" ></i>
                                        <h5 class="pt-5 card-title reconocimientos text-rec">Nuestros contactos</h5>
                                        <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                 <div slot="botonCerrar">
                                    <button class="btn btn-danger" id="boton" @click="desactivarPopContactanos()"> cerrar </button>
                                </div>
                            </app-Pop>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PopUp from "../ComponentesCompartidos/PopUp";
    export default {
        components:{
            appPop:PopUp
        },

        methods: {
            activarPopReconocimientos(){
                
                this.$store.state.banPopUpReconocimientos = true;
            },
            desactivarPopReconocimientos(){                
                this.$store.state.banPopUpReconocimientos = false;
            },
            activarPopCertificaciones(){
                this.$store.state.banPopUpCertificaciones = true;
            },
            desactivarPopCertificaciones(){  
                this.$store.state.banPopUpCertificaciones = false;
            },
            activarPopContactanos(){
                this.$store.state.banPopUpContactanos = true;
            },
            desactivarPopContactanos(){  
                this.$store.state.banPopUpContactanos = false;
            },
        },
    }
</script>

<style scoped>
    .main{
        padding-top: 90px;
    }

    .mcard{
        margin-left: 7%;
        margin-right: 7%;
        border-radius: 6%;
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
    .to-hover:hover>.mcard>.hoverable{
        color:white;
        background-color: #e94574;
        border-radius: 6%;
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }

    .awards{
        background-color: #00b3c7;
        height: 120px;
        width: 120px;
        border-radius: 20%;
    }
    .reconocimientos{
        color: #00b3c7;
        font-weight: bold;
    }

    #pop{
        top: 20%;
    }
    .card-width{
        width: 18rem;
    }
    .text-rec{
        font-size: 15px;
    }
    .white-awards{
        background-color: white;
        height: 120px;
        width: 120px;
        border-radius: 20%;
    }


    #boton{
        position: absolute;
        right:    50px;
        top:   25px;
        background-color: #e70847;
    }
</style>