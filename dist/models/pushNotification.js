import { Schema } from 'mongoose';
import { baseNotificationSchema } from './baseNotification.js';
const pushNotificationSchema = new Schema({
    ...baseNotificationSchema.obj, // Include fields from the base schema
    title: { type: String, required: true },
    body: { type: String, required: true },
    badge: { type: Number },
    additionalData: { type: Schema.Types.Mixed },
});
//# sourceMappingURL=pushNotification.js.map