import Sentencer from 'sentencer';

module.exports = class Sentences {
    getSentences(payload) {
        let sentences = [];
        payload.responses[0].labelAnnotations.map( item => {
            item.score > 0.60 ? sentences.push( this.makeSentence(item.description) ) : '';
        });

        return sentences;
    }

    makeSentence(word) {
        return Sentencer.make(this.makeTemplate(word));
    }

    makeTemplate(word) {
        let templates = [
            `Some {{ an_adjective }} ${word}.`,
            `This is a ${word} {{adjective}}.`,
            `How {{adjective}} and {{adjective}} could this ${word} be?`,
            `So what {{adjective}} ${word} is this?`,
            `It's a probably {{adjective}} ${word} is!`,
            `Is that {{ an_adjective }} ${word} are so {{adjective}}.`,
            `Oh! A very {{ an_adjective }} ${word}.`
        ];

        return templates[Math.floor(Math.random() * templates.length)];
    }

};
