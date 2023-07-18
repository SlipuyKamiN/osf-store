import { createPortal } from 'react-dom';
import { Backdrop } from '../LogInModal/LogInModal.styled';
import {
  AcceptButton,
  CloseButton,
  CookieWrapper,
  PolicyDescription,
  PolicyLink,
  PolicyTitle,
} from './CookiesPolicy.styled';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');
const checkLocalStorage = () => {
  try {
    const isPolicyAccepted = localStorage.getItem('policyAccepted');

    return JSON.parse(isPolicyAccepted);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const CookiesPolicy = ({ toggleCookies }) => {
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(() =>
    checkLocalStorage()
  );

  const handleAccept = () => {
    try {
      localStorage.setItem('policyAccepted', true);
      setIsPolicyAccepted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isPolicyAccepted) return;

  return createPortal(
    <Backdrop>
      <CookieWrapper>
        <CloseButton className="icon-x-close" onClick={toggleCookies} />
        <div>
          <PolicyTitle>This website uses cookies</PolicyTitle>
          <PolicyDescription>
            OSF uses its own and third-party cookies for statistical purposes,
            to know your preferences, for website performance and interaction
            with social media offering publicity tailored to your interests. If
            you continue browsing, we consider that you accept its use. You can
            expand this information consulting our{' '}
            <PolicyLink
              href="https://osf.digital/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Cookies Policy Page.
            </PolicyLink>
          </PolicyDescription>
        </div>
        <AcceptButton type="button" onClick={handleAccept}>
          Accept
        </AcceptButton>
      </CookieWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default CookiesPolicy;
