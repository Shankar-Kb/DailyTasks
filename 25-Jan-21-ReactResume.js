/* let rootElem = document.getElementById("root");
function Title(props) {
    return <h1>{ props.text }</h1>;
}

function App() {
    return (<div>
        <Title text='Hey!' />
    </div>);
}
ReactDOM.render(<App />, rootElem); */

let CreateComp = (props) => {
  return <div className={props.className} id={props.id}>{props.innerHTML}</div>
}

let CreateMultiple = (...elems) =>{
  return <div>{elems}</div>
}

let containerBox = <CreateComp className="container-box" id="CB" />;
ReactDOM.render(containerBox, document.getElementById("root"));

let box1 = <CreateComp className="box-1" id="box1" />;
let box2 = <CreateComp className="box-2" id="box2" />;
let box3 = <CreateComp className="box-3" id="box3" />;
ReactDOM.render(<React.Fragment> {box1}{box2}{box3} </React.Fragment>, document.getElementById("CB"));

let imageBox = <img id="DP" src={"https://st.depositphotos.com/2167093/3958/v/600/depositphotos_39580519-stock-illustration-user-man-icon-flat-design.jpg"}></img>;
let whiteBar = <CreateComp className="white-bar" />;
let bigName = <CreateComp className="big-name bold" innerHTML={<span>BHAVANI SHANKAR</span>}/>;
ReactDOM.render(<React.Fragment> {imageBox}{whiteBar}{bigName} </React.Fragment>, document.getElementById("box1"));

let addressBar = <span className="address-bar center" id="AB">"N. Damen Avenue, Chicago 999999 | 99999-99999 | hello@kick-resume.com"</span>
let line1 = <hr className="line-1"></hr>
ReactDOM.render(<React.Fragment> {addressBar}{line1} </React.Fragment>, document.getElementById("box2"));

let child3a = <CreateComp className="child-3a" id="child3a"/>;
let child3b = <CreateComp className="child-3b" id="child3b"/>;
let child3c = <CreateComp className="child-3c" id="child3c"/>;
let child3d = <CreateComp className="child-3d" id="child3d"/>;
ReactDOM.render(<React.Fragment> {child3a}{child3b}{child3c}{child3d} </React.Fragment>, document.getElementById("box3"));

let icon3a = <i className="fa fa-user fa-2x"></i>;
let title3a = <span className="title left bold">Profile</span>;
let header3a = <CreateComp className="header-3a" id="header3a"/>;
let content3a = <p className="content-3a">Aspiring Fullstack developer with knowledge in MERN stack. Love to tackle and solve new problems. Looking to gain some valueable experience while also working on real world projects</p>;
ReactDOM.render(<React.Fragment> {header3a}{content3a} </React.Fragment>, document.getElementById("child3a"));
ReactDOM.render(<React.Fragment> {icon3a}{title3a} </React.Fragment>, document.getElementById("header3a"));

let icon3b = <i className="fa fa-flask fa-2x"></i>;
let title3b = <span className="title left bold">Skills</span>;
let header3b = <CreateComp className="header-3b" id="header3b"/>;
let content3b = <CreateComp className="content-3b" id="content3b"/>;
ReactDOM.render(<React.Fragment> {header3b}{content3b} </React.Fragment>, document.getElementById("child3b"));
ReactDOM.render(<React.Fragment> {icon3b}{title3b} </React.Fragment>, document.getElementById("header3b"));


let table3b = <table className="table-3b" id="table3b"></table>;
ReactDOM.render(table3b, document.getElementById("content3b"));


let tRow1 = <tr className="trow-1" id="tRow1"></tr>;
let tData1a = <td className="tdata-1a center" id="tData1a" colSpan="2">{<h3>Technical Skills</h3>}</td>;
ReactDOM.render(table3b, document.getElementById("content3b"));

let tRow2 = <tr className="trow-2" id="tRow2"></tr>;
let tData2a = <td className="tdata-2a" id="tData2a">{"Javascript"}</td>;
let tData2b = <input type="range" className="slider" id="javascript" min="1" max="100" value="100"></input>;

let tRow3 = <tr className="trow-3" id="tRow3"></tr>;
let tData3a = <td className="tdata-3a" id="tData3a">{"HTML"}</td>;
let tData3b = <input type="range" className="slider" id="HTML" min="1" max="100" value="90"></input>;

let tRow4 = <tr className="trow-4" id="tRow4"></tr>;
let tData4a = <td className="tdata-4a" id="tData4a">{"CSS"}</td>;
let tData4b = <input type="range" className="slider" id="CSS" min="1" max="100" value="100"></input>;

let tRow5 = <tr className="trow-5" id="tRow5"></tr>;
let tData5a = <td className="tdata-5a" id="tData5a">{"Typescript"}</td>;
let tData5b = <input type="range" className="slider" id="Typescript" min="1" max="100" value="90"></input>;
ReactDOM.render(<React.Fragment> {tRow1},{tRow2}{tRow3}{tRow4}{tRow5}</React.Fragment>, document.getElementById("table3b"));
ReactDOM.render(<React.Fragment> {tData1a} </React.Fragment>, document.getElementById("tRow1"));
ReactDOM.render(<React.Fragment> {tData2a}{tData2b} </React.Fragment>, document.getElementById("tRow2"));
ReactDOM.render(<React.Fragment> {tData3a}{tData3b} </React.Fragment>, document.getElementById("tRow3"));
ReactDOM.render(<React.Fragment> {tData4a}{tData4b} </React.Fragment>, document.getElementById("tRow4"));
ReactDOM.render(<React.Fragment> {tData5a}{tData5b} </React.Fragment>, document.getElementById("tRow5"));


let icon3c = <i class="fa fa-briefcase fa-2x"></i>;
let title3c = <span class="title left bold">Projects summary</span>;
let header3c = <CreateComp className="header-3c" innerHTML={[icon3c, title3c]} />;
let content3c = <CreateComp className="content-3c" id="content3c"/>;
ReactDOM.render(<React.Fragment> {header3c}{content3c} </React.Fragment>, document.getElementById("child3c"));




let unOrderList1 = (<ul className="unorder-list-1"> 
<li className="list-item-1a"><b>Anonymous Information Sharing: </b>{'A comprehensive private chat application which is used to communicate through systems through an IP in a secure manner.'}</li>
<li className="list-item-1b"><b>Atheneum Information System: </b>{'Atheneum Information System or also known as AIS is a form of library management which helps the student to search, track and even purchase books from the college library.'}</li>
</ul>);
ReactDOM.render(unOrderList1, document.getElementById("content3c"));


let icon3d = <i class="fa fa-graduation-cap fa-2x"></i>;
let title3d = <span class="title left bold">Education</span>;

let header3d = <CreateComp className="header-3d" innerHTML={[icon3d, title3d]} />;
let content3d = <CreateComp className="content-3d" id="content3d" />
ReactDOM.render(<React.Fragment> {header3d}{content3d} </React.Fragment>, document.getElementById("child3d"));

let subTitle3d = <span class="sub-title-3d left"><b>Computer Science Engineering</b></span>
let subYear3d = <span class="sub-title-3d right"><b>2012-2016</b></span>
let subHeader3d = <CreateComp className="sub-header-3d" innerHTML={[subTitle3d, subYear3d]}/>
ReactDOM.render(subHeader3d, document.getElementById("content3d"));

let unOrderList2 = (<ul className="unorder-list-2"> 
<li className="list-item-2a">Studied enginneering at Dr. MGR University specializing in Comptuer Science.</li>
<li className="list-item-2b">Developed two projects during the engineering course namely a Front-End Web Application and a Library Management Android Application.</li>
</ul>);
ReactDOM.render(unOrderList1, document.getElementById("content3d"));