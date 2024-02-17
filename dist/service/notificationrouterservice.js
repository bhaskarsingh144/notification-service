import express from 'express';
import NotificationValidationService from './notificationvalidationservice.js';
const notificationRouter = express.Router();
notificationRouter.post('/send', async (req, res) => {
    try {
        const notificationPayload = req.body;
        if (!NotificationValidationService.isValid(notificationPayload)) {
            return res.status(400).json({ error: 'Invalid notification payload' });
        }
        switch (notificationPayload.type) {
            case 'push':
                return sendPushNotification(notificationPayload, res);
            case 'email':
                return sendEmailNotification(notificationPayload, res);
            case 'sms':
                return sendSmsNotification(notificationPayload, res);
            default:
                return res.status(400).json({ error: 'Unsupported notification type' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
async function sendPushNotification(payload, res) {
    // Implement push notification sending logic here
    res.status(200).json({ message: 'Push notification sent successfully' });
}
async function sendEmailNotification(payload, res) {
    // Implement email notification sending logic here
    res.status(200).json({ message: 'Email notification sent successfully' });
}
async function sendSmsNotification(payload, res) {
    // Implement SMS notification sending logic here
    res.status(200).json({ message: 'SMS notification sent successfully' });
}
export default notificationRouter;
//# sourceMappingURL=notificationrouterservice.js.map