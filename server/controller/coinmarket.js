import fetch from 'node-fetch';

const options = {
  method: 'GET',
  qs: {
    start: 1,
    limit: 5000,
    convert: 'USD',
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'd7416e91-b5e0-4001-8d5a-8681e9413226',
  },
};
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

const coinMarket = {};

coinMarket.getLatest = function getLatest() {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((result) => resolve(result))
      .catch((err) => {
        reject(err);
      });
  });
};

export default coinMarket;
