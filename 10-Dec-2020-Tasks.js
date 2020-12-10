
/* Create a request variable. request variable issue the http request by creating an instalnce of xml http request */
var request = new XMLHttpRequest();

// Open a connection - true is used to contain the error within this line so it doesnt affect the rest of the code */
request.open('GET','https://restcountries.eu/rest/v2/all', true)

// Send the request
request.send();

// Load the response when its ready - using a callback function
request.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    
    //1. Print the current weather data in console- By lat lon
    var apiKey = '6977453339ecd60bd5c4015f1529563e';
    var requestTempLatLon = new XMLHttpRequest();

    var countryName = prompt('Enter the Country Name in Title Caps For Lat Lon Temperature');
    if(countryName === null) countryName = 'India';

    var restCountry = data.find(elem => elem.name === countryName);
 
    var lat = restCountry.latlng[0];
    var lon = restCountry.latlng[1];

    requestTempLatLon.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiKey, true)
    requestTempLatLon.send();

    requestTempLatLon.onload = function(){
        var dataTempLatLon = JSON.parse(this.response);
        console.log('The Lat Lon Temperature is');
        console.log(dataTempLatLon);
    }

    //2. Print the current weather data in console - By city name
    var apiKey = '6977453339ecd60bd5c4015f1529563e';
    var requestTempCity = new XMLHttpRequest();

    var cityName = prompt('Enter the City Name For City Temperature');
    if(cityName === null) cityName = 'Chennai';

    requestTempCity.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey, true)
    requestTempCity.send();

    requestTempCity.onload = function(){
        var dataTempCity = JSON.parse(this.response);
        console.log('The City Temperature is');
        console.log(dataTempCity);

    }


}