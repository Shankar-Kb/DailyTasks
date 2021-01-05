function createHtmlElement(element,  className='', id=''){
  var elem = document.createElement(element);
  elem.setAttribute('class', className);
  elem.setAttribute('id', id);
  return elem;
}

var containerBox = createHtmlElement('div', 'container-flud container-box', 'CB');
document.body.append(containerBox);

var p = new Promise((resolve, reject)=>{
    var request = new XMLHttpRequest();

    request.open('GET','https://restcountries.eu/rest/v2/all', true)

    request.send();

    request.onload = function(){
    var data = JSON.parse(this.response);
    if(data !== undefined) resolve(data);
    else reject('Unable to get Data from the site');
    }
});

p.then(result=>{
  console.log(result);

  result.forEach(elem=>{
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
  Lat,Long: <span class='bold'>${elem.latlng[0]}, ${elem.latlng[1]}</span>`;

  cardBody.append(cardTitle, cardImg, cardText);
  });
})
  .catch(error=>{
   console.log(error);   
  });

  /* <div class="card">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <img src="https://restcountries.eu/data/afg.svg" class="card-img" alt="...">
           <p class="card-text" id='cText'>
              Capital: <span class='capital'>Kabul</span><br>
              Country Codes: <span class='bold'>AF, AFG</span><br>
              Region: <span class='bold'>Asia</span><br>
              Lat,Long: <span class='bold'>33, 65</span></p>
        </div>
    </div> */