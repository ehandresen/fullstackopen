import { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [mostVotes, setMostVotes] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const newPoints = {
      ...points,
      [selected]: points[selected] + 1,
    };
    console.log(newPoints);

    setPoints(newPoints);

    showMostVoted();
  };

  const showMostVoted = () => {
    let max = points[0];
    let index = 0;

    for (let key in points) {
      if (points[key] > max) {
        max = points[key];
        index = key;
        console.log('max:', max);
        console.log('index:', index);
      }
    }

    setMostVotes(index);
  };

  return (
    <div>
      <h1 style={styles}>Anecdote of the day</h1>
      <button onClick={handleClick}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <p>
        {selected}. {anecdotes[selected]}
      </p>
      <p>Votes: {points[selected]}</p>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  );
};

const styles = {
  color: '#fff',
  background: 'black',
  padding: '5px',
  borderRadius: '5px',
  fontFamily: 'sans-serif',
};

export default App;