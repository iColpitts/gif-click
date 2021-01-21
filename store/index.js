export const state = () => ({
    activeGif: null,
    gifs: [ 
        { 
            'id': 'bit',
            'title': 'Bits & Blobs',
            'frame': 0,
            'maxFrame': 5
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
    incrementFrame(state, key) {
        const gif = state.activeGif
        if (gif && key.key == 'ArrowUp') {
            if(gif.frame < gif.maxFrame) state.activeGif.frame++
            console.log('increase!!!!!!')
        }
        if (gif && key.key == 'ArrowDown') {
            if(gif.frame > 0) state.activeGif.frame--
            console.log('decrease!!!!!!')
        }
    },
}