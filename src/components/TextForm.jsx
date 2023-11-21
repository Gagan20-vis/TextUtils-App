import { useState } from "react";
console.log("Textform file")
export default function TextForm(props) {
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to UpperCase","danger");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to LowerCase","warning");
  };
  const clear = () => {
    setText("");
    props.showAlert("Text Cleared","info");
  };
  const [text, setText] = useState("Enter Text here");
  function TextLength(str){
    let ans = 0;
    let arr = str.split(" ");
    for(let x of arr) if(x!=='') ans++;
    return ans;
  }
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="myTextArea"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary" onClick={handleLowClick}>
        Convert to LowCase
      </button>
      <button className="btn btn-primary mx-2" onClick={clear}>
        Convert to Sentence
      </button>
      <h3 className="form-heading my-3">
        {TextLength(text)} words {text.replace(/ /g, '').length} characters
      </h3>
    </div>
  );
}
