import React,{Component} from "react";
import PropTypes from "prop-types";

import "./maker.styl";

class Maker extends Component{
  static propTypes={
    tagList:PropTypes.array.isRequired
  };
  render(){
    const tagList = this.props.tagList.filter(item=>item.picUrl);
    return (
      <div id="mask">
        <div className="header">
          <span>品牌制造商直供</span>
          <i className="iconfont icon-jiantou" />
        </div>
        <div className="blurb">
          <ul className="blurb_ul clearFix">
            {
              tagList.map((item,index)=>
                <li className="blurb_li"  key={index}>
                  <div className="blurb_li_text">
                    {item.name?<span className="text1">{item.name} </span>:null}
                    {item.floorPrice?<span className="text1">{item.floorPrice}元起</span>:null}
                    <span className="text1 upNew">上新</span>
                  </div>
                  <img src={item.picUrl}/>
                </li>
              )
            }
           {/* */}
         </ul>
        </div>
  </div>
    )
  }
}
export default Maker;
