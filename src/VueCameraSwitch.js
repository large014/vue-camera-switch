
let VueCameraSwitch = {};

VueCameraSwitch.install = function (Vue, options) {
    let videoElement;
    let selectors = ["audioInputSelect", "audioOutputSelect", "videoSelect"];
    let videoDevices = [];
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let videoIndex = 0;
    let isReady = false;

    Vue.directive('cameraswitch', {
        //--- ディレクティブが初めて対象の要素にひも付いた時
        bind: (el, binding) => {
            // console.log(binding);
        },
        //--- ひも付いている要素が親 Node に挿入された時
        inserted: (el, binding) => {
            // el.focus()
            // console.log('inserted : = ' + binding.value);
            videoElement = el;
            navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
            if (iOS) {
                videoIndex = (binding.value == 0) ? videoIndex = 1 : videoIndex = 0;
            } else {
                videoIndex = binding.value
            }
            // start(binding.value);
            start(videoIndex);
        },
        update: (el, binding) => {
            // console.log('update : = ' + binding.value);
            if (isReady) return;
            isReady = true;
            if (iOS) {
                videoIndex = (binding.value == 0) ? videoIndex = 1 : videoIndex = 0;
            } else {
                videoIndex = binding.value
            }
            // start(binding.value);
            start(videoIndex);
        },
        //--- ディレクティブがひも付いている要素から取り除かれた時
        unbind: (el, binding) => {
            // console.log('unbind : = ' + binding);
        }
    })

    function gotDevices(deviceInfos){
        for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            if (deviceInfo.kind === 'videoinput') {
                videoDevices.push(deviceInfo.deviceId)
                // console.log('deviceid = ' + deviceInfo.deviceId);
            }
        }
    }
    function handleError() {
        console.log('Error : Unable to get device.');
    }

    function start(value) {
        const audioSource = "audioInputSelect.value";
        const videoSource = videoDevices[ value ];
        // console.log('videoSource = ' + videoSource);

        //streamの停止
        if (window.stream) {
            window.stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }

        let constraints = {
            video: { deviceId: videoSource ? { exact: videoSource } : undefined }
        }
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia;
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            if ("srcObject" in videoElement) {
                videoElement.srcObject = stream;
            } else {
                videoElement.src = (window.URL && stream);
            }
            window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
            window.stream = stream;
            videoElement.onloadedmetadata = () => {
                videoElement.play();
                setTimeout(() => {
                    isReady = false;
                }, 800);
            }

        }).catch(function (err) {
            console.log(err);
        });
    }
}

export default VueCameraSwitch;