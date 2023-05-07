
import './App.css';
import FetchData from './components/FetchData';
import FetchData2 from './components/FetchData2';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
//import Result from './components/Result';
import SectionOne from './components/SectionOne';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
function App() {

  const [resdata,setResdata]=useState(null);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home resdata={resdata} setResdata={setResdata}/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
