import React from 'react';
import '../App.css';
import { useParams ,Link} from 'react-router-dom';
import { useGlobalContext } from './context';
function Result({resdata,setResdata}) {
    const {id}=useParams();
    const name1=useGlobalContext();

  return (
    <>

    {resdata && <ul className=' list-none w-full flex flex-row flex-wrap items-center  justify-center gap-3'>
    {
      resdata.map((item)=>(
        <li key={Math.random()} className='w-1/2 flex-shrink-0 bg-purple-300 rounded-lg border-4 border-purple-700 flex flex-row justify-between items-center my-2 p-2'>
             <img src={item.img}  />
             <div className='flex flex-col justify-evenly items-center mx-2 '>
             <a href={item.url} target='_blank'><h3 className='lg:text-xl text-sm'>{item.title}</h3></a>
             <div className='flex flex-col gap-2 justify-center items-center bg-pink-400 rounded-lg  p-2 border-2 border-pink-800 self-start my-3'>
             <p className='  text-white '>Price: RS {item.price.current_price}</p>
             <p className='text-xs font-bold text-red-600 line-through flex flex-row flex-nowrap -m-2 self-end mx-2'>
             {item.price.before_price}
             </p>             
             <p>{item.price.saving_amount}</p>
             </div>
             <p className='font-bold text-emerald-700 self-start'>Savings:{item.price.savings_percent}%</p>
             </div>
        </li>
      ))
    }
    </ul>
}   
    </>
  );
};

export default Result