import { AddressText, ContactLink, ContactList } from './Address.styled';

const Address = () => {
  return (
    <address>
      <AddressText>
        Headquarters: <br />
        5600, Blvd, des Galeries, Bur 530 Quebec, Quebec G2K 2H6
      </AddressText>
      <ContactList>
        <li>
          <ContactLink href="mailto:contact@osf-global.com">
            contact@osf-global.com
          </ContactLink>
        </li>
        <li>
          <ContactLink href="tel:+18885484344">+1 (888) 548-4344</ContactLink>
        </li>
      </ContactList>
    </address>
  );
};

export default Address;
