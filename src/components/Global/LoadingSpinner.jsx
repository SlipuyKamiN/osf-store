const { RotatingLines } = require('react-loader-spinner');
const { SpinnerWrapper } = require('./LoadingSpinner.styled');
const { colors } = require('styles/common/vars');

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <RotatingLines strokeColor={colors.accentGreen} width="54px" />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
