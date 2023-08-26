import styled from 'styled-components'
export const Portofoliosec =styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const Portfoliotitle =styled.h2` 
    text-align: center;
    font-size: 35px
`

export const Span =styled.span`
    font-weight: normal
`

export const Portfoliolist =styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const Portfolioitem  = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px
    background: ${props=>props.active?'#eb5424':''}
    color: ${props=>props.first===1?'#fff':'#000'}
`


 export const ImageWrapper=styled.div`

    font-size: 0;
    background-size: 50%;
    &:hover > div{
        opacity :1
    }

`

export const Image =styled.img`
height: 100%;
width: 100%;
padding:  0;

`

export const Overlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`

export const Overlayspan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`

