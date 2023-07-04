import Footer from 'components/Footer/Footer';
import Header from 'components/Global/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
