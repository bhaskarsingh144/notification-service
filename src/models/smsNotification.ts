// src/models/smsNotificationModel.ts

import { Schema, model, Document } from 'mongoose';
import { BaseNotificationModel, baseNotificationSchema } from './baseNotification.js';

export interface SmsNotificationModel extends BaseNotificationModel {
  recipientNumber: string;
  countryCode: string;
}

const smsNotificationSchema = new Schema<SmsNotificationModel>({
  ...baseNotificationSchema.obj,
  recipientNumber: { type: String, required: true },
  countryCode: { type: String, required: true },
});