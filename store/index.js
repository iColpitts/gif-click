export const state = () => ({
    loaded: false,
    activeGif: null,
    increment: null,
    interval: null,
    gifs: [ 
        {
            'id': 'porny',
            'frame': 1,
            'maxFrame': 78,
            'format': '.jpg'
        },
        {
            'id': 'windowBoob',
            'frame': 0,
            'maxFrame': 43,
            'format': '.jpg'
        },
        // {
        //     'id': 'one',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
        // {
        //     'id': 'two',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
        // {
        //     'id': 'three',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
        // {
        //     'id': 'four',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
        // {
        //     'id': 'five',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
        // {
        //     'id': 'six',
        //     'frame': 1,
        //     'maxFrame': 99,
        //     'format': '.jpeg'
        // },
    ]
})

export const mutations = {
    activateGif(state, gif) {
        state.activeGif = gif
    },
    incrementFrame(state, i) {
        const gif = state.activeGif
        const incrament = state.incrament
        if (i > 0) {
            if(gif.frame < gif.maxFrame) {
                state.activeGif.frame++
            }
            else { 
                state.activeGif.frame = 0 
            }
        }
        if (i < 0) {
            if(gif.frame > 0) {
                gif.frame--
            }
            else {
                gif.frame = gif.maxFrame
            }
        }
    },
    setIncrement(state, increment) {
        state.increment = increment
    },
    setInterval(state, interval) {
        state.inteval = interval
    },
    setLoaded(state, loaded) {
        console.log('loaded')
        state.loaded = loaded
    }
}