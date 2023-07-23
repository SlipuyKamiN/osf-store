import { useProducts } from 'context/ProductsContext';
import { IconsList, IconCounter, IconLink } from './UserBar.styled';
import PropTypes from 'prop-types';
import LogInModal from 'components/NonProduct/LogInModal/LogInModal';
import { useState } from 'react';

const UserBar = ({ mobile = false }) => {
  const { wishlist, cart } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    document.querySelector('body').classList.toggle('modal-open');
    setIsModalOpen(!isModalOpen);
  };

  const cartTotalItemsCount = cart.reduce(
    (total, item) => total + item.orderQuantity,
    0
  );

  return (
    <>
      <IconsList className={mobile && 'mobile'}>
        <li>
          <IconLink to="search" className="icon-search" />
        </li>
        <li>
          <IconLink onClick={toggleModal} className="icon-user" />
        </li>
        <li>
          <IconLink to="favourite" className="icon-heart">
            <IconCounter>{wishlist.length}</IconCounter>
          </IconLink>
        </li>
        <li>
          <IconLink to="shopping-cart" className="icon-bag">
            <IconCounter>{cartTotalItemsCount}</IconCounter>
          </IconLink>
        </li>
      </IconsList>
      {isModalOpen && <LogInModal toggleModal={toggleModal} />}
    </>
  );
};

export default UserBar;

UserBar.propTypes = {
  mobile: PropTypes.bool,
};
