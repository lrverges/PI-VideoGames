import './App.css';
import Order from './components/order/order';
import Searchbar from './components/searchbar/searchbar';
import Videogames from './components/videogames/videogames';
import {Route, Routes} from 'react-router'

function App() {
  return (
    <div className="App">
     <Routes>
         <Route exact path='/'/>
         <Route exact path='/home' element= {<><Searchbar/><Videogames/></>}/>
         <Route exact path='/detail/:id'/>
         
      </Routes>
        {/* <Route exact path='/'>
  
        </Route>
        <Route path='/home'>
          <Searchbar/>
          <Order/>
          <Videogames/>
        </Route>
        <Route exact path='/videogame/:id'>
    
        </Route> */}
        
     
    </div>
  );
}

export default App;
