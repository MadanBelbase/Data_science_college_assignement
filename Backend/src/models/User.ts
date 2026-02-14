import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    islinked?: boolean; // Optional field to indicate if the user has linked their Telegram account
    linkingCode?: string; // Optional field to store the unique linking code for Telegram account linking
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    islinked: { type: Boolean, default: false },
    linkingCode: { type: String, unique: true, sparse: true } 
});

export default mongoose.model<User>('User', UserSchema);