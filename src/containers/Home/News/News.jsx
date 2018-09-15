import React,{Component} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll"
import "./news.styl";
class News extends Component{
  static propTypes={
    popularItemList:PropTypes.array.isRequired
  };
  componentWillUpdate(){
    this.initScroll()
  };
  initScroll(){
    const {popularItemList} =this.props;
    const space=30;
    const size=popularItemList.length;
    const ul=this.navUl2;
    const width=280;
    ul.style.width=(width+space)*size+"px";
    new BScroll(this.wrap2,{
      scrollX:true,
      eventPassthrough:'vertical',
    });
  }
  render(){
    const {popularItemList}=this.props;
    return (
      <div className="good_wrap wrap1 wrap2" ref={goodwrap=>this.wrap2=goodwrap}>
        {popularItemList?<ul className="wrap_ul" ref={wrapul=>this.navUl2=wrapul}>
          {popularItemList.map((item,index)=>
            <li key={index}>
              <div className="img">
                <img src={item.listPicUrl} alt="" />
              </div>
              <div className="content">
                <ul className="conUl">
                  <li className="conLi">
                    <span className="con header">{item.name}</span>
                    <span className="con info">{item.simpleDesc}</span>
                    <span className="price">￥{item.retailPrice}</span>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>:null}
      </div>
    )
  }
}
export default News;