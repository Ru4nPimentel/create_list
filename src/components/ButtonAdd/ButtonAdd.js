import React from 'react';
import './ButtonAdd.scss';

const ButtonAdd = ({ handleClick }) => {
  return (
    <button className="ButtonAdd" onClick={handleClick}>
      <div className="icon_plus">
        <i></i>
        <i></i>
      </div>
    </button>
  );
};

export default ButtonAdd;
