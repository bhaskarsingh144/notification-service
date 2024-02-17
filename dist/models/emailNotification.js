import { Schema } from 'mongoose';
import { baseNotificationSchema } from './baseNotification.js';
const emailNotificationSchema = new Schema({
    ...baseNotificationSchema.obj,
    subject: { type: String, required: true },
    fromAddress: { type: String, required: true },
    toAddress: { type: String, required: true },
    ccAddress: [{ type: String }],
    bccAddress: [{ type: String }],
    body: { type: String, required: true },
    htmlBody: { type: String },
});
//# sourceMappingURL=emailNotification.js.map