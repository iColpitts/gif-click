export const state = () => ({
    activeGif: null,
    incrament: null,
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
    incrementFrame(state, key) {
        const gif = state.activeGif
        const incrament = state.incrament
        if (gif && key.key == 'ArrowRight') {
            if(gif.frame < gif.maxFrame) {
                state.activeGif.frame++
            }
            else { 
                state.activeGif.frame = 0 
            }
        }
        if (gif && key.key == 'ArrowLeft') {
            if(gif.frame > 0) {
                gif.frame--
            }
            else {
                gif.frame = gif.maxFrame
            }
        }
    },
    toggleIncrament(state, incrament) {

    }
}