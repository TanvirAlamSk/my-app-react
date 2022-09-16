import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

// --------------------Functional Component--------------------
// function App() {
//   return (
//     <div className="App">
//       <h1>Hallo World!</h1>
//       <Person />
//     </div>
//   );
// }

//-----------------------use resct library-------------------------

// function App() {
// return React.createElement(
//   "div",
//   { className: "App" },
//   createElement("h1", null, "Bangladesh"),
//   <Person />
// );
// }

// --------------------Class Component--------------------
// let i = 1;
// const language = ["C", "R", "C++"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hallo World!</h1>
        <Person name="C" />
        <Person name="R" />
        <Person name="C++" />
        <Person name="GO" />
      </div>
    );
  }
}

export default App;
