<template>
  <div
    class="expandable-image"
    :class="{
      expanded: expanded
    }"
    @click="expanded = true"
  >
    
    <i
      v-if="expanded"
      class="close-button"
    >
      <div>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#666666" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
      </div>
      
         
    </i>
     <div v-if="expanded" class="a">
          <h2 class="evento-titulo" > Titulo </h2>
          <h3  class="evento-fecha"> DIA MES AÑO </h3>
          <h4 class="evento-descripcion"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate accusantium doloremque commodi. Praesentium optio accusamus distinctio eius non sequi illum tenetur placeat, quae veniam reiciendis ab nulla doloribus debitis reprehenderit! </h4>
      </div>
    <i
      v-if="!expanded"
      class="expand-button"
    >
    
    <div class="b">
        <h2 > Nombre del evento</h2>
    </div>
    </i>
    <img v-bind="$attrs"/>
   
   
  </div>
</template>

<script>
export default {
  props: {
    closeOnBackgroundClick: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      expanded: false,
      closeButtonRef: null
    }
  },

  methods: {
    closeImage (event) {
      this.expanded = false
      event.stopPropagation()
    },

    freezeVp (e) {
      e.preventDefault()
    },

    onExpandedImageClick (e) {
      e.stopPropagation()
      const image = this.cloned.querySelector('img')
      const imagePosition = this.getRenderedSize(image.width, image.height, image.naturalWidth, image.naturalHeight)
      if (
        (e.clientX < imagePosition.left) ||
        (e.clientX > imagePosition.right) ||
        (e.clientY < imagePosition.top) ||
        (e.clientY > imagePosition.bottom)
      ) {
        this.expanded = false
      }
    },

    getRenderedSize (cWidth, cHeight, oWidth, oHeight) {
      const oRatio = oWidth > oHeight
        ? oWidth / oHeight
        : oHeight / oWidth
      const width = oWidth >= oHeight
        ? oRatio * cHeight
        : cWidth
      const height = oHeight > oWidth
        ? oRatio * cWidth
        : cHeight
      const left = (this.cloned.clientWidth - width) / 2
      const right = left + width
      const top = (this.cloned.clientHeight - height) / 2
      const bottom = top + height
      return { left, top, right, bottom }
    }
  },

  watch: {
    expanded (status) {
      this.$nextTick(() => {
        if (status) {
          this.cloned = this.$el.cloneNode(true)
          this.closeButtonRef = this.cloned.querySelector('.close-button')
          this.closeButtonRef.addEventListener('click', this.closeImage)
          document.body.appendChild(this.cloned)
          document.body.style.overflow = 'hidden'
          this.cloned.addEventListener('touchmove', this.freezeVp, false);
          if (this.closeOnBackgroundClick) {
            this.cloned.addEventListener('click', this.onExpandedImageClick)
          }
          setTimeout(() => {
            this.cloned.style.opacity = 1
          }, 0)
        } else {
          this.cloned.style.opacity = 0
          this.cloned.removeEventListener('touchmove', this.freezeVp, false);
          if (this.closeOnBackgroundClick) {
            this.cloned.removeEventListener('click', this.onExpandedImageClick)
          }
          setTimeout(() => {
            this.closeButtonRef.removeEventListener('click', this.closeImage)
            this.cloned.remove()
            this.cloned = null
            this.closeButtonRef = null
            document.body.style.overflow = 'hidden'
            
          }, 250)
        }
      })
    }
  }
}
</script>

<style scoped>
.expandable-image {
  position: relative;
  transition: 1s opacity;
  cursor: pointer ;
  box-shadow: 2px 2px;
}

body > .expandable-image.expanded {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding-bottom: 0 !important;
  cursor: default;
  

}

body > .expandable-image.expanded > img {
  width: 100%;
  max-width: 1200px;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
  opacity: 1;
  

}

body > .expandable-image.expanded > .close-button {
  display: block;
}

.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  cursor: pointer;
}
.expand-button svg,
.close-button svg {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));
}
.expand-button svg path,
.close-button svg path {
  fill: #FFF;
}
.expand-button {
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 10px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  opacity: 0;
  transition: 0.2s opacity;
}

.expandable-image:hover .expand-button {
  opacity: 1;
}
.expand-button svg {
  width: 20px;
  height: 20px;
}
.expand-button path {
  fill: #FFF;
}

.expandable-image img {
  
  width: 100%;
}

.a{
  transition-delay: 2s; 
  color:#FFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}



.b{
  
    text-align: center;
    color: #FFF;
    
}

</style>