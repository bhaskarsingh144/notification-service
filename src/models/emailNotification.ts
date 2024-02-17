import { Schema, model, Document } from 'mongoose';
import { BaseNotificationModel, baseNotificationSchema } from './baseNotification.js';

export interface EmailNotificationModel extends BaseNotificationModel {
    subject: string;
    fromAddress: string;
    toAddress: string;
    ccAddress?: string[];
    bccAddress?: string[];
    body: string;
    htmlBody?: string;
}

const emailNotificationSchema = new Schema<EmailNotificationModel>({
    ...baseNotificationSchema.obj, 
    subject: { type: String, required: true },
    fromAddress: { type: String, required: true },
    toAddress: { type: String, required: true },
    ccAddress: [{ type: String }],
    bccAddress: [{ type: String }],
    body: { type: String, required: true },
    htmlBody: { type: String },
});
