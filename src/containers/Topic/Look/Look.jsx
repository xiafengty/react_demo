import React,{Component} from "react";
import PropTypes from "prop-types";
import './look.styl';
class Look extends Component{
  static propTypes ={
    yxLook:PropTypes.object.isRequired
  };
  render(){
    const {yxLook}=this.props;
    return(
      yxLook?<section id="look">
        <header className="look_header">严选LOOK</header>
        <div className="look_img">
          <img src={yxLook.picUrl}  />
        </div>
        <div className="look_commont">
          <div className="lc_header">
            <div className="lch_img">
              <img src={yxLook.avatar} alt="" />
            </div>
            <div className="lch_info">
              {yxLook.nickname}
            </div>
          </div>
          <div className="lc_text">
            {yxLook.content}
          </div>
        </div>
      </section>:null
    )
  }
}
export default Look;