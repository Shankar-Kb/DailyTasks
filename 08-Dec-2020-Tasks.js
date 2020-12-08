
/* Create a request variable. request variable issue the http request by creating an instalnce of xml http request */
var request = new XMLHttpRequest();

// Open a connection - true is used to contain the error within this line so it doesnt affect the rest of the code */
request.open('GET','https://restcountries.eu/rest/v2/all', true)

// Send the request
request.send();

// Load the response when its ready - using a callback function
/* We use JSON to convert the data form string format to javascript object format */
// this - refers to 'request' object

request.onload = function() {
    var data = JSON.parse(this.response);

     //console.log(data);
    
     //1. Get all the countries from Asia continent /region using Filter function
      var asiaCountries = data.filter((elem)=>{
        return elem.region ==='Asia';
        });
        console.log(asiaCountries);
    

    //2. Get all the countries with population of less than 2 lacs using Filter function
     var twoLakhsPop = data.filter((elem)=>{
         return elem.population <200000;
     });
     console.log(twoLakhsPop);

    //3. Print the following details name, capital, flag using forEach function
    var nameCapitalFlag = [];
    var temp = {};
     data.forEach((elem)=>{
          //temp.push(elem.name, elem.capital, elem.flag);
          temp.name = elem.name;
          temp.capital = elem.capital;
          temp.flag = elem.flag;
          nameCapitalFlag.push(temp);
          temp = {};
     })
    console.log(nameCapitalFlag);
    

    //4. Print the total population of countries using reduce function
    var totalPop = data.reduce((total, elem, index, array)=>{
    
        return total + elem.population;
        
    }, 0);
    console.log(totalPop);

    //5. Print the country which use US Dollars as currency.
    var dollarCountries = data.filter((elem)=>{
        return elem.currencies[0].symbol === "$";
    })
    console.log(dollarCountries);
}