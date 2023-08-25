import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchItemStyle.css";

function SearchItem({ username, profilUrl, avatar, followersUrl }) {
  const [followersCount, setFollowersCount] = useState();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(followersUrl).then((res) => {
      setFollowersCount(res.data.length);
      console.log(followersCount);
    });
  }

  return (
    <div className="SearchMain">
      <img src={avatar} alt="" />
      <a target={"_blank"} href={profilUrl}>
        {username}
      </a>
      <label htmlFor="">{followersCount} Followers</label>
      {/* <button
        onClick={() => {
          getData();
        }}
      >
        kk
      </button> */}
    </div>
  );
}

export default SearchItem;
