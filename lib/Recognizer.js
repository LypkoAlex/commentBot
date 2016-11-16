import vision from 'node-cloud-vision-api';

module.exports = class Recognizer {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this._init();
    }

    _init() {
        vision.init({ auth : this.apiKey });
    }

    async recognize(filePath) {
        const req = new vision.Request({
            image: new vision.Image({ url : filePath }),
            features: [
                new vision.Feature('LABEL_DETECTION', 10)
            ]
        });
        const res = await vision.annotate(req);

        return res;
    }
};
