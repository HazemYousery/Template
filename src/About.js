import React from 'react';
import './About.css'
const About =()=>{
    return (
        <div className='hazem'>
              <div class="creative">
            <div class="container">
                <div class="creative-info">
                    <h2 class="info-title"><span>This is</span> Me</h2>
                    <h3 class="info-dir">Creative Director</h3>
                    <b class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim estexplicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </b>
                    <b class="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </b>
                </div>
            </div>
        </div>
        
        <div class="social-media">
            
            <div class="social face">
                <i class="icon fa fa-facebook fa-lg"></i>
                <p className='face'>
                    <span class="info1">Follow Me on</span>
                    <span class="info2">Social Facebook</span>
                </p>
            </div>
            
            <div class="social-twitter">
                <i class="icon fa fa-twitter fa-lg"></i>
                <p className='twit'>
                    <span class="info1">Tweet Me on</span>
                    <span class="info2">Social twitter</span>
                </p>
            </div>
            
            <div class="social pin">
                <i class="icon fa fa-pinterest fa-lg"></i>
                <p className='pin'>
                    <span class="info1">Pin Me on</span>
                    <span class="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
        
        </div>
    )
}
export default About;