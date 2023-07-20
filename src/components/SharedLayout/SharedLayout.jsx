import Footer from 'components/Global/Footer/Footer';
import Header from 'components/Global/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import UserBar from 'components/Global/Header/UserBar';
import CookiesPolicy from 'components/NonProduct/CookiesPolicy/CookiesPolicy';
import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from 'components/Global/LoadingSpinner';

const SharedLayout = () => {
  const [showCookiesPolicy, setShowCookiesPolicy] = useState(false);

  const toggleCookies = () => {
    setShowCookiesPolicy(!showCookiesPolicy);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCookiesPolicy(true);
    }, 10000);
  }, []);

  return (
    <Container>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
      <Footer />
      <UserBar mobile />
      {showCookiesPolicy && <CookiesPolicy toggleCookies={toggleCookies} />}
    </Container>
  );
};

export default SharedLayout;
