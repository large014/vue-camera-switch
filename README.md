# vue-camera-switch
モバイルでのフロント、リアカメラを切り替えるためのVueカスタムディレクティブ  
[DEMO](https://large014.github.io/vue-camera-switch/)

## Install
```
./src/VueCameraSwitch.js をコピー
```

### Usage
```
import VueCameraSwitch from './VueCameraSwitch.js'

Vue.use(VueCameraSwitch, { addIndicators: true })

new Vue({
  render: h => h(App),
}).$mount('#app')

//--- videoタグを利用するところで、v-cameraswitchのカスタムディレクティブを設定
<video playsinline muted autoplay v-cameraswitch="cameraType"></video>

export default {
  data(){
    return{
      cameraType:0,
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
```
"cameraType" の値を切り替えるとカメラがきりかわります。  
"cameraType" に"-1"を設定すると、カメラがOFFになります。

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
