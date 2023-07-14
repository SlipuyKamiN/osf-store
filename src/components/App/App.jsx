import AdditionalInfo from 'components/ProductDetailed/ProductTabs/AdditionalInfo';
import Description from 'components/ProductDetailed/ProductTabs/Description';
import Reviews from 'components/ProductDetailed/ProductTabs/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/404/404';
import Cart from 'pages/Cart/Cart';
import CategoryLanding from 'pages/CategoryLanding/CategoryLanding';
import Home from 'pages/Home/Home';
import ProductDetailed from 'pages/ProductDetailed/ProductDetailed';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="shopping-cart" element={<Cart />}></Route>
        <Route path="category-landing" element={<CategoryLanding />}></Route>
        <Route
          path="product-detailed/:productId/:productTitle"
          element={<ProductDetailed />}
        >
          <Route path="description" element={<Description />} />
          <Route path="additional-information" element={<AdditionalInfo />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />}></Route>
      </Route>
    </Routes>
  );
};
