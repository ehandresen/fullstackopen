import { useState } from 'react';

const LeftRight = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setAllClicks(allClicks.concat('L'));
    setTotal(total + 1);
  };

  const handleRightClick = () => {
    setRight(right + 1);
    setAllClicks(allClicks.concat('R'));
    setTotal(total + 1);
  };

  return (
    <div>
      <Button click={left} onClick={handleLeftClick} text="left" />
      <Button click={right} onClick={handleRightClick} text="right" />
      <History allClicks={allClicks} />
      <p>Total clicks: {total}</p>
    </div>
  );
};

const History = (props) => {
  console.log('props value:', props);
  const { allClicks } = props;

  if (allClicks.length === 0) {
    return <div>Press a button</div>;
  }

  return <div>Button press history: {allClicks.join(' ')}</div>;
};

const Button = ({ click, onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
      {click}
    </div>
  );
};

export default LeftRight;
