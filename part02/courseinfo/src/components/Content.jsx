import Part from './Part';

const Content = (props) => {
  const { parts } = props;

  const total = parts.reduce((acc, currentValue) => {
    return acc + currentValue.exercises;
  }, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        <strong>{`Total of ${total} exercises`}</strong>
      </p>
    </div>
  );
};

export default Content;
