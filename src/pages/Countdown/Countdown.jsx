import {
  CountdownMain,
  CounterSection,
} from 'components/NonProduct/Countdown/Countdown.styled';
import Counter from 'components/NonProduct/Countdown/Counters';
import Form from 'components/NonProduct/Countdown/Form';
import Title from 'components/NonProduct/Countdown/Title';

const Countdown = () => {
  return (
    <CountdownMain>
      <CounterSection>
        <Title />
        <Counter />
        <Form />
      </CounterSection>
    </CountdownMain>
  );
};

export default Countdown;
