import Part from './Part';

const Content = (props) => {
  const { parts } = props;

  const total = parts.map((part) => part.exercises);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        {'Total of ' +
          total.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) +
          ' exercises'}
      </p>
    </div>
  );
};

export default Content;
