import React from 'react';

const cellOutput = (cellObj) => {
  const { bomb, neighbor } = cellObj;
  if (bomb) return 'B';
  else return neighbor;
}

const Cell = (props) => {
  const output = cellOutput(props);
  return (
    <div className="cell">
      {output}
    </div>
  );
};

export default Cell;
