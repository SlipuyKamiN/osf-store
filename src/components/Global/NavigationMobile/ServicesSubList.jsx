import { services } from 'data/services';

const { useState } = require('react');
const { NavigationLink, List } = require('./NavigationMobile.styled');
const { default: CaretDownIcon } = require('../CaretDownIcon');
const { default: SubList } = require('./SubList');

const ServicesSubList = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <>
      <NavigationLink
        onClick={() => {
          setIsListOpen(!isListOpen);
        }}
      >
        Services
        <CaretDownIcon isOpen={isListOpen} />
      </NavigationLink>
      {isListOpen && (
        <List>
          <SubList
            title={'Product categories'}
            listContent={services.productCategories}
          />
          <SubList title={'Sale'} listContent={services.sale} />
        </List>
      )}
    </>
  );
};

export default ServicesSubList;
