import React,{Component} from "react";

import "./newmodel.styl";
class NewModel extends Component{
   state={
     isShow:false
   };
  closeModel=()=>{
    this.setState({
      isShow:false
    })
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isShow:true
      })
    },0.5)
  };
  render(){
    const {isShow}=this.state;
    return (
      isShow? <div id="model">
        <div id="content">
          <div id="model_header">
            <div className="model_header_top">—&nbsp;新人专享礼&nbsp;—</div>
            <div className="model_header_bot">感谢使用网易严选，已为你准备了一份专享礼</div>
          </div>
          <div id="details">
            <div className="details_img">
              <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232"/>
            </div>
            <div className="details_text">
              <div>埃及进口长绒棉毛巾</div>
              <div>RaIph&nbsp;Lauren</div>
              <div>
                <span>￥32.00</span>
                <span>￥199.00</span>
              </div>
            </div>
          </div>
          <div id="btns">
            <div className="btn1">领券立减¥100.00</div>
            <div className="btn2">查看更多特惠商品</div>
          </div>
        </div>
        <div id="close" onClick={this.closeModel}>
          <i className="iconfont icon-yiquxiao"/>
        </div>
      </div>:null
    )
  }
}


export default NewModel;