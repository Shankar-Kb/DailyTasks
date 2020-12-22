function createHtmlElement(element,  className='', id=''){
    var elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}

function createInputRange(element, className='', id='', min='', max='', val=''){
    var elem = document.createElement(element);
    elem.type = 'range';
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    elem.setAttribute('min', min);
    elem.setAttribute('max', max);
    elem.setAttribute('value', val);
    return elem;
}

var containerBox = document.createElement('div');
containerBox.setAttribute('class', 'container-box');
containerBox.setAttribute('id', 'CB');
document.body.append(containerBox);

var box1 = createHtmlElement('div', 'box-1');
var box2 = createHtmlElement('div', 'box-2');
var box3 = createHtmlElement('div', 'box-3');
containerBox.append(box1, box2, box3);

var imageBox = createHtmlElement('img','','DP');
imageBox.setAttribute('src', 'https://st.depositphotos.com/2167093/3958/v/600/depositphotos_39580519-stock-illustration-user-man-icon-flat-design.jpg');

var whiteBar = createHtmlElement('div','white-bar');
var bigName = createHtmlElement('div', 'big-name bold');
bigName.innerHTML = '<span>BHAVANI SHANKAR</span>';
box1.append(imageBox, whiteBar, bigName);

var addressBar = createHtmlElement('span','address-bar center','AB');
addressBar.innerHTML = 'Chennai | 9710080555 | shankar.kb95@gmail.com';
var line1 = createHtmlElement('hr', 'line-1');
box2.append(addressBar, line1);

var child3a = createHtmlElement('div', 'child-3a');
var child3b = createHtmlElement('div', 'child-3b');
var child3c = createHtmlElement('div', 'child-3c');
var child3d = createHtmlElement('div', 'child-3d');
box3.append(child3a, child3b, child3c, child3d);


var icon3a = createHtmlElement('i', 'fa fa-user fa-2x');
var title3a = createHtmlElement('span', 'title left bold');
title3a.innerHTML = 'Profile';
var header3a = createHtmlElement('div', 'header-3a');
header3a.append(icon3a, title3a);
var content3a = createHtmlElement('p', 'content-3a');
content3a.innerHTML = '<p>Aspiring Fullstack developer with knowledge in MERN stack. Love to tackle and solve new problems. Looking to gain some valueable experience while also working on real world projects</p>'
child3a.append(header3a, content3a);


var icon3b = createHtmlElement('i', 'fa fa-flask fa-2x');
var title3b = createHtmlElement('span', 'title left bold');
title3b.innerHTML = 'Skills';
var header3b = createHtmlElement('div', 'header-3b');
header3b.append(icon3b, title3b);
var content3b = createHtmlElement('div', 'content-3b');
child3b.append(header3b, content3b);


var table3b = createHtmlElement('table', 'table-3b');
content3b.append(table3b);

var tRow1 = createHtmlElement('tr', 'trow-1');
var tData1a = createHtmlElement('td', 'tdata-1a center');
tData1a.colSpan = '2';
tData1a.innerHTML = '<h3>Technical Skills</h3>';
tRow1.append(tData1a);

var tRow2 = createHtmlElement('tr', 'trow-2');
var tData2a = createHtmlElement('td');
tData2a.innerHTML = 'Javascript';
var tData2b = createInputRange('input', 'slider', 'javascript', '1', '100', '100');
tRow2.append(tData2a, tData2b);

var tRow3 = createHtmlElement('tr', 'trow-3');
var tData3a = createHtmlElement('td');
tData3a.innerHTML = 'HTML';
var tData3b = createInputRange('input', 'slider', 'html', '1', '100', '90');
tRow3.append(tData3a, tData3b);

var tRow4 = createHtmlElement('tr', 'trow-4');
var tData4a = createHtmlElement('td');
tData4a.innerHTML = 'CSS';
var tData4b = createInputRange('input', 'slider', 'css', '1', '100', '100');
tRow4.append(tData4a, tData4b);

var tRow5 = createHtmlElement('tr', 'trow-5');
var tData5a = createHtmlElement('td', 'tdata-5a center');
tData5a.colSpan = '2';
tData5a.innerHTML = '<h3>Additional Skills</h3>';
tRow5.append(tData5a);

var tRow6 = createHtmlElement('tr', 'trow-6');
var tData6a = createHtmlElement('td');
tData6a.innerHTML = 'Business Development';
var tData6b = createInputRange('input', 'slider', 'busdev', '1', '100', '75');
tRow6.append(tData6a, tData6b);

var tRow7 = createHtmlElement('tr', 'trow-7');
var tData7a = createHtmlElement('td');
tData7a.innerHTML = 'Recruitment';
var tData7b = createInputRange('input', 'slider', 'recruit', '1', '100', '65');
tRow7.append(tData7a, tData7b);

var tRow8 = createHtmlElement('tr', 'trow-8');
var tData8a = createHtmlElement('td');
tData8a.innerHTML = 'Project Management';
var tData8b = createInputRange('input', 'slider', 'promgmt', '1', '100', '75');
tRow8.append(tData8a, tData8b);
table3b.append(tRow1, tRow2, tRow3, tRow4, tRow5, tRow6, tRow7, tRow8);


var icon3c = createHtmlElement('i', 'fa fa-briefcase fa-2x');
var title3c = createHtmlElement('span', 'title left bold');
title3c.innerHTML = 'Projects Summary';
var header3c = createHtmlElement('div', 'header-3c');
header3c.append(icon3c, title3c);
var content3c = createHtmlElement('div', 'content-3c');
child3c.append(header3c, content3c);

var unOrderList1 = createHtmlElement('ul', 'unorder-list-1');
content3c.append(unOrderList1);

var listItem1a = createHtmlElement('li', 'list-item-1a');
listItem1a.innerHTML = '<b>Anonymous Information Sharing:</b> A comprehensive private chat application which is used to communicate through systems through an IP in a secure manner.';

var listItem1b = createHtmlElement('li', 'list-item-1b');
listItem1b.innerHTML = '<b>Atheneum Information System:</b> Atheneum Information System or also known as AIS is a form of library management which helps the student to search, track and even purchase books from the college library.';
unOrderList1.append(listItem1a, listItem1b);


var icon3d = createHtmlElement('i', 'fa fa-graduation-cap fa-2x');
var title3d = createHtmlElement('span', 'title left bold');
title3d.innerHTML = 'Education';
var header3d = createHtmlElement('div', 'header-3d');
header3d.append(icon3d, title3d);
var content3d = createHtmlElement('div', 'content-3d');
child3d.append(header3d, content3d);

var subHeader3d = createHtmlElement('div', 'sub-header-3d');
content3d.append(subHeader3d);
var subTitle3d = createHtmlElement('span', 'sub-title-3d left');
subTitle3d.innerHTML = '<b>Computer Science Engineering</b>';
var subYear3d = createHtmlElement('span', 'sub-year-3d right');
subYear3d.innerHTML = '2012-2016';
subHeader3d.append(subTitle3d, subYear3d);

var unOrderList2 = createHtmlElement('ul', 'unorder-list-2');
content3d.append(unOrderList2);

var listItem2a = createHtmlElement('li', 'list-item-2a');
listItem2a.innerHTML = 'Studied enginneering at Dr. MGR University specializing in Comptuer Science.';

var listItem2b = createHtmlElement('li', 'list-item-2b');
listItem2b.innerHTML = 'Developed two projects during the engineering course namely a Front-End Web Application and a Library Management Android Application.';
unOrderList2.append(listItem2a, listItem2b);






















