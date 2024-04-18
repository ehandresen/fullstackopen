import { useState } from 'react';

const LeftRight = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setAllClicks(allClicks.concat('L'));
  };

  const handleRightClick = () => {
    setRight(right + 1);
    setAllClicks(allClicks.concat('R'));
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>All clicks: {allClicks.join(' ')}</p>
    </div>
  );
};

export default LeftRight;
