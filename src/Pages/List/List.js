import React from 'react';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import InputText from '../../components/InputText/InputText';
import ItemBox from '../../components/ItemBox/ItemBox';
import './List.scss';

const List = () => {
  const [value, setValue] = React.useState('');
  const [item, setItem] = React.useState([]);
  const refInput = React.useRef();

  const handleClick = () => {
    setItem([...item, value]);
    refInput.current.focus();
    refInput.current.value = '';
  };

  return (
    <section className="list">
      <div className="listBox">
        <div className="addBox">
          <InputText
            id="adicionarValor"
            text="Digite"
            setValue={setValue}
            refInput={refInput}
          />
          <ButtonAdd handleClick={handleClick} />
        </div>
        <ItemBox items={item} setItem={setItem} />
      </div>
    </section>
  );
};

export default List;
