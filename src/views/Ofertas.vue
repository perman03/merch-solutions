<template>
    <div>
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                 <app-bolsadetrabajocomponent > </app-bolsadetrabajocomponent>
            </div>
        </full-page>
    </div>
</template>

<script>
    import BolsaDeTrabajoComponent from '../components/BolsaDeTrabajo/BolsaDeTrabajoComponent'
    export default {
        data(){
            return{
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
                   
                    showActiveTooltip: false, // Mostrar tooltip activa.
                    sectionsColor: ['', '', '','','','','#DCDCDC'], // Color de fondo de cada seccion.
                    scrollOverflow: true
                    
                },
            }
        },

        components:{
           appBolsadetrabajocomponent: BolsaDeTrabajoComponent,
        }
    }
</script>

<style  scoped>
    @import "../assets/fullpage.css";
 

</style>