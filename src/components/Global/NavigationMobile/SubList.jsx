import { useState } from 'react';
import { List, ServiceLink } from './SubList.styled';
import CaretDownIcon from '../CaretDownIcon';
import { Link } from 'react-router-dom';

const SubList = ({ title, listContent }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <li>
      <ServiceLink
        onClick={() => {
          setIsListOpen(!isListOpen);
        }}
      >
        {title}
        <CaretDownIcon isOpen={isListOpen} />
      </ServiceLink>
      {isListOpen && (
        <List>
          {listContent.map(item => (
            <li key={item}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </List>
      )}
    </li>
  );
};

export default SubList;
