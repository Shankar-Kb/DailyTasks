function createHtmlElement(element,  className='', id=''){
    var elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}

function createButton(className='', id='', btnName){
    var elem = document.createElement('button');
    elem.type = 'button';
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    elem.innerHTML = btnName;
    elem.value = btnName;
    return elem;
}

function displayValue(event){
    var display = document.getElementById('display');
    display.value += event.target.value;
    }

function calcFunction(){
    var display = document.getElementById('display');
    display.value = eval(display.value);
}
function clearFunction(){
    document.getElementById('display').value = '';
}

var containerBox = document.createElement('div');
containerBox.setAttribute('class', 'container-box container-fluid');
containerBox.setAttribute('id', 'CB');
document.body.append(containerBox);

document.body.addEventListener('keypress', function(event){

    if(window.event.keyCode<=47 || window.event.keyCode>=59){
        alert('Only Numbers are allowed');
    }else{
    var display = document.getElementById('display');
    display.value += event.key;
    }
    });

var row1 = createHtmlElement('div', 'row row-1', 'r1');
var col1a = createHtmlElement('input', 'col-12', 'display');
col1a.setAttribute('disabled','');
col1a.type = 'text';
row1.append(col1a);

var row2 = createHtmlElement('div', 'row row-2', 'r2');
var col2a = createButton('btn btn-dark col-3', 'bt7', '7');
col2a.addEventListener('click', displayValue);
var col2b = createButton('btn btn-dark col-3', 'bt8', '8');
col2b.addEventListener('click', displayValue);
var col2c = createButton('btn btn-dark col-3', 'bt9', '9');
col2c.addEventListener('click', displayValue);
var col2d = createButton('btn btn-secondary col-3', 'btDiv', '/');
col2d.addEventListener('click', displayValue);
row2.append(col2a, col2b, col2c, col2d);

var row3 = createHtmlElement('div', 'row row-3', 'r3');
var col3a = createButton('btn btn-dark col-3', 'bt4', '4');
col3a.addEventListener('click', displayValue);
var col3b = createButton('btn btn-dark col-3', 'bt5', '5');
col3b.addEventListener('click', displayValue);
var col3c = createButton('btn btn-dark col-3', 'bt6', '6');
col3c.addEventListener('click', displayValue);
var col3d = createButton('btn btn-secondary col-3', 'btMul', '*');
col3d.addEventListener('click', displayValue);
row3.append(col3a, col3b, col3c, col3d);

var row4 = createHtmlElement('div', 'row row-4', 'r4');
var col4a = createButton('btn btn-dark col-3', 'bt1', '1');
col4a.addEventListener('click', displayValue);
var col4b = createButton('btn btn-dark col-3', 'bt2', '2');
col4b.addEventListener('click', displayValue);
var col4c = createButton('btn btn-dark col-3', 'bt3', '3');
col4c.addEventListener('click', displayValue);
var col4d = createButton('btn btn-secondary col-3', 'btDiv', '-');
col4d.addEventListener('click', displayValue);
row4.append(col4a, col4b, col4c, col4d);

var row5 = createHtmlElement('div', 'row row-5', 'r5');
var col5a = createButton('btn btn-dark col-3', 'btDot', '.');
col5a.addEventListener('click', displayValue);
var col5b = createButton('btn btn-dark col-3', 'bt0', '0');
col5b.addEventListener('click', displayValue);

var col5c = createButton('btn btn-primary col-3', 'btEq', '=');
col5c.addEventListener('click', calcFunction);

var col5d = createButton('btn btn-secondary col-3', 'btAdd', '+');
col5d.addEventListener('click', displayValue);
row5.append(col5a, col5b, col5c, col5d);

var row6 = createHtmlElement('div', 'row row-6', 'r6');
var col6a = createButton('btn btn-danger col-3', 'btClr', 'Clr');
col6a.addEventListener('click', clearFunction);
var col6b = createButton('btn btn-dark col-3', 'btLP', '(');
col6b.addEventListener('click', displayValue);
var col6c = createButton('btn btn-dark col-3', 'btRP', ')');
col6c.addEventListener('click', displayValue);
var col6d = createButton('btn btn-secondary col-3', 'btMod', '%');
col6d.addEventListener('click', displayValue);
row6.append(col6a, col6b, col6c, col6d);

var row7 = createHtmlElement('div', 'row row-7', 'r7');

containerBox.append(row1, row2, row3, row4, row5, row6);