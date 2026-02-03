type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  };
  
  const users = new Map<number, TelegramUser>();
  
  export const saveUser = async (
    chatId: number,
    user: TelegramUser
  ): Promise<void> => {
    users.set(chatId, user);
  };
  
  export const getUser = async (
    chatId: number
  ): Promise<TelegramUser | undefined> => {
    return users.get(chatId);
  };
  
