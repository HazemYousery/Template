import React from 'react';
import {Portofoliosec,Portfoliotitle,Portfoliolist,Portfolioitem,ImageWrapper,Image,Overlay,Overlayspan,Span}  from './Style_Port.js'
import './hazem.css'

const Portofolio =()=>{
    return (
        <div>
             <Portofoliosec>
            <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
            <Portfoliolist>
                <Portfolioitem >All</Portfolioitem>
                <Portfolioitem >HTML</Portfolioitem>
                <Portfolioitem >Photoshop</Portfolioitem>
                <Portfolioitem >Wordpress</Portfolioitem>
                <Portfolioitem >Mobile</Portfolioitem>
            </Portfoliolist>
            
            <ImageWrapper >
      
                <div className='h'>
                    <Image first='1' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img1.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
            

\             
                    <Image first='2' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img2.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
                </div>
                
                <div className='h' >
                    <Image first='1' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img3.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
       
                

                <Image first='2' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img4.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
                </div>

                <div className='h' >
                <Image first='1' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img5.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>

                <Image  first='2' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img6.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
                </div>
                
                <div className='h'>
                <Image first='1' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img7.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
             
                <Image first='2' src='https://github.com/HamzaNabil/Template-HTML_CSS_MediaQuery/blob/master/images/Portfolio/portfolio-img8.jpg?raw=true'/>
                    <Overlay>
                        <Overlayspan>
                            Show Image
                        </Overlayspan>
                    </Overlay>
                </div>
                
            </ImageWrapper>
            
        </Portofoliosec>
        </div>
    )
}
export default Portofolio;