var key = ''; //ENTER YOUR API_KEY HERE
var cityCode = '318251'; //ENTER YOUR CITY_CODE HERE - CURRENT: TR/Istanbul

window.onload = onLoad();

function onLoad(){
    setWeather();

    setInterval( updateInfo, 100);
    setInterval( setWeather, 1800000);
}

async function setWeather() {
    const response = await fetch('https://dataservice.accuweather.com/currentconditions/v1/' + cityCode + '?apikey=' + key);
    const data = await response.json();
    document.getElementById("temp").innerHTML = data[0].Temperature.Metric.Value + "°C";
}

function setDate() {
    var date = new Date();
    var d = date.getDate();
    var y = date.getFullYear();

    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
    const m = formatter.format(new Date());

    document.getElementById("date").innerHTML = d + ' ' + m + " " + y;
}

function setTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();

    if(h.toString().length == 1){
        h = "0" + h.toString();
    }
    else if(h.toString().length == 0){
        h = "00";
    }

    if(m.toString().length == 1){
        m = "0" + m.toString();
    }
    else if(m.toString().length == 0){
        m = "00";
    }

    document.getElementById("time").innerHTML = h + ':' + m;
}

function updateInfo() {
    setDate();
    setTime();
}