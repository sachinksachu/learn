import React, { useState, useRef} from 'react';
import { useLocation} from 'react-router-dom';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const location = useLocation();
  console.log(location)

function startTimer(){

    clearInterval(timerRef.current);
    timerRef.current = setInterval(()=>{

        setTimer((prevTimer) => prevTimer + 1)
    },1000)
    
    console.log("ref",timerRef)
}

const stopTimer = () =>{
    clearInterval(timerRef.current);
}

const resetTimer = () =>{
    clearInterval(timerRef.current);
    setTimer(0)
}


    const onButtonClick = (param) => {
        switch (param) {
            case 0:
                startTimer();
                break;
            case 1:
                stopTimer();
                break;
            case 2:
                resetTimer();
                break;
            default:
                break;
        }
    }

  return (
    <div className="">
        <h1>Stopwatch {timer}</h1>
        <button type="button" onClick={()=>  onButtonClick(0)}>start</button>
        <button type="button"  onClick={()=> onButtonClick(1)}>stop</button>
        <button type="button"  onClick={()=> onButtonClick(2)}>reset</button>
        
    </div>
  );
}

export default Stopwatch;
