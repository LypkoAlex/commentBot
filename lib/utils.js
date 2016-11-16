import Sentencer   from 'sentencer';

module.exports = {
    getSentences :  (payload) => {
        console.log(payload.responses[0].labelAnnotations);
        const sentences = payload.responses[0].labelAnnotations.map( item => {
            return Sentencer.make('{{adjective}} ' + item.description);
        });

        return sentences;
    }
};
