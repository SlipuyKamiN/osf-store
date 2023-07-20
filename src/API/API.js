import $ from 'jquery';

const BASE_URL = 'https://osf-store.onrender.com/api';

export const getAllProducts = async () => {
  const data = await $.ajax(`${BASE_URL}/products`, {
    type: 'GET',
    dataType: 'json',
  });

  return data;
};

export const releaseSubscribe = async body => {
  const data = await $.post(
    {
      url: `${BASE_URL}/users`,
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
    },
    JSON.stringify(body)
  );

  return data;
};
