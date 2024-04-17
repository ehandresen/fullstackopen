const App = (props) => {
  console.log(props);
  const { counter } = props;

  return <div>{counter}</div>;
};

export default App;
