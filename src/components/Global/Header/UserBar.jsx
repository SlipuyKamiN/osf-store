import { IconsList } from './Header.styled';
import { IconCounter, IconLink } from './UserBar.styled';

const UserBar = ({ favouriteQuantity, inCartQuantity }) => {
  return (
    <IconsList>
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
