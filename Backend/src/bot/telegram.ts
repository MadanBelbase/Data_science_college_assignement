import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';


dotenv.config();
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN is not defined in environment variables');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Telegram Bot! Use /help to see available commands.');
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = `
Available commands:
/start - Start the bot
/help - Show this help message
/me - View your account info
/link <code> - Link your account using the provided code
  `;
  bot.sendMessage(chatId, helpMessage);
}
);

