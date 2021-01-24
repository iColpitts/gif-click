<template>
  <div class="container">
    <h1 class="p-6">Loop + Scrub</h1>
    <Loading v-if="!loaded" />
    <div v-if="loaded" class="shadow-md">
        <PhotoGrid />
        <Modal v-if="activeGif" @close="activateGif(null)">
        </Modal>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import PhotoGrid from '@/components/PhotoGrid.vue';
import Loading from '@/components/Loading.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  components: {
    Modal,
    PhotoGrid,
    Loading
  },
  data () {
    return {
      showModal: true
    }
  },
  computed: {
    ...mapState([
      'activeGif',
      'loaded',
      'gifs'
    ]),

  },
  methods: {
    ...mapMutations([
        'activateGif',
        'setLoaded', //also supports payload `this.nameOfMutation(amount)` 
    ]),
    loadImg(options, callback) {
      var seconds = 0,
          maxSeconds = 10,
          complete = false,
          done = false;

      if (options.maxSeconds) {
          maxSeconds = options.maxSeconds;
      }
      function tryImage() {
          if (done) {
              return;
          }
          if (seconds >= maxSeconds) {
              callback({
                  err: 'timeout'
              });
              done = true;
              return;
          }
          if (complete && img.complete) {
              if (img.width && img.height) {
                  callback({
                      img: img
                  });
                  done = true;
                  return;
              }
              callback({
                  err: '404'
              });
              done = true;
              return;
          } else if (img.complete) {
              complete = true;
          }
          seconds++;
          callback.tryImage = setTimeout(tryImage, 1000);
      }
      var img = new Image();
      img.onload = tryImage();
      console.log(options.src)
      img.src = options.src;
      tryImage();
    },
    gifArray(gif) {
      const paths = []
      for (var i = gif.frame; i < gif.maxFrame; i++) {
        paths.push('_nuxt/assets/'+gif.id+i+gif.format)
      }
      return paths
    }
  },
  mounted () {
    console.log("hello")
    
    var paths = []
    this.gifs.forEach(gif => {
      const gifPaths = this.gifArray(gif)
      paths = paths.concat(gifPaths)
    })

    var promises = []
    paths.forEach((path => {
      const promise = new Promise((resolve, reject) => {
        return this.loadImg({src: "_nuxt/assets/one0.jpeg"}, function (status) {
            if (!status.err) {
              resolve(status)
            } else {
              reject(status.err)
            }
        });
      }) 
      promises.push(promise)
    }))
    
    Promise.all(promises).then(resp => {
      this.setLoaded(true)
      console.log(resp)
      //callBack()
    }).catch(e => {
      console.log(e);
    });

    // img1.then((value)=> {
    //   this.setLoaded(true)
    //   console.log(value)

    // }).catch(e => {
    //   console.log(e);
    // });
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
h1 {
  text-align: center;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
