const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image.js'),
    video: require('./robots/video.js')
}

async function start() {
    try {
        await robots.input()
    } catch (error) {
        console.error('Erro no robot input:', error)
    }

    try {
        await robots.text()
    } catch (error) {
        console.error('Erro no robot text:', error)
    }

    try {
        await robots.image()
    } catch (error) {
        console.error('Erro no robot image:', error)
    }

    try {
        await robots.video()
    } catch (error) {
        console.error('Erro no robot video:', error)
    }

    const content = robots.state.load()
    console.dir(content, { depth: null })
}

start()
