function TimeDown(id, endDateStr) {
    var endDate = new Date(endDateStr);
    var nowDate = new Date();
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var modulo = totalSeconds % (60 * 60 * 24);
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    var minutes = Math.floor(modulo / 60);
    var seconds = modulo % 60;
    if(totalSeconds<=0)
    {
        document.getElementById(id).innerHTML = "Countdown Finished";
    }
    else if(totalSeconds<=3600)
    {
        document.getElementById(id).innerHTML = "Exam starting in 1h";
    }
    else
    {
        document.getElementById(id).innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";
    }
    setTimeout(function () {
        TimeDown(id, endDateStr);
    }, 1000)
}
