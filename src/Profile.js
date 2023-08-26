import React from 'react';
import './Profile_style.css'
const Profile =()=>{
    return (
        <div>
<div className='prof'>
    <h2 className='zr'>My profile</h2>
    <h2 className="skills-title">Some <span>skills</span></h2>

</div>


            <div className="skills">
                <div className='z'>  
                    <b>Name :Hazem</b>
                    <b className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </b>
                    </div>
          
                    <div className="bar">
                        
<b>Address: Agouza</b>
                        <span className="title">Bootstrap</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        
                         <b>Phone: 01100424386</b>
                        <span className="titlec">CSS3</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title-s">Photoshop</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
     
    )
}
export default Profile;