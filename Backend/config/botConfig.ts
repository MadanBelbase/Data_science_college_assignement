import dotenv from "dotenv";

dotenv.config();

export const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string;

export const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
