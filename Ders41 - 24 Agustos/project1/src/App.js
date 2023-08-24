import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let apiUrl = "https://ipapi.co/";
  let apiFormat = "/json/";

  const [input1Value, setInput1Value] = useState("");

  const [data, setData] = useState();
  const [sorguKontrol, setSorguKontrol] = useState(false);
  const [flagLink, setFlagLink] = useState();

  useEffect(() => {}, [data]);

  function getData() {
    let api = apiUrl + input1Value + apiFormat;
    axios
      .get(api)
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSorguKontrol(true);
        setFlagLink(
          "https://flagsapi.com/" + data.country_code + "/flat/64.png"
        );
      });
  }

  return (
    <div>
      <h1>Ip Address</h1>
      <input
        onChange={(e) => {
          setInput1Value(e.target.value);
        }}
        value={input1Value}
        placeholder="ip address..."
        type="text"
        name=""
        id=""
      />
      <button onClick={getData}>Search Address</button>

      {sorguKontrol && (
        <div>
          <h1 className="data2">{data.ip}</h1>

          <h2 className="data1">{data.country_name}</h2>
          <h2 className="data2"> {data.city}</h2>
          <h2 className="data1">{data.currency}</h2>
          <h2 className="data2">{data.country_code}</h2>
          <div className="imgFlag">
            <img
              src={"https://flagsapi.com/" + data.country_code + "/flat/64.png"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
