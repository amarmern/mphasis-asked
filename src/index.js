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

///add event handler (click event handler in js)

//addEventListener --> approch

const form = document.getElementById("signup");
form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();

  // validate the form

  // // if valid, submit the form.
  // console.log(event.target["name"].value);
  // console.log(event.target["email"].value);

  var elements = document.getElementById("signup").elements;
  var obj = {};
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    obj[item.name] = item.value;
  }

  console.log(JSON.stringify(obj));
});

// const myobj = {
//   title: "hello",

//   sayTitle: function () {
//     setTimeout(function () {
//       console.log(this.title);
//     }, 0);
//   }
// };

// myobj.sayTitle();

//solution

let myobj = {
  title: "hello",
  sayTitle: function () {
    setTimeout(() => {
      console.log(this.title);
    }, 0);
  }
};
myobj.sayTitle();

///

let a = [1, 2, 3];
let b = [...a, 4];
console.log(b);

///
function Animal(name) {
  this.name = name;

  Animal.prototype.walk = () => {
    console.log(this.name, " is Walking");
  };
  Animal.prototype.bark = function () {
    console.log(this.name, " is barking");
  };
}
function Dog(...name) {
  Animal.apply(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

var bruno = new Dog("Bruno");
bruno.walk(); // Bruno is walking // Animal
bruno.bark(); // Bruno is barking // Dog
