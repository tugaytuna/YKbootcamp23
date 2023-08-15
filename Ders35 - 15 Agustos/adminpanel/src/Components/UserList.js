import { useState } from "react";

import "./UserListStyle.css";

function UserList({ fullname, languages, admin }) {
  const [toggle, setToggle] = useState("Göster");
  function toggleSwitch() {
    console.log(fullname);
    if (toggle == "Göster") {
      setToggle("Gizle");
    } else if (toggle == "Gizle") {
      setToggle("Göster");
    }
  }

  return (
    <div className={admin ? "maindiv1 admin" : "maindiv1"}>
      <h5 className={"fullname"}>{fullname}</h5>
      {toggle == "Gizle" &&
        languages.map((item, index) => {
          return (
            <h5 key={index} className="languages">
              {item}
            </h5>
          );
        })}
      {/* <h5 className="admininfo">Admin: {String(admin)}</h5> */}
      {!admin && (
        <button onClick={toggleSwitch} className="buttonIncele">
          {toggle}
        </button>
      )}
    </div>
  );
}

export default UserList;
