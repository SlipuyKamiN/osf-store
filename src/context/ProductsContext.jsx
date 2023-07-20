import $ from 'jquery';

import { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext({
  allProducts: [],
  wishlist: [],
  cart: [],
});

const BASE_URL = 'https://osf-store.onrender.com/api/products';

export const useProducts = () => useContext(ProductsContext);

const checkLocalStorage = key => {
  try {
    const item = localStorage.getItem(key);

    if (!item || !item.length) return [];

    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => checkLocalStorage('wishlist'));
  const [cart, setCart] = useState(() => checkLocalStorage('cart'));

  useEffect(() => {
    $.ajax(BASE_URL, {
      type: 'GET',
      dataType: 'json',
      async: false,
    })
      .then(setAllProducts)
      .catch(console.log);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [wishlist, cart]);

  const reducer = (action, payload) => {
    switch (action) {
      case 'wishlist/add':
        const wishIndex = wishlist.findIndex(({ id }) => id === payload.id);
        if (wishIndex !== -1) return alert('qwe');

        setWishlist(prevState => [...prevState, payload]);
        break;

      case 'wishlist/remove':
        setWishlist(prevState => prevState.filter(({ id }) => id !== payload));
        break;

      case 'cart/add':
        const itemIndex = cart.findIndex(({ id }) => id === payload.id);
        if (itemIndex !== -1) return alert('qwe');

        setCart(prevState => [...prevState, payload]);
        break;

      case 'cart/remove':
        setCart(prevState => prevState.filter(({ id }) => id !== payload));
        break;

      case 'cart/updateQuantity':
        setCart(prevState =>
          prevState.map(item => {
            if (item.id === payload.id) {
              return { ...item, orderQuantity: payload.orderQuantity };
            }
            return item;
          })
        );
        break;

      default:
        console.warn('Error, unknown action!');
        break;
    }
  };

  return (
    <ProductsContext.Provider value={{ allProducts, wishlist, cart, reducer }}>
      {children}
    </ProductsContext.Provider>
  );
};
