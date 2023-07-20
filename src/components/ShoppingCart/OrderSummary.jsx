import { useState } from 'react';
import {
  ButtonsList,
  CouponButton,
  CouponForm,
  CouponInput,
  SummarySection,
  ProceedButton,
  OrderSubtotalTable,
  DeliveryForm,
  FormTitle,
  DeliveryPriceWrapper,
  RadioButton,
  OrderTotalTable,
  UpdateButton,
  RadioButtonWrapper,
  RadioLabel,
} from './OrderSummary.styled';
import PropTypes from 'prop-types';

const OrderSummary = ({ cart }) => {
  const [deliveryOption, setDeliveryOption] = useState('00');

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.orderQuantity,
    0
  );

  const handleChangeOption = event => {
    setDeliveryOption(event.target.value);
  };

  return (
    <SummarySection>
      <CouponForm>
        <CouponInput type="text" placeholder="Enter Coupon Code" />
        <CouponButton>Apply</CouponButton>
      </CouponForm>
      <div>
        <ButtonsList>
          <li>
            <UpdateButton>Update Cart</UpdateButton>
          </li>
          <li>
            <ProceedButton>Proceed to checkout</ProceedButton>
          </li>
        </ButtonsList>
        <OrderSubtotalTable>
          <tbody>
            <tr>
              <td>Cart subtotal:</td>
              <td>$ {cartSubtotal}</td>
            </tr>
          </tbody>
        </OrderSubtotalTable>
        <DeliveryForm>
          <FormTitle>Shipping and handling:</FormTitle>

          <div>
            <RadioButtonWrapper>
              <RadioButton
                type="radio"
                onChange={handleChangeOption}
                checked={deliveryOption === '10'}
                name="delivery"
                value="10"
                id="Flat Rate"
              />
              <RadioLabel htmlFor="Flat Rate" name="delivery" value="10">
                Flat Rate <DeliveryPriceWrapper>$10.00</DeliveryPriceWrapper>
              </RadioLabel>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <RadioButton
                type="radio"
                onChange={handleChangeOption}
                checked={deliveryOption === '00'}
                name="delivery"
                value="00"
                id="Free shipping"
              />
              <RadioLabel htmlFor="Free shipping">Free shipping</RadioLabel>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <RadioButton
                type="radio"
                onChange={handleChangeOption}
                checked={deliveryOption === '60'}
                name="delivery"
                value="60"
                id="International"
              />
              <RadioLabel htmlFor="International">
                International:
                <DeliveryPriceWrapper>$60.00</DeliveryPriceWrapper>
              </RadioLabel>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <RadioButton
                type="radio"
                onChange={handleChangeOption}
                checked={deliveryOption === '5'}
                name="delivery"
                value="5"
                id="Local delivery"
              />
              <RadioLabel htmlFor="Local delivery">
                Local delivery:
                <DeliveryPriceWrapper>$5.00</DeliveryPriceWrapper>
              </RadioLabel>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <RadioButton
                type="radio"
                onChange={handleChangeOption}
                checked={deliveryOption === '0'}
                name="delivery"
                value="0"
                id="Local pickup"
              />
              <RadioLabel htmlFor="Local pickup">
                Local pickup (Free)
              </RadioLabel>
            </RadioButtonWrapper>
          </div>
        </DeliveryForm>
        <OrderTotalTable>
          <tbody>
            <tr>
              <td>Order Total:</td>
              <td>$ {cartSubtotal + Number(deliveryOption)}</td>
            </tr>
          </tbody>
        </OrderTotalTable>
      </div>
    </SummarySection>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
};
