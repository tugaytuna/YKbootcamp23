import { useState, useEfect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  function getData() {
    axios
      .get(apiUrl)
      .then((data) => {
        // console.log(data.data.text);
        setText(data.data.text);
      })
      .catch(() => setError(true));
  }

  return (
    <div>
      <h1>Information</h1>
      {error && <h2>Sayfa Yüklenemedi...</h2>}
      <h2>{text}</h2>
      <button onClick={getData}>Get new Information!</button>
    </div>
  );
}

export default App;
