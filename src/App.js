import { useState } from "react";

export default function App(){
const initialValue = 90;
const [count, setCount] = useState(initialValue);
  let  [x, setX] = useState(0);
  let [y, setY] = useState(0);
// let [z, setZ] = useState(0);

function logValues(){
  console.log('x:'+x, 'y:'+y, 'count:' + count)
}

function checkForZero (){
  if (count===initialValue) {console.log('zero detected'); x=0; y=0}
}

function resetValue(){
  if (count > initialValue) {
    console.log("bigger than initialValue");
   setCount(count - x)
   setX(x = 0)
   setY(y = 0)
  logValues()
  }
 else if (count < initialValue) {
  console.log("smaller than initialValue");
  setCount(count + y)
  setY (y = 0)
  setX (x = 0)
  logValues()
   }}  

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => {checkForZero();
      setCount(count +1); setX(x +1); if (y>0) {setY(y -1)};
      logValues()
    }}>+</button>
      <button type="button" onClick={() => {checkForZero();
        setCount(count -1); setY(y +1); if (x>0) {setX(x-1)}; 
        logValues()
      }}>-</button>
      <button type="button" onClick={() =>
      {
        (count === initialValue) ? alert('nothing to reset') : resetValue();
        (count === 0) ? setX(x === 0) : console.log('whatToDoNow');
      }}>reset</button>
      <button type="button" onClick={() => console.clear()}>resetConsole</button>
    
    </>
  )
}