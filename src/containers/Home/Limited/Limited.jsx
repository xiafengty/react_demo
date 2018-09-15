import React,{Component} from "react";
import PropTypes from "prop-types";

import "./limited.styl";

class Limited extends Component{
  state= {
    times:[]
  };
  componentWillMount(){
    this.getTimes();
  };
  getTimes=()=>{
    const {times} = this.state;
    let data=new Date();
    let hour=data.getHours();
    times.push(hour);
    let minute=data.getMinutes();
    times.push(minute);
    let second=data.getSeconds();
    times.push(second);
  };
  render(){
    const {times} =this.state;
    return (
      <div id="limited">
        <div className="limited_text">
          <div className="limited_text1">严选限时购</div>
          <div className="limited_text2">
            <span>{times[0]}</span>&nbsp;:
            <span>{times[1]}</span>&nbsp;:
            <span>{times[2]}</span>
          </div>
          <div className="limited_text3">下一场&nbsp;10:00&nbsp;开始</div>
        </div>
        <div className="limited_img">
          <img src="http://yanxuan.nosdn.127.net/492e33048ba67de4e709ebc7952b9926.png?imageView&quality=85&thumbnail=330x330" alt="" />
        </div>
        <div className="limited_price">
          <div className="limited_price_con">
            <div>￥99</div>
            <div className="limited_price_con2">￥109</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Limited;