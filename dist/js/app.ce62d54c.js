(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],v=0,p=[];v<s.length;v++)i=s[v],a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},4805:function(e,t,r){"use strict";var n=r("897e"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("video",{directives:[{name:"cameraswitch",rawName:"v-cameraswitch",value:e.cameraType,expression:"cameraType"}],attrs:{playsinline:"",muted:"",autoplay:""},domProps:{muted:!0}}),r("div",[r("button",{on:{click:e.onClick}},[e._v("カメラの切り替え")])])])},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},l=u,c=(r("4805"),r("2877")),v=Object(c["a"])(l,i,s,!1,null,"b9167eee",null),p=v.exports,d={name:"app",components:{HelloWorld:p},data:function(){return{cameraType:0}},methods:{onClick:function(){this.cameraType=0==this.cameraType?this.cameraType=1:this.cameraType=0}}},f=d,h=(r("034f"),Object(c["a"])(f,a,o,!1,null,null,null)),g=h.exports,m=(r("ac6a"),{install:function(e,t){var r,n=[],a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,o=0,i=!1;function s(e){for(var t=0;t!==e.length;++t){var r=e[t];"videoinput"===r.kind&&n.push(r.deviceId)}}function u(){console.log("Error : Unable to get device.")}function l(e){var t=n[e];console.log("videoSource = "+t),window.stream&&window.stream.getTracks().forEach(function(e){e.stop()});var a={video:{deviceId:t?{exact:t}:void 0}};navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mediaDevices.getUserMedia||navigator.msGetUserMedia,navigator.mediaDevices.getUserMedia(a).then(function(e){"srcObject"in r?r.srcObject=e:r.src=window.URL&&e,window.URL=window.URL||window.webkitURL||window.msURL||window.mozURL,window.stream=e,r.onloadedmetadata=function(){r.play(),setTimeout(function(){i=!1},800)}}).catch(function(e){console.log(e)})}e.directive("cameraswitch",{bind:function(e,t){},inserted:function(e,t){r=e,navigator.mediaDevices.enumerateDevices().then(s).catch(u),o=a?o=0==t.value?1:0:t.value,l(o)},update:function(e,t){i||(i=!0,o=a?o=0==t.value?1:0:t.value,l(o))},unbind:function(e,t){}})}}),_=m;n["a"].config.productionTip=!1,n["a"].use(_,{addIndicators:!0}),new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,r){},"897e":function(e,t,r){}});
//# sourceMappingURL=app.ce62d54c.js.map