import { Request, Response } from "express";
import { TELEGRAM_API } from "../config/botConfig";
import { saveUser } from "../models/userModel";

/**
 * Send a message to Telegram
 */
export const sendMessage = async (
  chatId: number,
  text: string
): Promise<void> => {
  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
};

/**
 * Telegram webhook handler
 */
export const handleUpdate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const update = req.body;

  if (update.message) {
    const chatId: number = update.message.chat.id;
    const text: string = update.message.text || "";
    const userInfo = update.message.from;

    await saveUser(chatId, userInfo);

    if (text === "/task") {
      await sendMessage(chatId, "📝 Today's task: Build your bot using MVC 🚀");
    } else {
      await sendMessage(chatId, `Hi ${userInfo.first_name} 👋`);
    }
  }

  res.sendStatus(200);
};

