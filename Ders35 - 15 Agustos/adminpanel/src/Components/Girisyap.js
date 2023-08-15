import { useState, useEffect } from "react";
import "./GirisyapStyle.css";
import UserList from "./UserList";
import kullanicilar from "./kullanicilar";

function Girisyap() {
  // console.log(kullanicilar);

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
      admin: false,
    },
    {
      fullname: "Ardacan Yılmaz",
      username: "ardacan",
      password: 543,
      language: ["HTML", "CSS", "Ruby"],
      admin: false,
    },
    {
      fullname: "Bahadır Yılmaz",
      username: "bahadir",
      password: 888,
      language: ["Dotnet", "Java", "SQL", "PHP"],
      admin: true,
    },
    {
      fullname: "Aykut Yılmaz",
      username: "aykut",
      password: 444,
      language: ["Java", "GO", "Dart"],
      admin: false,
    },
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(false);

  const [userId, setUserId] = useState();
  //null - undefined

  useEffect(() => {
    if (login) {
      console.log("giriş yapıldı");
    } else if (login == false) {
      console.log("giriş yapılmadı!");
    }
  }, [login]);

  function girisYapForm() {
    return (
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
    );
  }

  function butonTiklandi() {
    users.map((item, index) => {
      if (item.username == username) {
        if (item.password == password) {
          setLogin(true);
          setUserId(index);
        }
      }
    });
  }

  // function testFonksiyon(userId) {
  //   console.log(users);

  //   let usersTemp = [];
  //   users.map((item, index) => {
  //     if (index != userId) {
  //       usersTemp.push(item);
  //     }
  //   });
  //   setUsers(usersTemp);
  // }

  return (
    <div className="maindiv">
      <h1>Giriş Yap</h1>

      {!login
        ? girisYapForm()
        : users[userId].admin &&
          users.map((item, index) => {
            return (
              <UserList
                key={index}
                fullname={item.fullname}
                languages={item.language}
                admin={item.admin}
              ></UserList>
            );
          })}
    </div>
  );
}

export default Girisyap;
