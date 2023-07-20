import {
  CounterButton,
  CounterInput,
  ItemCounterWrapper,
} from './ItemCounter.styled';
import PropTypes from 'prop-types';

const ItemCounter = ({ orderQuantity, setOrderQuantity }) => {
  const handleChangeQuantity = type => {
    if (type === 'decrement') {
      setOrderQuantity(orderQuantity - 1);
      return;
    }

    setOrderQuantity(orderQuantity + 1);
    return;
  };

  const handleInputChange = event => {
    if (Number(event.target.value) <= 0) return;

    setOrderQuantity(Number(event.target.value));
  };

  return (
    <ItemCounterWrapper>
      <CounterButton
        type="button"
        disabled={orderQuantity <= 1}
        onClick={() => {
          handleChangeQuantity('decrement');
        }}
      >
        -
      </CounterButton>
      <CounterInput
        type="number"
        name="quantity"
        min={0}
        value={orderQuantity}
        onChange={handleInputChange}
      />
      <CounterButton
        type="button"
        onClick={() => {
          handleChangeQuantity('increment');
        }}
      >
        +
      </CounterButton>
    </ItemCounterWrapper>
  );
};

export default ItemCounter;

ItemCounter.propTypes = {
  orderQuantity: PropTypes.number.isRequired,
  setOrderQuantity: PropTypes.func.isRequired,
};
