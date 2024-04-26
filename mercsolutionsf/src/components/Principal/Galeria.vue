<template>
  <div class="container-fluid d-flex h-100 justify-content-center">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="row align-items-center h-100">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img v-for="j in 6" :key="j" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4" v-lazy="media[j].src || media[j].thumb" alt="First slide" @click="openGallery(j)">
          </div>
          <div class="carousel-item">
            <img v-for="j in 6" :key="j" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4" v-lazy="media[j].src || media[j].thumb" alt="Second slide" @click="openGallery(j)">
          </div>
        </div>
      </div>
      <div class="caja">
        <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" :site-loading="siteLoading"/>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  import LightBox from '../ComponentesCompartidos/Lightbox'
  import siteLoading from './siteloading.gif'
  import {
    media,
    paragraphs,
    totalMedia
  } from './dummy'
  export default {
    components: {
      LightBox,
    },
    data () {
      return {
        media,
        siteLoading,
        paragraphs,
        totalMedia
      }
    },
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      },

      getTotalPages(){
        return this.totalMedia/6;
      }
    }
  }
</script>

<style  scoped>
  .caja{
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }

  .zoom {
  
    transition: transform .2s; /* Animation */
    margin: 0 auto;
  }

  .zoom:hover {
    transform: scale(1.3); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  img{
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10%;
  }

  .container-fluid{
    background-color: #e4fcff;
  }

  .carousel-indicators li {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #de4774;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23de4774' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23de4774' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
  
  .carousel-inner{
    padding-left: 10%;
    padding-right: 10%;
  }

  .carrusel-inner{
    background-color: black;
  }

</style>