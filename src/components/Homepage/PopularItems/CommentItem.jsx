import {
  CommentCard,
  CommentText,
  CommentDate,
  CommentWrapper,
} from './CommentItem.styled';
import commentIcon from 'images/comment.svg';

const CommentItem = ({ original, comment }) => {
  return (
    <CommentCard imageUrl={original}>
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

export default CommentItem;
