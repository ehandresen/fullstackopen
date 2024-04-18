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
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  );
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>Press a button</div>;
  }

  return <div>Button press history: {allClicks.join(' ')}</div>;
};

export default LeftRight;
