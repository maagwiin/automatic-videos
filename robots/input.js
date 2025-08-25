const readline = require('readline-sync')
const state = require('./state')

function robot() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    state.save(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        if (selectedPrefixIndex === -1) {
            console.log('No option selected, please choose one.')
            return askAndReturnPrefix()
        }
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

}
module.exports = robot
