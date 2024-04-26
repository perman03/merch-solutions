<template>
    <div class="container-fluid main">
        <app-Login></app-Login>
    </div>
</template>

<script>

import LogIn from '../components/LogIn/LogInComponent.vue'

export default {
    components:{
        appLogin:LogIn
    }   
}
</script>

<style scoped>
    .main{
        background-color: #e4fbff;
    }
</style>