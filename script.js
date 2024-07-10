function getNextEventTime() {
    const now = new Date();
    let eventTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);

    if (now >= eventTime) {
        eventTime.setDate(eventTime.getDate() + 1);
    }

    return eventTime;
}

function updateCountdown() {
    const now = new Date();
    const eventTime = getNextEventTime();
    const timeDifference = eventTime - now;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
