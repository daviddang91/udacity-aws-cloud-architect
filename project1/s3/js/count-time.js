function startTime() {
    const today = new Date();

    let minute = today.getMinutes();
    let second = today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    m = checkTime(minute);
    s = checkTime(second);

    document.getElementById('count-time').innerHTML =  dateTime;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}