function clock() {
    var d_names = new Array("일요일", "월요일", "화요일","수요일", "목요일", "금요일", "토요일");
    var m_names = new Array("January", "February", "March","April", "May", "June", "July", "August", "September","October", "November", "December");
    var d = new Date();
    var curr_day = d.getDay();
    var curr_date = d.getDate();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    curr_min = (curr_min < 9) ? '0' + curr_min : curr_min;
    curr_hour = (curr_hour < 9) ? '0' + curr_hour : curr_hour;
    var sup = "";
    if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
        sup = "st";
    }
    else if (curr_date == 2 || curr_date == 22) {
        sup = "nd";
    }
    else if (curr_date == 3 || curr_date == 23) {
        sup = "rd";
    }
    else {
        sup = "th";
    }
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    $('.Time').text(curr_hour + " : " + curr_min);
    var SecondLine = d_names[curr_day] + ', ' + m_names[curr_month] + ' ' + curr_year;
    //$('.Day').text(SecondLine);
    $('.Day').text(d_names[curr_day]+",");
    $('.Date').html(curr_date + "<SUP>" + sup + "</SUP> ");
    $('.MonthYear').html(m_names[curr_month] + '<br/> ' + curr_year);

}
$(document).ready(function () {
    clock();
});
setInterval(clock, 1000);