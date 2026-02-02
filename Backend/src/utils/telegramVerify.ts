import  crypto from "crypto";

export function verifyTelegramData(data: { [key: string]: string }, botToken: string): boolean {
    const { hash, ...dataCheckStringObj } = data;
    
    const dataCheckString = Object.keys(dataCheckStringObj)
        .sort()
        .map((key) => `${key}=${dataCheckStringObj[key]}`)
        .join('\n');
    
    const secretKey = crypto
        .createHash('sha256')
        .update(botToken)
        .digest();
    
    const hmac = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckString)
        .digest('hex');
    
    return hmac === hash;
    }
    