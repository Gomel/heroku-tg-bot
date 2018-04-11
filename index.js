const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '580307062:AAHG55gWQtMDad9hTF-6ZqlRlMKyAIwKTO8';
var port = process.env.PORT || 3000;
const bot = new TelegramBot(TOKEN, {
    webHook: {
        port: port,
        autoOpen: false
    }
});

bot.openWebHook()
bot.setWebHook('https://heroku-tg-bot.herokuapp.com/'+ TOKEN)

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from HEROKU, bot says :"Hi,' + msg.from.first_name + '"')
});