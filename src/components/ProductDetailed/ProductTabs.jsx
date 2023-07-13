import { useEffect } from 'react';
import {
  TabInfoWrapper,
  TabLink,
  TabListItem,
  TabsList,
  TabsSection,
} from './ProductTabs.styled';
import { Outlet } from 'react-router-dom';

const ProductTabs = () => {
  return (
    <TabsSection>
      <TabsList>
        <TabListItem>
          <TabLink to="description">Description</TabLink>
        </TabListItem>
        <TabListItem>
          <TabLink to="additional-information">Additional information</TabLink>
        </TabListItem>
        <TabListItem>
          <TabLink to="reviews">Reviews (2)</TabLink>
        </TabListItem>
      </TabsList>
      <TabInfoWrapper>
        <Outlet />
      </TabInfoWrapper>
    </TabsSection>
  );
};

export default ProductTabs;
