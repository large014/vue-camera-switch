# vue-camera-switch
モバイルでのフロント、リアカメラを切り替えるためのVueカスタムディレクティブ  
[DEMO] https://large014.github.io/vue-camera-switch/

## Install
```
./src/VueCameraSwitch.js をコピー
```

### Usage
```
import VueCameraSwitch from './VueCameraSwitch.js'

Vue.use(VueCameraSwitch, { addIndicators: true })

<video playsinline muted autoplay v-cameraswitch="cameraType"></video>

export default {
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
```
"cameraType" の値を切り替えるとカメラがきりかわります

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
