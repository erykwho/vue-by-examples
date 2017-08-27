<template>
  <div>

    <span v-if="!showCamera">
      <div class="row justify-content-center">
        <b-button size="lg" variant="outline-primary" @click="mount" v-show="!showCamera">
          Let me see myself
        </b-button>
      </div>
    </span>

    <br>

    <div class="row" v-show="showCamera">
      <video muted autoplay class="col-8 offset-2" height="100%"></video>
      <div class="select row-filter col-8 offset-2">
        <label for="videoSource">Escolha sua câmera!</label>
        <b-form-select id="videoSource" class="mb-3" :options="[]"></b-form-select>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'capture',

    data () {
      return {
        showCamera: false
      }
    },

    methods: {
      mount () {
        this.showCamera = true
        let videoElement = document.querySelector('video')
        let videoSelect = document.querySelector('select#videoSource')

        navigator.mediaDevices.enumerateDevices()
          .then(gotDevices).then(getStream).catch(handleError)

        videoSelect.onchange = getStream

        function gotDevices (deviceInfos) {
          for (var i = 0; i !== deviceInfos.length; ++i) {
            var deviceInfo = deviceInfos[i]
            var option = document.createElement('option')
            option.value = deviceInfo.deviceId
            if (deviceInfo.kind === 'videoinput') {
              option.text = deviceInfo.label || 'camera ' +
                (videoSelect.length + 1)
              videoSelect.appendChild(option)
            } else {
              console.log('Found ome other kind of source/device: ', deviceInfo)
            }
          }
        }

        function getStream () {
          if (window.stream) {
            window.stream.getTracks().forEach((track) => {
              track.stop()
            })
          }
          var constraints = {
            video: {
              optional: [{
                sourceId: videoSelect.value
              }]
            }
          }
          navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError)
        }

        function gotStream (stream) {
          window.stream = stream // make stream available to console
          videoElement.srcObject = stream
        }

        function handleError (error) {
          console.log('Error: ', error)
        }
      }
    },
    mounted () {
      console.log('ihh.. you mounted nothing!')
    }
  }
</script>
