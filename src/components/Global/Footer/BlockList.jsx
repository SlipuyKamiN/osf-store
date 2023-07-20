import FooterBlockTitle from './FooterBlockTitle';
import { useState } from 'react';
import { List } from './BlockList.styled';
import { ListLink } from './Footer.styled';
import PropTypes from 'prop-types';

const BlockList = ({ title, listContent, isMobileScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div>
      <FooterBlockTitle
        title={title}
        isMobileScreen={isMobileScreen}
        isStateOpen={isListOpen}
        toggleFunc={setIsListOpen}
      />
      {(!isMobileScreen || isListOpen) && (
        <List className={title === 'Categories' && 'categories'}>
          {listContent.map(link => (
            <li key={link}>
              <ListLink to={link}>{link}</ListLink>
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default BlockList;

BlockList.propTypes = {
  title: PropTypes.string.isRequired,
  listContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMobileScreen: PropTypes.bool,
};
