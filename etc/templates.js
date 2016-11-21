
module.exports = {
    get :(word) => {
        return makeTemplate(word);
    }

};
// '{{adjective}} ' + word

function makeTemplate(word) {
    let templates = [
        'Some {{ an_adjective }} ' + word + '.',
        'This is a ' + word + ' {{adjective}}.',
        'How {{adjective}} and {{adjective}} could this ' + word + ' be?',
        'So what {{adjective}} ' + word + ' is this?',
        'It`a probably {{adjective}} ' + word + ' is!',
        'Is that {{ an_adjective }} ' + word + ' are so {{adjective}}.',
        'Oh! A very {{ an_adjective }} ' + word
    ];

    return templates[Math.floor(Math.random() * templates.length)];
}
