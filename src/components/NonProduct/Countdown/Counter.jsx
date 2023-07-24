import moment from 'moment/moment';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { colors } from 'styles/common/vars';
import { Dimensions } from './Counters.styled';

const leadingZero = (num, places) => String(num).padStart(places, '0');

const Counter = ({ duration, dimension, secondsLeft }) => {
  const getDuration = remainingTime => moment.duration(remainingTime * 1000);

  const getValue = (type, remainingTime) => {
    return leadingZero(
      Math.floor(
        (() => {
          switch (type) {
            case 'months':
              return getDuration(remainingTime).months();

            case 'days':
              return getDuration(remainingTime).days();

            case 'hours':
              return getDuration(remainingTime).hours();

            case 'minutes':
              return getDuration(remainingTime).minutes();

            case 'seconds':
              return getDuration(remainingTime).seconds();

            default:
              break;
          }
        })()
      ),
      2
    );
  };

  return (
    <li>
      <CountdownCircleTimer
        isPlaying
        strokeWidth={5}
        size={110}
        duration={duration}
        initialRemainingTime={secondsLeft}
        colors={colors.accentGreen}
      >
        {({ remainingTime }) => getValue(dimension, remainingTime)}
      </CountdownCircleTimer>
      <Dimensions>{dimension}</Dimensions>
    </li>
  );
};

export default Counter;
