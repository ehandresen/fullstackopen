import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title title="statistics" />
      <Display value={good} text="good" />
      <Display value={neutral} text="neutral" />
      <Display value={bad} text="bad" />
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
  console.log('Display prop:', props);
  const { value, text } = props;

  return (
    <p>
      {text} {value}
    </p>
  );
};

export default App;
