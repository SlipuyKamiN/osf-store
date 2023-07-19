import { CounterInput } from 'components/Global/ItemCounter.styled';
import { CounterForm, Input, InputWrapper, SubmitButton } from './Form.styled';

const Form = () => {
  return (
    <CounterForm>
      <Input
        type="text"
        placeholder="Enter your email to receive the latest announcements"
      />
      <SubmitButton type="button" className="icon-arrow-right" />
    </CounterForm>
  );
};

export default Form;
