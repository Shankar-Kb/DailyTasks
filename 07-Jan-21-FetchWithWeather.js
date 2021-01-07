function createHtmlElement(element,  className='', id=''){
    var elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
  }
  
var containerBox = createHtmlElement('div', 'container-flud container-box', 'cBox');
document.body.append(containerBox);
 
fetch('https://restcountries.eu/rest/v2/all')
  .then(restResponse => {
      return restResponse.json();
  })
  .then(restData => {
    //console.log(restData);
  
    restData.forEach(elem => {
      var card = createHtmlElement('div', 'card');
      containerBox.append(card);
    
      var cardBody = createHtmlElement('div', 'card-body');
      card.append(cardBody);
    
      var cardTitle = createHtmlElement('h5', 'card-title');
      cardTitle.innerHTML = elem.name;
    
      var cardImg = createHtmlElement('img', 'card-img');
      cardImg.src = elem.flag;
      cardImg.alt = elem.name;
    
      var cardText = createHtmlElement('p', 'card-text');
      
      if(elem.capital == '') elem.capital = 'None';
      cardText.innerHTML = `Capital: <span class='capital'>${elem.capital}</span><br>
      Country Codes: <span class='bold'>${elem.alpha2Code}, ${elem.alpha3Code}</span><br>
      Region: <span class='bold'>${elem.region}</span><br>
      Lat,Long: <span class='bold'>${elem.latlng[0]}, ${elem.latlng[1]}</span><br>
      <span class='weather' id='${elem.alpha2Code}'></span>`;

      var cardButton = createHtmlElement('button', 'btn btn-primary');
      cardButton.innerHTML = `Click For Weather`;
      cardBody.append(cardTitle, cardImg, cardText, cardButton);
      
      cardButton.addEventListener('click', function(){
          getWeather(elem.latlng[0], elem.latlng[1], elem.alpha2Code)
          });
      });
    })
    .catch(error=>{
     console.log(error);   
    });

function getWeather(lat, lon, countryCode){
    var apiKey = '6977453339ecd60bd5c4015f1529563e';
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiKey)
         .then(weatherResp => { return weatherResp.json() })
         .then(weatherData => { 
             //console.log(weatherData);
             temp = (weatherData.main.temp - 273.15).toFixed(0);
             document.getElementById(countryCode).innerHTML = `Weather: <span class='bold'>${temp}${String.fromCharCode(176)}Celcius, ${weatherData.weather[0].main}</span>`;
         })
         .catch(error => console.log(error));
}
