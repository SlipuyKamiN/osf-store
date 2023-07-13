import { ScrollToTopButton, ScrollToTopSection } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ScrollToTopSection>
      <ScrollToTopButton type="button" onClick={handleScrollToTop}>
        Scroll to top
      </ScrollToTopButton>
    </ScrollToTopSection>
  );
};

export default ScrollToTop;
