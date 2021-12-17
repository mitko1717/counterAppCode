import "./App.css";
import React, { useState } from "react";

/* Задача: 
необхідно створити форму в якій буде 2 інпута для чисел і 
один селект для математичної операції (+,-,*,/). 
По сабміту форми користувач має побачити результат. 
Результат має бути завжди цілим числом.
Додай лейбли до полів вводу та анотації, щоб було інтуітивно зрозуміло що робити. 
Завдання можеш оформити у Github та прислати нам посиланням на репозіторій
або розшарити нам його за допомогою гуглдоку */

function App() {
  const [result, setResult] = useState(1);
  const [operator, setOperator] = useState("*");
  const [firstNum, setFirstNum] = useState(3);
  const [secondNum, setSecondNum] = useState(2);

  const mathOperation = (e) => {
    e.preventDefault();
    const res =
      operator === "*"
        ? +firstNum * +secondNum
        : operator === "/"
        ? +firstNum / +secondNum
        : operator === "+"
        ? +firstNum + +secondNum
        : operator === "-"
        ? +firstNum - +secondNum
        : null;
    setResult(res);
  };

  return (
    <div className="App">
      <form className="form">
        <label>
          <p>first num:</p>
          <input
            value={firstNum}
            onChange={(e) => setFirstNum(e.target.value)}
            type="number"
            name="first num"
          />
        </label>
        <label>
          <p>second num:</p>
          <input
            value={secondNum}
            onChange={(e) => setSecondNum(e.target.value)}
            type="number"
            name="second num"
          />
        </label>
        <label>
          <p>select operator:</p>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="/">/</option>
            <option value="*">*</option>
            <option value="-">-</option>
            <option value="+">+</option>
          </select>
        </label>

        <button onClick={mathOperation} type="submit">
          submit
        </button>
      </form>
      <div className="result">RESULT : {Math.ceil(result)}</div>
    </div>
  );
}

export default App;
