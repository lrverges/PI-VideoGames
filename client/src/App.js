import './App.css';
// import Order from './components/order/order';
// import Searchbar from './components/searchbar/searchbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Videogames from './components/videogames/videogames';

// import CreateVideogame from './components/createVideogame/createVideogame';
// import DetailVideogame from './components/detailVideogame/detailVideogame';
// import LandingPage from './components/landingPage/landingPage'
// import About from './components/about/about'
// import NotFound from './components/notFound/notFound'
//import NavBar from './components/navBar/navBar';
import { AppRoutes } from './routes/appRoutes';



function App() {
  return (
    <div className="App">
    
     <AppRoutes/>   
    </div>
  );
}

export default App;
