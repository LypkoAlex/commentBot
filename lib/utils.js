import Sentencer   from 'sentencer';

module.exports = {
    getSentences :  (payload) => {
        const sentences = payload.responses[0].labelAnnotations.map( item => {
            return Sentencer.make('{{adjective}} ' + item.description);
        });

        return sentences;
    }
};
