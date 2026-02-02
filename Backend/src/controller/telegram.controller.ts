import { Request, Response } from "express";
import { verifyTelegramData} from "../utils/telegramVerify"

export const telegramAuth = (req: Request, res: Response) =>
    {
        const botToken  = process.env.BOT_TOKEN!;
        const tgUser = req.body;


        if(!verifyTelegramData(tgUser,botToken)){
            return res.status(401).json({
                success: false,
                message: "Invalid Telegram login",
              });
        }
        
          const user = {
            id: tgUser.id,
            first_name: tgUser.first_name,
            last_name: tgUser.last_name,
            username: tgUser.username,
            photo_url: tgUser.photo_url,
          };
        
          console.log("Verified Telegram user:", user);
        
          return res.status(200).json({
            success: true,
            user,
          });
        };
        