import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Book from "./components/Book";

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
  state = {
    book: [
      { bookName: "Adventures of Tom Sawyer", author: "Mark Twain" },
      { bookName: "Ain - i - Akbari", author: "Abul Fazl" },
      { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
      { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
    ],
    other: "I am a programmer",
  };
  change = (para) => {
    this.setState({
      other: para,
    });
  };
  changeWithInput = (even) => {
    this.setState({
      book: [
        { bookName: "Adventures of Tom Sawyer", author: "Mark Twain" },
        { bookName: even.target.value, author: "Abul Fazl" },
        { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
        { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
      ],
    });
  };

  // old
  // cnostructor() {
  //   super();
  //   this.state = {
  //     book: [
  //       { bookName: "Adventures of Tom Sawyer", author: "Mark Twain" },
  //       { bookName: "Ain - i - Akbari", author: "Abul Fazl" },
  //       { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
  //       { bookName: "Alice in Wonderland", author: "Lewis Carrol" },
  //     ],
  //   };
  // }
  render() {
    return (
      <div className="App">
        <h1>Hallo World!</h1>
        <Person name="C" />
        <Person name="R" />
        <Person name="C++" />
        <Person name="GO" />
        <input type="text" onChange={this.changeWithInput} />
        <br></br>
        <button onClick={this.change.bind(this, "This books are Awesome")}>
          Click Here
        </button>
        <br></br>
        <Book
          bookName={this.state.book[0].bookName}
          author={this.state.book[0].author}
          other={this.state.other}
        />
        <Book
          bookName={this.state.book[1].bookName}
          author={this.state.book[1].author}
          other={this.state.other}
          inputChange={this.changeWithInput}
        />
        <Book
          bookName={this.state.book[2].bookName}
          author={this.state.book[2].author}
          other={this.state.other}
        />
        <Book
          bookName={this.state.book[3].bookName}
          author={this.state.book[3].author}
          other={this.state.other}
          cng={() => this.change("Programmers are get a shine life")}
        />
      </div>
    );
  }
}

export default App;
