import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Result from './Result';

const Home = ({resdata,setResdata}) => {
  return (
    <>
    <Navbar />
    <SectionOne />
    <SearchBar resdata={resdata} setResdata={setResdata}/>
    <SectionTwo />
     <Result resdata={resdata} setResdata={setResdata}/>
    </>
  )
}

export default Home