import React,{Component} from "react";
import PropTypes from "prop-types";


import "./orderCom.styl";
class OrderCom extends Component{
  static propTypes ={
    zhenItem:PropTypes.object.isRequired
  };
  render(){
    const {zhen0,zhen1,zhen2}=this.props.zhenItem;
    return (
      zhen0?
      <section id="orderCom">
        <div className="orderCom_header">为你推荐</div>
        <div className="orderCom_content">
          <div className="orderCom_content_detail">
            <div className="ocd_big">
              <div className="ocd_big_img">
                <img src={zhen0.picUrl} alt="" />
                <div className="ocd_big_detail">{zhen0.typeName}</div>
              </div>
              <div className="ocd_big_text">
                <div className="ocd_big_text1">
                  <div className="obt_1">{zhen0.title}</div>
                  <div className="obt_2">{zhen0.subTitle}</div>
                </div>
                <div className="ocd_big_text2" v-show="!detail">{zhen0.priceInfo}元起</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={zhen1.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{zhen1.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{zhen1.title}</div>
                  <div className="osl_text2">
                    {zhen1.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={zhen1.picUrl} alt="" />
                <div className="osr_detail">{zhen1.typeName}</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={zhen2.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{zhen2.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{zhen2.title}</div>
                  <div className="osl_text2">
                    {zhen2.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={zhen2.picUrl} alt="" />
                <div className="osr_detail">{zhen2.typeName}</div>
              </div>
            </div>
          </div>
          <div className="orderCom_content_detail">
            <div className="ocd_big">
              <div className="ocd_big_img">
                <img src={zhen0.picUrl} alt="" />
                <div className="ocd_big_detail">{zhen0.typeName}</div>
              </div>
              <div className="ocd_big_text">
                <div className="ocd_big_text1">
                  <div className="obt_1">{zhen0.title}</div>
                  <div className="obt_2">{zhen0.subTitle}</div>
                </div>
                <div className="ocd_big_text2" v-show="!detail">{zhen0.priceInfo}元起</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={zhen1.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{zhen1.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{zhen1.title}</div>
                  <div className="osl_text2">
                    {zhen1.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={zhen1.picUrl} alt="" />
                <div className="osr_detail">{zhen1.typeName}</div>
              </div>
            </div>
            <div className="ocd_small1">
              <div className="ocd_small1_left">
                <div className="osl_user">
                  <div className="osl_user_header">
                    <img src={zhen2.avatar} alt="" />
                  </div>
                  <div className="osl_user_info">{zhen2.nickname}</div>
                </div>
                <div className="osl_text">
                  <div className="osl_text1">{zhen2.title}</div>
                  <div className="osl_text2">
                    {zhen2.subTitle}
                  </div>
                </div>
              </div>
              <div className="ocd_small1_right">
                <img src={zhen2.picUrl} alt="" />
                <div className="osr_detail">{zhen2.typeName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>:null
    )
  }
}
export default OrderCom;