const { Link, Outlet } = require('react-router-dom');

const ProductTabs = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="description">description</Link>
        </li>
        <li>
          <Link to="additional-information">additional-info</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default ProductTabs;
