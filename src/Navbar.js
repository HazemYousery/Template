import React from 'react';
import './style.js'
import { LogoText, NavbarSection ,Logo,UlList,ListItem,Anchor} from './style.js';


const Navrbar =()=>{
    return (
<NavbarSection>            
      
        <div className="container">
            
<Logo>
<LogoText>Ultra Profile</LogoText>           
       </Logo>
            
            <UlList>
                <ListItem className="list-item"><Anchor href="#">Home</Anchor></ListItem>
                <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                <ListItem className="list-item"><Anchor href="#">Contact</Anchor></ListItem>
            </UlList>
            
        </div>
        </NavbarSection>            

    )
}
export default Navrbar;