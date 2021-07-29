import "./styles.css";

/**
 * Login Page with username and a submit button
 * Requirements out of the test are mention below
 * Semantic tags are mandatory
 * Form validations
 * overwrite default validations
 * Accessibility standards are mandatory
 * CSSOM usage
 */
// // document.getElementById("app").innerHTML = `
// // <h1>Hello Candidate!</h1>
// // <h3>Create Login Page with username and a submit button</h3>
// // <h4>Requirements out of the test are mention below: </h3>
// // <div>
// //   <ul>
// //     <li>Semantic tags are mandatory</li>
// //     <li>Form validations</li>
// //     <li>overwrite default validations</li>
// //     <li>Add event handlers for button in javascript</li>
// //     <li>Accessibility standards are mandatory</li>
// //   </ul>
// // </div>
// // `;
// handleLogin();

// function handleLogin() {
//   let user = document.getElementById("usr")
//   let password = document.getElementById("Pass")
//   if(!(user && password)){
//     alert("Please enter the user or pssword")
//   }
//   console.log("events");
// }

///add event handler (click event handler in js)

//addEventListener --> approch

const myobj = {
  title: "hello",

  sayTitle: function () {
    setTimeout(function () {
      console.log(this.title);
    }, 0);
  }
};

myobj.sayTitle();

let a = [1, 2, 3];
let b = [...a, 4];
console.log(b);
