import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h3>Giriş Yap</h3>
      <input type="text" name="" id="" placeholder="kullanıcı adı..." />
      <input type="password" name="" id="" placeholder="şifre" />
      <button className="buttonLogin">Giriş Yap</button>
    </div>
  );
}

export default Login;
