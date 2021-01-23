export const state = () => ({
    activeGif: null,
    increment: null,
    interval: null,
    gifs: [ 
        { 
            'id': 'bit',
            'title': 'Bits & Blobs',
            'frame': 0,
            'maxFrame': 50
        },
        {
            'id': 'boob',
            'title': 'Boobs!',
            'frame': 0,
            'maxFrame': 4
        },
        {
            'id': 'gif',
            'title': 'Bits & Blobs the 2nd',
            'frame': 0,
            'maxFrame': 5
        }
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