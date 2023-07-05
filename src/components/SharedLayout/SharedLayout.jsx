import Footer from 'components/Global/Footer/Footer';
import Header from 'components/Global/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
