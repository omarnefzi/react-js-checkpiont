import { Component } from "react";
import "./App.css";
import Navs from "./component/NavBar";
import Forms from "./component/Forms";
import Cards from "./component/Cards";

class App extends Component {
  render() {
    const data = [
      { title: "dark", text: "German Serie" },
      { title: "Game Of Throne", text: "Britain Serie" },
      { title: "Breaking Bad", text: "American Serie" },
    ];
    return (
      <div>
        <Navs />
        <Forms />
        <div className="container"style={{display: "flex",justifyContent: "space-evenly",marginTop: "30px",}}>
          
          {data.map((item) => {return <Cards title={item.title} text={item.text} />})}
        </div>
      </div>
    );
  }
}

export default App;
