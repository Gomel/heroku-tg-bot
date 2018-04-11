const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_TOKEN || '580307062:AAHG55gWQtMDad9hTF-6ZqlRlMKyAIwKTO8';
const options = {
    webHook: {
        port: process.env.PORT
    }
};
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://heroku-tg-bot.herokuapp.com/';
const bot = new TelegramBot(TOKEN, options);

// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`);

// Just to ping!
bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});