import "./App.css";
import Userinfo from "./Userinfo";

function App() {
  let isim = "Tugay";
  let yas = 18 + 5;

  return (
    <div>
      <h1>Kullanıcı Bilgileri</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        asperiores aperiam cum ab, suscipit porro iste ullam eos ipsam officiis,
        voluptates expedita exercitationem vero ipsa ea commodi ex dolores.
        Odit.
      </p>
      <Userinfo
        name={isim}
        surname="Tuna"
        age={yas}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      ></Userinfo>

      <Userinfo
        name="Ataberk"
        surname="Yılmaz"
        age={17}
        description="Admin Kullanıcı."
      ></Userinfo>

      <Userinfo
        name="Ardacan"
        surname="Yeşilkaya"
        age={25}
        description="Misafir Kullanıcı"
      ></Userinfo>

      <Userinfo
        name="Bahadır"
        surname="Yılmaz"
        age={14}
        description="Misafir Kullanıcı"
      ></Userinfo>
    </div>
  );
}

export default App;
