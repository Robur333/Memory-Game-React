import React from 'react';

const Card = ({ color, clickCount, handleClick, isRevealed, id }) => {
  let buttonBackGroundColor = color;
  const photo = require('./photos/' + color + '.jpg');
  const isDisabled = clickCount > 1 ? true : false;
  const style = [
    {
      backgroundColor: isRevealed === true ? buttonBackGroundColor : 'white',
    },
  ];
  return (
    <button
      key={id}
      disabled={isDisabled}
      id={id}
      onClick={handleClick}
      className="card"
      style={style[0]}
      color={color}
    >
      {isRevealed === false ? '?' : <img src={photo} alt="df" />}
    </button>
  );
};

export default Card;
