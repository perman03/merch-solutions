<template>
    <div >
        <h1 class="text-center">Envíanos tus datos</h1>
        <div class="row mx-auto my-3">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="font-weight-bold" for="nombre">Nombre</label>
                    <input v-model="nombre" id="nombre" type="text" class="form-control" placeholder="Nombre">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="font-weight-bold" for="apellidos">Apellidos</label>
                    <input v-model="apellidos" id="apellidos" type="text" class="form-control" placeholder="Apellidos">
                </div>
            </div>
        </div>
        <div class="row mx-auto my-3">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="font-weight-bold" for="email">Correo</label>
                    <input v-model="correo" id="email" type="email" class="form-control" placeholder="Correo">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="font-weight-bold" for="telefono">Teléfono</label>
                    <input v-model="telefono" id="telefono" type="text" class="form-control" placeholder="Telefono">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="font-weight-bold" for="edad">Edad</label>
                    <input v-model="edad" id="edad" type="text" class="form-control" placeholder="Edad">
                </div>
            </div>
        </div>
        <div class="row mx-auto my-3">
            <div class="col-md-7">
                <div class="form-group">
                    <label class="font-weight-bold" for="puesto">Vacante</label>
                    <input v-model="puesto" id="puesto" type="text" placeholder="Vacante" class="form-control" readonly>
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label class="font-weight-bold" for="lugar">Ciudad</label>
                    <input v-model="lugar" id="lugar" type="text" placeholder="Ciudad" class="form-control" readonly>
                </div>
            </div>
        </div>
        <div class="row mx-auto my-3">
            <div class="col-md-3">
                <label class="font-weight-bold">Sube tu CV</label>
                <div class="card mcard h-100 rounded">
                    <div class="card-body dashed text-center">
                        <i class="mx-auto d-block awards far fa-file-alt fa-4x text-dark mt-5"></i>
                        <a href="#" class="btn btn-primary mt-2" @click="$refs.filecv.click()">{{nombreArchivoCV}}</a>
                         <input name="file" v-on:change="cargarArchivoCV" type="file" ref="filecv" class="custom-file-input" id="cvFile" accept=".docx, .doc, .pdf" style="display: none">
                    </div>
                </div>
                <!--
                <div class="custom-file">
                    <input name="file" v-on:change="cargarArchivoCV" type="file" ref="file" class="custom-file-input" id="cvFile" accept=".docx, .doc, .pdf" >
                    <label class="custom-file-label" for="cvFile">{{nombreArchivoCV}}</label>
                </div>
                -->
            </div>
            <div class="col-md-3">
                <label class="font-weight-bold">Sube tu foto</label>
                <div class="card mcard h-100 rounded">
                    <div class="card-body dashed text-center">
                        <i class="mx-auto d-block awards far fa-user fa-4x text-dark mt-5"></i>
                        <a href="#" class="btn btn-primary mt-2" @click="$refs.fileimg.click()">{{nombreArchivoImg}}</a>
                        <input name="file" v-on:change="cargarArchivoImg" type="file" ref="fileimg" class="custom-file-input" id="photoFile" accept=".png, .jpeg, .jpg" style="display: none">

                    </div>
                </div>
                <!--
                 <div class="custom-file">
                    <input name="file" v-on:change="cargarArchivoImg" type="file" ref="file" class="custom-file-input" id="photoFile" accept=".png, .jpeg, .jpg">
                    <label class="custom-file-label" for="imgFile">{{nombreArchivoImg}}</label>
                </div>
                -->
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="font-weight-bold" for="educacion">Escolaridad</label>
                            <select v-model="educacion" id="educacion" class="form-control">
                                <option value="" disabled selected>Escolaridad</option>
                                <option value="Primaria">Primaria</option>
                                <option value="Secundaria">Secundaria</option>
                                <option value="Preparatoria">Preparatoria</option>
                                <option value="Licenciatura">Licenciatura</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="font-weight-bold" for="experiencia">Experiencia</label>
                            <input v-model="experiencia" type="text" placeholder="Experiencia" class="form-control">
                        </div>    
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-md-12">
                        <div class="form-check form-check-inline">
                            <span class="gris rounded font-weight-bold">Género</span>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="genero" class="form-check-input" type="radio" name="inlineRadioOptionsGenero" id="Hombre" value="Hombre">
                            <label class="form-check-label" for="Hombre">Hombre</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="genero" class="form-check-input" type="radio" name="inlineRadioOptionsGenero" id="Mujer" value="Mujer">
                            <label class="form-check-label" for="Mujer">Mujer</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="genero" class="form-check-input" type="radio" name="inlineRadioOptionsGenero" id="NoEspecificado" value="NoEspecificado" >
                            <label class="form-check-label" for="NoEspecificado">Prefiero no especificar</label>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-md-12">
                        <div class="form-check form-check-inline">
                            <span class="font-weight-bold gris rounded">¿Está dispuesto a cambiar de residencia?</span>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="disponibilidadResidencia" class="form-check-input" type="radio" name="inlineRadioOptionsResidencia" id="cambioResidencia" value="cambioResidencia">
                            <label class="form-check-label" for="cambioResidencia">Sí</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="disponibilidadResidencia" class="form-check-input" type="radio" name="inlineRadioOptionsResidencia" id="noCambioResidencia" value="noCambioResidencia">
                            <label class="form-check-label" for="noCambioResidencia">No</label>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-md-12">
                        <div class="form-check form-check-inline">
                            <span class="gris rounded font-weight-bold">¿Está dispuesto a viajar?</span>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="disponibilidadViajar" class="form-check-input" type="radio" name="inlineRadioOptionsViajar" id="viajar" value="viajar">
                            <label class="form-check-label" for="viajar">Sí</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="disponibilidadViajar" class="form-check-input" type="radio" name="inlineRadioOptionsViajar" id="noviajar" value="noviajar">
                            <label class="form-check-label" for="noviajar">No</label>
                        </div>
                    </div>
                </div>
                <div v-show="valida">
                     <div class="text-danger" v-for="v in validaMensaje" :key="v" v-text="v">
                     </div>
                </div>
                   


            <div class="row my-3">
                <div class="col-md-3">
                    <button @click="enviar" class="btn btn-primary verde-invertido btn-xs btn-block">Enviar</button>
                </div>
                <div class="col-md-3">
                    <button @click="limpiar" class="btn btn-outline verde btn-xs btn-block">Limpiar</button>
                </div>
            </div>
        </div>       
    </div >
         <div class="alert alert-success" role="alert" v-show="exito">
            <h4 class="alert-heading">Solicitud enviada!</h4>
            <p>Gracias por aplicar para el trabajo</p>
            <hr>
            <p class="mb-0">Se te notificará cuando se tenga respuesta a tu solicitud</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        let url = window.location.href;
        url = url.split('/')

        console.log(url);
        this.lugar = url[7]
        this.puesto = url[6]
        this.idOferta = url[5]
    },

    
    data(){
        return{
            
            idOferta:'',
            nombre:'',
            apellidos:'',
            correo:'',
            cv: '',
            telefono:'',
            puesto: this.$store.state.puestoActual,
            lugar: this.$store.state.lugarActual,
            edad: '',
            educacion:'',
            experiencia:'',
            img:'',
            genero:'Hombre',
            disponibilidadViajar:'',
            disponibilidadResidencia: '',
            dpViajar:false,
            dpResidencia:false,
            nombreArchivoCV: 'Sube tu curriculum',
            nombreArchivoImg:'Sube tu foto',
            validaMensaje:[],
            valida:0,
            exito:0,
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            idSolicitud:'',
            cvExtencion:'',
            imgExtencion:''

        }
    },

    methods: {
        validar(){
            this.valida=0;
            this.validaMensaje=[];

            if (this.nombre.length<1){
                this.validaMensaje.push('Se requiere agregar nombre');
            }

            if (this.apellidos.length<1){
                this.validaMensaje.push('Se requiere agregar Apellidos');
            }

            if (this.correo.length<1){
                this.validaMensaje.push('Se requiere agregar Correo');
            }

            if (this.cv.length < 1){
                this.validaMensaje.push('Se requiere agregar CV');
            }

            if (this.img.length<1){
                this.validaMensaje.push('Se requiere agregar Foto');
            }

            if (this.telefono.length<1){
                this.validaMensaje.push('Se requiere agregar Teléfono');
            }

             if (this.genero.length<1){
                this.validaMensaje.push('Se requiere agregar Género');
            }

            if (this.edad.length<1){
                this.validaMensaje.push('Se requiere agregar su Edadd');
            }

            if (this.validaMensaje.length){
                this.valida=1;
            }

            return this.valida;

        },


        enviar(){

            if(this.validar()){
                this.exito = 0;
                return
            }
            this.exito = 0;

            if(this.disponibilidadViajar == 'viajar'){
                this.dpViajar = true;
            }

            if (this.disponibilidadResidencia == 'cambioResidencia'){
                this.dpResidencia = true;
            }
            
            this.edad = parseInt(this.edad)
            
          

            /*console.log('Nombre ' + this.nombre )
            console.log('Apellidos ' + this.apellidos)
            console.log('telefono ' + this.telefono )
            console.log('Puesto ' + this.puesto )
            console.log('Lugar ' + this.lugar )
            console.log('Edad ' + this.edad  )
            console.log('Educación ' + this.educacion)
            console.log('Experiencia ' + this.experiencia )
            console.log('genero ' + this.genero )
            console.log('Disponibilidad viajar ' + this.dpViajar )
            console.log('Disponibilidad Residencia' + this.dpResidencia )*/

            

            axios.post('https://app-merc.herokuapp.com/api/solicitud/agregar',
                {
                    'nombre':this.nombre, 
                    'apellidos': this.apellidos,
                    'correo':this.correo,
                    'descripcion': this.apellidos, 
                    'cv':this.nombreArchivoCV, 
                    'telefono':this.telefono, 
                    'puesto':this.puesto, 
                    'lugar':this.lugar, 
                    'edad':this.edad, 
                    'educacion':this.educacion, 
                    'experiencia':this.experiencia, 
                    'img':this.nombreArchivoImg, 
                    'genero':this.genero, 
                    'disponibilidadViajar':this.dpViajar,
                    'disponibilidadResidencia':this.dpResidencia,
                    'idOferta':this.idOferta
                }).then(respuesta => {
                 
                 return respuesta.data;

             }).then(data => {
                 //Actualizamos con el ID
                 console.log("EL ID ES "+data._id)
                 this.idSolicitud = data._id;
                
                //Actualiza el nombre de los archivos
                let aux= this.nombreArchivoCV.split('.')
                this.cvExtencion = aux[1];
                aux= this.nombreArchivoImg.split('.')
                this.imgExtencion = aux[1];
                this.nombre = this.nombre.replace(' ','');
                this.apellidos = this.apellidos.replace(' ','')
                let nuevoNombreCv = this.nombre+this.apellidos +'-' +this.idSolicitud+'-cv.'+ this.cvExtencion;
                let nuevoNombreImg = this.nombre+this.apellidos +'-' +this.idSolicitud+'-img.'+this.imgExtencion;
                nuevoNombreCv = nuevoNombreCv.replace(' ','');
                nuevoNombreImg = nuevoNombreImg.replace(' ','');
            axios.patch('https://app-merc.herokuapp.com/api/solicitud/actualizar/'+this.idSolicitud,
                {
                    'cv':nuevoNombreCv, 
                    'img':nuevoNombreImg,
                }).then(respuesta => { 
                    this.exito = 1;
                    this.limpiar();  
                }).catch(error => {
                    console.log("Error al actializar la solicitud")
                });
            
            const nuevoCv = new File([this.cv],nuevoNombreCv , {type: this.cv.type});

            
            let formDataCV = new FormData();
           
            formDataCV.append('file', nuevoCv);

           
            
            const nuevoImg = new File([this.img],nuevoNombreImg, {type: this.img.type})
            let formDataImg = new FormData();
            
            formDataImg.append('file', nuevoImg);

            //Envia el CV
            axios.post( 'https://app-merc.herokuapp.com/api/solicitud/cargarArchivos',
                formDataCV,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }
            ).then(function(){
            console.log('SUCCESS EN EL CV!!');
            })
            .catch(function(){
            console.log('FAILURE EN EL CV!!');
            });

            //Envia la solicitud
            axios.post( 'https://app-merc.herokuapp.com/api/solicitud/cargarArchivos',
                formDataImg,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }
            ).then(function(){
            console.log('SUCCESS! EN LA IMG !');
            })
            .catch(function(){
            console.log('FAILURE EN LA IMG!!');
            });

            }).catch(function(error){
                console.log(error);
            });               
        },

       

        cargarArchivoCV(){
            this.cv = document.getElementById('cvFile').files[0];
            this.nombreArchivoCV = this.cv.name;
            //this.nombreArchivoCV = new Date().toISOString().slice(0, 10)+"-"+ this.nombreArchivoCV;
            //console.log(this.nombreArchivoCV)
            
        },

        cargarArchivoImg(){
            this.img = document.getElementById('photoFile').files[0];
            this.nombreArchivoImg = this.img.name;
            //this.nombreArchivoImg = new Date().toISOString().slice(0, 10)+"-"+ this.nombreArchivoImg;
            //console.log(this.nombreArchivoImg)
        },

        limpiar(){
            this.nombre = '';
            this.apellidos = '';
            this.correo = '';
            this.cv = '';
            this.puesto = '';
            this.lugar = '';
            this.educacion = '';
            this.experiencia = '';
            this.genero = 'Hombre';
            this.disponibilidadViajar='',
            this.disponibilidadResidencia='';
            this.telefono='';
            this.edad = '';
            this.valida=0;
            this.validaMensaje=[];
            this.nombreArchivoImg = 'Sube tu foto'
            this.nombreArchivoCV = 'Sube tu curriculum'
            this.img = ''
            this.$store.state.puestoActual = '';
            this.$store.state.lugarActual = '';
            this.idOferta = ''
        }
    },
}
</script>

<style scoped>
    .verde{
        color: #00b4c7;
        border-color: #00b4c7;
    }
    .verde-invertido{
        color: white;
        background-color: #00b4c7;
        border-color: #00b4c7;
    }
    .gris{
        background-color: #ececec;
        padding: 10px;
    }
    .mcard{
        border-radius: 10%;
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
    .dashed{
        border: 2px dashed lightblue;
        border-radius: 8%;
        margin: 12%;
    }
</style>