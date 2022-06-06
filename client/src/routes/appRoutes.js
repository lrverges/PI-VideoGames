import React from "react";
import {  Route, Routes } from 'react-router-dom';
import Videogames from '../components/videogames/videogames';
import CreateVideogame from '../components/createVideogame/createVideogame';
import DetailVideogame from '../components/detailVideogame/detailVideogame';
import LandingPage from '../components/landingPage/landingPage'
import About from '../components/about/about'
import NotFound from '../components/notFound/notFound'
 import NavBar from '../components/navBar/navBar';


export  const AppRoutes=()=>{
    return <>
     
    <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path="/" element={<NavBar/>}>
            <Route exact path='home' element= {<Videogames />}></Route>
            <Route exact path='detail/:id' element={<DetailVideogame />}/>
            <Route exact path='create' element={<CreateVideogame />}/> 
            <Route exact path='about' element={<About />}/> 
        </Route>
        <Route exact path="*" element={<NotFound/>} /> 
    </Routes>
     {/* <Routes>
        
          <Route path='/' element={<NavBar />}>
          </Route>
      </Routes> */}
    </>}