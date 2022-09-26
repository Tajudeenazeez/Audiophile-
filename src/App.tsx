import React from 'react';
import Header from './components/Header';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Headphone from './pages/Headphone';
import Earphone from './pages/Earphone';
import Speaker from './pages/Speaker';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Headphone' element={<Headphone/>}/>
      <Route path='Earphone' element={<Earphone/>}/>
      <Route path='Speaker' element={<Speaker/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
