import moment from 'moment/moment';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { colors } from 'styles/common/vars';
import { Dimensions, CountersList } from './Counter.styled';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const monthSeconds = 2628288;

const leadingZero = (num, places) => String(num).padStart(places, '0');

const Counter = () => {
  const endDate = [2023, 6, 26, 17, 0];
  const startDate = [2023, 6, 1];
  const months = moment(endDate).diff(startDate, 'months');
  const days = moment(endDate).diff(startDate, 'days');
  const secondsLeft = moment(endDate).diff(Date.now(), 'seconds');
  const getRemainingFloor = remainingTime =>
    moment.duration(remainingTime * 1000);

  return (
    <CountersList>
      <li>
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          size={110}
          duration={months * monthSeconds}
          initialRemainingTime={secondsLeft}
          colors={colors.accentGreen}
        >
          {({ remainingTime }) =>
            leadingZero(
              Math.floor(getRemainingFloor(remainingTime).months()),
              2
            )
          }
        </CountdownCircleTimer>
        <Dimensions>Months</Dimensions>
      </li>
      <li>
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          size={110}
          duration={days * daySeconds}
          initialRemainingTime={secondsLeft}
          colors={colors.accentGreen}
        >
          {({ remainingTime }) =>
            leadingZero(Math.floor(getRemainingFloor(remainingTime).days()), 2)
          }
        </CountdownCircleTimer>
        <Dimensions>Days</Dimensions>
      </li>
      <li>
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          size={110}
          duration={24 * hourSeconds}
          initialRemainingTime={secondsLeft}
          colors={colors.accentGreen}
        >
          {({ remainingTime }) =>
            leadingZero(Math.floor(getRemainingFloor(remainingTime).hours()), 2)
          }
        </CountdownCircleTimer>
        <Dimensions>Hours</Dimensions>
      </li>
      <li>
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          size={110}
          duration={60 * minuteSeconds}
          initialRemainingTime={secondsLeft}
          colors={colors.accentGreen}
        >
          {({ remainingTime }) =>
            leadingZero(
              Math.floor(getRemainingFloor(remainingTime).minutes()),
              2
            )
          }
        </CountdownCircleTimer>
        <Dimensions>Minutes</Dimensions>
      </li>
      <li>
        <CountdownCircleTimer
          isPlaying
          strokeWidth={5}
          size={110}
          duration={minuteSeconds}
          initialRemainingTime={secondsLeft}
          colors={colors.accentGreen}
        >
          {({ remainingTime }) =>
            leadingZero(
              Math.floor(getRemainingFloor(remainingTime).seconds()),
              2
            )
          }
        </CountdownCircleTimer>
        <Dimensions>Seconds</Dimensions>
      </li>
    </CountersList>
  );
};

export default Counter;
