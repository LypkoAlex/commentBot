import Sentences from './lib/utils';

import TelegramBot from './lib/bots/Telegram';
import Recognizer  from './lib/Recognizer';

import { APIKEY_TELEGRAM, APIKEY_GOOGLE } from './etc/config';

const recognizer = new Recognizer(APIKEY_GOOGLE);
const sentences = new Sentences();

async function onImageReciveHandler(imagePath, bot) {
    const res = await recognizer.recognize(imagePath);
    sentences.getSentences(res).map( item => {
        bot.sendResponse(item);
    });
}

const telegramBot = new TelegramBot(APIKEY_TELEGRAM, onImageReciveHandler);
telegramBot.run();
