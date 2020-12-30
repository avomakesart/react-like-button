const baseUrl =
  'https://cdn.glitch.com/760886e0-5f1f-4216-9a2e-0e0c7c7797eb%2Fbuilds.json?v=1602261849911';

export const fetchData = (endpoint, data, method = 'GET') => {
  const url = baseUrl;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};
