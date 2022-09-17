import React from "react";

// props
const Book = (props) => {
  return (
    <div className="card">
      <div>
        <p>
          <h2 className="book">
            Book : {props.bookName}
            <br></br>
            <br></br>
            <span> Writer : {props.author}</span>
          </h2>
          <input
            type="text"
            onChange={props.inputChange}
            value={props.bookName}
          />
        </p>
        <p onClick={props.cng} className="decesition">
          Decesition : {props.other}
        </p>
      </div>
    </div>
  );
};

export default Book;
