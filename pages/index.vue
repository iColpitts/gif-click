<template>
  <div class="container">
    <div v-if="!cw">
      <Loading v-if="!loaded"/>
      <div class="hereBeTheSex">
        <h1 class="pink">Content Warning</h1>
        <p class="pink">This work contains sexual content</p>
      </div>
      <div class="instructions">
        <h1>To Play</h1>
        <p>1/ Select image.</p>
        <p>2/ Use left and right arrow keys to Loop + Scrub</p>
      </div>
      <button v-if="loaded" class="enter" @click="cw=true">ENTER</button>
    </div>
    <Title class="header" v-if="cw" />
    <div v-if="cw" class="content">
      <PhotoGrid />
      <Modal v-if="activeGif" @close="activateGif(null)"> </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import PhotoGrid from "@/components/PhotoGrid.vue";
import Loading from "@/components/Loading.vue";
import Title from "@/components/Title.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Modal,
    PhotoGrid,
    Loading,
    Title,
  },
  data() {
    return {
      showModal: true,
      cw: false,
    };
  },
  computed: {
    ...mapState(["activeGif", "loaded", "gifs"]),
  },
  methods: {
    ...mapMutations([
      "activateGif",
      "setLoaded", //also supports payload `this.nameOfMutation(amount)`
    ]),
    loadImg(options, callback) {
      var seconds = 0,
        maxSeconds = 120,
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
            err: "timeout: " + options.src,
          });
          done = true;
          return;
        }
        if (complete && img.complete) {
          if (img.width && img.height) {
            callback({
              img: img,
            });
            done = true;
            return;
          }
          callback({
            err: "404",
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
      console.log(options.src);
      img.src = options.src;
      tryImage();
    },
    gifArray(gif) {
      const paths = [];
      for (var i = gif.frame; i < gif.maxFrame; i++) {
        paths.push(require("~/assets/gifs/" + gif.id + i + gif.format));
      }
      return paths;
    },
  },
  mounted() {
    console.log("hello");

    var paths = [];
    this.gifs.forEach((gif) => {
      if (gif.noClick) return;
      const gifPaths = this.gifArray(gif);
      paths = paths.concat(gifPaths);
    });

    var promises = [];
    paths.forEach((path) => {
      const promise = new Promise((resolve, reject) => {
        return this.loadImg({ src: path }, function (status) {
          if (!status.err) {
            resolve(status);
          } else {
            console.log(status.err)
            resolve(status);
          }
        });
      });
      promises.push(promise);
    });

    Promise.all(promises)
      .then((resp) => {
        this.setLoaded(true);
        console.log(resp);
        //callBack()
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  /* background-color: #ff2be3; */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: large;
  font-weight: bold;
  margin-bottom: 5px;
}

.enter {
  border: 1px solid #ff2be3;
  padding: 5px;
  margin: 25px;
  width: 75%;
  border-radius: 20px;
  background-color: white;
  color: #ff2be3;
}
.enter:hover {
  background-color: #ff2be3;
  color: white;
  border-color: white;
}

.hereBeTheSex {
  border: 1px solid #ff2be3;
  text-align: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pink {
  color: #ff2be3;
}

.instructions {
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: left;
  background-color: #ff2be3;
  color: white;
}

.header {
  position: absolute;
  /* background: white; */
}

</style>
