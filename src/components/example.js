const axios = require('axios');

const main = async () => {
  const options = {
    method: 'GET',
    url: 'https://amazon23.p.rapidapi.com/product-search',
    params: {
      query: 'xbox',
      country: 'US',
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '79597e73f1mshf5a3dbfffa19fc2p195f77jsn4b80c2b6da95',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

main();