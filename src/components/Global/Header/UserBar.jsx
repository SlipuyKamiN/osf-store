import { useProducts } from 'context/ProductsContext';
import { IconsList, IconCounter, IconLink } from './UserBar.styled';

const UserBar = ({ mobile = false }) => {
  const { wishlist, cart } = useProducts();

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
          <IconCounter>{wishlist.length}</IconCounter>
        </IconLink>
      </li>
      <li>
        <IconLink to="cart" className="icon-bag">
          <IconCounter>{cart.length}</IconCounter>
        </IconLink>
      </li>
    </IconsList>
  );
};

export default UserBar;
