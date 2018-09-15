import React,{Component} from "react";
import {connect} from "react-redux";import "./shopcart.styl";
class ShopCart extends Component{
  render(){
    return (
      <div >
        <section id="shopCart">
          <div className="sc_header">
            <span className="sch_text">购物车</span>
            <div className="sch_right">领劵</div>
          </div>
          <div className="sc_content">
            <div className="scc_info">
              <ul className="scc_ul">
                <li className="scc_li"><span>30天无忧退货</span></li>
                <li className="scc_li"><span>48小时快速退款</span></li>
                <li className="scc_li"><span>满88元免邮费</span></li>
              </ul>
            </div>
            <div className="scc_img"> </div>
            <div className="scc_text">
              <div className="scc_tt">去添加点什么吧</div><br/>
              <div className="scc_login" onClick={()=>this.props.history.push('/navhome/person')}>登录</div>
          </div>
      </div>
  </section>
      </div>
    )
  }
}
export default ShopCart;