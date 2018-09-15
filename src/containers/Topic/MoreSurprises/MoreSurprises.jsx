import React,{Component} from "react";
import {connect} from "react-redux";
import {getYxWeek} from "../../../redux/actions";
import './more.styl';
class MoreSurprises extends Component{
  componentWillMount(){
    this.props.getYxWeek();
  };
  render(){
    const {yxWeek} = this.props;
    return(
      <section id="mSup">
        <header className="mSup_header">更多精彩</header>
        {
          yxWeek?yxWeek.map((item,index)=>
            <div className="mSup_content" key={index}>
              <div className="mSup_img">
                <img src={item.itemPicUrl}/>
              </div>
              <div className="mSup_text">{item.subtitle}</div>
            </div>
          ):null
        }
      </section>
    )
  }
}
export default  connect(
  state=>({yxWeek:state.yxWeek,}),
  {getYxWeek}
)(MoreSurprises);