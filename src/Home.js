import React from 'react';
import {Homesection,Homeinformation,Hometitle,Homeinfo,Homedesc,Homebtn,span} from './home_style.js'
const Home =()=>{
    return (
<Homesection>
            <div className="container">

<Homeinformation>

                <Hometitle>Hazem Yousery</Hometitle>
                <Homeinfo>Creative Director</Homeinfo>
                <Homedesc>
                    Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </Homedesc>
                <Homebtn>Let's Begin</Homebtn>
                </Homeinformation>
                        </div>
</Homesection>    
    )
}
export default Home;