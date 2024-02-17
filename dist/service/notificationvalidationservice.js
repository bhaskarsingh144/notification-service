// src/services/notificationValidationService.ts
class NotificationValidationService {
    static isValid(notificationPayload) {
        if (!notificationPayload || typeof notificationPayload !== 'object') {
            return false;
        }
        // Check if the notificationPayload has common fields of a notification
        if (typeof notificationPayload.content !== 'string' ||
            typeof notificationPayload.sender !== 'string') {
            return false;
        }
        // Check the notification type and validate accordingly
        switch (notificationPayload.type) {
            case 'push':
                return this.isValidPushNotification(notificationPayload);
            case 'email':
                return this.isValidEmailNotification(notificationPayload);
            case 'sms':
                return this.isValidSmsNotification(notificationPayload);
            default:
                // Unknown notification type
                return false;
        }
    }
    static isValidPushNotification(payload) {
        return (typeof payload.title === 'string' &&
            typeof payload.body === 'string' &&
            (typeof payload.badge === 'undefined' || typeof payload.badge === 'number') &&
            (typeof payload.additionalData === 'undefined' || typeof payload.additionalData === 'object'));
    }
    static isValidEmailNotification(payload) {
        return (typeof payload.subject === 'string' &&
            typeof payload.fromAddress === 'string' &&
            typeof payload.toAddress === 'string' &&
            typeof payload.body === 'string' &&
            (typeof payload.htmlBody === 'undefined' || typeof payload.htmlBody === 'string') &&
            (Array.isArray(payload.ccAddress) || typeof payload.ccAddress === 'undefined') &&
            (Array.isArray(payload.bccAddress) || typeof payload.bccAddress === 'undefined'));
    }
    static isValidSmsNotification(payload) {
        return (typeof payload.recipientNumber === 'string' &&
            typeof payload.countryCode === 'string');
    }
}
export default NotificationValidationService;
//# sourceMappingURL=notificationvalidationservice.js.map