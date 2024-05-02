<template>
      
  <div>
    
     
    <carousel-3d class="carousel-3d-container img-fluid" :controls-visible="true" :autoplay-timeout="1000" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="60" >
      
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
            <img src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="img-fluid" alt="zero"/>
          </figure>
        </slide>
     
      </carousel-3d>
    
    </div>
    
    
          
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
  export default {
    data(){
      return{
            slides: [ 1, 2, 3, 4, 5]
      }
    },
    components: {
        Carousel3d,
        Slide 
    }
  };
</script>

<style scoped>

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container {
  position: absolute;
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
  
</style>