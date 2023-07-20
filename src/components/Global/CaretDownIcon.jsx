import { Icon } from './CaretDownIcon.styled';
import PropTypes from 'prop-types';

const CaretDownIcon = ({ isOpen }) => (
  <Icon className="icon-caret-down" isOpen={isOpen}></Icon>
);

export default CaretDownIcon;

CaretDownIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
