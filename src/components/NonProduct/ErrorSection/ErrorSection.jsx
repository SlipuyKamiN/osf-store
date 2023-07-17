import {
  ErrorDescription,
  ErrorInfo,
  PageTitle,
  ErrorTitle,
  GoHomeLink,
  OopsTitle,
  OopsWrapper,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchLabel,
  Section,
} from './ErrorSection.styled';

const ErrorSection = () => {
  return (
    <Section>
      <PageTitle>404</PageTitle>
      <ErrorInfo>
        <OopsWrapper>
          <OopsTitle>Oops!</OopsTitle>
        </OopsWrapper>
        <div>
          <ErrorTitle>Sorry, this page could not be found!</ErrorTitle>
          <ErrorDescription>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </ErrorDescription>
          <GoHomeLink to="/">Go back to homepage</GoHomeLink>
          <SearchForm autoComplete="off">
            <SearchLabel>Search our site</SearchLabel>
            <SearchInput type="text" placeholder="Search" />
            <SearchButton type="submit" className="icon-search" />
          </SearchForm>
        </div>
      </ErrorInfo>
    </Section>
  );
};

export default ErrorSection;
