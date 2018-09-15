import React,{Component} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll"
import "./goodgrid.styl";
class GoodGrid extends Component{
  static propTypes={
    newItemNewUserList:PropTypes.array.isRequired
  };
  componentWillUpdate(){
    this.initScroll()
  };
  initScroll(){
    const {newItemNewUserList} =this.props;
    const space=30;
    const size=newItemNewUserList.length;
    const ul=this.navUl;
    const width=280;
    ul.style.width=(width+space)*size+"px";
    new BScroll(this.wrap1,{
      scrollX:true,
      eventPassthrough:'vertical',
    });
  }
  render(){
    const {newItemNewUserList}=this.props;
    return (
      <div className="good_wrap wrap1 wrap2" ref={goodwrap=>this.wrap1=goodwrap}>
        {newItemNewUserList?<ul className="wrap_ul" ref={wrapul=>this.navUl=wrapul}>
          {newItemNewUserList.map((item,index)=>
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
export default GoodGrid;