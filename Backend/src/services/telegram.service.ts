import fetch from "node-fetch";
import { TELEGRAM_API } from "../config/botConfig";

export const sendMessage = async (chatId: number, text: string) => {
  try {
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  } catch (err) {
    console.error("Failed to send message:", err);
  }
};

// Command handler
export const handleCommand = async (chatId: number, text: string, user: any) => {
  const commands: Record<string, (chatId: number, user: any) => Promise<void>> = {
    "/task": async () => {
        console.log("Received /task command from", chatId);
      await sendMessage(chatId, "📝 Today's task: Build your bot using MVC 🚀");
    },
    "/start": async () => {
      await sendMessage(chatId, `Welcome ${user.first_name}! 👋`);
    },
  };

  if (commands[text]) {
    await commands[text](chatId, user);
  } else {
    await sendMessage(chatId, `Hi ${user.first_name} 👋`);
  }
};
