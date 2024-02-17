
import { Schema, model, Document } from 'mongoose';
import { BaseNotificationModel, baseNotificationSchema } from './baseNotification.js';

export interface PushNotificationModel extends BaseNotificationModel {
  title: string;
  body: string;
  badge?: number;
  additionalData?: any;
}

const pushNotificationSchema = new Schema<PushNotificationModel>({
  ...baseNotificationSchema.obj, // Include fields from the base schema
  title: { type: String, required: true },
  body: { type: String, required: true },
  badge: { type: Number },
  additionalData: { type: Schema.Types.Mixed },
});

