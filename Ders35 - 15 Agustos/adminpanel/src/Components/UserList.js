import { useState } from "react";

import "./UserListStyle.css";

function UserList({ fullname, languages, admin }) {
  const [toggle, setToggle] = useState(false);

  function toggleSwitch() {
    // if (toggle == "Göster") {
    //   setToggle("Gizle");
    // } else if (toggle == "Gizle") {
    //   setToggle("Göster");
    // }

    // toggle ? setToggle(false) : setToggle(true);

    setToggle(!toggle);
  }

  function deleteClicked() {}

  return (
    <div className={admin ? "maindiv1 admin" : "maindiv1"}>
      <h5 className={"fullname"}>{fullname}</h5>
      {toggle &&
        languages.map((item, index) => {
          return (
            <h5 key={index} className="languages">
              {item}
            </h5>
          );
        })}
      {/* <h5 className="admininfo">Admin: {String(admin)}</h5> */}
      {!admin && (
        <div>
          <button onClick={toggleSwitch} className="buttonIncele">
            {toggle ? "Gizle" : "Göster"}
          </button>
          <button className="buttonIncele redButton">Sil</button>
        </div>
      )}
    </div>
  );
}

export default UserList;
