<template>
  <div id="app">
    <video v-cameraswitch="cameraType"></video>
    <div>
      <button @click="onClick">カメラの切り替え</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      cameraType:0,
    }
  },
  methods:{
    onClick(){
      this.cameraType = (this.cameraType == 0) ? this.cameraType =1 : this.cameraType = 0;
    }
  }
}
</script>


<style>
video{
  width: 300px;
  height: 300px;
}
</style>
