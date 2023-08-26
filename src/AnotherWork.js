import React ,{Component} from "react";
import axios from 'axios'
import Work from "./Work.js";
import {Workpart,Icon,Parttitle,Line,Workdesc, Worksec } from "./work_style.js";
class Another extends Component{
    state={
        works:[]
    }    

 componentDidMount()
 {

    axios.get('data.json').then(res=>{this.setState({works: res.data.works})}).catch((error)=>{console.log(error) })
 }  
    render()
{
    

return(
    <Worksec>
    <div className="container">
        <Parttitle><span>My</span> Work</Parttitle>
<Work works={this.state.works}/> 
</div>
</Worksec>
)


    }
}


export default Another;