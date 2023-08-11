import React from "react";
import "./UserListStyle.css";

function UserList({ fullname, languages, admin }) {
  return (
    <div className="maindiv1">
      <h5 className="fullname">{fullname}</h5>
      {languages.map((item) => {
        return <h5 className="languages">{item}</h5>;
      })}
      <h5 className="admininfo">Admin: {String(admin)}</h5>
    </div>
  );
}

export default UserList;
