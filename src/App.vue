<template>
  <div id="app">
    <video playsinline muted autoplay v-cameraswitch="cameraType"></video>
    <div>
      <button @click="onSwitch">カメラの切り替え</button>
      <button @click="onStop">カメラの停止</button>
      <button @click="onPlay">カメラの再生</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      cameraType:0,
      savecameraType:0
    }
  },
  methods:{
    onSwitch(){
      this.cameraType = (this.cameraType == 0) ? this.cameraType =1 : this.cameraType = 0;
    },
    onStop(){
      this.savecameraType = this.cameraType;
      this.cameraType = -1;
    },
    onPlay(){
      this.cameraType = this.savecameraType;
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
