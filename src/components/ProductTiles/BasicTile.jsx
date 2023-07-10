import {
  Image,
  BasicCard,
  BasicDescription,
  BasicLabel,
  BasicTitle,
} from './BasicTile.styled';

const BasicTile = ({ item: { imageUrl, title, label } }) => {
  return (
    <BasicCard>
      <Image src={require(`../../${imageUrl}`)} alt={title} width="270px" />
      <BasicDescription>
        <BasicTitle>{title}</BasicTitle>
        <BasicLabel>{label}</BasicLabel>
      </BasicDescription>
    </BasicCard>
  );
};

export default BasicTile;
