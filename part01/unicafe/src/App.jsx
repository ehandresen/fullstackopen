function App() {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={29} />
      {/* <Hello name={name} age={age} /> */}
    </div>
  );
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

export default App;