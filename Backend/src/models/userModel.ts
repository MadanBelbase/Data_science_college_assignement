// Define the Telegram user type
export type TelegramUser = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
};

// In-memory "database" using a Map
const users = new Map<number, TelegramUser>();

// Save or update a user
export const saveUser = async (
  chatId: number,
  user: TelegramUser
): Promise<void> => {
  try {
    users.set(chatId, user);
    console.log(`User saved: ${chatId}`, user);
  } catch (err) {
    console.error("Error saving user:", err);
  }
};

// Retrieve a user by chatId
export const getUser = async (
  chatId: number
): Promise<TelegramUser | undefined> => {
  return users.get(chatId);
};

  
  
