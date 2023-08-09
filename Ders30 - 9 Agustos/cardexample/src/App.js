import { useState } from "react";
import "./App.css";
import Product from "./Components/Product";
import CButton from "./Components/CButton";

function App() {
  const [counter, setCounter] = useState(0);

  const [products, setProducts] = useState([
    {
      urunAdi: "Oyun Bilgisayarı",
      gorsel: require("./Images/product1.jpg"),
      aciklama: `İŞLEMCİ ÖZELLİKLERİ: 10. Nesil Intel Core i5 masaüstü işlemci İşlemci Temel Frekansı: 2.90 GHz / Turbo Frekansı: 4.30 GHz
    6 çekirdek / 12 iş parçacığı
    12 MB önbellek
    14 nm mimari
    65 W TDP
    Soket 1200
    `,
    },
    {
      urunAdi: "Iphone Telefon",
      gorsel: require("./Images/product2.jpg"),
      aciklama:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      urunAdi: "Macbook",
      gorsel: require("./Images/product3.jpg"),
      aciklama:
        "Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      urunAdi: "Canon 600D",
      gorsel: require("./Images/product4.jpg"),
      aciklama:
        "Lorem Ipsu industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      urunAdi: "Yeni Ürün",
      gorsel: require("./Images/product4.jpg"),
      aciklama:
        "Lorem Ipsu industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type type specimen book. ",
    },
    {
      urunAdi: "Macbook Air",
      gorsel: require("./Images/product3.jpg"),
      aciklama:
        "Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ]);

  let deneme = [1, 2, 36, 7, 8, 3, 1];

  // console.log(products[0].urunAdi);

  function artir() {
    setCounter(counter + 1);
  }

  function azalt() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      {/* <button onClick={azalt} className="buttonEksi">
        -
      </button> */}
      <CButton text="-" tiklandi={azalt}></CButton>
      <label>{counter}</label>
      {/* <button onClick={artir} className="buttonArti">
        +
      </button> */}
      <CButton text="+" tiklandi={artir}></CButton>
      <hr />
      {/* <Product
        urunAdi={products[0].urunAdi}
        gorsel={products[0].gorsel}
        aciklama={products[0].aciklama}
      ></Product> */}

      {products.map((item) => {
        return (
          <div>
            {/* <h1 className="urunIsimleri">{item.urunAdi}</h1> */}

            <Product
              urunAdi={item.urunAdi}
              gorsel={item.gorsel}
              aciklama={item.aciklama}
            ></Product>
          </div>
        );
      })}
    </div>
  );
}

export default App;
