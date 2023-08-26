import React from 'react';

import {Workpart,Icon,Parttitle,Line,Workdesc, Worksec } from "./work_style.js";

const Work  = (state)=>{
    const {works} = state;
    const WorksList = works.map((workItem)=>{
return(
  
    <Workpart first={workItem.id} key={workItem.id}>
    <Icon className={workItem.icon_name}></Icon>
    <Parttitle>{workItem.title}</Parttitle>
    <Line />
    <Workdesc>
        {workItem.body}
    </Workdesc>
</Workpart>

)      
        })   

   
   
    return(
<div>{WorksList}</div>
    )
}
export default Work;