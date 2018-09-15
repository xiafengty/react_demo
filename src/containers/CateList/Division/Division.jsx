import React,{Component} from "react";
import {connect} from "react-redux";
import {getCategoryL1List} from "../../../redux/actions";
import './division.styl'
class Division extends Component{
  state={
    index:0
  };
 idMount(){
    this.props.getCategoryL1List();
  }
  render(){
    const {categoryL1List}=this.props;
    let path=this.props.location.pathname;
    path=path.slice(18);
    let index=categoryL1List.findIndex((item,index)=>
      path===item.id.toString()
    );
    console.log(categoryL1List[0]);
    return (
      categoryL1List?<section id="division">
        <div className="div_header">
          <img src={categoryL1List[index].bannerUrl} alt=""/>
        </div>
        {!categoryL1List[index].level?<div className="div_content" >
          <ul className="dc_ul">
            {categoryL1List[index]?categoryL1List[index].subCateList.map((item,index)=>
              <li className="dc_li" key={index}>
                <div className="dcl_img">
                  <img src={item.bannerUrl} alt=""/>
                </div>
                <div className="dcl_text">{item.name}</div>
              </li>
            ):null}
          </ul>
        </div>:null}
        <div className="div_content">
          <ul className="dc_ul">
            {categoryL1List[index].subCateList.map((item,index)=>
              <li className="dc_li" key={index}>
                <div className="dcl_img">
                  <img src={item.wapBannerUrl} alt=""/>
                </div>
                <div className="dcl_text">{item.name}</div>
              </li>
            )}
          </ul>
        </div>
      </section>:null
    )
  }
}
export default connect(
  state=>({categoryL1List:state.categoryL1List}),
  {getCategoryL1List}
)(Division);