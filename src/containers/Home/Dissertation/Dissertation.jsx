import React,{Component} from "react";
import BScroll from "better-scroll"
import PropTypes from "prop-types";

import "./dissertation.styl";

class Dissertation extends Component{
  static propTypes ={
    topicList:PropTypes.array.isRequired
  };
  componentWillUpdate(){
    this.initScroll()
  };
  initScroll=()=>{
    const space=20;
    const size=this.props.topicList.length;
    const width=575;
    const ul=this.dissertUl;
    ul.style.width=(width+space)*size+"px";
    new BScroll(this.dissert,{
      click:true,
      scrollX:true,
      scrollY:false,
      eventPassthrough:'vertical'
    });
  };
  render(){
    const {topicList} =this.props;
    return (
      <div id="dissert">
        <div className="dissert_header">
          <span>专题专精</span>
          <i className="iconfont icon-jiantou"/>
        </div>
        <div className="dissert_content" ref={disserts=>this.dissert=disserts}>
          <ul ref={dissul=>this.dissertUl=dissul} className="dissert_ul">
            {
              topicList.map((item,index)=>
                <li className="dissertLi"  key={index}>
                  <div className="dissertLi_img">
                    <img src={item.itemPicUrl}/>
                  </div>
                  <div className="dissertLi_con">
                    <div className="dissertLi_con1">
                      <span className="dissertLi_con11">{item.title}</span>
                      <span className="dissertLi_con12">{item.subtitle}</span>
                    </div>
                    <div className="dissertLi_con2">
                      {item.priceInfo}元起
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Dissertation;