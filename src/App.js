import Button from "./Button";
import Board from "./Board";
import { useState } from "react";
import logo from "./assets/images/logo.png";
import "./assets/css/App.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setmyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [winner, setWinner] = useState("");

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    if (nextMyNum > nextOtherNum) {
      setWinner("나");
    } else if (nextMyNum < nextOtherNum) {
      setWinner("상대");
    } else {
      setWinner("");
    }

    setmyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setmyHistory([]);
    setOtherHistory([]);
  };
  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button onClick={handleRollClick} color="blue">
            던지기
          </Button>
          <Button onClick={handleClearClick} color="red">
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          name="나"
          color="blue"
          gameHistory={myHistory}
          isWinner={winner}
        ></Board>
        <Board
          name="상대"
          color="red"
          gameHistory={otherHistory}
          isWinner={winner}
        ></Board>
      </div>
    </div>
  );
}

export default App;
