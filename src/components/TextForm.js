import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clicked." + text)
    let newText = text.toUpperCase();
    //setText("handle Up Click");
    setText(newText);
  };

  const handleLowClick = () => {
    //console.log("Upper case was clicked." + text)
    let newText = text.toLowerCase();
    //setText("handle Up Click");
    setText(newText);
  };

  const handleBlankClick = () => {
    //console.log("Upper case was clicked." + text)
    let newText = "";
    //setText("handle Up Click");
    setText(newText);
  };

  const handleTextClick = (event) => {
    console.log("Text area was clicked.");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  //setText("Enter your details for setText Function.");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextClick}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Upper
        </button>
        <button className="btn btn-secondary me-2" onClick={handleLowClick}>
          Convert to Lower
        </button>
        <button className="btn btn-danger me-2" onClick={handleBlankClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character.
        </p>
      </div>
    </>
  );
}
