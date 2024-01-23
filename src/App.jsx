import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "srinath",
    age: "20",
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      {/* <Card channel="chaiaurcode" someobj={newArr} /> */}
      <Card
        username="srinath"
        btnText="click me"
        bio="Hi I'm Srinath.. Connect to me"
      />
      <Card
        username="rohitsharma"
        // btnText="visit me"
        bio="HI I'm Rohit Sharma.. Connect to me"
      />
    </>
  );
}

export default App;
