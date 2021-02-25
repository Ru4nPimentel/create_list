import React from 'react';
import './InputText.scss';

const InputText = ({ id, text, setValue, refInput }) => {
  return (
    <input
      className="InputText"
      type="text"
      ref={refInput}
      name={id}
      id={id}
      placeholder={text}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputText;
