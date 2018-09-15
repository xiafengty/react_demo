import React,{Component} from "react";
import {connect} from "react-redux";
import Swiper from 'swiper'
import BScroll from "better-scroll"


import 'swiper/dist/css/swiper.min.css'
import {
  getBanner,
  getColumn,
  getRecommend,
  getTenFifteen,
  getZhenItem,
  getYxLook,
  getYxWeek
} from "../../redux/actions";

import OrderCom from "./OrderCom/OrderCom";
import OrderCom2 from "./OrderCom2/OrderCom2";
import PastTen from "./PastTen/PastTen";
import Look from "./Look/Look";
import MoreSurprises from "./MoreSurprises/MoreSurprises";


import "./topic.styl"
class Topic extends Component{
  componentDidMount(){
    this.props.getBanner();
    this.props.getColumn();
    this.props.getRecommend();
    this.props.getTenFifteen();
    this.props.getZhenItem();
    this.props.getYxLook();
    this.props.getYxWeek();
  };
  componentWillUpdate(){
    this.initScroll()
  };
  componentDidUpdate(){
    new Swiper(this.spc, {
      centeredSlides: true,  //居中
      autoplay: {     //自动轮播
        delay: 2000,
        disableOnInteraction: false,
      },
      slidesPerView: 1.25,
      spaceBetween:10,
      loop: true ,  //无线循环
    });
  };
  initScroll(){
    const {column}=this.props;
    const space=30;
    const size=column.length;
    const ul=this.recommendUl;
    const width=164;
    ul.style.width=(width+space)*size+"px";
    new BScroll(this.recommend,{
      click:true,
      scrollX:true,
      eventPassthrough:'vertical',
    });
  }
  render(){
    const {
      banner,
      column,
      tenFifteen,
      recommend,
      zhenItem,
      yxLook,
    }=this.props;
    return (
      <div id="topic">
        <div id="topic_header">
          <a className="topic_header1 topicd" onClick={()=>this.props.history.replace('/navhome/home')}>
            <i className="iconfont icon-zhuye icon1"/>
          </a>
          <span className="topic_header2 topicd">网易严选</span>
          <a className="topic_header3 topicd">
            <i className="iconfont icon-sousuo icon2"/>
            <i className="iconfont icon-gouwuche icon3"  onClick={()=>this.props.history.replace('/navhome/cart')}/>
          </a>
        </div>
        <nav className="msite_nav">
          <div className="swiper-container" ref={swiperContainer=>this.spc=swiperContainer}>
            <div className="swiper-wrapper" ref="swiper">
              {
                banner.map((item,index)=>
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} />
                    <div className="swiper-slide_text" v-show="ban.subTitle">
                      <div className="swiper-slide_text1">— {item.subTitle} —</div>
                      <div className="swiper-slide_text2">{item.title}</div>
                      <div className="swiper-slide_text3">{item.desc}</div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="swiper-pagination"> </div>
          </div>
        </nav>
        <nav id="recommend" ref={recommend=>this.recommend=recommend}>
          <ul className="recommendUl"  ref={res=>this.recommendUl=res} >
            {
              column.map((item,index)=>
                <li className="recommendLi" key={index}>
                  <div className="recommend_img">
                    <div className="recommend_img_text">{item.articleCount}&nbsp;</div>
                    <img src={item.picUrl} />
                  </div>
                  <div className="recommend_text">{item.title}</div>
                </li>
              )
            }
          </ul>
        </nav>
        <OrderCom recommend={recommend} />
        <PastTen tenFifteen={tenFifteen}/>
        <OrderCom2 zhenItem={zhenItem} />
        <Look yxLook={yxLook}/>
        <MoreSurprises />
        <div id='ceshi'> </div>
      </div>
    )
  }
}
export default connect(
  state=>({
    banner:state.banner,
    column:state.column,
    recommend:state.recommend,
    tenFifteen:state.tenFifteen,
    zhenItem:state.zhenItem,
    yxLook:state.yxLook,
    yxWeek:state.yxWeek,
  }),
  {
    getBanner,
    getColumn,
    getRecommend,
    getTenFifteen,
    getZhenItem,
    getYxLook,
    getYxWeek
  }
)(Topic)