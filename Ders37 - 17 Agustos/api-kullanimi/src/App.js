import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let userURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    veriYukle();
  }, []);

  function veriYukle() {
    axios
      .get(userURL)
      .then((item) => {
        console.log(item.data);
        setUsers(item.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <h1>Kullanıcılar</h1>
      {error && <h2>Sayfa Yüklenemedi...</h2>}
      {loading && <h2>Yükleniyor...</h2>}
      {users.map((item) => (
        <div>
          <h4 key={item.id}>{item.name}</h4>
          <h6>{item.email}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
