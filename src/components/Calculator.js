import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const result = next || total || '0';

  return (
    <section className="calc-section">
      <h2>Lets do some math!</h2>
      <div className="calc-container">
        <div className="calc-display">
          <span className="calc-result">{result}</span>
        </div>
        <div className="calc-keypad">
          <button type="button" onClick={handleClick} className="calc-button">AC</button>
          <button type="button" onClick={handleClick} className="calc-button">+/-</button>
          <button type="button" onClick={handleClick} className="calc-button">%</button>
          <button type="button" onClick={handleClick} className="calc-button bckg-orange">/</button>
          <button type="button" onClick={handleClick} className="calc-button">7</button>
          <button type="button" onClick={handleClick} className="calc-button">8</button>
          <button type="button" onClick={handleClick} className="calc-button">9</button>
          <button type="button" onClick={handleClick} className="calc-button bckg-orange">x</button>
          <button type="button" onClick={handleClick} className="calc-button">4</button>
          <button type="button" onClick={handleClick} className="calc-button">5</button>
          <button type="button" onClick={handleClick} className="calc-button">6</button>
          <button type="button" onClick={handleClick} className="calc-button bckg-orange">-</button>
          <button type="button" onClick={handleClick} className="calc-button">1</button>
          <button type="button" onClick={handleClick} className="calc-button">2</button>
          <button type="button" onClick={handleClick} className="calc-button">3</button>
          <button type="button" onClick={handleClick} className="calc-button bckg-orange">+</button>
          <button type="button" onClick={handleClick} className="calc-button two-space-width">.</button>
          <button type="button" onClick={handleClick} className="calc-button">0</button>
          <button type="button" onClick={handleClick} className="calc-button bckg-orange">=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
