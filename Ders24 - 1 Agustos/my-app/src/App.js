import "./App.css";

function App() {
  console.log("React Merhaba!")
  let x = 10;
  let y = 20;
  let toplam = x+y;


  return (
    <div>
      <h1 className="baslik" >React Merhaba!</h1>
      <p className="paragraf" >İlk react uygulamam yayında!</p>
      <h2>Toplam:  {toplam}</h2>
    </div>
  );
}

export default App;
