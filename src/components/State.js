import { Button } from "@mui/material";
import { useState } from "react";

let cnt = 0; // 일반 변수 cnt

const State = () => {
  const [count, setCount] = useState(0); // count state 생성

  // state 값이 변경되면 렌더링 됨, 렌더링 되면 console 출력이 됨.
  console.log(`렌더링 count : ${count}, cnt : ${cnt}`);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        state count 변경
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          cnt += 1;
        }}
      >
        일반 count 변경
      </Button>

      <div> <span id='usestate'> count : {count} </span></div>
    </div>
  );
};

export default State;