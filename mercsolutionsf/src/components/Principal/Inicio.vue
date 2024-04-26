<template>

    <div  class="content2">
        <ul class = "image-gallery">
            <li>
        <div >
            <div>
              <div>
                <app-parrafo></app-parrafo>
              </div>
            </div>
        </div>
        </li>

          <li class="hijo centrar">
        
                  
                      
                      <!--img src="https://i.ibb.co/tsnY4q0/gear-1.png" alt="engranes" class="img"-->
                      
                          <app-carrusel class="carrusel img-fluid"></app-carrusel>

                          <!-- <app-carrusel class="carrusel"></app-carrusel-->
                  
           </li>
        </ul>


                 
    </div>
</template>

<script>
import Carrusel from '../ComponentesCompartidos/Carrusel'
import Parrafo from '../ComponentesCompartidos/Parafo'
export default {
    components: {
        appCarrusel: Carrusel,
        appParrafo: Parrafo
    }
}
</script>

<style scoped>
.centrar{
      align-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;

}
img { 
  align-content: center;
  align-items: center;
  height: "600px";
  width: "auto";
  
}


    @media (min-width: 992px){
        .container{
            padding: 5% 0;
        }   
    }

    @media (max-width: 992px){
        .container{
            padding: 10% 0;
            display:flex;
            flex-direction:column;
            flex-wrap:wrap;
            justify-content:center;
            margin-left: auto;
            margin-right: auto;
        }   
    }
    

    @media (min-width: 992px){
        div[class^='col-']{
            padding: 10% 0;
            /*border: 50px solid white;*/
        }
    }

    .carrusel{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width:55vw;
        padding: 22% 0;
        min-height: 200px;
        
    }

    .content2{
            
            justify-content: center;
            height: 90%;
            width: 90%;
            
            margin-left: auto;
            margin-right: auto;
		}
		
		.hijo{
            height: 200px;
            background-image: url("https://i.ibb.co/tsnY4q0/gear-1.png");
            background-size: 100% 100%;
            height: auto;
            width: auto;
           
		}
    
    ul li {
  flex-grow: 1;
  width: 100%;
  min-width: 270px;
  min-height: 10vh;
  padding-top: auto;
  font-weight: bold;
  margin: 0;
  padding: 0;
  position: relative;
}


    .flex-grid-view[id="ref-1-12"] .wrapper{
        -ms-grid-columns: (1fr) ;
        grid-template-columns: repeat(3,1fr);

    }
    .a{
       
        margin-top: auto;
    }
    .contenedor{
           display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    }
    .elemento{
        width:10%;
    }

    
.container {
  padding: 0.1em;
}

.image-gallery {
  align-content: center;
  padding-top: 5vw;
  list-style: none;
  position:unset;
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  width: auto;
}

ul li {
  flex-grow: 1;
  width: 250px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  position: relative;
}

ul li img {
  height: auto;
  width: auto;
}

.crop-image {
  height:300px;
  overflow: hidden;
}

ul li a span {
  position: absolute;
  color: white;
  bottom: 7px;
  left: 15px;
  font-size: .6em;
}

/*Control the size of our elements*/
@media only screen and (max-width: 40em) {
    ul li {
        width: 150px;
    }
}

.cuadros {
  background-color: transparent;
  overflow: hidden;
 }



</style>