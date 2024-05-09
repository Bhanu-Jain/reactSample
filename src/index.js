import React from 'react';
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from './App';


// ReactDOM.render(<div id="root1"><h1>Hello World!</h1>
//   <h1>Hello World 2!</h1></div>
//   , document.getElementById("root"));

// ReactDOM.render([<h1>Hello World!</h1>,
//   <h1>Hello World 2!</h1>]
//   , document.getElementById("root"));


const root = createRoot(document.getElementById("root"));

// root.render(<div><h1>Hello World!</h1>
//   <h1>Hello World 2!</h1></div>);

// const fname = "Bhanu";
// const lname = "Jain";
// const currentDate = new Date();
// console.log(currentDate.toDateString());

// const imageSource1 = "https://picsum.photos/200/300";
// const imageSource2 = "https://picsum.photos/300/300";
// const imageSource3 = "https://picsum.photos/400/300";
// const alternateText = "random image";

// root.render(<React.Fragment><h1>Hello World!</h1>
//   <p>My fav netflix series:</p>
//   <ol>
//     <li>Abcd</li>
//     <li>Efgh</li>
//     <li>Hahaha</li>
//   </ol>
//   <p>My name is {fname} {lname}. My age is {13 * 2}.</p>
// </React.Fragment>);


// root.render(<React.Fragment><h1>Hello World!</h1>
//   <p>My fav netflix series:</p>
//   <ol>
//     <li>Abcd</li>
//     <li>Efgh</li>
//     <li>Hahaha</li>
//   </ol>
//   <p>{`My name is ${fname} ${lname}. My age is ${13 * 2}.`}</p>
// </React.Fragment>);


// root.render(<>
//   <p>{`My name is ${fname} ${lname}. My age is ${13 * 2}.`}</p>
//   <p>The current date is {currentDate.toLocaleDateString()}</p>
//   <p>The current time is {currentDate.toLocaleTimeString()}</p>
// </>);


//the styling for these classes are provided in the index.css file. The same has been imported in the class as well.

// root.render(<>
//   <h1 className="headingStyle">{`My name is ${fname} ${lname}. My age is ${13 * 2}.`}</h1>
//   <div className="imageStyle">
//     <img src={imageSource1} alt={alternateText} />
//     <img src={imageSource2} alt={alternateText} />
//     <img src={imageSource3} alt={alternateText} />
//   </div>
// </>);

//To use inline CSS - We create an object 

// const inlineHeadingStyle = {

//   fontFamily: "'Courier New', Courier, monospace",
//   color: "blueviolet",
//   textAlign: "center"
// }

// root.render(<>
//   <h1 style = {inlineHeadingStyle}>{`My name is ${fname} ${lname}. My age is ${13 * 2}.`}</h1>
//   <div className="imageStyle">
//     <img src={imageSource1} alt={alternateText} />
//     <img src={imageSource2} alt={alternateText} />
//     <img src={imageSource3} alt={alternateText} />
//   </div>
// </>);

// let greetingTextConfig = {

//   greetingText: 'Good morning',
//   greetingInlineStyle: {
//     color: 'green'
//   },
//   setGreetingTextAndColor: function(text, color){

//     this.greetingText = text;
//     this.greetingInlineStyle.color = color;
//   }
// }

// const currentTime = new Date();

// if(currentTime.getHours() >= 12 &&  currentTime.getHours() < 17){

//   greetingTextConfig.setGreetingTextAndColor('Good Afternoon', 'yellow');

// }else if(currentTime.getHours() >= 17 &&  currentTime.getHours() < 20){

//   greetingTextConfig.setGreetingTextAndColor('Good Evening', 'orange');


// }else if(currentTime.getHours() >= 20){

//   greetingTextConfig.setGreetingTextAndColor('Good Night', 'black');

// }


// root.render(<>
//   <h1 className = "headingStyle"> Hello Sir, <span style = {greetingTextConfig.greetingInlineStyle}>{greetingTextConfig.greetingText}</span></h1>
// </>);


//Using Component - Greetings (imported already)

// root.render(<>
//   <Greetings/>
// </>);




//Using main Component - App (imported already)

root.render(<>
  <App/>
</>);


// const btn = document.getElementById("add");
// console.log(btn);
