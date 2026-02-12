import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

let bot : TelegramBot;

export const initTelegramBot = ():TelegramBot => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables');
  }
  bot = new TelegramBot(token, { polling: true });
2
  console.log('✅ Telegram bot initialized');
  return bot;
} 




