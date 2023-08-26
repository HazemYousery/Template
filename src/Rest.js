import './App.css';
import React ,{Component} from 'react';
import Home from './Home';
import About from './About';
import Portofolio from './Portofolio';
import Footer from './Footer';
import Navrbar from './Navbar';
import Another from './AnotherWork';
import Social from './Socialmedia';
import Profile from './Profile';
import Contact from './Contact';
class Rest extends Component{
 
 render()
 {
  return (
    <div className="Rest">
<Home />
<Another />
<Portofolio />
<Profile />
<About />
<Social />
<Contact />
<Footer />



    </div>
  );
}
}
export default Rest;
