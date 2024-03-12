const ONE_MINUTE_IN_MILLISECONDS = 60000;
const MAX_ERROR_COUNT = 10;

let errorCountSinceLastNotificacion = 0;
let lastNotificationDate = null;

async function handleError(error) {
    await logError(error);
    errorCountSinceLastNotificacion++;

    if (errorCountSinceLastNotificacion > MAX_ERROR_COUNT && (new Date() - lastNotificationDate) > ONE_MINUTE_IN_MILLISECONDS) {
        await sendNotification();
    }
}

async function sendNotification() {
    lastNotificationDate = new Date();
    errorCountSinceLastNotificacion = 0;
    console.log('Notification sent', lastNotificationDate);
}

async function logError(error) {
    console.log("Error saved", error);
}

// Test the functionality
setInterval(async () => {
    await handleError(`Error`);
}, 1000, 0)