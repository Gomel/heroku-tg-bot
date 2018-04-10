const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '580307062:AAHG55gWQtMDad9hTF-6ZqlRlMKyAIwKTO8'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from HEROKU, bot says :"Hi, ${msg.from.first_name}"')
})