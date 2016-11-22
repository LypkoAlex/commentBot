import Sentencer  from 'sentencer';
import Templates from '../etc/templates';

module.exports = class Sentences {
    getSentences(payload) {
        let sentences = [];
        payload.responses[0].labelAnnotations.map( item => {
            item.score > 0.60 ? sentences.push( this.makeSentence(item.description) ) : '';
        });

        return sentences;
    }

    makeSentence(word) {
        return Sentencer.make(Templates.get(word));
    }
};
