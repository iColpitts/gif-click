export const state = () => ({
    loaded: false,
    activeGif: null,
    increment: null,
    interval: null,
    gifs: [ 
        {
            'id': 'butt',
            'frame': 0,
            'maxFrame': 97,
            'format': '.jpeg'
        },
        {
            'id': 'car',
            'frame': 0,
            'maxFrame': 59,
            'format': '.jpeg'
        },
        {
            'id': 'hair',
            'frame': 0,
            'maxFrame': 50,
            'format': '.jpeg'
        },
        {
            'id': 'hand',
            'frame': 0,
            'maxFrame': 58,
            'format': '.jpeg'
        },
        {
            'id': 'blank',
            'noClick': true
        },
        {
            'id': 'lick',
            'frame': 0,
            'maxFrame':67,
            'format': '.jpeg'
        },
        {
            'id': 'porn',
            'frame': 0,
            'maxFrame': 77,
            'format': '.jpeg'
        },
        {
            'id': 'pro',
            'frame': 0,
            'maxFrame': 51,
            'format': '.jpeg'
        },
        {
            'id': 'wb',
            'frame': 0,
            'maxFrame': 53,
            'format': '.jpeg'
        },

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