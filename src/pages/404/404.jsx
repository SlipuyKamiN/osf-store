import BreadCrumbs from 'components/CategoryLanding/BreadCrumbs';
import ErrorSection from 'components/NonProduct/ErrorSection/ErrorSection';
import { ErrorMain } from 'components/NonProduct/ErrorSection/ErrorSection.styled';

const ErrorPage = () => {
  return (
    <ErrorMain>
      <BreadCrumbs padding={['26px 0 0', '48px 0 0']} />
      <ErrorSection />
    </ErrorMain>
  );
};

export default ErrorPage;
