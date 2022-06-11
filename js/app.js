function currentTime() {
    let date = new Date();
    // повертає години зазначеної дати за місцевим часом.
    let hour = date.getHours();
    // повертає хвилини вказаної дати за місцевим часом.
    let minute = date.getMinutes();
    // повертає секунди вказаної дати за місцевим часом.
    let seconds = date.getSeconds();

    hour = updateTime(hour);
    minute = updateTime(minute);
    seconds = updateTime(seconds);
    // додавання часу до div
    document.getElementById('clock').innerText = hour + " : " + minute + " : " + seconds;
    // Налаштування часу
    let time = setTimeout(function() {
        currentTime()
    }, 1000);
};

function updateTime (k) {
    if (k < 10) {
        return '0' + k;
    } else {
        return k;
    }
}

currentTime();

