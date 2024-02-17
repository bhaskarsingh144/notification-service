import { Schema } from 'mongoose';
export const baseNotificationSchema = new Schema({
    content: { type: String, required: true },
    sender: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});
//# sourceMappingURL=baseNotification.js.map