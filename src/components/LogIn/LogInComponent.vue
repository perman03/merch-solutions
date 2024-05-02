<template>
    <div class="container-fluid login-bg">
        <div class="row align-items-center">
        <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
            <div>
                <img class="img-fluid" src="./../../assets/logo-full.png" alt="">
            </div>
            <h1 class="pb-5">Ingresar</h1>
            <div class="modal-content">
                <form class="col-12" id="user-group" @submit.prevent="ingresar()">
                    <div class="form-group text-left">
                        <label class="font-color" for="trabajador">Número de trabajador</label>
                        <input class="form-control form-control-lg" v-model="numeroTrabajador" id="trabajador" type="text">
                    </div>
                    <div class="form-group text-left">
                        <label class="font-color" for="password">Contraseña</label>
                        <input class="form-control form-control-lg" v-model="password" id="password" type="password">                    
                    </div>
                    <div class="col-12 forgot text-left">
                        <p class="font-color">¿Olvidaste la contraseña?</p>
                    </div>
                </form>
                <div>
                    <p class="text-danger" v-if="errorM "> {{errorM}} </p>
                    <button  type="submit" class="btn btn-dark btn-block btn-lg" @click="ingresar()"> Ingresar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            numeroTrabajador:'',
            password:'',
            errorM: null
        }
    },

    methods: {
        ingresar(){
            axios.post('https://app-merc.herokuapp.com/api/usuario/login',{
            numeroTrabajador: this.numeroTrabajador,
            password:this.password

             }).then(respuesta => {
                 
                 return respuesta.data;
             }).then(data => {
                 console.log("TOKEN: "+data.tokenReturn)
                 this.$store.dispatch("guardarToken", data.tokenReturn);
                 this.$router.push({name:'Principal'})
             })
             
             .catch(error => {
                this.errorM = null;
                if (error.response.status === 404){
                    this.errorM = 'No existe el usuario o la contraseña es incorrecta'
                }else{
                    this.errorM = 'Ocurrió un error con el servidor'
                }
             });
        }
    },
}
</script>

<style scoped>

    .main-section{
        margin: 0 auto;
    }

    .modal-content{
        background-color: #e4fbff;
        opacity: .9;
        border-color: #e4fbff;
    }
    
    .user-img{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .user-img img{
        width: 150px;
        height: 150px;
    }

    input{
        width: 100%;
        height: 42px;
        font-size: 18px;
        border: 2px solid #aaa;
        padding-left: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        transition: .2s;
        margin-bottom: 15px;
    }

    input:focus{
        border-color: #00b4c7;
        box-shadow: 0 0 8px #00b4c7;
    }

    .input-icon-user{
        position: relative;
    }

    .input-icon-user i{
        position: absolute;
        left: 0;
        top: 5px;
        padding: 9px 15px;
        color: #aaa;
        transition: 0.25s;
    }

    .input-icon-user input:focus + i{
        color: #00b4c7;
    }


    .forgot{
        padding: 5px 0;
    }

    .forgot a{
        color: white;
    }

    .login-bg{
        min-height: 100%;
        height: 100%;
    }

    .font-color{
        color: #868994;
    }
    
</style>

