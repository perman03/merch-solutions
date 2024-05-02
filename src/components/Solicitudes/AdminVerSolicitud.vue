<template>
 <div class="container h-100">
    <h1 class="text-center mt-3"> Solicitud </h1>
    <div class="row mt-5">
    <div class="col-md-6">
        <div class="card text-center">
          <img class="card-img-top" :src="img" alt="foto-candidato">
          <div class="card-body">
            <button @click="downloadWithAxios(cv)" class="btn btn-primary"> Descargar el CV </button>
          </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="row">
          <div class="col-sm-6">
            <h4>Nombre </h4>  <h5 class="font-weight-normal"> {{nombre}} </h5>
          </div>
          <div class="col-sm-6">
            <h4>Apellidos </h4>  <h5 class="font-weight-normal"> {{apellidos}} </h5>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-6">
            <h4>Edad </h4>  <h5 class="font-weight-normal"> {{edad}}</h5>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-6">
            <h4>Puesto </h4>  <h5 class="font-weight-normal">  {{puesto}} </h5> 
          </div>
          <div class="col-sm-6">
            <h4>Lugar </h4>   <h5 class="font-weight-normal"> {{lugar}} </h5>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-6">
            <h4>Teléfono </h4>  <h5 class="font-weight-normal"> {{telefono}} </h5>
          </div>
          <div class="col-sm-6">
            <h4>Email </h4>  <h5 class="font-weight-normal"> {{correo}} </h5>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-6">
            <h4>Escolaridad</h4>   <h5 class="font-weight-normal"> {{escolaridad}} </h5>
          </div>
          <div class="col-sm-6">
            <h4>Experiencia </h4>  <h5 class="font-weight-normal"> {{experiencia}} </h5>
          </div>
        </div>
         <div class="row mt-2">
          <div class="col-sm-6">
             <h4>Disponibilidad de viajar</h4>   <h5 class="font-weight-normal"> {{disponivilidadViajar}}</h5>
          </div>
          <div class="col-sm-6">
            <h4>Cambio de residencia</h4>  <h5 class="font-weight-normal">{{disponivilidadResidencia}}</h5>
          </div>
        </div>
    </div>
  </div>  
    <!--
    <div class="row">
        {{imgChida}}
        <img  class="col-sm-3 offset-sm-1" width="500" height="200" :src="img">
        <div  class="col-sm-3 offset-sm-0" >  <h4>Nombre </h4>  <h5 class="font-weight-normal"> {{nombre}} </h5> </div>
        <div  class="col-sm-2 offset-sm-1" > <h4>Apellidos </h4>  <h5 class="font-weight-normal"> {{apellidos}} </h5> </div>
        <div  class="col-sm-2 offset-sm-1" > <h4>Edad </h4>  <h5 class="font-weight-normal"> {{edad}} </h5> </div>
    </div>
    <br>
    <div class="row">
        <div  class="col-sm-3 offset-sm-1" > <button @click="downloadWithAxios(cv)" class="btn btn-primary"> Descargar el CV </button></div>
        <div  class="col-sm-2 offset-sm-0" > <h4>Puesto </h4>  <h5 class="font-weight-normal">  {{puesto}} </h5> </div>
        <div  class="col-sm-2 offset-sm-1" > <h4>Lugar </h4>   <h5 class="font-weight-normal"> {{lugar}} </h5> </div>
    </div>
    <br>
     <div class="row"> 
        <div  class="col-sm-2 offset-sm-4" > <h4>Teléfono </h4>  <h5 class="font-weight-normal"> {{telefono}} </h5> </div>
        <div  class="col-sm-2 offset-sm-1" > <h4>Email </h4>  <h5 class="font-weight-normal"> {{correo}} </h5> </div>
    </div>
    <br>
     <div class="row"> 
        <div  class="col-sm-2 offset-sm-4" > <h4>Escolaridad</h4>   <h5 class="font-weight-normal"> {{escolaridad}} </h5> </div>
        <div  class="col-sm-2 offset-sm-1" > <h4>Experiencia </h4>  <h5 class="font-weight-normal"> {{experiencia}} </h5> </div>
    </div>
     <br>
     <div class="row"> 
         <div  class="col-sm-2 offset-sm-4" > <h4>Disponibilidad de viajar</h4>   <h5 class="font-weight-normal"> {{disponivilidadViajar}}</h5> </div>
        
    </div>
     <div class="row"> 
        <div  class="col-sm-2 offset-sm-4" > <h4>Cambio de residencia</h4>  <h5 class="font-weight-normal">{{disponivilidadResidencia}}</h5> </div>
    </div>
    -->
 </div>
    
</template>

<script>
    import download from 'file-download'
    import axios from "axios";
    export default {

        data() {
            return {
                nombre:'',
                apellidos:'',
                edad:0,
                puesto:'',
                lugar:'',
                telefono:'',
                correo:'',
                escolaridad:'',
                experiencia:'',
                disponivilidadViajar:'',
                disponivilidadResidencia:'',
                img:"https://mercsolutions-files.s3.us-east-2.amazonaws.com/",
                
                cv: '',
                solicitud:null,
                id: '',
                options: null,
                url:'',
                imgChida:null
            }
        },
            
        created(){
           
            var urlId = window.location.href.split('/');
            this.id = urlId[5];
            

            try{
            let query = 'https://app-merc.herokuapp.com/api/solicitud/listar/'+this.id; 
              
              +
            console.log(query)
            axios.get(query).
              then(response=>
                {
                  if(response.status===200){
                    this.solicitud =response.data;
                    console.log(this.solicitud)
                    this.nombre = this.solicitud.nombre;
                    this.apellidos = this.solicitud.apellidos;
                    this.edad = this.solicitud.edad;
                    this.puesto = this.solicitud.puesto;
                    this.lugar = this.solicitud.lugar;
                    this.telefono = this.solicitud.telefono;
                    this.correo = this.solicitud.correo;
                    this.escolaridad = this.solicitud.educacion[0];
                    this.experiencia = this.solicitud.experiencia[0];
                    if (this.solicitud.disponivilidadViajar == true){
                        this.disponivilidadViajar = "Sí"
                    }else{
                        this.disponivilidadViajar = "No"
                    }
                    if(this.solicitud.disponibilidadResidencia == true){
                        this.disponivilidadResidencia = "Sí"
                    }else{
                        this.disponivilidadResidencia = "No"
                    }

                    this.img += this.solicitud.img;
                    this.cv = this.solicitud.cv;
                   
                  

                    this.url = "https://mercsolutions-files.s3.us-east-2.amazonaws.com/";
                }
            })
            }catch(e){
                console.log("Error al obtener solicitudes");
            }
        },

        methods: {
            forceFileDownload(response, cv){
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', cv)
                document.body.appendChild(link)
                link.click()
            },
            
            downloadWithAxios(cv){
            axios({
                method: 'get',
                url: 'https://mercsolutions-files.s3.us-east-2.amazonaws.com/'+cv,
                responseType: 'arraybuffer'
            })
            .then(response => {
                
                this.forceFileDownload(response, cv)
                
            })
            .catch(() => console.log('Error al obtener CV'))
            }, 

           
    },

    

}
    
</script>
