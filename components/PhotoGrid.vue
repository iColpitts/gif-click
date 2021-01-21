<template>
    <div class="grid">
        <div class="photo" v-for="gif of gifs" v-bind:key="gif.id" @click="activateGif(gif)">
            <img :src="require('../assets/'+gif.id+gif.frame+'.png')"> 
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';


export default {
    name: 'PhotoGrid',
    methods: {
        ...mapMutations([
            'activateGif', 
        ])
    },
    computed: {
        ...mapState([
            'gifs',
        ])
    },
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 992px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>