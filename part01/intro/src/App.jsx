const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = ['Peter', 'Maya'];

  return (
    <div>
      <ul>
        {friends.map((friend, id) => (
          <li key={id}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
