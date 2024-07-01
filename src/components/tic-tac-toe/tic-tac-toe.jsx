import React, { useRef, useState } from "react";
import "./tic-tac-toe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  //making 9 references for boxes

  const box0 = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);

  let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

  const handleClick = (e, num) => {
    console.log(num, count, "LL");
    if (lock) {
      return 0;
    }

    if (data[num] === "") {
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src="${circle}"/>`;
        data[num] = "o";
        setCount(++count);
      } else {
        e.target.innerHTML = `<img src="${cross}"/>`;
        data[num] = "x";
        setCount(++count);
      }
    }

    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulation <img src="${cross}"/> Wins !!`;
    } else {
      titleRef.current.innerHTML = `Congratulation <img src="${circle}"/> Wins !!`;
    }
  };

  const handleReset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Play Tic Tac Toe";
    box_array.map((box) => {
      box.current.innerHTML = "";
    });
    setCount(0);
  };

  return (
    <>
      <div className="wrapper">
        <h1 ref={titleRef}>Play Tic Tac Toe</h1>
        <div className="block-container">
          <div className="row">
            <div
              className="block"
              ref={box0}
              onClick={(e) => handleClick(e, 0)}
            ></div>
            <div
              className="block"
              ref={box1}
              onClick={(e) => handleClick(e, 1)}
            ></div>
            <div
              className="block"
              ref={box2}
              onClick={(e) => handleClick(e, 2)}
            ></div>
          </div>
          <div className="row">
            <div
              className="block"
              ref={box3}
              onClick={(e) => handleClick(e, 3)}
            ></div>
            <div
              className="block"
              ref={box4}
              onClick={(e) => handleClick(e, 4)}
            ></div>
            <div
              className="block"
              ref={box5}
              onClick={(e) => handleClick(e, 5)}
            ></div>
          </div>
          <div className="row">
            <div
              className="block"
              ref={box6}
              onClick={(e) => handleClick(e, 6)}
            ></div>
            <div
              className="block"
              ref={box7}
              onClick={(e) => handleClick(e, 7)}
            ></div>
            <div
              className="block"
              ref={box8}
              onClick={(e) => handleClick(e, 8)}
            ></div>
          </div>
        </div>
        <button onClick={handleReset} className="btn" type="text">
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
