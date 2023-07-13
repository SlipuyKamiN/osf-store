import useLocationPath from 'hooks/useLocationPath';
import {
  BreadCrumbsSection,
  HistoryList,
  HistoryListItem,
} from './BreadCrumbs.styled';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ padding }) => {
  const [locationPath] = useLocationPath();

  return (
    <BreadCrumbsSection padding={padding}>
      <HistoryList>
        {locationPath.map(({ name, pathName }) => (
          <HistoryListItem key={name}>
            {<Link to={pathName}>{name}</Link>}
          </HistoryListItem>
        ))}
      </HistoryList>
    </BreadCrumbsSection>
  );
};

export default BreadCrumbs;
