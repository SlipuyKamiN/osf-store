import { benefits } from 'data/benefits';
import BenefitItem from './BenefitItem';
import { BenefitsSection, List } from './BenefitsContent.styled';

const BenefitsContent = () => {
  return (
    <BenefitsSection>
      <List>
        {benefits.map(benefit => (
          <BenefitItem benefit={benefit} key={benefit.title} />
        ))}
      </List>
    </BenefitsSection>
  );
};

export default BenefitsContent;
