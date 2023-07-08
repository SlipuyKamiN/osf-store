import { benefits } from 'data/benefits';
import BenefitItem from './BenefitItem';
import { BenefitsSection, HiddenTitle, List } from './BenefitsContent.styled';

const BenefitsContent = () => {
  return (
    <BenefitsSection>
      <HiddenTitle>Benefits</HiddenTitle>
      <List>
        {benefits.map(benefit => (
          <BenefitItem benefit={benefit} key={benefit.title} />
        ))}
      </List>
    </BenefitsSection>
  );
};

export default BenefitsContent;
