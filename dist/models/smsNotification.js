// src/models/smsNotificationModel.ts
import { Schema } from 'mongoose';
import { baseNotificationSchema } from './baseNotification.js';
const smsNotificationSchema = new Schema({
    ...baseNotificationSchema.obj,
    recipientNumber: { type: String, required: true },
    countryCode: { type: String, required: true },
});
//# sourceMappingURL=smsNotification.js.map