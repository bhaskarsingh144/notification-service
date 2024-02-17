import { Schema, Document, model } from 'mongoose';

export interface BaseNotificationModel extends Document {
    content: string;
    sender: string;
    timestamp?: Date;
}

export const baseNotificationSchema = new Schema<BaseNotificationModel>({
    content: { type: String, required: true },
    sender: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});