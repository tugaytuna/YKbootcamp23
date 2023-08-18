import React from "react";
import "./UserCardStyle.css";

function UserCard({ username, fullname, email, location, company }) {
  return (
    <div onClick={()=>{console.log(username)}} className="cardMain">
      <label className="cardUsername" htmlFor="">
        {username}
      </label>
      <h2 className="cardName">{fullname}</h2>
      <h4>{email}</h4>
      <label htmlFor="">Location: {location}</label>
      <br />
      <label htmlFor="">Company: {company}</label>
    </div>
  );
}

export default UserCard;
