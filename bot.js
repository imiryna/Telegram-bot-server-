import TelegramBot from "node-telegram-bot-api";

//== Telegram bot =============

const token = process.env.BOT_API_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/start") {
    bot.sendMessage(chatId, "Welcome to the bot!");
  }
}); // Process the incoming message here
