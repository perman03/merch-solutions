<template>
   <div >
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper2" v-if="$store.state.banPopUp">
        <div class="modal-container">
            <div class="container-fluid">
                <div class="text-center">
                  <slot  name="titulo">
                    
                  </slot>
                </div>

            <div >
              <slot name="subItem">
                
              </slot>
            </div>
          </div>

        </div>
      </div>

      <div v-if="$store.state.banPopUpReconocimientos || $store.state.banPopUpCertificaciones || $store.state.banPopUpContactanos" class="modal-wrapper">
        <div class="modal-container">
          <div class="row align-items-center">
            <slot class="col-sm-4" name="carta"></slot>
            <slot name="botonCerrar"></slot>
          </div>
          <!--
          <div class="text-center">
            <slot class="text-center" name="titulo">
            </slot>
          </div>

          <div >
            <slot name="subItem">
            </slot>
          </div>

          <div >
            <slot  name="contenidoSubItem">
            </slot>
          </div>

          <div>
              <slot  name="imagen">
              </slot>
          </div>
          -->
        </div>
      </div>

    </div>
  </transition>
  </div> 
</template>

<script>
export default {
    
    data(){
        return{
            mostrar: true
        }
    },
    methods:{
      
    }
}
</script>

<style  scoped>


    .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  display: table;
  
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
   position: relative;
  margin: 0 auto;
  top: 30%;
}

.modal-wrapper2 {
  display: table-cell;
   position: relative;
  margin: 0 auto;
  top: 20%;
}

.modal-container {
  width: 1000px;
  height: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color:rgba(255, 255, 255, 0.253);
  border-radius: 60px 60px 60px 60px;
  -moz-border-radius: 60px 60px 60px 60px;
  -webkit-border-radius: 60px 60px 60px 60px;
  border: transparent;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  opacity: 100%;
 backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2px);


  
}



.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
  
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>