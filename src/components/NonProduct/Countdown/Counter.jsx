import moment from 'moment/moment';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { colors } from 'styles/common/vars';
import { Dimensions } from './Counters.styled';

const leadingZero = (num, places) => String(num).padStart(places, '0');

const Counter = ({dimension, dimensionInSeconds, secondsLeft}) => {

    const getRemainingFloor = remainingTime =>
    moment.duration(remainingTime * 1000);

    return <li>
                <CountdownCircleTimer
                isPlaying
                strokeWidth={5}
                size={110}
                duration={dimension * dimensionInSeconds}
                initialRemainingTime={secondsLeft}
                colors={colors.accentGreen}
                >
                {({ remainingTime }) =>
                    leadingZero(
                    Math.floor(getRemainingFloor(remainingTime).dimension()),
                    2
                    )
                }
                </CountdownCircleTimer>
                <Dimensions>{Object.keys({dimension})[0]}</Dimensions>
            </li>
}

export default Counter;