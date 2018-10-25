import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [word, setWord] = useState(
    window.localStorage.getItem("word") == null
      ? ""
      : window.localStorage.getItem("word")
  );
  const saveToLocalStorage = word => {
    window.localStorage.setItem("word", word);
  };

  function clearLocalStorage() {
    window.localStorage.clear();
  }

  function clearWord() {
    setWord("");
  }

  function handleNameChange(e) {
    setWord(e.target.value);
  }

  return (
    <div className="App">
      <div className="flex">
        <form>
          <label>Input a word:</label>
          <input
            className="input flex-child"
            value={word}
            onChange={e => handleNameChange(e)}
          />
        </form>
        {word.length >= 1 && (
          <button
            className="flex-child"
            title="save to localstorage"
            onClick={() => saveToLocalStorage(word)}
          >
            Add word to localStorage
          </button>
        )}
        <button className="flex-child" onClick={() => clearLocalStorage()}>
          Clear localStorage
        </button>
        <button className="flex-child" onClick={() => clearWord()}>
          Clear input
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
