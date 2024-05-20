import React from 'react'

export const RoundedBar = (props) => {
    const { x, y, width, height } = props;
    const radius = 5; // Adjust the radius for the desired roundness

    return (
      <g>
        <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius} Z`} fill={props.fill} />
      </g>
    );
  };
