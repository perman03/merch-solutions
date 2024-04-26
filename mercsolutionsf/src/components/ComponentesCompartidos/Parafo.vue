<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>MercSolutions</h1>
                <span class="txt" v-if="!readMoreActivated">{{longText.slice(0, 100)}}</span>
                <span class="txt" v-if="readMoreActivated" v-html="longText"></span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a class="btn" v-if="!readMoreActivated" @click="activateReadMore">Leer mas...</a>
                <a class="btn" v-if="readMoreActivated" @click="activateReadless" >Leer menos</a>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    
    
    data() {
        return {
            longText:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non ipsum esse asperiores numquam ducimus officiis quidem dignissimos adipisci! Commodi, accusantium!.`,
            readMoreActivated: false
        }
    },
    methods: {
        activateReadMore(){
            this.readMoreActivated = true;
        },
        activateReadless(){
            this.readMoreActivated = false;
        }
    }    
}
</script>

<style scoped>



    .container h1{
        color: #04b4c4;
        height: auto;
        width: auto;
        text-align: justify;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 4vw;
      
    }

    .container .btn{
        background-color: #04b4c4;
        text-align: justify;
        font-family: sans-serif;
        color: white;
        border: none;
        font-size:2vw;
        margin: 5% auto;
        
    }

    .txt{
        color: #3C3533;
        text-align: justify;
        font-family: sans-serif;
        font-size: 2vw;
        width: auto;
        height: auto;
        
    }    
    
    
</style>