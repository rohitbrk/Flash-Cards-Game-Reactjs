import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(true);
  const [score, setScore] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (num1 + num2 === parseInt(result)) {
        setNum1(Math.ceil(Math.random() * 10));
        setNum2(Math.ceil(Math.random() * 10));
        setResult("");
        setAnswer(true);
        setScore((score) => score + 1);
      } else {
        setResult("");
        setAnswer(false);
      }
    }
  };

  const handleClick = () => {
    if (num1 + num2 === parseInt(result)) {
      setNum1(Math.ceil(Math.random() * 10));
      setNum2(Math.ceil(Math.random() * 10));
      setResult("");
      setAnswer(true);
      setScore((score) => score + 1);
    } else {
      setResult("");
      setAnswer(false);
    }
  };

  const reset = () => {
    setNum1(1);
    setNum2(1);
    setResult("");
    setAnswer(true);
    setScore(0);
  };

  if (score === 3) {
    return <h1 className="winner">Congrats,You Won !</h1>;
  } else {
    return (
      <div className="app">
        <h1 className={answer ? "" : "wrong"}>
          {num1}+{num2}
        </h1>
        <input
          value={result}
          onKeyPress={handleKeyPress}
          onChange={(e) => setResult(e.target.value)}
        />
        <button className="button" onClick={handleClick}>
          Submit
        </button>
        <h2>SCORE: {score}</h2>
        <br />
        <br />
        <button className="button" onClick={reset}>
          RESET
        </button>
      </div>
    );
  }
};

export default App;
