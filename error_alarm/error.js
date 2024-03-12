const ONE_MINUTE_IN_MILLISECONDS = 60000;
const MAX_ERROR_COUNT = 10;

let lastErrorsBuffer = [];
let lastNotificationDate = null;

async function handleError(error) {
    await logError(error);

    let errorCountInTheLastMinute = lastErrorsBuffer.filter(error => error.date > (new Date() - ONE_MINUTE_IN_MILLISECONDS)).length;

    if (errorCountInTheLastMinute > MAX_ERROR_COUNT && (new Date() - lastNotificationDate) > ONE_MINUTE_IN_MILLISECONDS) {
        await sendNotification();
    }
}

async function logError(error) {
    lastErrorsBuffer.push({date: new Date(), error})
    lastErrorsBuffer = lastErrorsBuffer.slice(-(MAX_ERROR_COUNT + 1)); // Keep only the last MAX_ERROR_COUNT + 1 errors
    console.log("Error saved:", error);
}

async function sendNotification() {
    lastNotificationDate = new Date();
    console.log('Notification sent at', lastNotificationDate);
}

// Test the functionality
setInterval(async () => {
    await handleError('An error has occurred');
}, 1000, 0)