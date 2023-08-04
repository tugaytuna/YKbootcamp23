import { useState } from "react";
import "./Login.css";
import Blogs from "./Blogs";

function Login() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [login, setLogin] = useState(false);

  let user1 = {
    kullaniciAdi: "tugay",
    sifre: 1234,
  };

  function girisYap() {
    if (
      inputValue1 == user1.kullaniciAdi &&
      inputValuePassword == user1.sifre
    ) {
      console.log("kullanıcı girişi başarılı");
      setLogin(true);
    }
  }

  return (
    <div>
      <h3>Giriş Yap</h3>
      <input
        onChange={(e) => {
          setInputValue1(e.target.value);
        }}
        value={inputValue1}
        type="text"
        name=""
        id=""
        placeholder="kullanıcı adı..."
      />
      <input
        onChange={(e) => {
          setInputValuePassword(e.target.value);
        }}
        value={inputValuePassword}
        type="password"
        name=""
        id=""
        placeholder="şifre"
      />
      <button onClick={girisYap} className="buttonLogin">
        Giriş Yap
      </button>
      {login == true ? <Blogs></Blogs> : <h3>Kullanıcı Doğrulanamadı...</h3>}
      {/* {inputValue1 == "tugay" ? (
        <h2>Kullancı Adı Doğru, şimdi şifreyi yaz</h2>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}

export default Login;
