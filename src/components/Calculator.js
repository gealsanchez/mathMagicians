import React from 'react';

const Calculator = () => (
  <div className="calc-container">
    <div className="calc-display">
      <span className="calc-result">0</span>
    </div>
    <div className="calc-keypad">
      <button type="button" className="calc-button">AC</button>
      <button type="button" className="calc-button">+/-</button>
      <button type="button" className="calc-button">%</button>
      <button type="button" className="calc-button bckg-orange">/</button>
      <button type="button" className="calc-button">7</button>
      <button type="button" className="calc-button">8</button>
      <button type="button" className="calc-button">9</button>
      <button type="button" className="calc-button bckg-orange">x</button>
      <button type="button" className="calc-button">4</button>
      <button type="button" className="calc-button">5</button>
      <button type="button" className="calc-button">6</button>
      <button type="button" className="calc-button bckg-orange">-</button>
      <button type="button" className="calc-button">1</button>
      <button type="button" className="calc-button">2</button>
      <button type="button" className="calc-button">3</button>
      <button type="button" className="calc-button bckg-orange">+</button>
      <button type="button" className="calc-button two-space-width">.</button>
      <button type="button" className="calc-button">0</button>
      <button type="button" className="calc-button bckg-orange">=</button>
    </div>
  </div>
);

export default Calculator;
