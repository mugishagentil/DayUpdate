import { useReducer } from 'react';
import './calculator.css'

function reducer(state, {type, playload}){

}
function  App(){
  const [{currentoperand, previousoperand, operation}, dispatch] = useReducer(reducer,
    {})
  return(
     <div className="Calculator">
     <div className="output">
      <div className="previous-operand">{previousoperand} {operation}</div>
      <div className="current-operand">{currentoperand}</div>
     </div>
     <button className="span-two">AC</button>
     <button className="Delete">DEL</button>
     <button>÷</button>
     <button>1</button>
     <button>2</button>
     <button>3</button>
     <button>×</button>
     <button>4</button>
     <button>5</button>
     <button>6</button>
     <button>+</button>
     <button>7</button>
     <button>8</button>
     <button>9</button>
     <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
     </div>
  );
}
export default  App