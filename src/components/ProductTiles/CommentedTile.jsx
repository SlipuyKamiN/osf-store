import commentIcon from 'images/comment.svg';
import {
  CommentCard,
  CommentDate,
  CommentText,
  CommentWrapper,
} from './CommentedTile.styled';
import PropTypes from 'prop-types';

const CommentedTile = ({ imageUrl, comment }) => {
  return (
    <CommentCard imageUrl={imageUrl}>
      <CommentWrapper>
        <CommentText>{comment.text}</CommentText>
        <CommentDate>
          <img src={commentIcon} alt="comment icon" width={24} />
          {`${comment.hoursAgo}H Ago`}
        </CommentDate>
      </CommentWrapper>
    </CommentCard>
  );
};

export default CommentedTile;

CommentedTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
};
