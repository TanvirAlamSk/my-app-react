import React, { Component } from "react";

// -----------------------Function Component-------------------
// Arrow function
// const Person = (p) => {
//   //   console.log(p);
//   return (
//     <div>
//       <p>
//         <span>{p.name}</span> is Programming language
//       </p>
//     </div>
//   );
// };

// -----------------------------normal function--------------------

// function Person() {
//   return (
//     <div>
//       <p>Programming is fantastic</p>
//     </div>
//   );
// }

//------use resct library

// function Person() {
// return React.createElement(
//   "div",
//   null,
//   createElement("p", null, "Programming is fantistic")
// );
//   }

// --------------- class copmonent----------------------------
class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.name);
    return (
      <h3>
        <span>{this.props.name}</span> is a Programming language
      </h3>
    );
  }
}
export default Person;
