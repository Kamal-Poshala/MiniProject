import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://pricer.p.rapidapi.com/str",
  params: { q: "Nike shoes" },
  headers: {
    "X-RapidAPI-Key": "2522808fa0msh070adc653b0b302p1c2c1ajsn7bdac4603e26",
    "X-RapidAPI-Host": "pricer.p.rapidapi.com",
  },
};

export default function FetchData2() {
    
    
  const [Details, setDetails] = useState('');
  useEffect(() => {
    try {
      const response = axios.request(options);
      //setDetails(response.Object)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },[]);
  return (
    <div>
      <p>Det-- {Details}</p>
    </div>
  );
}
