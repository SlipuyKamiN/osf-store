import { useLocation, useParams } from 'react-router-dom';

const useLocationPath = () => {
  const { productTitle } = useParams();
  const location = useLocation();
  const locationPath = [{ name: 'Home', pathName: '/' }];
  const pathNames = location.pathname
    .split('/')
    .filter(pathname => pathname !== '');

  if (productTitle) {
    locationPath.push(
      { pathName: '/', name: 'OSF-Theme' },
      { pathName: '/', name: productTitle }
    );

    return [locationPath];
  }

  pathNames.forEach(pathName => {
    locationPath.push({ name: pathName.replace(/-|%20/g, ' '), pathName });
  });

  return [locationPath];
};

export default useLocationPath;
