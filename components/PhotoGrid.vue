<template>
    <div>
        <div v-for="gif of gifs" v-bind:key="gif.id">
            <div @click="activateGif(gif)">
                <img :src="require('../assets/'+gif.id+gif.frame+'.png')"> 
                <h1>{{gif.title}}</h1>
            </div>
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

<style lang="scss" scoped>

</style>