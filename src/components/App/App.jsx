import { Description } from 'components/ProductDetailed/ProductDetails.styled';
import AdditionalInfo from 'components/ProductDetailed/ProductTabs/AdditionalInfo';
import Reviews from 'components/ProductDetailed/ProductTabs/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/404/404';
import Cart from 'pages/Cart/Cart';
import CategoryLanding from 'pages/CategoryLanding/CategoryLanding';
import Home from 'pages/Home/Home';
import ProductDetailed from 'pages/ProductDetailed/ProductDetailed';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="category-landing" element={<CategoryLanding />}></Route>
        <Route path="OSF-Theme/:productId" element={<ProductDetailed />}>
          <Route path="description" element={<Description />} />
          <Route path="additional-information" element={<AdditionalInfo />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
};
