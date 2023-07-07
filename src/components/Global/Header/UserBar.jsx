import { IconsList, IconCounter, IconLink } from './UserBar.styled';

const UserBar = ({ mobile = false }) => {
  const favouriteQuantity = 8;
  const inCartQuantity = 3;

  return (
    <IconsList className={mobile && 'mobile'}>
      <li>
        <IconLink to="search" className="icon-search" />
      </li>
      <li>
        <IconLink to="logIn" className="icon-user" />
      </li>
      <li>
        <IconLink to="favourite" className="icon-heart">
          <IconCounter>{favouriteQuantity}</IconCounter>
        </IconLink>
      </li>
      <li>
        <IconLink to="cart" className="icon-bag">
          <IconCounter>{inCartQuantity}</IconCounter>
        </IconLink>
      </li>
    </IconsList>
  );
};

export default UserBar;
