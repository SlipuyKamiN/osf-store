import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useProducts } from 'context/ProductsContext';
import LoadingSpinner from 'components/Global/LoadingSpinner';
const AdditionalInfo = lazy(() =>
  import('components/ProductDetailed/ProductTabs/AdditionalInfo')
);
const Description = lazy(() =>
  import('components/ProductDetailed/ProductTabs/Description')
);
const Reviews = lazy(() =>
  import('components/ProductDetailed/ProductTabs/Reviews')
);
const ErrorPage = lazy(() => import('pages/404/404'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const CategoryLanding = lazy(() =>
  import('pages/CategoryLanding/CategoryLanding')
);
const Countdown = lazy(() => import('pages/Countdown/Countdown'));
const Home = lazy(() => import('pages/Home/Home'));
const ProductDetailed = lazy(() =>
  import('pages/ProductDetailed/ProductDetailed')
);

export const App = () => {
  const { isLoading } = useProducts();

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
        <Route path="countdown" element={<Countdown />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />}></Route>
      </Route>
    </Routes>
  );
};
