import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config({});

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

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привіт! Я твій Telegram-бот 🤖");
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Я можу виконувати такі команди:\n/start - Привітання\n/help - Список команд\n/info - Інформація про користувача");
});

bot.onText(/\/info/, (msg) => {
  bot.sendMessage(msg.chat.id, `Твоє ім'я: ${msg.from.first_name}\nТвій ID: ${msg.from.id}`);
});
