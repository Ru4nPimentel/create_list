import React from 'react';
import './ItemBox.scss';
import icon_delet from '../../assets/icon/ic-delete.png';

const ItemBox = ({ items, setItem }) => {
  const refBox = React.useRef();

  React.useEffect(() => {
    if (items.length === 0) {
      refBox.current.classList.add('itemOff');
      refBox.current.classList.remove('itemOn');
    } else {
      refBox.current.classList.add('itemOn');
      refBox.current.classList.remove('itemOff');
    }
  }, [items]);

  return (
    <ul className="ItemBox" ref={refBox}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <span>{item}</span>
            <button
              onClick={() => {
                setItem(
                  items.filter((atual, itemArray) => {
                    return index !== itemArray ? atual : false;
                  }),
                );
              }}
            >
              <img src={icon_delet} alt="icon_delet" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemBox;
