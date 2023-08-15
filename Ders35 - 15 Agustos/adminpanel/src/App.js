import "./App.css";
import Girisyap from "./Components/Girisyap";
import users from "./Components/users";

class Test {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  giveinfo() {
    console.log(this.name, " ", this.surname);
  }
}

function App() {
  const test = {
    fullname: "Ardacan Yılmaz",
    username: "ardacan",
    password: 543,
    language: ["HTML", "CSS", "Ruby"],
    admin: false,
  };

  function testfonk() {
    users.push(test);
    console.log(users);

    const kkF = new Test("tugay", "tuna");
    kkF.giveinfo();
  }

  return (
    <div>
      <Girisyap></Girisyap>
      <button onClick={testfonk}>test</button>
    </div>
  );
}

export default App;
