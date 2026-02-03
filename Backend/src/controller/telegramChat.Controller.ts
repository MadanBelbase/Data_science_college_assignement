import { Request, Response } from "express";
import { saveUser } from "../models/userModel";
import { handleCommand } from "../services/telegram.service";

export const handleUpdate = async (req: Request, res: Response) => {
  const update = req.body;

  if (update.message) {
    const chatId: number = update.message.chat.id;
    const userInfo = update.message.from;

    await saveUser(chatId, userInfo);
    const text: string = update.message.text || "";

    await handleCommand(chatId, text, userInfo);
  }

  res.sendStatus(200);
};


