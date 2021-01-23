export const state = () => ({
    activeGif: null,
    increment: null,
    interval: null,
    gifs: [ 
        {
            'id': 'one',
            'frame': 1,
            'maxFrame': 156,
            'format': '.jpeg'
        },
        {
            'id': 'two',
            'frame': 1,
            'maxFrame': 158,
            'format': '.jpeg'
        },
        {
            'id': 'three',
            'frame': 1,
            'maxFrame': 158,
            'format': '.jpeg'
        },
        {
            'id': 'four',
            'frame': 1,
            'maxFrame': 158,
            'format': '.jpeg'
        },
        {
            'id': 'five',
            'frame': 1,
            'maxFrame': 161,
            'format': '.jpeg'
        },
        {
            'id': 'six',
            'frame': 1,
            'maxFrame': 157,
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
            console.log(gif.frame)
        }
        if (i < 0) {
            if(gif.frame > 0) {
                gif.frame--
            }
            else {
                gif.frame = gif.maxFrame
            }
            console.log(gif.frame)
        }
    },
    setIncrement(state, increment) {
        state.increment = increment
    },
    setInterval(state, inteval) {
        state.inteval = interval
    }
}