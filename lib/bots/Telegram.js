const Telegraf = require('telegraf');
const { Telegram } = require('telegraf');

module.exports = class TelegramBot {
    constructor(apiKey, reciveImageCb) {
        this.telegraf = new Telegraf(apiKey);
        this.telegram = new Telegram(apiKey);
        this.reciveImageCb = reciveImageCb;
        this.url = 'https:/' + '/api.telegram.org/file/bot' + apiKey + '/';
    }

    run() {
        this.telegraf.on('message', (ctx) => {
            this.chatId = ctx.update.message.chat.id;
            ctx.reply('👍 Wait...');
            if (ctx.update.message.photo) {
                this.telegram.getFile(ctx.update.message.photo.pop().file_id).then((res) => {
                    this.reciveImageCb(this.url + res.file_path, this);
                });
            }
        });

        this.telegraf.startPolling();
    }

    sendResponse(res) {
        this.telegram.sendMessage(this.chatId, res);
    }
};
