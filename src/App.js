import './App.css';
import React ,{Component} from 'react';
import {Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portofolio from './Portofolio';
import Footer from './Footer';
import Navrbar from './Navbar';
import Contact from './Contact';
import Social from './Socialmedia';
import Profile from './Profile';
import Rest from './Rest';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component{
 
 render()
 {
  return (
   <BrowserRouter>
   <Navrbar />
   <Routes>   <Route exact path='/' Component={Rest}/>   
 </Routes> 
  
   </BrowserRouter>

  );
}
}
export default App;
