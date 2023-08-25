import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchItem from "./components/SearchItem";

function App() {
  const [input1Value, setInput1Value] = useState("");

  const [searchData, setSearchData] = useState([]);

  let baseURL = "https://api.github.com/search/users?q=";

  function searchButton() {
    axios.get(baseURL + input1Value).then((res) => {
      setSearchData(res.data.items);
      // console.log(res.data.items);
    });
  }

  return (
    <div className="appMain">
      <h1>Github Search</h1>
      <div className="inputDiv">
        <input
          onChange={(e) => setInput1Value(e.target.value)}
          value={input1Value}
          placeholder="type username..."
          type="text"
          name=""
          id=""
        />
      </div>

      <button onClick={searchButton}>Search</button>
      <br />

      {searchData.map((item) => (
        <SearchItem
          username={item.login}
          profilUrl={item.html_url}
          avatar={item.avatar_url}
          followersUrl={item.followers_url}
        ></SearchItem>
      ))}
    </div>
  );
}

export default App;
