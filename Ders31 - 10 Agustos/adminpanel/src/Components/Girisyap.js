import { useState } from "react";
import "./GirisyapStyle.css";

function Girisyap() {
  const [users, setUsers] = useState([
    {
      fullname: "Tugay Tuna",
      username: "tugay",
      password: 123,
      language: ["Javascript", "HTML", "CSS", "Python"],
      admin: true,
    },
    {
      fullname: "Ataberk Yılmaz",
      username: "ataberk",
      password: 555,
      language: ["Javascript", "CSS", "React"],
      admin: true,
    },
    {
      fullname: "Ardacan Yılmaz",
      username: "ardacan",
      password: 543,
      language: ["HTML", "CSS"],
      admin: false,
    },
    {
      fullname: "Bahadır Yılmaz",
      username: "bahadir",
      password: 888,
      language: ["Dotnet", "Java", "SQL", "PHP"],
      admin: true,
    },
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(false);

  function butonTiklandi() {
    users.map((item) => {
      if (item.username == username) {
        if (item.password == password) {
          setLogin(true);
        }
      }
    });
  }

  return (
    <div className="maindiv">
      <h1>Giriş Yap</h1>
      {!login ? (
        <div>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            name=""
            id=""
            placeholder="kullanıcı adı..."
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            name=""
            id=""
            placeholder="şifre..."
          />
          <button onClick={butonTiklandi}>Giriş Yap</button>
        </div>
      ) : (
        <h1>Giriş Yapıldı!</h1>
      )}
    </div>
  );
}

export default Girisyap;
