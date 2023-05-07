import React from 'react'
import Fetchdata from './FetchData'
import { useRef } from 'react'
export default function SearchBar({resdata,setResdata}) {
  const search=useRef('');

  const handlecall=async(e,query)=>{
           e.preventDefault();
           const rr=await Fetchdata(query);
           setResdata(rr);
  }

  return (
    <>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='id' ref={search}/>
        <button className="btn btn-outline-success" type="submit" onClick={(e)=>handlecall(e,search.current.value)}>Search</button>
      </form>
    </>
  )
}


/* [
  {
      "title": "Apple iPhone 14 (128 GB) - Midnight",
      "price": {
          "discounted": true,
          "current_price": 66999,
          "currency": "INR",
          "before_price": 79900,
          "savings_amount": 12901,
          "savings_percent": 16.15
      },
      "url": "https://www.amazon.in/dp/B0BDHX8Z63",
      "img": "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Plus (128 GB) - Midnight",
      "price": {
          "discounted": true,
          "current_price": 75999,
          "currency": "INR",
          "before_price": 89900,
          "savings_amount": 13901,
          "savings_percent": 15.46
      },
      "url": "https://www.amazon.in/dp/B0BDJKL7KM",
      "img": "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Pro Max (128 GB) - Space Black",
      "price": {
          "discounted": true,
          "current_price": 127999,
          "currency": "INR",
          "before_price": 139900,
          "savings_amount": 11901,
          "savings_percent": 8.51
      },
      "url": "https://www.amazon.in/dp/B0BDJ22G36",
      "img": "https://m.media-amazon.com/images/I/610pghkO81L._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 (128 GB) - Yellow",
      "price": {
          "discounted": true,
          "current_price": 69999,
          "currency": "INR",
          "before_price": 79900,
          "savings_amount": 9901,
          "savings_percent": 12.39
      },
      "url": "https://www.amazon.in/dp/B0BXQ2V3NJ",
      "img": "https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 (128 GB) - Blue",
      "price": {
          "discounted": true,
          "current_price": 67999,
          "currency": "INR",
          "before_price": 79900,
          "savings_amount": 11901,
          "savings_percent": 14.89
      },
      "url": "https://www.amazon.in/dp/B0BDK62PDX",
      "img": "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL320_.jpg"
  },
  {
      "title": "Apple iPhone 14 (256 GB) - Purple",
      "price": {
          "discounted": true,
          "current_price": 79999,
          "currency": "INR",
          "before_price": 89900,
          "savings_amount": 9901,
          "savings_percent": 11.01
      },
      "url": "https://www.amazon.in/dp/B0BDJB5KHG",
      "img": "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 (128 GB) - Purple",
      "price": {
          "discounted": true,
          "current_price": 67999,
          "currency": "INR",
          "before_price": 79900,
          "savings_amount": 11901,
          "savings_percent": 14.89
      },
      "url": "https://www.amazon.in/dp/B0BDJ213TX",
      "img": "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UL320_.jpg"
  },
  {
      "title": "Apple iPhone 14 (128 GB) - (Product) RED",
      "price": {
          "discounted": true,
          "current_price": 69999,
          "currency": "INR",
          "before_price": 79900,
          "savings_amount": 9901,
          "savings_percent": 12.39
      },
      "url": "https://www.amazon.in/dp/B0BDJVSDMY",
      "img": "https://m.media-amazon.com/images/I/611mRs-imxL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Pro (128 GB) - Deep Purple",
      "price": {
          "discounted": false,
          "current_price": 129900,
          "currency": "INR",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
      },
      "url": "https://www.amazon.in/dp/B0BDJ6ZMCC",
      "img": "https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Plus (256 GB) - Blue",
      "price": {
          "discounted": true,
          "current_price": 86999,
          "currency": "INR",
          "before_price": 99900,
          "savings_amount": 12901,
          "savings_percent": 12.91
      },
      "url": "https://www.amazon.in/dp/B0BDJQHJZZ",
      "img": "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Pro Max (256 GB) - Gold",
      "price": {
          "discounted": false,
          "current_price": 0,
          "currency": "INR",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
      },
      "url": "https://www.amazon.in/dp/B0BDK63WMS",
      "img": "https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 12 (128GB) - (Product) RED",
      "price": {
          "discounted": true,
          "current_price": 59900,
          "currency": "INR",
          "before_price": 70900,
          "savings_amount": 11000,
          "savings_percent": 15.51
      },
      "url": "https://www.amazon.in/dp/B08L5WJD1C",
      "img": "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Pro (256 GB) - Gold",
      "price": {
          "discounted": false,
          "current_price": 139900,
          "currency": "INR",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
      },
      "url": "https://www.amazon.in/dp/B0BDJ8WMV7",
      "img": "https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Plus (128 GB) - Purple",
      "price": {
          "discounted": true,
          "current_price": 75999,
          "currency": "INR",
          "before_price": 89900,
          "savings_amount": 13901,
          "savings_percent": 15.46
      },
      "url": "https://www.amazon.in/dp/B0BDJMSBXY",
      "img": "https://m.media-amazon.com/images/I/61YSNhAb00L._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Plus (128 GB) - Blue",
      "price": {
          "discounted": true,
          "current_price": 75999,
          "currency": "INR",
          "before_price": 89900,
          "savings_amount": 13901,
          "savings_percent": 15.46
      },
      "url": "https://www.amazon.in/dp/B0BDK62STN",
      "img": "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg"
  },
  {
      "title": "Apple iPhone 14 Plus (256 GB) - (Product) RED",
      "price": {
          "discounted": true,
          "current_price": 86999,
          "currency": "INR",
          "before_price": 99900,
          "savings_amount": 12901,
          "savings_percent": 12.91
      },
      "url": "https://www.amazon.in/dp/B0BDJVX14D",
      "img": "https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY218_.jpg"
  }
] */