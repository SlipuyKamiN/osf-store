import {
  Benefit,
  BenefitDescription,
  BenefitTitle,
} from './BenefitItem.styled';

const BenefitItem = ({ benefit: { imageUrl, title, description } }) => {
  return (
    <Benefit>
      <img src={imageUrl} alt={title} width={63} />
      <div>
        <BenefitTitle>{title}</BenefitTitle>
        <BenefitDescription>{description}</BenefitDescription>
      </div>
    </Benefit>
  );
};

export default BenefitItem;
