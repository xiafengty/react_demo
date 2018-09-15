import React,{Component} from "react";
import PropTypes from "prop-types";


import "./orderCom.styl";
class OrderCom extends Component{
  static propTypes ={
    recommend:PropTypes.object.isRequired
  };
  render(){
    const {recommend0,recommend1,recommend2}=this.props.recommend;
    return (
      recommend0?
      <section id="orderCom">
        <div className="orderCom_header">为你推荐</div>
        <div className="orderCom_content">
          <div className="orderCom_content_detail">
            <div className="ocd_big">
              <div className="ocd_big_img">
                <img src={recommend0.picUrl} alt="" />
                <div className="ocd_big_detail">{recommend0.typeName}</div>
              </div>
              <div className="ocd_big_text">
                <div className="ocd_big_text1">
                  <div className="obt_1">{recommend0.title}</div>
                  <div className="obt_2">{recommend0.subTitle}</div>
                </div>
                <div className="ocd_big_text2" v-show="!detail">{recommend0.priceInfo}元起</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={recommend1.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{recommend1.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{recommend1.title}</div>
                  <div className="osl_text2">
                    {recommend1.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={recommend1.picUrl} alt="" />
                <div className="osr_detail">{recommend1.typeName}</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={recommend2.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{recommend2.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{recommend2.title}</div>
                  <div className="osl_text2">
                    {recommend2.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={recommend2.picUrl} alt="" />
                <div className="osr_detail">{recommend2.typeName}</div>
              </div>
            </div>
          </div>
          <div className="orderCom_content_detail">
            <div className="ocd_big">
              <div className="ocd_big_img">
                <img src={recommend0.picUrl} alt="" />
                <div className="ocd_big_detail">{recommend0.typeName}</div>
              </div>
              <div className="ocd_big_text">
                <div className="ocd_big_text1">
                  <div className="obt_1">{recommend0.title}</div>
                  <div className="obt_2">{recommend0.subTitle}</div>
                </div>
                <div className="ocd_big_text2" v-show="!detail">{recommend0.priceInfo}元起</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={recommend1.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{recommend1.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{recommend1.title}</div>
                  <div className="osl_text2">
                    {recommend1.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={recommend1.picUrl} alt="" />
                <div className="osr_detail">{recommend1.typeName}</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={recommend2.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{recommend2.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{recommend2.title}</div>
                  <div className="osl_text2">
                    {recommend2.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={recommend2.picUrl} alt="" />
                <div className="osr_detail">{recommend2.typeName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>:null
    )
  }
}
export default OrderCom;