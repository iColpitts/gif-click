<template>
    <div class="grid">
        <div  v-for="gif of gifs" v-bind:key="gif.id" @click="activateGif(gif)">
            <img class="photo" :src="require('../assets/'+gif.id+gif.frame+gif.format)"> 
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
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    /* display: grid;
    grid-template-columns: 1fr;
    gap: 15px; */
}

.photo {
    width: 33.33vw;
    height: 33.33vh;
    object-fit: cover;
    padding: 3px;
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