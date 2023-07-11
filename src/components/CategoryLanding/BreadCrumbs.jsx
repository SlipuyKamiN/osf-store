import { HistoryList, HistoryListItem } from './BreadCrumbs.styled';

const { useLocation, Link } = require('react-router-dom');

const BreadCrumbs = () => {
  const location = useLocation();
  const history = [{ name: 'Home', pathName: '/' }];
  const pathNames = location.pathname
    .split('/')
    .filter(pathname => pathname !== '');

  pathNames.forEach(pathName => {
    history.push({ name: pathName.replace(/-|%20/g, ' '), pathName });
  });

  return (
    <HistoryList>
      {history.map(({ name, pathName }) => (
        <HistoryListItem key={name}>
          {<Link to={pathName}>{name}</Link>}
        </HistoryListItem>
      ))}
    </HistoryList>
  );
};

export default BreadCrumbs;
