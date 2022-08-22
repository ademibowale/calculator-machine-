import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

export const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  function handleClick(e) {
    setObj((obj) => calculate(obj, e.target.innerText));
  }

  const { total, next, operation } = obj;

  return (
    <div>
      <Navbar />
      <h2 id="calc-title">Let us do some Maths!</h2>
      <div id="calc-body">
        <form>
          <input value={(total || '') + (operation || '') + (next || '')} onChange={(e) => handleClick(e)} />
        </form>
        <div id="keys">
          <button type="button" name="AC" onClick={handleClick}>AC</button>
          <button type="button" name="+/-" onClick={handleClick}>+/-</button>
          <button type="button" name="%" onClick={handleClick}>%</button>
          <button type="button" className="orange" name="/" onClick={handleClick}>÷</button>
          <button type="button" name="7" onClick={handleClick}>7</button>
          <button type="button" name="8" onClick={handleClick}>8</button>
          <button type="button" name="9" onClick={handleClick}>9</button>
          <button type="button" className="orange" name="*" onClick={handleClick}>x</button>
          <button type="button" name="4" onClick={handleClick}>4</button>
          <button type="button" name="5" onClick={handleClick}>5</button>
          <button type="button" name="6" onClick={handleClick}>6</button>
          <button type="button" className="orange" name="-" onClick={handleClick}>-</button>
          <button type="button" name="1" onClick={handleClick}>1</button>
          <button type="button" name="2" onClick={handleClick}>2</button>
          <button type="button" name="3" onClick={handleClick}>3</button>
          <button type="button" className="orange" name="+" onClick={handleClick}>+</button>
          <button type="button" name="0" id="zero" onClick={handleClick}>0</button>
          <button type="button" name="." onClick={handleClick}>.</button>
          <button type="button" className="orange" name="=" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
