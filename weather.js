
var apiKey ="46d53394896593c9a0e2148ca25b1507"
var city = "Anseong";   
    $.ajax({
    url : 'http://api.openweathermap.org/data/2.5/weather',
    method : 'GET',
    data:{ q:city, appid: apiKey, units:'metric',mode:'xml' },
    success :  (data)=> {
        console.log(data);
        var temperature = data.getElementsByTagName("temperature")[0].getAttribute("value");
        var humidity = data.getElementsByTagName("humidity")[0].getAttribute("value");
        var clouds = data.getElementsByTagName("clouds")[0].getAttribute("name");
        var weather = data.getElementsByTagName("weather")[0];
        if( clouds == "clear sky" ) clouds = "맑음";
        if( clouds == "broken clouds" ) clouds = "흐림";
        if( clouds == "few clouds" ) clouds = "흐림";
        if( clouds == "overcast clouds" ) clouds = "매우 흐림";
        if( clouds == "light rain" ) clouds = "가벼운 비";
        if( clouds == "moderate rain") clouds = "가랑비";
        if( clouds == "haze" ) clouds = "옅은 안개";
        if( clouds == "fog" ) clouds = "짙은 안개";
        if( clouds == "heavy intensity rain" ) clouds = "강한 비";
        
        temperature = parseInt(temperature);
        temperature /= 1;

        $('.temp').append("온도 "+temperature+"도");
        $('.humidity').append("습도 "+humidity+"%");
        $('.clouds').append("날씨 "+clouds)
        
        var imgURL = "http://openweathermap.org/img/w/" + weather.getAttribute('icon') + ".png";  
        $('#img').attr("src", imgURL);    // 아이콘 표시

    }
    });     
