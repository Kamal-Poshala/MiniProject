import axios from 'axios';

const main = async (query) => {
   console.log(query);
  const options = {
    method: 'GET',
    url: 'https://amazon23.p.rapidapi.com/product-search',
    params: {
      query: query,
      country: 'IN',
    },
    headers: {
      'X-RapidAPI-Key': '20a224caacmsh1f0b815de99c7eep1605abjsn3058c43d6015',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.result);
     const data=response.data.result;
    const res=await data.map((item)=>{
       return { 
        'title':item.title,
        'price':item.price,
        'url':item.url,
        'img':item.thumbnail,
        }
    })
   
    

      return res;
  } catch (error) {
    console.error(error);
  }

   return null;
};

const Fetchdata=async(query)=>{
    const data=await main(query);
    console.log('data:'+data)
    return data;
}

export default Fetchdata;