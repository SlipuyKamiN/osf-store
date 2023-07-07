import Footer from 'components/Global/Footer/Footer';
import Header from 'components/Global/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import UserBar from 'components/Global/Header/UserBar';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
      <UserBar mobile />
    </Container>
  );
};

export default SharedLayout;
