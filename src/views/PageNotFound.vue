<template>
    <div>
        <div class="container-fluid">
            <div class="a vertcal-center">
                <img src="../assets/logo_merc_mini.png" alt="">
                <h1>ERROR</h1>
                <h1>404</h1>
                
                <h2>¡No encontramos la página a la que quieres acceder!</h2>

                <router-link to='/'>
                <button class="btn btn-primary"> Regresar </button>
                
                </router-link>

            </div>
      
        </div>
        
    </div>
</template>

<script>
export default {
    name:"PageNotFound"
}
</script>

<style scoped>
    .container-fluid{
        background-color: #04b4c475;
        height: 100vh;
    }

    div.a{
        text-align: center;
         padding-top: 20%;
        top: 50%;
        left: 50%;
    }

    button{
        background-color: #e94574;
    }
    
    .vertical-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>