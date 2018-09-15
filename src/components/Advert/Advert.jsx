import React,{Component} from "react";

import "./advert.styl"
class Advert extends Component{
  state={
    advertShow:true
  };
  close=()=>{
    this.setState({
      advertShow:false
    })
  };
  render(){
    const {advertShow} = this.state;
    return(
      <div>
        {
          advertShow?<div id="advert">
            <div className="delete" onClick={this.close}>×</div>
            <div className="yx_img"> </div>
            <div className="content">
              <div className="content1">网易严选</div>
              <div className="content2">立即领取APP新人专享1000元礼包</div>
            </div>
            <div className="open_app">打开app</div>
          </div>:null
        }
      </div>
    )
  }
}
export default Advert;