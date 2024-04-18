import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <Title title="give feedback" />

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Title title="statistics" />

      <Display value={good} text="good" />
      <Display value={neutral} text="neutral" />
      <Display value={bad} text="bad" />
      <Display value={total} text="total" />
      <Display value={average / total} text="average" decimal={2} />
      <p>{(good / total).toFixed(5) * 100} %</p>
    </div>
  );
};

// TITLE
const Title = (props) => <h1>{props.title}</h1>;

// BUTTON
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// DISPLAY
const Display = (props) => {
  let decimal = '';
  const { value, text } = props;

  !props.decimal ? (decimal = 0) : (decimal = props.decimal);

  return (
    <p>
      {text} {value.toFixed(decimal)}
    </p>
  );
};

export default App;
