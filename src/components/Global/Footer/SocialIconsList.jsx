import { footerLinks } from 'data/footerLinks';
import { ContactIconLink, ContactIconsList } from './SocialIconsList.styled';

const SocialIconsList = () => {
  return (
    <ContactIconsList>
      {footerLinks.socialsLinks.map(social => (
        <li key={social.name}>
          <ContactIconLink
            href={social.url}
            className={social.iconName}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <span>{social.name}</span>
          </ContactIconLink>
        </li>
      ))}
    </ContactIconsList>
  );
};
export default SocialIconsList;
