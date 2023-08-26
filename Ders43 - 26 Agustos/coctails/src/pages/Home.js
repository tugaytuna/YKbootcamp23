import { useState } from "react";
import axios from "axios";
import ListofSearch from "../components/ListofSearch";

function Home() {
  const [input1Value, setInput1Value] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [searchNotFound, setSearchNotFound] = useState(false);

  let searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const searchClicked = () => {
    axios
      .get(searchUrl + input1Value)
      .then((item) => {
        // console.log(item.data);
        if (item.data.drinks == null) {
          setSearchResults([]);
          setSearchNotFound(true);
        } else {
          setSearchNotFound(false);
          setSearchResults(item.data.drinks);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Search Coctails</h3>
      <input
        onChange={(e) => setInput1Value(e.target.value)}
        value={input1Value}
        type="text"
        name=""
        id=""
      />
      <button onClick={searchClicked}>Search</button>
      <br />
      {searchNotFound && <h1>Search term not found!</h1>}
      {searchResults.map((res, index) => (
        <ListofSearch
          key={index}
          title={res.strDrink}
          image={res.strDrinkThumb}
        />
      ))}
    </div>
  );
}

export default Home;
