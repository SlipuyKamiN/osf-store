import moment from 'moment/moment';
import Counter from './Counter';
import { CountersList } from './Counters.styled';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const monthSeconds = 2628288;

const endDate = [2023, 6, 31, 17, 0];
const startDate = [2023, 6, 1];
const months = moment(endDate).diff(startDate, 'months');
const days = moment(endDate).diff(startDate, 'days');
const secondsLeft = moment(endDate).diff(Date.now(), 'seconds');

const counterTypes = [
  { dimension: 'months', duration: months * monthSeconds },
  { dimension: 'days', duration: days * daySeconds },
  { dimension: 'hours', duration: 24 * hourSeconds },
  { dimension: 'minutes', duration: hourSeconds },
  { dimension: 'seconds', duration: minuteSeconds },
];

const Counters = () => {
  return (
    <CountersList>
      {counterTypes.map(({ duration, dimension }) => (
        <Counter
          key={dimension}
          duration={duration}
          dimension={dimension}
          secondsLeft={secondsLeft}
        />
      ))}
    </CountersList>
  );
};

export default Counters;
