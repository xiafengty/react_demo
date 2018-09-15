import React,{Component} from "react";
import {withRouter} from "react-router-dom";

import "./inter.styl"
class InterLayer extends Component{
  nav=[
    { path:'/interlayer'},
    {path:'/navhome'}
    ];
  render(){
   /* const path=this.this.props.location.pathname;
    const currentNav = this.nav.filter((item,index)=>item.path===path);*/
    return(
      <div>
        <div className="g-bd">
          <div className="g-row">
            <img src={require('../../assets/images/interlayer/inter1.jpg')} alt="11" />
            <img src={require("../../assets/images/interlayer/inter2.jpg")} alt="222" />
          </div>
          <div className="g-row">
            <img src={require("../../assets/images/interlayer/inter3.jpg")} alt="333"/>
            <div id="downloadBtn"></div>
            <div id="backWapBtn" onClick={()=>this.props.history.replace('/navhome')}></div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(InterLayer);