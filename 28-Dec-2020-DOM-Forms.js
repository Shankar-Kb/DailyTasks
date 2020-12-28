function createHtmlElement(element,  className='', id=''){
    var elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}
function createInputElement(element, type, Name, className='', id=''){
    var elem = document.createElement(element);
    elem.type = type;
    elem.setAttribute('name', Name);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}
function createLabelElement(element, labelFor, labelText, className='', id=''){
    var elem = document.createElement(element);
    elem.htmlFor = labelFor;
    elem.innerHTML = labelText;
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}
function createOptionElement(text, value=''){
    var elem = document.createElement('option');
    elem.innerHTML = text;
    elem.setAttribute('value', value);
    return elem;
}

var containerBox = document.createElement('div');
containerBox.setAttribute('class', 'container-box container-fluid');
containerBox.setAttribute('id', 'CB');
document.body.append(containerBox);

var upperRow = createHtmlElement('div', 'row');
var columnBoxUpper = createHtmlElement('div', 'offset-3 col-6');
var lowerRow = createHtmlElement('div', 'row');
var columnLower = createHtmlElement('div', 'col-12');
var formBox = createHtmlElement('form', 'form-box', 'fBox');

upperRow.append(columnBoxUpper);
lowerRow.append(columnLower);
containerBox.append(upperRow, lowerRow);
columnBoxUpper.append(formBox);

var formG1 = createHtmlElement('div', 'form-group');
var firstName = createInputElement('input', 'text', 'firstName', 'form-control', 'fName');
var labelFName = createLabelElement('label', 'fName', 'First Name');
formG1.append(labelFName, firstName);

var formG2 = createHtmlElement('div', 'form-group');
var lastName = createInputElement('input', 'text', 'lastName', 'form-control', 'lName');
var labelLName = createLabelElement('label', 'lName', 'Last Name');
formG2.append(labelLName, lastName);

var formG3 = createHtmlElement('div', 'form-group');
var address = createInputElement('input', 'text', 'address', 'form-control', 'adr');
var labelAddress = createLabelElement('label', 'adr', 'Address');
formG3.append(labelAddress, address);

var formG4 = createHtmlElement('div', 'form-group');
var pinCode = createInputElement('input', 'text', 'pinCode', 'form-control', 'pinC');
var labelPinCode = createLabelElement('label', 'pinC', 'Pin-Code');
formG4.append(labelPinCode, pinCode);

var formG5 = createHtmlElement('div', 'form-group form-radio');
formG5.innerHTML = 'Gender: ';
var genderMale = createInputElement('input', 'radio', 'gender', 'form-controlR', 'genderM');
genderMale.setAttribute('value', 'Male');
var labelGenderMale = createLabelElement('label', 'gender', 'Male');
var genderFemale = createInputElement('input', 'radio', 'gender', 'form-controlR', 'genderF');
genderFemale.setAttribute('value', 'Female');
var labelGenderFemale = createLabelElement('label', 'gender', 'Female');
formG5.append(labelGenderMale, genderMale, labelGenderFemale, genderFemale);


var formG6 = createHtmlElement('div', 'form-group form-checkbox');
formG6.innerHTML = 'Choice of Food: ';
var foodChicken = createInputElement('input', 'checkbox', 'foodChicken', 'form-controlC', 'Chicken');
foodChicken.setAttribute('value', 'Chicken');
var labelFoodChicken = createLabelElement('label', 'Chicken', 'Chicken');
var foodPizza = createInputElement('input', 'checkbox', 'foodPizza', 'form-controlC', 'Pizza');
foodPizza.setAttribute('value', 'Pizza');
var labelFoodPizza = createLabelElement('label', 'Pizza', 'Pizza');
var foodBurger = createInputElement('input', 'checkbox', 'foodChicken', 'form-controlC', 'Burger');
foodBurger.setAttribute('value', 'Burger');
var labelFoodBurger= createLabelElement('label', 'Burger', 'Burger');
var foodNoodles = createInputElement('input', 'checkbox', 'foodNoodles', 'form-controlC', 'Noodles');
foodNoodles.setAttribute('value', 'Noodles');
var labelFoodNoodles = createLabelElement('label', 'Noodles', 'Noodles');
var foodBread = createInputElement('input', 'checkbox', 'foodBread', 'form-controlC', 'Bread');
foodBread.setAttribute('value', 'Bread');
var labelFoodBread = createLabelElement('label', 'Bread', 'Bread');
formG6.append(labelFoodChicken, foodChicken, labelFoodPizza, foodPizza, labelFoodBurger, foodBurger, labelFoodNoodles, foodNoodles, labelFoodBread, foodBread);

var formG7 = createHtmlElement('div', 'form-group');
var stateSelect = createHtmlElement('select','custom-select', 'stateS');
stateSelect.setAttribute('name', 'State');
var labelStateSelect = createLabelElement('label', 'stateS', 'State');
formG7.append(labelStateSelect, stateSelect);

var optionStateDefault = createOptionElement('Select State');
var optionState1 = createOptionElement('Tamil Nadu', 'Tamil Nadu');
var optionState2 = createOptionElement('Kerala', 'Kerala');
stateSelect.append(optionStateDefault, optionState1, optionState2);


var formG8 = createHtmlElement('div', 'form-group');
var countrySelect = createHtmlElement('select','custom-select', 'countryS');
countrySelect.setAttribute('name', 'Country');
var labelCountrySelect = createLabelElement('label', 'countryS', 'Country');
formG8.append(labelCountrySelect, countrySelect);

var optionCountryDefault = createOptionElement('Select Country');
var optionCountry1 = createOptionElement('India', 'India');
var optionCountry2 = createOptionElement('Nepal', 'Nepal');
countrySelect.append(optionCountryDefault, optionCountry1, optionCountry2);


var formG9 = createHtmlElement('div', 'form-group form-button');
var formSubmit = createHtmlElement('button', 'btn btn-primary btn-block');
formSubmit.type = 'button';
formSubmit.innerHTML = 'Submit';
formSubmit.addEventListener('click', formData);
formG9.append(formSubmit);
formBox.append(formG1, formG2, formG3, formG4, formG5, formG6, formG7, formG8, formG9);



var tableBox = createHtmlElement('table', 'table', 'TL');
columnLower.append(tableBox);

var tRowHead = createHtmlElement('tr', 'table-row-head');
var tHead1 = createHtmlElement('th', 'table-head', 'TH1');
tHead1.innerHTML = ('First Name');
var tHead2 = createHtmlElement('th', 'table-head', 'TH2');
tHead2.innerHTML = ('Last Name');
var tHead3 = createHtmlElement('th', 'table-head', 'TH3');
tHead3.innerHTML = ('Address');
var tHead4 = createHtmlElement('th', 'table-head', 'TH4');
tHead4.innerHTML = ('Pincode');
var tHead5 = createHtmlElement('th', 'table-head', 'TH5');
tHead5.innerHTML = ('Gender');
var tHead6 = createHtmlElement('th', 'table-head', 'TH6');
tHead6.innerHTML = ('Choice of Food');
var tHead7 = createHtmlElement('th', 'table-head', 'TH7');
tHead7.innerHTML = ('State');
var tHead8 = createHtmlElement('th', 'table-head', 'TH8');
tHead8.innerHTML = ('Country');
tRowHead.append(tHead1, tHead2, tHead3, tHead4, tHead5, tHead6, tHead7, tHead8);
var tBody = createHtmlElement('tbody', 'table-body', 'TB');
tableBox.append(tRowHead, tBody);

var genderValue = '';
var foodChoice = [];
var formArray = [firstName, lastName, address, pinCode, genderValue, foodChoice, stateSelect, countrySelect];
var foodArray = [foodChicken, foodPizza, foodBurger, foodNoodles, foodBread];

function getGender(){
   if(genderMale.checked){
       genderValue = genderMale.value;
       genderMale.checked='false';
   }
   else if(genderFemale.checked){
       genderValue = genderFemale.value;
       genderFemale.checked='false';
   }
}
function getFood(){
    foodArray.forEach(elem=>{
        if(elem.checked){
        foodChoice.push(elem.value);
        elem.checked='false';
        }
    });
}
function formData(){
    getGender();
    getFood();
    var tRow = createHtmlElement('tr', 'table-row');
    var tCol1 = createHtmlElement('td', 'table-cell');
    tCol1.innerHTML = firstName.value;
    firstName.value = '';
    var tCol2 = createHtmlElement('td', 'table-cell');
    tCol2.innerHTML = lastName.value;
    lastName.value = '';
    var tCol3 = createHtmlElement('td', 'table-cell');
    tCol3.innerHTML = address.value;
    address.value = '';
    var tCol4 = createHtmlElement('td', 'table-cell');
    tCol4.innerHTML = pinCode.value;
    pinCode.value = '';
    var tCol5 = createHtmlElement('td', 'table-cell');
    tCol5.innerHTML = genderValue;
    var tCol6 = createHtmlElement('td', 'table-cell');
    tCol6.innerHTML = foodChoice;
    foodChoice= [];
    var tCol7 = createHtmlElement('td', 'table-cell');
    tCol7.innerHTML = stateSelect.value;
    stateSelect.value = '';
    var tCol8 = createHtmlElement('td', 'table-cell');
    tCol8.innerHTML = countrySelect.value;
    countrySelect.value = '';

    tRow.append(tCol1, tCol2, tCol3, tCol4, tCol5, tCol6, tCol7, tCol8);
    tBody.appendChild(tRow);
}