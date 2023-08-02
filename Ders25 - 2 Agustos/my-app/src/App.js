import {useState} from "react";
import "./App.css";

function App() {
  // let baslik = "Baslik2"

  const [baslik, setBaslik] = useState("Baslik 2")


  let buttonText = "Kaydet";

  function buttonTiklandi(){
    setBaslik("Yeni Başlık");
  }

  function girisYap(){
    console.log("giriş yap fonksyionu çalıştı!")
    setBaslik("Giriş Yap")
  }




  return <div>
    <h1>{baslik}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi repudiandae id quod suscipit ipsa nemo animi tempora assumenda molestiae dolor, sapiente, fugit impedit exercitationem velit rem, dolorum praesentium facilis?</p>
    <button onClick={buttonTiklandi} className="button1" >{buttonText}</button>
    <button onClick={girisYap} className="button1" >Giriş Yap</button>
    
  </div>;
}

export default App;
